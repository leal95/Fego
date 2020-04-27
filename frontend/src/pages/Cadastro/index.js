import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';
import api from '../../services/api';

export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [ra, setRA] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [numTelefone, setNumTelefone] = useState('');
    const [confirmacao, setConfirmacao] = useState('');

    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login');
    };

    async function cadastrarUsuario() {
        
        const info = ({
            email,
            senha,
            ra,
            nome, 
            sobrenome,
            numTelefone,
        });

        if(confirmacao === senha){
            try{
                await api.post('/usuarios', info);
    
                alert('Conta criada com sucesso');
    
                navigateToLogin();
            }
            catch(err){
                alert('Erro ao fazer cadastro!');
            };
        }

        else{
            alert("As senhas digitadas não são correspondentes");
        }
    };

    return(
        <View style={styles.container}>
            <Feather name="arrow-left" size={24} color="#999" onPress={navigateToLogin} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Crie sua conta</Text>
            </View>

            
            <View style={styles.inputs}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Nome"
                        autoCorrect={false}
                        value={nome}
                        onChangeText={setNome}
                    />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Sobrenome"
                        autoCorrect={false}
                        value={sobrenome}
                        onChangeText={setSobrenome}
                        />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Email"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                        />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Numero de Telefone (somente numeros)"
                        autoCorrect={false}
                        keyboardType="numeric"
                        value={numTelefone}
                        onChangeText={setNumTelefone}
                        />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="RA"
                        autoCorrect={false}
                        keyboardType="numeric"
                        value={ra}
                        onChangeText={setRA}
                        />
                    
                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Senha"
                        autoCorrect={false}
                        value={senha}
                        onChangeText={setSenha}
                        />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Confirme sua senha"
                        autoCorrect={false}
                        value={confirmacao}
                        onChangeText={setConfirmacao}
                        />

                    <Text style={styles.tosText}>
                        Ao cadastrar você admite  que está ciente e aceita os Termos e Condições de Serviço do FeGoApp
                    </Text>
                </ScrollView>
            </View>

            <View style={styles.botoes}>
                <TouchableOpacity 
                style={styles.botaoCadastrar} 
                onPress={cadastrarUsuario}>
                    <Text style={styles.botaoCadastrarText}>Concluir Cadastro</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.textosfinais}>

                <Text style={styles.textoLogin}> Já possui conta?  </Text>

                <TouchableOpacity 
                style={styles.botaoLogin}
                onPress={navigateToLogin}>
                    <Text style={styles.botaoLoginText}>Login</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}