import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/httpException";

export const PersonValidator = Joi.object({
    firstName: Joi.string().min(3).max(100).required(),
    lastName: Joi.string().min(6).max(10).required(),
    age: Joi.number().required()
})
export const FamilyValidator=Joi.object({
    desc: Joi.string().min(3).max(100).required()
})
export default function joiValidatorMiddleware(person: Joi.Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        try{
            const result=person.validate(req.body,{stripUnknown:true});
            if(result.error){
                return res.status(500).send(new HttpException(400,"Error","Failed Match"))
            }else{
                req.body=result.value;
                next();
            }
        }catch(e){
            return res.status(500).send(new HttpException(400,"Error","Failed Match"))
        }
    }
}