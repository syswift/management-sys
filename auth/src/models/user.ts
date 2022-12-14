import mongoose from 'mongoose';
import { Password } from '../service/password';

interface UserAttrs {
    email: string;
    password: string;
    userName: string;
}

//extends method for mongoose to work with typescript
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

//on mongodb what user has
interface UserDoc extends mongoose.Document {
    _id: string;
    email: string;
    password: string;
    userName: string;
    admin: string;
    hasAccess: string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    }
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

userSchema.pre('save', async function(done){
    if(this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    done();
});

userSchema.statics.build = (attrs: UserAttrs) =>{
    return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export {User};