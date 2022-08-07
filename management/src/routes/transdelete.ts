import express, {Request, Response} from 'express';
import { Trans } from '../model/trans';

const router = express.Router();

router.get('/api/management/transdelete/:transId', async (req: Request, res: Response) =>{

    const transId = req.params.transId;

    await Trans.findOneAndDelete({transId: transId});

    res.send('delete success!');
});

export {router as transdeleteRouter};