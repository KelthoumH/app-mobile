// // creer un compenent 
import React from 'react'

// // importer les composents react native

import{ StyleSheet, View, Button, TextInput, FlatList, Text, Image, TouchableOpacity } from 'react-native'

class Hobby extends React.Component{
    //   // methode obligatoire
        render(){
            return(
            
    
                <View style={styles.container}>
             <Text>hobby</Text>
                     
                </View>
             
                
            );
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
           
        },

    });
    
    
    export default Hobby