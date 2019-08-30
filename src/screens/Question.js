import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Image, Linking} from 'react-native';
import {headerStyles as styles} from 'C:/DailyWords/src/styles.js';
import { 
    AdMobBanner, 
    AdMobInterstitial, 
    PublisherBanner,
    AdMobRewarded
  } from 'react-native-admob'

class Question extends React.Component{
    
    render (){
        return(
            <View style={styles.backContainer}>
                <ImageBackground
                style={styles.backContainer}
                source={require ('C:/DailyWords/src/assets/back.jpg')} >

                </ImageBackground>
                <View style={styles.questionContainer}>
                <Text style={styles.questionText}>*Bilgilendirme*</Text>
                <Text style={styles.questionText}>Uygulamanın tüm hakkı leacofapp'e aittir.</Text>
                <Text style={styles.questionText}>Kopyalanması, değiştirilerek yayınlanması tespit edilir.</Text>
                <Text style={styles.questionText}>Telif hakları ile ilgili bir problemde iletişime geçiniz.</Text>
                <Text style={styles.questionText}>Bilgi ve önerileriniz için Mail atabilirsiniz.</Text>
                <Text style={styles.questionText}>Yeni sözler için bize destek olabilirsiniz.</Text>
                <Text style={styles.questionText}>(Mail için butona tıklayınız.)</Text>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => Linking.openURL('mailto:leacofapp@gmail.com')
                    .catch(err => console.error('An error occurred', err))}>
                    
                    <View style={styles.mailCont}> 
                    <Text style={styles.questionText}>Click to Mail</Text>    
                        <Image
                        source={require ('C:/DailyWords/src/assets/email.png')}
                        style={styles.mailButton}
                        />
                        </View>
                    </TouchableOpacity>
                    <AdMobBanner
                    adSize="smartBannerPortrait"
                    adUnitID="ca-app-pub-8687587439443765/7853214370"
                    testDevices={["EMULATOR"]}
                    onAdFailedToLoad={error => console.error(error)}
                    />
                </View>
            </View>
        );
    }
}
export default Question;
