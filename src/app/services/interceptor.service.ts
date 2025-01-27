import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class JWTInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = localStorage.getItem('acessToken');
        if(token){
            const authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            return next.handle(authReq);
        }else{
            return next.handle(req);
        }
    }
}