import { IRequester } from "../../../libs/requester";
import { IKeychainHelpmate } from "../../../libs/storages/keychain";
import { IAppConfig } from "../../../src/config/AppConfig";
import { IUser } from "../../common/models/IUser";

export interface IRegisterUserUseCase {
    register: (name: string, password: string, phone: string, email: string) => Promise<void>;
}

export class RegisterUserUseCase implements IRegisterUserUseCase {
    constructor(
        private config: IAppConfig,
        private requester: IRequester,
        private keychain: IKeychainHelpmate,
        private getHash: (data: string) => string,
    ) { }

    register = async (name: string, password: string, phone: string, email: string) => {
        try {
            const response = await this.registerClient(name, password, phone, email);
            await this.processingResponse(response);
        } catch (error) {
            console.warn('LaunchLocalizationUseCase -> read: ', error);
        }
    }

    private registerClient = async (name: string, password: string, phone: string, email: string) => {
        try {
            const hashPassword = this.getHash(password);
            const body = { name, phone, email, hashPassword };
            const url = this.config.LINKS.REGISTRATION;
            const response = await this.requester.post(url, body);
            return response;
        } catch (error) {
            console.warn('RegisterUserUseCase -> registerClient: ', error);
            return null;
        }
    }

    private processingResponse = async (response: Response | null) => {
        if (response?.ok) {

        }
    }

}
