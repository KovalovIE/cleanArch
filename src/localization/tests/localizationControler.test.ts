import { LocalizationController } from "../LocalizationController";

const translation = { ru: { hello: 'hello world' } };

describe('LocalizationController', () => {
    const store: any = { data: null, save: function (key: string) { this.data = key } }
    test('set locale, set translation and call key hello', () => {
        const localizationController = new LocalizationController(store);
        localizationController.setTranslation(translation);
        localizationController.setLocale('ru')
        const result = localizationController.t('hello');
        expect(result).toEqual('hello world');
    });
})
