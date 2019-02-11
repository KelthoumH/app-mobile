// // creer un compenent 
import React from 'react'
import  {LinearGradient} from 'expo'


// // importer les composents react native

import{ StyleSheet, View, Button, TextInput, FlatList, Text, Image, TouchableOpacity} from 'react-native'


class Parent extends React.Component{
 
        constructor(props) {
            super(props);

            this.state = {
                article : null
            }
        }

        componentDidMount() {
            fetch('http://igm.univ-mlv.fr/~gambette/ENSIUT/monique.pantel/apiAllocine.php?id=22')
                .then((response) => response.json())
                .then((responseJson) => {

                    // Sanitize articleUrl
                    // responseJson.urlAffiche = responseJson.urlAffiche.replace(/\\/g, '');
                    this.setState({ article: responseJson });
                })
                .catch((error) => {
                    console.error(error);
                })
        }

        render(){
            
            return (

                <View style={{flex: 1}}>

            

                <LinearGradient
              colors={['#96a1fc', '#6fa9fe']}
              style={{ padding: 15, alignItems: 'center', borderRadius: 5, flex: 1, width: '100%' }}>
              </LinearGradient>



                <View style={{flex: 4, flexDirection: 'row', backgroundColor: '#f2f3fc', flexWrap: "wrap", justifyContent: "space-around"}}>

                    <View>
                    {this.state.article && <Image source={{uri: this.state.article.urlAffiche}}   style={{width: 200, height: 400}} />}
                    </View>


                 </View>
            </View>
            )
        }
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
           
        },

    });
    
    
    export default Parent