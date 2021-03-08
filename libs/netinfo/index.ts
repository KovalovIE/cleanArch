import NetInfo, { NetInfoState, NetInfoSubscription } from "@react-native-community/netinfo";

export interface IInternetConnection {
    subscribe: (callBack: (netInfoState: INetInfoState) => void) => void;
    unsubscribeAll: () => void;
}

export type INetInfoState = NetInfoState;

export class NetinfoController implements IInternetConnection {
    private static exist: boolean;
    private static instance: NetinfoController;

    private unsubscribers: NetInfoSubscription[] = [];

    constructor() {
        if (NetinfoController.exist) {
            return NetinfoController.instance;
        }
        NetinfoController.instance = this;
        NetinfoController.exist = true;
    }

    subscribe = (callBack: (netInfoState: INetInfoState) => void): NetInfoSubscription => {
        const unsubscribe = NetInfo.addEventListener((netInfoState: INetInfoState) => {
            callBack(netInfoState);
        });
        this.unsubscribers.push(unsubscribe);
        return () => {
            this.unsubscribers = this.unsubscribers.filter(item => item !== unsubscribe);
            unsubscribe();
        };
    }

    unsubscribeAll = () => {
        this.unsubscribers.forEach(item => item());
        this.unsubscribers = [];
    }

}
