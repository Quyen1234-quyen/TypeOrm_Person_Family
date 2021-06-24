import "reflect-metadata";
import Loader from "./loader";
import express from 'express';
import {createConnection} from "typeorm";
createConnection().then(async connection => {
    // typeorm();
    const app=express();
    console.log("Connect Database");
    Loader({expressApp: app });
    const PORT=5002;
    app.listen(PORT,()=>{
        console.log(`Started Server at Port :${PORT}`);
    })
}).catch(error => console.log(error));
  