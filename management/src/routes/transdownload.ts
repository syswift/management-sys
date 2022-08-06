import express, {Request, Response} from 'express';
import { Trans } from '../model/trans';

const router = express.Router();

router.get('/api/management/transdownload/:processPer', async (req: Request, res: Response) =>{
    //console.log(req.params.processPer);
    res.send({allTrans: await Trans.find({processPer: req.params.processPer}) || null});
});

export {router as transdownloadRouter};