import {Router} from 'express';
import person from './router/person';
import family from './router/family';
export default ()=>{
    const app=Router();
 
    person(app);
    family(app);

    return app;
}
// test them dong .. git pull
