import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//telas/componente
import Contatos from '../Modules/Contatos/Contatos';
import Cadastro from '../Modules/Cadastro/Cadastro';
import Detalhes from '../Modules/Detalhes/Detalhes';

//criando componente de navegação stack
const Stack = createStackNavigator();

const Navigator = () => {
  return (
      //Conateiner geral das rotas de navegação
    <NavigationContainer>
      {/* //utilizando o componente de navegação de stack(navegação da pilha) */}
      {/* padrao para todas as telas */}
      {/* define a tela inicial da aplicação */}
      <Stack.Navigator screenOptions={{}} initialRouteName = {'Cadastro'}>
            {/* //criando telas de navegação de pilha */}
            {/* configuração tela em questao */}
            <Stack.Screen name={'Detalhes'} component={Detalhes} />
            <Stack.Screen name={'Cadastro'} component={Cadastro} />
            <Stack.Screen options={optionsContatos} name={'Contatos'} component={Contatos} />

        </Stack.Navigator>
    </NavigationContainer>
  );
}

const optionsContatos = {
    headerShown:true,
    headerStyle:{
        backgroundColor:'red',
    },
    headerTitleStyle:{
        color:'white',
        textAlign:'center'
    }


}

export default Navigator;