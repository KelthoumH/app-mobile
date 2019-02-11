import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation'
//
import Test from './Components/Test';
import Note from './Components/Note';
import Calendar from './Components/Calendar';
import Login from './Components/Login';
import Tips from './Components/Tips';
//
import Parent from './Components/Tips/Parent';
import Work from './Components/Tips/Work';
import Name from './Components/Tips/Name';
import Birth from './Components/Tips/Birth';
import Hobby from './Components/Tips/Hobby';
import Confort from './Components/Tips/Confort';





const TipsStackNavigator = createStackNavigator({
    
  Tips: {
      screen: Tips,
      navigationOptions: {
          header: null
        }
  },
  Work: {
      screen: Work,
  },
  Parent: {
      screen: Parent,
  },

  Hobby: {
      screen: Hobby,
  },
  Confort: {
      screen: Confort,
  },
  Birth: {
      screen: Birth,
  },
  Name: {
      screen: Name,
  },

  
})

// NAv du bas

const MainScreenNavigator =  createMaterialTopTabNavigator({

      Tab: {
          screen: TipsStackNavigator,
          navigationOptions: {
             tabBarIcon: () =>{
                  return <Image source={require('./img/loisir.png')}
                  style={styles.icon}/>
             }
            },
      },

      Tab2: {
          screen: Test,
          navigationOptions: {
              tabBarIcon: () =>{
                   return <Image source={require('./img/loisir.png')}
                   style={styles.icon}/>
              }
             },
      },
      Tab3: {
          screen: Note,
          navigationOptions: {
              tabBarIcon: () =>{
                   return <Image source={require('./img/loisir.png')}
                   style={styles.icon}/>
              }
             },
      },
      Tab4: {
          screen: Calendar,
          navigationOptions: {
              tabBarIcon: () =>{
                   return <Image source={require('./img/loisir.png')}
                   style={styles.icon}/>
              }
             },
      },
  },

  {
      tabBarPosition: 'bottom',
  }, 


  {
      tabBarOptions: {
          showLabel: false,
          showIcon: true,
          activeBackgroundColor: '#DDDDDD',
          inactiveBackgroundColor: '#FFFFFF'
      }
  })


const styles = StyleSheet.create({
  icon: {
      width: 30,
      height: 30
  },
});



export default MainScreenNavigator;