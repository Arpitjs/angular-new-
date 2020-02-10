import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './../../models/user_Model'

@Injectable()

export class AuthService {
    url
    constructor(public http: HttpClient) {
        this.url = 'http://localhost:9090/api/auth'
    }

    login (data: User) {
        return this.http.post(`${this.url}/login`, data, {
            headers: new HttpHeaders({
                'Content-Type':'application/json'
            })
        })
    }

    register(data: User) {
        return this.http.post(`${this.url}/register`, data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }
 }