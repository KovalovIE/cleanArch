import { IRepository } from "../../common/stores/defaultRepository/IRepository";
import { MobXRepository } from "../../common/stores/defaultRepository/MobXRepository";
import { ISplashScreenPresenter, SplashScreenPresenter } from "../presenter/splashScreenPresenter";
import { ISplashScreenUseCase, splashScreenUseCase } from "../useCases/splashScreenUseCases";

export interface ISplashScreenFactory {
    splashScreenPresenter: ISplashScreenPresenter;
};

export class SplashScreenFactory implements ISplashScreenFactory {
    private static instance: SplashScreenFactory;

    private isSplashScreenLoaded: IRepository<boolean> = new MobXRepository<boolean>();

    private splashScreenUseCases: ISplashScreenUseCase = new splashScreenUseCase(
        // set data for process some event on Splash screen
        this.isSplashScreenLoaded
    );

    readonly splashScreenPresenter: ISplashScreenPresenter = new SplashScreenPresenter(
        this.isSplashScreenLoaded,
        this.splashScreenUseCases,
    );

    constructor() {
        if (SplashScreenFactory.instance) {
            return SplashScreenFactory.instance;
        }
        SplashScreenFactory.instance = this;
    };
};