import React from 'react';
import {View, Text, ImageBackground,StatusBar, TouchableOpacity, Image, Linking} from 'react-native';
import {headerStyles as styles} from 'C:/DailyWords/src/styles.js';
import { 
    AdMobBanner, 
    AdMobInterstitial, 
    PublisherBanner,
    AdMobRewarded
  } from 'react-native-admob'

class Question extends React.Component{
    componentDidMount(){
        // Display an interstitial
        AdMobInterstitial.setAdUnitID('ca-app-pub-8687587439443765/5572388169');
        AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
        AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
      }
    
    render (){
        return(
            <View style={styles.backContainer}>
                <StatusBar backgroundColor="#a3e4d7" barStyle="light-content" />
                <ImageBackground
                style={styles.backContainer}
                source={require ('C:/DailyWords/src/assets/images/back.jpg')} >

                </ImageBackground>                
                <View style={styles.questionContainer}>
                <View style={styles.backButtonQuestion}>
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
                <Text style={styles.questionText}>*Bilgilendirme*</Text>
                <Text style={styles.questionText}>Uygulamanın tüm hakkı leacofapp'e aittir.</Text>
                <Text style={styles.questionText}>Kopyalanması, değiştirilerek yayınlanması tespit edilir.</Text>
                <Text style={styles.questionText}>Telif hakları ile ilgili bir problemde iletişime geçiniz.</Text>
                <Text style={styles.questionText}>Bilgi ve önerileriniz için Mail atabilirsiniz.</Text>
                <Text style={styles.questionText}>Yeni sözler için bize destek olabilirsiniz.</Text>
               
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => Linking.openURL('mailto:leacofapp@gmail.com')
                    .catch(err => console.error('An error occurred', err))}>
                    
                    <View style={styles.mailCont}> 
                    <Text style={styles.questionText}>(Mail için butona tıklayınız.)</Text>
                    <Text style={styles.questionText}>Click to Mail</Text>    
                        <Image
                        source={require ('C:/DailyWords/src/assets/images/email.png')}
                        style={styles.mailButton}
                        />
                        </View>
                    </TouchableOpacity>
              </View>
            </View>
        );
    }
}
export default Question;
