import { IStackNavigation } from "../../../src/navigation/IStackNavigation";
import { IRepository } from "../../common/stores/defaultRepository/IRepository";
import { IRegisterUserUseCase } from "../useCases/RegisterUserUseCase";

export interface IRegistrationPresenter {
    readonly isRegistrationLoading: boolean;
    readonly isRegistrationDisabled: boolean;
    readonly email: string;
    readonly password: string;
    readonly name: string;
    readonly phone: string;
    onChangeEmail: (data: string) => void;
    onChangePassword: (data: string) => void;
    onChangeName: (data: string) => void;
    onChangePhone: (data: string) => void;
    onRegister: (navigation: IStackNavigation) => Promise<void>;
}

export class RegistrationPresenter implements IRegistrationPresenter {
    constructor(
        private registrationLoadingStore: IRepository<boolean>,
        private registrationDisabledStore: IRepository<boolean>,
        private registrationEmailStore: IRepository<string>,
        private registrationPasswordStore: IRepository<string>,
        private registrationNameStore: IRepository<string>,
        private registrationPhoneStore: IRepository<string>,
        // private registerUserUseCase: IRegisterUserUseCase,
    ) { }

    get isRegistrationLoading() {
        return this.registrationLoadingStore.data ?? false;
    }

    get isRegistrationDisabled() {
        return this.registrationDisabledStore.data ?? true;
    }

    get email() {
        return this.registrationEmailStore.data ?? '';
    }

    get password() {
        return this.registrationPasswordStore.data ?? '';
    }

    get name() {
        return this.registrationNameStore.data ?? '';
    }

    get phone() {
        return this.registrationPhoneStore.data ?? '';
    }

    onChangeEmail = (data: string) => {
        this.registrationEmailStore.save(data);
        this.validateInputs();
    }

    onChangePassword = (data: string) => {
        this.registrationPasswordStore.save(data);
        this.validateInputs();
    }

    onChangeName = (data: string) => {
        this.registrationNameStore.save(data);
        this.validateInputs();
    }

    onChangePhone = (data: string) => {
        this.registrationPhoneStore.save(data);
        this.validateInputs();
    }

    onRegister = async (navigation: IStackNavigation) => {
        console.log('navigation ', navigation)
        // await this.registerUserUseCase.register(this.name, this.password, this.phone, this.email);
    }

    private validateInputs = () => {
        const isDisabled = !(
            this.registrationEmailStore.data &&
            this.registrationPasswordStore.data &&
            this.registrationNameStore.data &&
            this.registrationPhoneStore.data);
        this.registrationDisabledStore.save(isDisabled);
    }

    private setDefaultValues = () => {
        this.registrationLoadingStore.save(false);
        this.registrationDisabledStore.save(false);
        this.registrationNameStore.save('');
        this.registrationPhoneStore.save('');
        this.registrationEmailStore.save('');
        this.registrationPasswordStore.save('');
    }

}
