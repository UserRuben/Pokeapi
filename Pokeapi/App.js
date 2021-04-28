import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {useState} from 'react';

//logica (componente)
const Texto = () => {
  const name = "Hola"
  const lastname = "Mundo" 
  const [texto, setTexto] = useState(name)
  const Update_Texto = () =>{
    setTexto(lastname)
    if (texto==lastname){
      setTexto(name)
    }
  }
  return(
    <Text onPress={Update_Texto}>{texto}</Text>
  )
}

export default function App() {
  return (
      <View style={styles.container}>
        <Texto/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  color: {
    flex: 1,
    backgroundColor: 'green'
  }
});