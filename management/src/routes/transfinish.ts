import express, {Request, Response} from 'express';
import { Trans } from '../model/trans';

const router = express.Router();

router.post('/api/management/transfinish',[], async (req: Request, res: Response) =>{

    const {transId, processPer} = req.body;

    console.log(transId+' '+ processPer);

    const tran = Trans.findOneAndUpdate({transId: transId, processPer: processPer },{ transState: false }).exec();

    res.status(201).send(JSON.stringify(tran));
});

export {router as transfinishRouter};