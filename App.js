import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  Pressable,
  TextComponent
} from 'react-native';

const App = () => {

  const nuevaCitaHandler = () => {
    console.log('Presionando BTN')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      {/* Usamos pressable en vez de button porque tenemos mas funcionalidades */}
      <Pressable  
        onPress={ nuevaCitaHandler }
        style={styles.btnNuevacita}
      >
        <Text
          style={styles.btnTextoNuevacita}
        >Nueva Cita</Text>
       </Pressable> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6d28d9',
  },
  btnNuevacita:{
    backgroundColor:'#6d28d9',
    padding:15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  // Hay propiedades que solamente se las podemos dar al texto, por eso creamos dos estilos diferentes
  btnTextoNuevacita:{
    textAlign:'center',
    color:'#fff', 
    textTransform:'uppercase',
    fontSize: 20,
    fontWeight:'900'
  }
});

export default App;
