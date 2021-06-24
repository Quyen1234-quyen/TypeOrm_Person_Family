import { Router } from "express";
import { ControllerFamily } from "../controller/family";
import joiValidatorMiddleware from "../middleware/validatorMiddleware";
import { FamilyValidator } from "../middleware/validatorMiddleware";
const router=Router();


export default (app:Router)=>{
    app.use(router);
    router.get("/family",new ControllerFamily().getAllFamily);
    router.get("/family/:id", new ControllerFamily().getFamilyById)
    router.post("/family",joiValidatorMiddleware(FamilyValidator),new ControllerFamily().createFamily)
    router.put("/family/:id",joiValidatorMiddleware(FamilyValidator),new ControllerFamily().updateFamily)
    router.delete("/family/:id",new ControllerFamily().deteleFamilyById);
}