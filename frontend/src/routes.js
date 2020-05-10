import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import TelaInicial from './pages/TelaInicial';
import Perfil from './pages/Perfil';

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}} >
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Cadastro" component={Cadastro} />
                <AppStack.Screen name="TelaInicial" component={TelaInicial} />
                <AppStack.Screen name="Perfil" component={Perfil} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}