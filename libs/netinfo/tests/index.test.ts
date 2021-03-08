import { NetinfoController } from "..";

jest.mock('@react-native-community/netinfo', () => ({
    configure: jest.fn(),
    fetch: jest.fn(),
    addEventListener: (callback: Function) => {
        callback({
            type: 'cellular',
            isConnected: true,
            isInternetReachable: true,
            details: {
                isConnectionExpensive: true,
                cellularGeneration: '3g',
            },
        })
        return () => { };
    },
    useNetInfo: jest.fn(),
}));

describe('NetinfoController', () => {
    test('have to subscribe and return netinfo state', () => {
        const netinfoController = new NetinfoController();
        const callback = jest.fn();
        netinfoController.subscribe(callback);
        expect(callback).toHaveBeenCalledWith({
            type: 'cellular',
            isConnected: true,
            isInternetReachable: true,
            details: {
                isConnectionExpensive: true,
                cellularGeneration: '3g',
            },
        });
    });
    test('unsubscribers array has to have length 2', () => {
        const netinfoController: any = new NetinfoController();
        const callback = jest.fn();
        netinfoController.subscribe(callback);
        expect(netinfoController.unsubscribers.length).toEqual(2);
    });
    test('unsubscribers array has to have length 3 and after unsubscribe agin 2', () => {
        const netinfoController: any = new NetinfoController();
        const callback = jest.fn();
        const unsubscribe = netinfoController.subscribe(callback);
        expect(netinfoController.unsubscribers.length).toEqual(3);
        unsubscribe();
        expect(netinfoController.unsubscribers.length).toEqual(2);
    });
    test('after remove all subscribes unsubscribers array has to have length 0', () => {
        const netinfoController: any = new NetinfoController();
        netinfoController.unsubscribeAll();
        expect(netinfoController.unsubscribers.length).toEqual(0);
    });
})
