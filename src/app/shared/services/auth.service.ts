import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../../models/user_Model'
import { environment } from './../../../environments/environment'

@Injectable()

export class AuthService {
    url
    constructor(public http: HttpClient) {
        this.url = environment.BaseUrl
    }

    login(data: User) {
        return this.http.post(`${this.url}/login`, data, this.getOptions())
    }

    register(data: User) {
        return this.http.post(`${this.url}/register`, data, this.getOptions())
    }

    private getOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
    }
}