import { IRepository } from "../../common/stores/defaultRepository/IRepository";

export interface ISplashScreenUseCase {
    changeSplashScreenState: (value: boolean) => void;
}

export class splashScreenUseCase implements ISplashScreenUseCase {
    constructor(
        private isSplashScreenLoaded: IRepository<boolean>
    ) { }

    changeSplashScreenState = (value: boolean) => {
        this.isSplashScreenLoaded.save(value);
    }
}
