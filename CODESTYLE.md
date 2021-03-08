# Code style

## Variable

### Variable naming

- Constants naming with capital later **I_AM_CONSTANT**
- Boolean - starts with **is**
- Conditions (if) always using with **{ }**
- tsx files and styles.ts name starts with lowercase letter **styles.ts**, **component.tsx**, **index.tsx**
- ts files has the same name as class inside

```ts
const daysSinceCreation: number;
```

# Global store #

- in src->context locates global store factory witch contain all factories from another modules and common api like localization

# 'libs' package #

- in libs located realization react native libs from node modules like NetInfo, AsyncStorage, AppState, Requester
- libs in this package doesn't know about other packages and each other
- if need global store for this libs, we hove to create common store or special store in global factory 
- interface describe entity. Example **IRequester** but realization describes how interface was implemented **AxiosRequester**
, we use axios for implement IRequester

```ts
export class StoreFactory implements IStore {
    ...

    readonly Requester: IRequester = new AxiosRequester();

    // NetInfo presenter and store
    private NetInfoStore: IRepository<INetInfoState> = new MobXRepository<INetInfoState>();
    readonly NetinfoController: INetinfoController = new NetinfoController();

    constructor() {
        ...
        this.NetinfoController.subscribe(this.NetInfoStore.save);
    }

}
```

# module package #

Contain 4 packages (less or more if need)

## factory ##

- factory where we create repositories, useCases, presenters and libs implementation for useCases
- factory its place where we create all exemplars and it knows about them

## presenter ##

- its a controller witch connect ui and ui-logic and business-logic

## ui ##

Include main 3 files: 
 - style.ts - with component styles;
 - component.tsx - with all ui, component name ends with View (SplashView) 
 - index.tsx - import  component and pass there all props from mobx or redux or other storage, name ends with Screen (SplashView) 
 - can include packages with some components

## useCases ##

- contain business logic

# Class # 

# Error logs #

- in log you have to write class, method, params and message or error
- better way to write Logger for app