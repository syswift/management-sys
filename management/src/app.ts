import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import cookieSession from 'cookie-session';
import { transuploadRouter } from './routes/transupload';
import { transdownloadRouter } from './routes/transdownload';
import { errorHandler, NotFoundError } from '@syswift1/common';
import { transdeleteRouter } from './routes/transdelete';
import { transfinishRouter } from './routes/transfinish';

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
app.use(transdownloadRouter);
app.use(transdeleteRouter);
app.use(transfinishRouter);

app.all('*', async (req, res) => {  //request not found
    throw new NotFoundError();
});

app.use(errorHandler);

export {app};