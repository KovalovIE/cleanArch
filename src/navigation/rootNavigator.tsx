import React, { FC, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './stackNavigator';
import { SafeAreaView } from 'react-native';

export const RootNavigation: FC = () => {
    const navigationRef: any = useRef();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer ref={navigationRef}>
                <StackNavigator />
            </NavigationContainer>
        </SafeAreaView>
    );
}
