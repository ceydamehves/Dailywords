import React from 'react';
import {View, Text,StatusBar, TouchableOpacity, Image,Dimensions, ImageBackground} from 'react-native';
import Button from 'react-native';
import {headerStyles as styles} from 'C:/DailyWords/src/styles.js';
const database = require('../assets/db.json');
import { 
    AdMobBanner, 
    
  } from 'react-native-admob'

class WordPageEN extends React.Component{
    constructor (props) {
        super (props)
        date = new Date();    
        this.state = {
            en: database.months[date.getMonth()+1][date.getDate()]["en"],
        }
    }
    render (){
       
        return(
                  
            <View style={styles.backContainer}>
                
                <ImageBackground
                style={styles.backContainer}
                source={require ('C:/DailyWords/src/assets/images/back.jpg')} >

                </ImageBackground>
                <View>
               <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => {
                        this.props.navigation.navigate ('HomeScreen')           
                    }}>
                        <Image
                        source={require ('C:/DailyWords/src/assets/images/ceyda_back.png')}
                        style={styles.backButtonimg}
                        />
                        
                    </TouchableOpacity>
                </View>
                               
                <StatusBar backgroundColor="#a3e4d7" barStyle="light-content" />    
                
                <View style={styles.pageContainer}>    
                                
                <Text style={styles.PageText}  adjustsFontSizeToFit
                    numberOfLines={12} >{this.state.en}
                </Text>
                </View>

                <View style={styles.flagContainer}>
                <Image
                        source={require ('C:/DailyWords/src/assets/images/uk.png')}
                        style={styles.flag}
                        />
                </View>
                <View style={styles.Ads}>
                   <AdMobBanner
                    adSize="smartBanner"
                    adUnitID="ca-app-pub-8687587439443765/7853214370"
                    testDevices={["EMULATOR"]}
                    onAdFailedToLoad={error => console.log(error)}
                    />
                   </View>
                    
            </View>


          
        );
    }
}
export default WordPageEN;



