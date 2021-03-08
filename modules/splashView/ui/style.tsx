import { StyleSheet } from 'react-native';

export const getStyle = (colors: any) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
    return styles
};