import { Request, Response, NextFunction } from "express";
import { Family } from "../../entity/Family";
import { FamilyService } from "../../services/family.service";
import HttpException from "../exceptions/httpException";

export class ControllerFamily {
    public async getAllFamily(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const family=await new FamilyService().getAllFamily();
            if(family){
                return res.json(family);
            }else{
                return res.status(500).json({status:"No finded"});
            }
            
        } catch (e) {
            if (e instanceof HttpException) {
                const { httpStatus, errorCode, message } = e;
                res.status(httpStatus).send({errorCode,message});
            } else {
                next(e);
            }
        }
    }
    public async getFamilyById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const id=parseInt(req.params.id);
            const family=await new FamilyService().getFamilyById(id);
            if(family){
                return res.json(family);
            }else{
                return res.status(500).json({status:"No finded"});
            }
        } catch (e) {
            if (e instanceof HttpException) {
                const { httpStatus, errorCode, message } = e;
                res.status(httpStatus).send({errorCode,message});
            } else {
                next(e);
            }
        }
    }
    public async createFamily(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const familyNew=new Family();
            familyNew.desc=req.body.desc;
            const family=await new FamilyService().createFamily(familyNew);
            if(family){
                return res.json(family);
            }else{
                return res.status(500).json({status:"Don't Add New Family"});
            }
        } catch (e) {
            if (e instanceof HttpException) {
                const { httpStatus, errorCode, message } = e;
                res.status(httpStatus).send({errorCode,message});
            } else {
                next(e);
            }
        }
    }
    public async updateFamily(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const id=parseInt(req.params.id)
            const familyNew=new Family();
            familyNew.desc=req.body.desc;
            const family=await new FamilyService().updateFamily(familyNew,id);
            if(family){
                return res.json(family);
            }else{
                return res.status(500).json({status:"Don't Add New Family"});
            }
        } catch (e) {
            if (e instanceof HttpException) {
                const { httpStatus, errorCode, message } = e;
                res.status(httpStatus).send({errorCode,message});
            } else {
                next(e);
            }
        }
    }

    public async deteleFamilyById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const id=parseInt(req.params.id);
            const family=await new FamilyService().deteleFamilyById(id);
            if(Object.keys(family).length){
                return res.json(family);
            }else{
                return res.status(500).json({status:"Does Not Exist"});
            }
            
        } catch (e) {
            if (e instanceof HttpException) {
                const { httpStatus, errorCode, message } = e;
                res.status(httpStatus).send({errorCode,message});
            } else {
                next(e);
            }
        }
    }
}