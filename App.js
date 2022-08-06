import { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {peso: 0, altura: 0, resultado: ""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){
    let peso = parseInt(this.state.peso);
    let altura = parseFloat(this.state.altura);
    let imc = peso / (altura * altura);
    let res = imc.toFixed(1);
    
    if(imc < 18.5 ){
      this.setState({resultado: `Você está abaixo do peso, seu IMC é de ${res}`})
    } else if (imc >=18.5 && imc <= 24.9){
      this.setState({resultado:`Parabéns Você está com o peso ideal, seu IMC é de ${res}`})
    } else if(imc >= 25 && imc <=29.9){
      this.setState({resultado: `Você está acima do peso, seu IMC é de ${res}`})
    } else{
      this.setState({resultado:`Você está com obesidade, seu IMC é de ${res}`})
    }
  }

render(){
  return(
    <ScrollView style={styles.container}>
      <View style={styles.header} >
        <Image source={require("./assets/icon.png")} style={styles.icon} /> 
        <Text style={styles.text}>Calcule seu IMC</Text>
        <Image 
          style={styles.tabelaImc}
          source={require("./assets/tabela-IMC.png")}
        />
      </View>
        <View>

        <Text style={styles.label}>Peso:</Text>
        <TextInput
          onChangeText={(peso)=> {this.setState({peso})}}
          style={styles.inputArea}
          placeholder="Peso"
          keyboardType='numeric'
        />

        <Text style={styles.label}>Altura:</Text>
        <TextInput
          onChangeText={(altura)=> {this.setState({altura})}}
          style={styles.inputArea}
          placeholder="Altura"
          keyboardType='numeric'        
        />

        <Text style={styles.label}>Resultado:</Text>
        <View style={styles.boxResultado}>
          <Text style={styles.resultado}>{this.state.resultado}</Text>
        </View>        
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.textButton}>Calcular</Text></TouchableOpacity>
      </View>
    </ScrollView>
  )
}
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:50,
    backgroundColor:"#3b3939",
  },
  header: {
    alignSelf:"center",
    alignItems:"center"
  },
  inputArea: {
    padding:10,
    marginRight: 50,
    marginLeft:50,
    marginTop:10,
    backgroundColor:"#fff",
    borderRadius:5,
  },
  text: {
    fontSize:24,
    fontWeight:"bold",
    paddingTop:10,
    color:"#fff",
    marginBottom:10
  },
  button: {
    margin: 20,
    padding: 20,
    backgroundColor: "#0a9ea3",
    borderRadius: 10,
    marginBottom:80
  },
  textButton:{
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center"
  },
  resultado: {
    fontSize: 22,
    textAlign:"center",
    marginLeft:20,
    marginRight:20,
    fontWeight:"bold",
    color:"#fff",
  },
  boxResultado: {
    marginTop:20,
    borderRadius:5,
    padding:10
  },
  label: {
    color:"#fff",
    marginLeft:30,
    marginTop:10,
    marginBottom:0,
    fontWeight:"bold"
  },
})
