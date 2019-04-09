import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Alert } 
  from 'react-native';
import GlobalStyles from './GlobalStyles';


const currencyPerRupee = {
  DOLLAR: 0.014,
  POUND: 0.011,
  EURO: 0.012,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
}




export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    };
  }

  buttonPressed = currency => {
    if(this.state.inputValue === "") {
      Alert.alert("Enter some value");
    }
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency]

    this.setState({ resultValue: result.toFixed(2) });
  }


  render() {

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={ GlobalStyles.droidSafeArea }>
        <View style={styles.screenview}>
          <View style={styles.resultcontainer}>
          <Text style={styles.resultValue}>
            {this.state.resultValue}
          </Text>
          </View>
          <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            selectionColor= 'black'
            keyboardType='numeric'
            placeholder="Enter Value"
            value={this.state.inputValue}
            onChangeText={ inputValue => this.setState({
               inputValue
            }) }
          />
          </View>
            <View style={styles.converterbuttoncontainer}
            >
            <TouchableOpacity
            onPress={ () => this.buttonPressed("DOLLAR") }
            style={styles.converterbutton}
            >
            <Text style={styles.converterbuttontext}>$</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            onPress={ () => this.buttonPressed("POUND") }
            style={styles.converterbutton}
            >
            <Text style={styles.converterbuttontext}>Pound</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={ () => this.buttonPressed("EURO") }
            style={styles.converterbutton}
            >
            <Text style={styles.converterbuttontext}>Euro</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            onPress={ () => this.buttonPressed("RUBEL") }
            style={styles.converterbutton}
            >
            <Text style={styles.converterbuttontext}>Rubel</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={ () => this.buttonPressed("AUSDOLLAR") }
            style={styles.converterbutton}
            >
            <Text style={styles.converterbuttontext}>Aus Dollar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={ () => this.buttonPressed("CANDOLLAR") }
            style={styles.converterbutton}
            >
            <Text style={styles.converterbuttontext}>Can Dollar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={ () => this.buttonPressed("YEN") }
            style={styles.converterbutton}
            >
            <Text style={styles.converterbuttontext}>Yen</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={ () => this.buttonPressed("DINAR") }
            style={styles.converterbutton}
            >
            <Text style={styles.converterbuttontext}>Dinar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={ () => this.buttonPressed("BITCOIN") }
            style={styles.converterbutton}
            >
            <Text style={styles.converterbuttontext}>Bitcoin</Text>
            </TouchableOpacity>
            
            </View>

            

        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26ae60',
    marginTop: 20
  },
  screenview: {
    flex: 1
  },
  resultcontainer: {
    height: 70,
    marginTop: 20,
    justifyContent: 'center',
    borderColor: '#c1c1c1',
    backgroundColor: '#EAF0F1',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 14
  },
  resultValue: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputcontainer: {
    height: 70,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c1c1c1',
    borderWidth: 3,
    backgroundColor: '#EAF0F1',
    borderRadius: 14
  },
  input: {
    color: 'red',
    fontSize: 30
  },
  converterbuttoncontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    borderColor: '#c1c1c1',
    borderWidth: 2
  },
  converterbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74B9FF',
    borderColor: '#c1c1c1',
    height: 100,
    borderWidth: 2,
    width: '33.3%',
    borderRadius: 14
  },
  converterbuttontext: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
