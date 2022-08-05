import mongoose from 'mongoose';
import { Password } from '../service/password';

interface TransAttrs {
    transId: string;
    customerId: string;
    termId: string;
    transType: string;
    processPer: string;
}

//extends method for mongoose to work with typescript
interface TransModel extends mongoose.Model<TransDoc> {
    build(attrs: TransAttrs): TransDoc;
}

//on mongodb what Trans has
interface TransDoc extends mongoose.Document {
    _id: string;
    transId: string;
    customerId: string;
    termId: string;
    transType: string;
    processPer: string;
}

const TransSchema = new mongoose.Schema({
    transId: {
        type: String,
        required: true
    },
    customerId: {
        type: String,
        required: true
    },
    termId: {
        type: String,
        required: true
    },
    transTypes: {
        type: String,
        required: true
    },
    processPer: {
        type: String,
        required: true
    },
},
{
    toJSON: { //decide what is in json when return the data
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        }
    }
}
);

TransSchema.pre('save', async function(done){
    if(this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    done();
});

TransSchema.statics.build = (attrs: TransAttrs) =>{
    return new Trans(attrs);
};

const Trans = mongoose.model<TransDoc, TransModel>('Trans', TransSchema);

export {Trans};