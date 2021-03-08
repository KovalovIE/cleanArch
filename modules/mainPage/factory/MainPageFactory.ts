import { IMainPagePresenter, MainPagePresenter } from "../presenter/MainPagePresenter";

export interface IMainPageFactory {
    mainPagePresenter: IMainPagePresenter;
};

export class MainPageFactory implements IMainPageFactory {
    private static instance: MainPageFactory;

    readonly mainPagePresenter: IMainPagePresenter = new MainPagePresenter(
        
    );

    constructor() {
        if (MainPageFactory.instance) {
            return MainPageFactory.instance;
        }
        MainPageFactory.instance = this;
    }
};