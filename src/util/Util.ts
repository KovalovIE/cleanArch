import { Platform, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { initialWindowMetrics, Metrics } from 'react-native-safe-area-context';

export interface IUtil {
    readonly isIOS: boolean;
    getVersion: () => string;
    getBuild: () => string;
    getInitialWindowMetrics: () => Metrics;
}

export class Util implements IUtil {
    private static instance: Util;

    private initialWindow!: Metrics;
    private _isIOS: boolean = Platform.OS === 'ios';

    constructor() {
        if (Util.instance) {
            return Util.instance;
        }
        Util.instance = this;
    }

    get isIOS() {
        return this._isIOS;
    }

    getVersion = () => {
        const version = DeviceInfo.getVersion();
        return version;
    };

    getBuild = () => {
        const build = DeviceInfo.getBuildNumber();
        return build;
    };

    getInitialWindowMetrics = () => {
        if (this.initialWindow) {
            return this.initialWindow;
        } else if (initialWindowMetrics) {
            this.initialWindow = initialWindowMetrics;
            return this.initialWindow;
        } else {
            const { width, height } = Dimensions.get('window');
            return { frame: { height, width, x: 0, y: 0 }, insets: { bottom: 0, left: 0, right: 0, top: 0 } };
        }
    };

}
