import { Request, Response, NextFunction } from "express";
import { Person } from "../../entity/Person";
import PersonService from "../../services/person.service";
import HttpException from "../exceptions/httpException";

export class ControllerPerson {
    public async getAllPerson(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const persons = await new PersonService().getAllPerson();
            return res.json(persons);
        } catch (e) {
            if (e instanceof HttpException) {
                const { httpStatus, errorCode, message } = e;
                res.status(httpStatus || 400).send({ errorCode, message });
            } else {
                next(e);
            }
        }
    }
    public async getPersonById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const id = parseInt(req.params.id);
            const persons = await new PersonService().getPersonById(id);
            return res.status(200).json(persons);
        } catch (e) {
            if (e instanceof HttpException) {
                const { httpStatus, errorCode, message } = e;
                res.status(httpStatus || 400).send({ errorCode, message });
            } else {
                next(e);
            }
        }
    }
    public async createPerson(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const personNew = {
                firstName: req.body.firstName,
                lastName: req.body.firstName,
                age: req.body.age,
                familyId: req.body.familyId,
            }
            const persons = await new PersonService().createPerson(personNew);
            return res.status(200).json(persons);
        } catch (e) {
            if (e instanceof HttpException) {
                const { httpStatus, errorCode, message } = e;
                res.status(httpStatus || 400).send({ errorCode, message });
            } else {
                next(e);
            }
        }
    }
    public async updateperson(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const id = parseInt(req.params.id);
            const personNew = {
                firstName: req.body.firstName,
                lastName: req.body.firstName,
                age: req.body.age,
                familyId: req.body.familyId,
            }
            const persons = await new PersonService().updateperson(personNew, id);
            return res.status(200).json(persons);
        } catch (e) {
            if (e instanceof HttpException) {
                const { httpStatus, errorCode, message } = e;
                res.status(httpStatus || 400).send({ errorCode, message });
            } else {
                next(e);
            }
        }
    }
    public async deletePerson(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const id = parseInt(req.params.id);
            const persons = await new PersonService().deletePerson(id);
            if (Object.keys(persons).length) {
                return res.status(200).json(persons);
            } else {
                return res.status(500).json({ status: "Does Not Exist" });
            }

        } catch (e) {
            if (e instanceof HttpException) {
                const { httpStatus, errorCode, message } = e;
                res.status(httpStatus || 400).send({ errorCode, message });
            } else {
                next(e);
            }
        }
    }
}