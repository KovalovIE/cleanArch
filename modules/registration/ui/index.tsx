import { observer } from 'mobx-react';
import React, { FC } from 'react';
import { useAppStore } from '../../../src/context';
import { IStackNavigation } from '../../../src/navigation/IStackNavigation';
import { RegistrationView } from './component';

export const RegistrationScreen: FC<{ navigation: IStackNavigation }> = observer(({ navigation }) => {
    const { registrationPresenter } = useAppStore();
    return (<RegistrationView registrationPresenter={registrationPresenter} navigation={navigation} />);
})
