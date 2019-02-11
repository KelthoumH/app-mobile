// // creer un compenent 
import React from 'react'

// // importer les composents react native

import{ StyleSheet, View, Button, TextInput, FlatList, Text, Image, TouchableOpacity } from 'react-native'

class Calendar extends React.Component{
    //   // methode obligatoire
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
                    placeholder="e-mail"
                    placeholderTextColor="white"
                    TextInput="rgba(255,255,255,0.5"
                    style={styles.input}
                    />
                  <TextInput
                    placeholder="Mot de passe"
                    placeholderTextColor="white"
                    TextInput="rgba(255,255,255,0.5"
                    style={styles.input}
                    />

                <TouchableOpacity style={styles.login}>
                    <Text style={styles.button}>S'identifier</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forget}>
                    <Text style={styles.forget}>tu as oublié ton mot de passe? </Text>
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
            width: 400,
            height: 400,
            marginLeft: 30,
        },
        forget: {
            textAlign: 'center',
            color: 'white',

        },
    });
    
    
    export default Calendar