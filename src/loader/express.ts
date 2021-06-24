import logger from 'morgan';
import express from 'express';
import route from '../api';
export default ({ app }: { app: express.Application }): void => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(logger('dev'));
    app.use("/", route());
}