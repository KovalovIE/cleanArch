import config from './config.json';

export interface IAppConfig {
    LINKS: ILinks;
}

type ILinks = {

}

export class AppConfig implements IAppConfig {
    private static instance: AppConfig;

    private _links: ILinks = config.LINKS;

    constructor() {
        if (AppConfig.instance) {
            return AppConfig.instance;
        }
        AppConfig.instance = this;
    }

    get LINKS() {
        return this._links;
    }

    setLinks = (links: ILinks) => {
        if (links) {
            this._links = links;
        }
    }

}
