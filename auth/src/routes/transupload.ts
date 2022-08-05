import express, {Request, Response} from 'express';
import { Trans } from '../models/trans';

const router = express.Router();

router.post('/api/auth/transupload',[], 
async (req: Request, res: Response) =>{

    const { transId, customerId, termId, transType, processPer} = req.body;

    const trans = Trans.build({transId, customerId, termId, transType, processPer});
    await trans.save();

    res.status(201).send(trans);
}); 


export {router as transuploadRouter};