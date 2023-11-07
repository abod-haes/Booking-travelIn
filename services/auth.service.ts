import client from "@/config/appwrite.config"
import {Account} from "appwrite"

class AuthService {
    private static instance: AuthService
    private static account: Account = new Account(client)

    public static getInstance = () => {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService()
        }
        return AuthService.instance
    }

    public login = async (email: string, password: string) => {
        return AuthService.account.createEmailSession(email, password)
    }

    public register = async (data: any) => {
        const {email, password, userId, name} = data
        // console.log(AuthService.account.create)
        return AuthService.account.create(userId, email, password, name)
    }
}

export default AuthService
