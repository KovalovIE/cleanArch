import { observer } from 'mobx-react';
import React, { FC, useCallback } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { IStackNavigation } from '../../../src/navigation/IStackNavigation';
import { IMainPagePresenter } from '../presenter/MainPagePresenter';

interface Props {
    mainPagePresenter: IMainPagePresenter;
    navigation: IStackNavigation;
}

export const MainPageView: FC<Props> = observer(({ mainPagePresenter, navigation }) => {

    return (
        <View style={styles.container}>
            <Text>MainPageView </Text>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {}
});
