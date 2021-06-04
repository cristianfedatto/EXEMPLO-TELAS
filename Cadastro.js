import React, {Component} from 'react';
import {View,Button,Text, TextInput, TouchableOpacity} from 'react-native';
import Style from './Style';

class Cadastro extends Component{
    //DEFININDO VARIAVEIS DE ESTADO
    state={
        inputValor:null
    }
//FUNC AO QUE RECEBE O VALOR REPASSADO PELO ONCHANGETEXT DO TEXTINPUT
    getValor = (valor) =>{
        //altera o estado da variavfel inputValor
       this.setState({inputValor:valor})
    }
//funcao executada ao clicar no botao
    aoClicar = () => {
        //DANDO UM CONSOLE LOG N O VALOR QUE A VARIAVEL DE ESTADO INPUTVALOR POSSUI
        let{inputValor} = this.state;
        console.log(inputValor);
    }

    render(){
        return(
            <View>
                {/*STYLE: ESTILOS DO CAMPO*/}
                {/*PLACEHOLDER - LABEL DO CAMPO*/}
                {/*ONCHANGE: FUNCAO PRE DEFINIDA DO TEXTINPUT QUE EXECUTA ALGO QUANDO 
                O VALOR DO CAMPO É ALTERADO(NESSE CASO CHAMA A FUNÇÃO THIS.GETVALOR*/}
                
                <Text> Cadastro </Text>
                    <TextInput
                        style={Style.input}
                        placeholder={'Nome do contato'}
                        onChangeText={this.getValor}/>
                {/*COLOR COR DO BOTAO */}
                {/*TITLE LABEL DO BOTAO */}
                {/*ONPRESS EXECUTA ALGO QUANDO O BOTAO É PRESSIONADO */}
                <Button
                        color={'#2196F3'}
                        title={'Salvar'}
                        onPress={this.aoClicar}/>    
                {/*ON PRESS EXECUTA ALGO QUANDO O BOTAO É PRESSIONADO */}
                {/*activeopcaity opacidade do botao ao ser pressionado */}
                <TouchableOpacity 
                    style={Style.botao}
                    onPress={this.aoClicar}
                    activeOpacity={0.7}>
                        <Text style={Style.botaoText}>Botao</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Cadastro;