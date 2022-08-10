import express, {Request, Response} from 'express';
import { User } from '../models/user';

const router = express.Router();

router.post('/api/auth/username',[], async (req: Request, res: Response) =>{

    const { email} = req.body;

    const userGet = await User.findOne({email}).exec(); 
    console.log(userGet);
    //console.log(processPer);

    res.status(201).send({username: userGet || null});
});

export {router as usernameRouter};