class HttpException  extends Error{
    httpStatus:number;
    errorCode:string;
    message:string;
    constructor(httpStatus:number,errorCode:string,message:string){
        super(message);
        this.httpStatus=httpStatus;
        this.errorCode=errorCode;
        this.message=message;
    }
}
export default HttpException;