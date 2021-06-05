import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Exemplo extends Component{

    state={
        contatos:[
            {nome:'tales', telefone: '49999999', endereco:'teste'},
            {nome:'cristian', telefone: '49999999', endereco:'teste'},
            {nome:'renato', telefone: '49999999', endereco:'teste'},
            {nome:'douglas', telefone: '49999999', endereco:'teste'}
                   
        ]
    }

    setarDados = () =>{

        console.log('salvado');
        //AsyncStorage > armazenamento de cookies
        //setItem insere ou sobrescreve um cookie novo ou existente
        //setItem('chave','valor')
        let {contatos} = this.state;
        AsyncStorage.setItem('nome','Cristian');
        AsyncStorage.setItem('sobrenome','Cristian');
        AsyncStorage.setItem('idade','25');
        AsyncStorage.setItem('cidade','francesa');

        //setando os contatos dentro da variavel contatos
        //JSON.stringfy(contatos)> converte OBJECT, ARRAY, JSON em STRING
        //AsyncStorage só funciona com string, por isso precisa JSON.stringfy
        AsyncStorage.setItem('contatos', JSON.stringify(contatos));
    }
    
    buscarDados = () =>{
        //asyncSorage -> armazenar cookies
        //getItem busca o cookie setado anteriormente
        //getItem chave - chave do item setado na função acima que deseja buscar no storage
        //then - callback executado ao retornar o valor encontrado na chave solicitado
        //nome=>{}função criada para executar algo quando o valor da chave for retornado
        AsyncStorage.getItem('nome').then((nome)=>{
            console.log(nome);
        })
        AsyncStorage.getItem('sobrenome').then((sobrenome)=>{
            console.log(sobrenome);
        })
        AsyncStorage.getItem('idade').then((idade)=>{
            console.log(idade);
        })
        AsyncStorage.getItem('cidade').then((cidade)=>{
            console.log(cidade);
        })

        //buscando dados de variavel contatos
        //JSON.parse(contatos)> converte string em json objet array
        //JSONCONTATOS[0] pega o primeiro objeto do array
        //JSONCONTATO0[0].nome pegao valor da variavel nome do primeiro obj array

        AsyncStorage.getItem('contatos').then((contatos)=>{
            let JSONCONTATOS = JSON.parse(contatos);
            consoleg.log(JSONCONTATOS[0].nome);
        })
    }

render (){
    this.buscarDados();
    
    
    this.setarDados();
    return (
            <></>
        );
    }
}

export default Exemplo;
