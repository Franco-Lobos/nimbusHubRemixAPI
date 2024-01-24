import mongoose from "mongoose";

export interface ExternalUser {
    name: string;
    email: string;
    authentication:{
        accessToken: string;
        refreshToken: string;
        salt: string;
        sessionToken: string;
    }
}

export const ExternalUserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    authentication:{
        accessToken: {type: String, required: true, select: false},
        refreshToken: {type: String, select: false},
        salt: {type: String, select: false},
        sessionToken: {type: String, select: false},
    }
});

export const ExternalUserModule = mongoose.models.ExternalUser || mongoose.model('ExternalUser', ExternalUserSchema);
export const getExternalusers  = ()=> ExternalUserModule.find();
export const getExternalUserByEmail = (email: string)=> ExternalUserModule.findOne({email});
export const getExternalUserBySessionToken = (sessionToken: string)=> ExternalUserModule.findOne({'authentication.sessionToken': sessionToken});
export const getExternalUserbyId = (id: string)=> ExternalUserModule.findById(id);
export const createExternalUser = (values: Record<string, any>)=> new ExternalUserModule(values).save().then((user:any)=> user.toObject());
export const deleteExternalUserById = (id: string)=> ExternalUserModule.findByIdAndDelete(id);
export const updateExternalUserById = (id: string, values: Record <string,any>) => ExternalUserModule.findByIdAndUpdate(id, values);