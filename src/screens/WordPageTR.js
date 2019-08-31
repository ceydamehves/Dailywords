import React from 'react';
import {View, Text,ScrollView, TouchableOpacity, Image,Dimensions, ImageBackground, Platform, Linking} from 'react-native';
import {headerStyles as styles} from 'C:/DailyWords/src/styles.js';
const database = require('../assets/db.json');
import { 
    AdMobBanner, 
    
  } from 'react-native-admob'


class WordPageTR extends React.Component{
    constructor (props) {
        super (props)
        date = new Date();
        this.state = {
            tr: database.months[date.getMonth()+1][date.getDate()]["tr"],
        }
    }
    render (){
       
        return(
            <View style={styles.backContainer}>
                <ImageBackground
                style={styles.backContainer}
                source={require ('C:/DailyWords/src/assets/back.jpg')} >

                </ImageBackground>
                <View style={styles.pageContainer}>
                <Text style={styles.PageText}  adjustsFontSizeToFit
              numberOfLines={12} >{this.state.tr}</Text>
            </View>
                <View style={styles.flagContainer}>
                <Image
                        source={require ('C:/DailyWords/src/assets/tr.png')}
                        style={styles.flag}
                        />
                </View>
                <View style={styles.Ads}>
                   <AdMobBanner
                    adSize="smartBanner"
                    adUnitID="ca-app-pub-8687587439443765/7853214370"
                    testDevices={["EMULATOR"]}
                    onAdFailedToLoad={error => console.error(error)}
                    />
                   </View>
                    
            </View>

          
        );
    }
}
export default WordPageTR;



