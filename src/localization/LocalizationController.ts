import i18n from 'i18n-js';
import translations from './translation.json';
import { IRepository } from '../../modules/common/stores/defaultRepository/IRepository';

export interface ILocalizationController {
    t: (key: string) => string;
    setTranslation: (translations: any) => void;
    setLocale: (value: string) => void;
}

export class LocalizationController implements ILocalizationController {
    constructor(private localizationStore: IRepository<string>) {
        i18n.fallbacks = true;
        i18n.translations = translations;
    }

    setTranslation = (translations: any) => {
        i18n.translations = translations;
    }

    t = (key: string) => {
        const locale = this.localizationStore.data;
        return i18n.t(key, { locale: locale });
    };

    setLocale = (locale: string) => {
        this.localizationStore.save(locale);
    };

}
