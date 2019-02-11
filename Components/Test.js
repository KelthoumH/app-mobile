// // creer un compenent 
import React from 'react'

// // importer les composents react native

import{ StyleSheet, View, Button, TextInput, FlatList, Text, Image } from 'react-native'


// // creer une class qui herite  // component -> element graphique 
class Test extends React.Component{
//   // methode obligatoire
    render(){
        return(
            
            <View style={{flex: 1}}>

            
          </View>
            
        );
    }
}
// style a part + externalisation avec styleshett (API)
const styles = StyleSheet.create({

    child_container:{
        borderRadius: 10,
        width: 150,
         height: 150,
          backgroundColor: 'white',
          marginTop: 50,
    },
})

// // exporter le component

export default Test



// //              <View style={styles.main_container}>
// //                 <TextInput style={styles.TextInput} placeholder="Titre du film"/>
// //                 <Button style={{height: 50}} title="Rechercher" onPress={() => this._loadfilms()}/>
// //                 <FlatList
// //                     data={films}
// //                     keyExtractor={(item) => item.id.toString()}
// //                     renderItem={({item}) => <FilmItem/>} 
// // />
// //              </View>


