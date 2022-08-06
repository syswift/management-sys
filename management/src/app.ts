import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import cookieSession from 'cookie-session';
import { transuploadRouter } from './routes/transupload';
import { errorHandler, NotFoundError } from '@syswift1/common';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: false,
    })
);
//routes
app.use(transuploadRouter);

app.all('*', async (req, res) => {  //request not found
    throw new NotFoundError();
});

app.use(errorHandler);

export {app};