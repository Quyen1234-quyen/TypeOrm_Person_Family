import { Router} from "express";
import { ControllerPerson } from "../controller/person";
import joiValidatorMiddleware from "../middleware/validatorMiddleware";
import { PersonValidator } from "../middleware/validatorMiddleware";
const router=Router()

export default (app:Router):void=>{
    app.use(router);

    router.get("/person",new ControllerPerson().getAllPerson);
    router.get("/person/:id",new ControllerPerson().getPersonById);
    router.post("/person",joiValidatorMiddleware(PersonValidator),new ControllerPerson().createPerson);
    router.put("/person/:id",joiValidatorMiddleware(PersonValidator),new ControllerPerson().updateperson);
    router.delete("/person/:id", new ControllerPerson().deletePerson);
}
