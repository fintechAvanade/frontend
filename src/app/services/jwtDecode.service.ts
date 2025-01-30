import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
    })
export class JwtDecodeService {
    constructor() { }

    decodedToken(token: string): any {
        try {
            const payload = token.split('.')[1];
            const decodePayload = atob(payload);
            return JSON.parse(decodePayload);
        } catch (error) {
            console.error('Error decodificar o token', error);
            return null;
        }
    }

    // Recupera o nome do usuario presente no token armazenado ao logar
    getUserNameFromToken(): string | null {
        const token = localStorage.getItem('accessToken');
        if(token){
            const decodedToken = this.decodedToken(token);
            return decodedToken?.sub || null;
        }
        return null;
    }
    
    // Recupera o id do usuario presente no token armazenado ao logar
    getUserIdFromToken(): number | null {
        const token = localStorage.getItem('accessToken');
        if(token){
            const decodedToken = this.decodedToken(token);
            return decodedToken?.id || null;
        }
        return null;
    }


    getIdContaFromToken(): number | null {
        const token = localStorage.getItem('accessToken');
        if(token){
            const decodedToken = this.decodedToken(token);
            return decodedToken?.contaId || null;
        }
        return null;
    }
    

}


