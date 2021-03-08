import { observer } from 'mobx-react';
import React, { FC } from 'react';
import { IStackNavigation } from '../../../src/navigation/IStackNavigation';
import { useAppStore } from '../../../src/context';
import { MainPageView } from './component';

export const MainPageScreen: FC<{ navigation: IStackNavigation }> = observer(({navigation}) => {    
    const { mainPagePresenter } = useAppStore();
    return (<MainPageView mainPagePresenter={mainPagePresenter} navigation={navigation} />);
});