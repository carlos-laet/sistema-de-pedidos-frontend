import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { API_CONFIG } from "../config/api.config";
import { CredenciaisDTO } from "../models/credenciaias.dto";

@Injectable()
export class AuthService {
    [x: string]: any;
    

    constructor(public http: HttpClient) {
    }

    authenticate(creds: CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            creds, 
            {
                observe: 'response',
                responseType: 'text',
            });
    }
}