import { observer } from 'mobx-react';
import React, { FC } from 'react';
import { IStackNavigation } from '../../../src/navigation/IStackNavigation';
import { useAppStore } from '../../../src/context';
import { SplashView } from './component';

export const SplashScreen: FC<{ navigation: IStackNavigation }> = observer(({navigation}) => { 
    const { splashScreenPresenter } = useAppStore();   
    return (<SplashView navigation={navigation} splashScreenPresenter={splashScreenPresenter} />);
});