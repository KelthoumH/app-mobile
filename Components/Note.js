// // creer un compenent 
import React from 'react'

// // importer les composents react native

import{ StyleSheet, View, Button, TextInput, FlatList, Text, Image, TouchableOpacity } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'


// // creer une class qui herite  // component -> element graphique 
class Note extends React.Component{
  // methode obligatoire

  constructor(props){
      super(props)
      this.state={
        userName: '',
        userEmail: '',
        userPassword: '',
        isVisible: false
      }
  }

  userRegister = () => {
    //   alert('ok');
    const {userName} = this.state;
    const {userEmail} = this.state;
    const {userPassword} = this.state;

    fetch('link',{
        method: POST,
        header:{
            'Accept': 'application/Json',
            'Content-type': 'application/Json'
        },
        body:JSON.stringify({
            name: userName,
            email: userEmail,
            password: userPassword,
        })
    })

    .then((response) => response.json())
    .then((responseJson) =>{
        alert('responseJson')
    })
    .catch((error) => {
        console.error(error);
    });
  }

// constructor(){
//     super()
//     this.state = {
//         isVisible: false
//     }
// }

handlePicker = () => {
    this.setState({
        isVisible: false
    })
}

showPicker = () => {
    this.setState({
        isVisible: true
    })
}

hidePicker = () => {
    this.setState({
        isVisible: false
    })
}


    render(){
        return(
 
            <View style={styles.container}>
                <Image
                style={styles.img}
                source={require('../img/login.jpg')}
                />

                <Image
                style={styles.logo}
                source={require('../img/logo.png')}
                />
                

                <TextInput
                    placeholder="Prénom"
                    placeholderTextColor="white"
                    TextInput="rgba(255,255,255,0.5"
                    style={styles.input}
                    onChangeText= {userName => thisState({userName})}
                    />
                  <TextInput
                    placeholder="E-mail"
                    placeholderTextColor="white"
                    TextInput="rgba(255,255,255,0.5"
                    style={styles.input}
                    onChangeText= {userEmail => thisState({userEmail})}
                    />

                   <TouchableOpacity style={styles.input} onPress={this.showPicker}>
                             <Text>Date du terme</Text>
                   </TouchableOpacity>



                        <DateTimePicker
                        isVisible={this.state.isVisible}
                        onConfirm={this.handlePicker}
                        onCancel={this.hidePicker}
                        />
                    

                    <TextInput
                    placeholder="Mot de passe"
                    placeholderTextColor="white"
                    TextInput="rgba(255,255,255,0.5"
                    style={styles.input}
                    onChangeText= {userPassword => thisState({userPassword})}
                    />
                    

                    {/* <TextInput
                    placeholder="Confirmer le mot de passe"
                    placeholderTextColor="white"
                    TextInput="rgba(255,255,255,0.5"
                    style={styles.input}
                    /> */}

                    

                <TouchableOpacity style={styles.login} onPress={this.userRegister}>
                
                    <Text style={styles.button}>S'inscrire</Text>
                </TouchableOpacity>

                     
                </View>
             
                
            );
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
           
        },
        input: {
          
            borderRadius:10,
            color: 'white',
            textAlign: 'center',
            height: 50,
            padding: 10,
            marginBottom: 20,
            marginTop: 20,
            marginLeft: 100,
            marginRight: 100,
            backgroundColor: 'rgba(255,255,255,0.2)',
            paddingHorizontal: 10

        },
        login: {
            
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius:10,
            marginLeft: 80,
            marginRight: 80
        },

        button: {
            height: 50,
            textAlign: 'center',
            color: 'white'
        },

        img: {
            flex: 1,
            width: '100%',
            height: '100%',
            position: 'absolute',

        },
        logo: {
            width: 250,
            height: 250,
            marginLeft: 110,
        },
        forget: {
            textAlign: 'center',
            color: 'white',

        },
    });

// // exporter le component

export default Note

