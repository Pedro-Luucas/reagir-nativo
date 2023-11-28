import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import React from 'react';
import { useState } from 'react';
import ModalGerar from './components/ModalGerar';
import Slider from '@react-native-community/slider';
import config from './config'; 


export default function App() {
  const [size, setSize] = useState(10);
  const [password, setPassword] = useState("");
  const [gerarVisible, setGerarVisible] = useState(false);
  const [senhasVisible, setSenhasVisible] = useState(false);
  
  function passwordGenerate(){
    let pass = "";
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_+";
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(pass);
    setGerarVisible(true);
  }


  //amanha eu termino
  //https://www.youtube.com/watch?v=_OReRNRR3eI 5:39
  async function salvarSenha(senha){
    console.log(senha);
    await fetch(config.urlRoot + '/gerar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({senha: senha})
    })
  }

  function senhasSalvas(){

    setSenhasVisible(true);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gerador de Senhas</Text>
      <Image source={require("./src/assets/programmingPepe.jpeg")} style={styles.pepe} />
      
      <Text style={styles.caracteres}>{size} CARACTERES</Text>
      <View>
        <Slider 
        style={styles.sliderSenha}
        minimumValue={6} 
        maximumValue={24}
        maximumTrackTintColor="#ff0000"
        minimumTrackTintColor="#00ff00"
        value={size}
        onValueChange={ (value) => setSize(value.toFixed(0))}/>
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity style={styles.button}  onPress={passwordGenerate}>
          <Text style={styles.gerarsenha}>GERAR SENHA</Text>
        </TouchableOpacity>
      </View>
      
      <Modal visible={gerarVisible} animationType="fade" transparent={true} onDismiss={() => setGerarVisible(false)}>
        <ModalGerar senha={password} handleClose={ () => setGerarVisible(false)} handleSalvar={ () => salvarSenha(password)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pepe: {
    width: 200,
    height: 200,
    marginBottom: 50
  },
  sliderSenha: {
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 10,
    width: 300,
    marginTop: 20,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#fd7e14",
    padding: 15,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  titulo: {
    fontSize: 30,
    color: "#000",
    marginBottom: 50
  },
  caracteres: {
    fontSize: 20,
    color: "#000"
  },
  gerarsenha: {
    fontSize: 20,
    color: "#FFF"
  }

});