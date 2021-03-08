import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RegistrationScreen } from '../../modules/registration/ui';
import { MainPageScreen } from '../../modules/mainPage/ui';
import { SplashScreen } from '../../modules/splashView/ui';
import { observer } from 'mobx-react';

const Stack = createStackNavigator();

export const StackNavigator: FC = () => {
    const isLoadingSplashView = true;

    return (
        <Stack.Navigator >
            { isLoadingSplashView 
                ? <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                : <>
                    {/* <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false }} /> */}
                    <Stack.Screen name="MainPageScreen" component={MainPageScreen} options={{ headerShown: false }} />
                  </> }
        </Stack.Navigator >
    );
}

// export const StackNavigator: FC = () => observer(() => {
//     return (
//         <Stack.Navigator >
//             { isLoadingSplashView 
//                 ? <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
//                 : <>
//                     {/* <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false }} /> */}
//                     <Stack.Screen name="MainPageScreen" component={MainPageScreen} options={{ headerShown: false }} />
//                   </> }
//         </Stack.Navigator >
//     );
// })