import { createContext, useContext } from "react";
import { IStore, StoreFactory } from "./StoreFactory";

const AppStore = createContext<IStore>({} as IStore);

export const AppProvider = AppStore.Provider;

export const Store = new StoreFactory();

export const useAppStore = (): IStore => useContext(AppStore);