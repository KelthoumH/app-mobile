// // creer un compenent 
import React from 'react'
import  {LinearGradient} from 'expo'


// // importer les composents react native

import{ StyleSheet, View, Button, TextInput, FlatList, Text, Image, TouchableOpacity } from 'react-native'


// // creer une class qui herite  // component -> element graphique 
class Tips extends React.Component{
//   // methode obligatoire
    render(){
        return(
            
            <View style={{flex: 1}}>

            <LinearGradient
          colors={['#96a1fc', '#6fa9fe']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5, flex: 1, width: '100%' }}>
          </LinearGradient>
            
            <View style={{flex: 4, flexDirection: 'row', backgroundColor: '#f2f3fc', flexWrap: "wrap", justifyContent: "space-around"}}>

        
                <TouchableOpacity style={styles.child_container}  onPress={() => this.props.navigation.navigate('Parent')} >
                    <Image style={styles.img} source={require('../img/devenir.png')}/>
                    <Text style={styles.title}>DEVENIR PARENT</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.child_container} onPress={() => this.props.navigation.navigate('Confort')}>
                    <Image style={styles.img} source={require('../img/bien-etre.png')}/>
                    <Text style={styles.title}>BIEN ETRE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.child_container} onPress={() => this.props.navigation.navigate('Work')}>
                    <Image style={styles.img} source={require('../img/work.png')}/>
                    <Text style={styles.title}>GROSSESSE & TRAVAIL</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.child_container} onPress={() => this.props.navigation.navigate('Hobby')}>
                    <Image style={styles.img} source={require('../img/loisir.png')}/>
                    <Text style={styles.title}>LOISIRS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.child_container} onPress={() => this.props.navigation.navigate('Name')}>
                    <Image style={styles.img} source={require('../img/name.png')}/>
                    <Text style={styles.title}>PRENOMS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.child_container} onPress={() => this.props.navigation.navigate('Birth')}>
                    <Image style={styles.img} source={require('../img/naissance.png')}/>
                    <Text style={styles.title}>POST-NAISSANCE</Text>
                </TouchableOpacity>
             
                </View> 
               
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

    TextInput: {
        marginLeft: 5,
         marginRight: 5,
          height:50,
           borderColor: 'red',
            borderWidth: 1,
             paddingLeft: 5
    },

    img: {
        left: '20%',
        width: 70,
        height: 80,
        zIndex: 3
        
    },

    title: {
        textAlign: 'center',
        paddingTop: 20, 
        
    },
})

// exporter le component

export default Tips

