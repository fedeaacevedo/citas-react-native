import React from "react";
import { SafeAreaView, Text, StyleSheet} from "react-native";


const App = () => {
  
  return (
 
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas {''}
      <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
     
    </SafeAreaView>
)};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#f3f4f6',
    flex:1
  },  
  titulo:{
    textAlign:'center',
    fontSize:30,
    color:'#374151',
    fontWeight:'600'
  },
  tituloBold:{
    fontWeight:'900',
    color:'#6d28d9'
  }
})

export default App;
