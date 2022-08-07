import express, {Request, Response} from 'express';
import { Trans } from '../model/trans';

const router = express.Router();

router.post('/api/management/transupload',[], 
async (req: Request, res: Response) =>{

    const { transId, customerId, termId,transState, transType, processPer,createTime} = req.body;

    const trans = Trans.build({transId, customerId, termId, transState, transType, processPer, createTime});
    await trans.save();

    res.status(201).send(trans);
}); 


export {router as transuploadRouter};