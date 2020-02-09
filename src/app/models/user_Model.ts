export class User {
    username: String
    email: String
    password: String
    phone: String

    constructor(details: any) {
        this.username = details.name
        this.email = details.email
        this.password = details.password
        this.phone = details.phone
    }
}