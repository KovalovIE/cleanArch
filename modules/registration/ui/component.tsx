import { observer } from 'mobx-react';
import React, { FC, useCallback } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { IStackNavigation } from '../../../src/navigation/IStackNavigation';
import { IRegistrationPresenter } from '../presenter/RegistrationPresenter';

interface Props {
    registrationPresenter: IRegistrationPresenter;
    navigation: IStackNavigation;
}

export const RegistrationView: FC<Props> = observer(({ registrationPresenter, navigation }) => {
    const onNavigate = useCallback(() => { registrationPresenter.onRegister(navigation) }, [navigation]);

    return (
        <View style={styles.container}>
            <TextInput
                style={{ width: '80%', height: 50, borderColor: '#000', borderWidth: 1 }}
                value={registrationPresenter.name}
                onChangeText={registrationPresenter.onChangeName}
            />
            <Text>RegistrationView </Text>
            <Button title='' onPress={onNavigate} />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {}
});
