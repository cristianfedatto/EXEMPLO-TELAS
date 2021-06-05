import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';

class Exemplo2 extends Component{
    state = {
        contatos:[]
    }

    salvarContato = ()=>{
        //setItem -> buscar contatos salvos em cookie
        AsyncStorage.getItem('contatos').then((contatos)=>{
            //valida se existe alguma coisa dentro de contatos
            if(contatos){
                //caso exista algo dentro de contatos ele vai converter para json a string contatos
                contatos = JSON.parse(contatos);
                //contatos - > JSON
                //push ({}) adiciona um novo indice no JSON
                //nome telefone endereco como novo indice precisa ser igual aos demais ja existentes
                contatos.push({nome:'cristian', telefone: 'q213432', endereco: 'dfsddf'});

                //setItem seta novamente o contato com o novo indice do cookie de contato storage
                //JSON.stringfy converte o JSON em string para salvar no storage
                AsyncStorage.setItem('contatos', JSON.stringify(contatos));

            }
        })
    }

    // salvarContato2 = ()=>{
    //     AsyncStorage.getItem('contatos').then((contatos)=>{
    //         console.log('contatos ->', contatos);
    //         if(contatos){
    //             contatos = JSON.parse(contatos);
    //         }else{
    //             contatos = [];
    //         }
    //             contatos.push({nome:'cristian', telefone: 'q213432', endereco: 'dfsddf'});
    //             AsyncStorage.setItem('contatos', JSON.stringify(contatos));
    //     })
    // }

    getContatos = () =>{
        AsyncStorage.getItem('contatos').then((contatos)=>{
            console.log(contatos);
        })
    }

    render (){
            //removeItem remove dos cookies a variavel que esta setada dentro das aspas que neste
            //caso é contato
        AsyncStorage.removeItem('contatos');
        this.salvarContato();
        this.getContatos();
        return(
            <></>
        );
    }
}

export default Exemplo2;
