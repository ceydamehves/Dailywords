import React from 'react';
import {View, Text, TouchableOpacity, Image,Dimensions, ImageBackground, Platform, Linking} from 'react-native';
import {headerStyles as styles} from 'C:/DailyWords/src/styles.js';
import { 
    AdMobBanner, 
    
  } from 'react-native-admob'

class HomeScreen extends React.Component{
    render (){
       
        return(
           <View style={styles.backContainer}>
             
               <ImageBackground
                style={styles.backContainer}
                source={require ('C:/DailyWords/src/assets/back.jpg')} >

                </ImageBackground>
               <View style={styles.buttonContainer}>
               <TouchableOpacity
                    style={styles.firstButton}
                    onPress={() => {
                        this.props.navigation.navigate ('WordPageTR')           
                    }}>
                        <Text style={styles.text}>Türkçe</Text>
                        
                    </TouchableOpacity>
                    <Image
                        source={require ('C:/DailyWords/src/assets/tr.png')}
                        style={styles.TR}
                        />
                    
                <TouchableOpacity
                    style={styles.secondButton}
                    onPress={() => {
                        this.props.navigation.navigate ('WordPageEN')              
                    }}>
                        <Text style={styles.text}>English</Text>
                    </TouchableOpacity>
                    <Image
                        source={require ('C:/DailyWords/src/assets/uk.png')}
                        style={styles.UK}
                        />
                </View>
                <View style={styles.buttonsContainer}>
                    
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => Linking.openURL('https://www.instagram.com/leacofapp')
                    .catch(err => console.error('An error occurred', err))}>
                        <Image
                        source={require ('C:/DailyWords/src/assets/instagram.png')}
                        style={styles.imgButton}
                        />
                    </TouchableOpacity>

                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => {
                        this.props.navigation.navigate ('Question')              
                    }}>
                        <Image
                        source={require ('C:/DailyWords/src/assets/question.png')}
                        style={styles.imgButton}
                        />
                    </TouchableOpacity>
                   
                    
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
export default HomeScreen;



