import { IRepository } from "../../common/stores/defaultRepository/IRepository";
import { ISplashScreenUseCase } from "../useCases/splashScreenUseCases";

export interface ISplashScreenPresenter {
    readonly splashScreenState: boolean;
    onChangeSplashScreenState: (value: boolean) => void;
};

export class SplashScreenPresenter implements ISplashScreenPresenter {
    constructor(
        private isSplashScreenLoaded: IRepository<boolean>,
        private splashScreenUseCases: ISplashScreenUseCase,
    ) { };

    get splashScreenState() {
        return this.isSplashScreenLoaded.data ?? false;
    }

    onChangeSplashScreenState = (value: boolean) => {
        this.splashScreenUseCases.changeSplashScreenState(value);
    }
}