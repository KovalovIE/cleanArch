import { Dimensions } from 'react-native';
import { Util } from '../Util';
import safeArea from 'react-native-safe-area-context';

jest.mock('react-native-device-info', () => ({
    getVersion: () => '1.1.0',
    getBuildNumber: () => '10'
}));

jest.mock('react-native-safe-area-context', () => ({
    initialWindowMetrics: { frame: { height: 10, width: 10, x: 0, y: 0 }, insets: { bottom: 0, left: 0, right: 0, top: 0 } },
}));

describe('Util', () => {
    const utils = new Util();
    test('get app version', () => {
        const version = utils.getVersion();
        expect(version).toEqual('1.1.0');
    });
    test('get app build', () => {
        const version = utils.getBuild();
        expect(version).toEqual('10');
    });
    test('get app window metrics', () => {
        safeArea.initialWindowMetrics = { frame: { height: 10, width: 10, x: 0, y: 0 }, insets: { bottom: 0, left: 0, right: 0, top: 0 } };
        const metrics = utils.getInitialWindowMetrics();
        expect(metrics).toEqual({ frame: { height: 10, width: 10, x: 0, y: 0 }, insets: { bottom: 0, left: 0, right: 0, top: 0 } });
        const secondRequest = utils.getInitialWindowMetrics();
        expect(secondRequest).toEqual({ frame: { height: 10, width: 10, x: 0, y: 0 }, insets: { bottom: 0, left: 0, right: 0, top: 0 } });
    });
    test('get app window metrics when initialWindowMetrics null', () => {
        Util.initialWindow = null as any;
        safeArea.initialWindowMetrics = null;
        const metrics = utils.getInitialWindowMetrics();
        const { width, height } = Dimensions.get('window');
        expect(metrics).toEqual({ frame: { height, width, x: 0, y: 0 }, insets: { bottom: 0, left: 0, right: 0, top: 0 } });
    });
})
