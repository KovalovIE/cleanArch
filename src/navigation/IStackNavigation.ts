export interface IStackNavigation {
    addListener: (type: string, callback: Function) => Function;
    removeListener: (type: string, callback: Function) => void;
    canGoBack(): boolean;
    goBack(): void;
    dangerouslyGetParent(): any;
    isFocused(): boolean;
    reset(state: any): void;
    pop(): void;
    popToTop(): void;
    push(routeName: string, params: any): void;
    navigate(routeName: string, params?: any): void;
    dispatch(action: any): void;
    dangerouslyGetState(): any;
    setOptions(options: any): void;
    setParams(params: any): void;
    replace(routeName: string, params?: any): void;
}