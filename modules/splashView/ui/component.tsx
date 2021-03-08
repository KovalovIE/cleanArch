import { observer } from 'mobx-react';
import React, { FC, useRef, useMemo, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Animated } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/IStackNavigation';
import { useTheme } from '@react-navigation/native';
import { getStyle } from './style';
import { ISplashScreenPresenter } from '../presenter/splashScreenPresenter';

interface Props {
    navigation: IStackNavigation;
    splashScreenPresenter: ISplashScreenPresenter
}

export const SplashView: FC<Props> = observer(({ navigation, splashScreenPresenter }) => {
    const opacity = useRef(new Animated.Value(0));
    const { colors } = useTheme();
    const styles = useMemo(() => getStyle(colors), [colors]);

    useEffect(() => {
        console.log('splashScreenPresenter-------', splashScreenPresenter.splashScreenState);
        setTimeout(() => {
            splashScreenPresenter.onChangeSplashScreenState(true);
            console.log('splashScreenPresenter-----setTimeout--', splashScreenPresenter.splashScreenState);
        }, 2000)
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontSize: 25}}>Online Stylist</Text>
            </View>
        </View >
    )
});