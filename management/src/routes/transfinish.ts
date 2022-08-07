import express, {Request, Response} from 'express';
import { Trans } from '../model/trans';

const router = express.Router();

router.post('/api/management/transfinish',[], async (req: Request, res: Response) =>{

    const { processPer} = req.body;

    //console.log(transId, customerId, termId,transState, transType, processPer);

    const transGet = await Trans.find({
        processPer: processPer
    }); 

    res.status(201).send({allTrans: transGet});
});

export {router as transfinishRouter};