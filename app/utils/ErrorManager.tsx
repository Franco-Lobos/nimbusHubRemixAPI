import { NimbusError, NimbusErrorType } from "~/models/errors/NimbusError"

export const ErrorManager = (errorCode: number): NimbusError =>{
    switch(errorCode){
        case 400:
            return {
                code: 400,
                type: NimbusErrorType.SERVER,
                message: "User or Password are null"
            }       
        case 401:
            return {
                code: 401,
                type: NimbusErrorType.SERVER,
                message: "Unauthorized, please log in"
            }       
        case 402:
            return {
                code: 402,
                type: NimbusErrorType.SERVER,
                    message: "Location not provided"
            }    
        case 403:
            return {
                code: 403,
                type: NimbusErrorType.SERVER,
                message: "Your session has expired. Please log in again."
            }
        case 404:
            return {
                code: 404,
                type: NimbusErrorType.SERVER,
                message: "The requested resource was not found."
            }
        case 500:
            return {
                code: 500,
                type: NimbusErrorType.SERVER,
                message: "The server is not responding. Please try again later."
            }
        default:
            return {
                code: 500,
                type: NimbusErrorType.SERVER,
                message: "An unknown error has occurred. Please try again later."
            }
    }
}