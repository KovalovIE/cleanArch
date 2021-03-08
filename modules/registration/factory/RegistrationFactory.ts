import { AxiosRequester, IRequester } from "../../../libs/requester";
// import { IKeychainHelpmate, KeychainHelpmate } from "../../../libs/storages/keychain";
import { IAppConfig, AppConfig } from "../../../src/config/AppConfig";
import { IRepository } from "../../common/stores/defaultRepository/IRepository";
import { MobXRepository } from "../../common/stores/defaultRepository/MobXRepository";
import { RegistrationPresenter, IRegistrationPresenter } from "../presenter/RegistrationPresenter";
import { IRegisterUserUseCase, RegisterUserUseCase } from "../useCases/RegisterUserUseCase";

export interface IRegistrationFactory {
    registrationPresenter: IRegistrationPresenter;
};

export class RegistrationFactory implements IRegistrationFactory {
    private static instance: RegistrationFactory;

    private registrationLoadingStore: IRepository<boolean> = new MobXRepository<boolean>();
    private registrationDisabledStore: IRepository<boolean> = new MobXRepository<boolean>();
    private registrationEmailStore: IRepository<string> = new MobXRepository<string>();
    private registrationPasswordStore: IRepository<string> = new MobXRepository<string>();
    private registrationNameStore: IRepository<string> = new MobXRepository<string>();
    private registrationPhoneStore: IRepository<string> = new MobXRepository<string>();

    // private appConfig: IAppConfig = new AppConfig();
    // private keychain: IKeychainHelpmate = new KeychainHelpmate();
    // private requester: IRequester = new AxiosRequester();
    // private registerUserUseCase:IRegisterUserUseCase = new RegisterUserUseCase(
    //     this.appConfig,
    //     this.requester,
    //     this.keychain,
    // );

    readonly registrationPresenter: IRegistrationPresenter = new RegistrationPresenter(
        this.registrationLoadingStore,
        this.registrationDisabledStore,
        this.registrationEmailStore,
        this.registrationPasswordStore,
        this.registrationNameStore,
        this.registrationPhoneStore,
        // this.registerUserUseCase,
    );

    constructor(

    ) {
        if (RegistrationFactory.instance) {
            return RegistrationFactory.instance;
        }
        RegistrationFactory.instance = this;
    }

}
