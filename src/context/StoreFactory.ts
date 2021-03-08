import { IUtil, Util } from "../util/Util";
import { IInternetConnection, INetInfoState, NetinfoController } from "../../libs/netinfo";
import { MobXRepository } from "../../modules/common/stores/defaultRepository/MobXRepository";
import { IRepository } from "../../modules/common/stores/defaultRepository/IRepository";
import { ILocalizationController, LocalizationController } from "../localization/LocalizationController";
import { RegistrationFactory } from "../../modules/registration/factory/RegistrationFactory";
import { IRegistrationPresenter } from "../../modules/registration/presenter/RegistrationPresenter";
import { IMainPagePresenter } from "../../modules/mainPage/presenter/MainPagePresenter";
import { MainPageFactory } from "../../modules/mainPage/factory/MainPageFactory";
import { ISplashScreenPresenter } from "../../modules/splashView/presenter/splashScreenPresenter";
import { SplashScreenFactory } from "../../modules/splashView/factory/splashScreenFactory";

export interface IStore {
    Utils: IUtil;
    // localization presenter and store
    LocalizationStore: IRepository<string>;
    LocalizationController: ILocalizationController;
    // NetInfo presenter and store
    NetInfoStore: IRepository<INetInfoState>;
    InternetConnection: IInternetConnection;
    // Registration presenter and store
    registrationPresenter: IRegistrationPresenter;
    mainPagePresenter: IMainPagePresenter;
    splashScreenPresenter: ISplashScreenPresenter;
}

// в каждом модуле будет своя фабрика которая потом добавляется в глобальную фабрику

export class StoreFactory implements IStore {
    private static instance: StoreFactory;
    readonly Utils = new Util();

    // localization presenter and store
    readonly LocalizationStore: IRepository<string> = new MobXRepository<string>();
    readonly LocalizationController: ILocalizationController = new LocalizationController(this.LocalizationStore);
    // NetInfo presenter and store
    readonly NetInfoStore: IRepository<INetInfoState> = new MobXRepository<INetInfoState>();
    readonly InternetConnection: IInternetConnection = new NetinfoController();
    // Registration presenter
    readonly registrationPresenter: IRegistrationPresenter = new RegistrationFactory().registrationPresenter;
    readonly mainPagePresenter: IMainPagePresenter = new MainPageFactory().mainPagePresenter;
    readonly splashScreenPresenter: ISplashScreenPresenter = new SplashScreenFactory().splashScreenPresenter;

    constructor() {
        if (StoreFactory.instance) {
            return StoreFactory.instance;
        }
        StoreFactory.instance = this;
        this.InternetConnection.subscribe(this.NetInfoStore.save);
    }

}
