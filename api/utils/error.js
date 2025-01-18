//this is custom error handler  ,its used when we dont have an error but still want to add error for test purpose
export const errorHandler = (statusCode,message)=>{
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
}