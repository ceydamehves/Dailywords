import {StyleSheet,Dimensions} from 'react-native';

export const headerStyles = StyleSheet.create({

    backContainer: {
        backgroundColor: 'rgba(80, 196, 199, 0.24)',
        position: 'absolute',
    
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 1,
    },
    text: {
        fontSize: 62,     
        padding: 20,
        borderRadius: 45,
        alignSelf: 'center',
        fontFamily: 'verdana',
        fontWeight: 'bold',
        position: 'absolute',
        textShadowColor: '#8d8484',
        textShadowOffset: { width: 3, height: 0 },
        textShadowRadius: 6,
        color: '#50c4c7',  
    },
    questionContainer: {
      backgroundColor: 'rgba(171, 184, 206,0.5)',
      borderRadius: 90,
      width: Dimensions.get('window').width * 1,
      height: Dimensions.get('window').height * 0.97,
      borderRadius: 30,
      borderColor: '#8d8484',
      
      borderWidth: 5,   
      alignItems: 'center',

      justifyContent: 'center',
    },
    questionText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#0489B1',  
      backgroundColor: 'rgba(171, 184, 206,0.7)',
      padding: 5,
      borderRadius: 35,
      alignSelf: 'center',
      fontFamily: 'verdana',
      borderRadius: 30,
      borderColor: '#8d8484',
      
      borderWidth: 2,  
    },
    buttonContainer:{
        alignItems:'center',
    },
    firstButton: {
        position: 'absolute',
        top: 108,
        width: 270,
        height: 140,
        borderRadius: 30,
        borderColor: '#8d8484',
        
        borderWidth: 5,
        backgroundColor: 'rgba(129, 207, 224,0.6)',
        
      },
      secondButton: {
        position: 'absolute',
        top: 301,
        width: 270,
        height: 140,
        borderRadius: 30,
        borderColor: '#8d8484',
        
        borderWidth: 5,
        backgroundColor: 'rgba(129, 207, 224,0.6)',
        
      },
      TR: {
        position: 'absolute',
        top: 94,
        left: 40,
        width: 75,
        height: 55,
        borderRadius: 10,
        borderColor: '#707070',
        
        borderWidth: 4,
      },
      UK: {
        position: 'absolute',
        top: 285,
        left: 40,
        width: 75,
        height: 55,
        borderRadius: 10,
        borderColor: '#707070',
        
        borderWidth: 4,
      },
      PageText: {
        fontSize: 50,     
        padding: 20,
        borderRadius: 45,
        justifyContent: 'center',
        fontFamily: 'verdana',
        fontWeight: 'bold',
        position: 'absolute',
        textShadowColor: '#50c4c7',
        textShadowOffset: { width: 3, height: 0 },
        textShadowRadius: 6,
        color: '#707070',  
    },
      buttonsContainer:{
        position: 'absolute',
        top: 502,
        left: Dimensions.get('window').width * 0.16,
        
        alignItems: 'center',
        width: 270,
        height: 90,
        borderRadius: 30,
        borderColor: '#8d8484',
        
        borderWidth: 5,  
        backgroundColor: 'rgba(129, 207, 224,0.6)',
        borderRadius: 20,
       
        flexDirection: 'row',
        justifyContent: 'space-around',
            
          
    },
      Button: {
        
        borderRadius: 20,
        padding: 30,
        borderRadius: 22,
        borderColor: '#50c4c7',
        
      },
      imgButton: {
        width: Dimensions.get('window').width * 0.19,
        height: Dimensions.get('window').width * 0.18
      },
      mailButton: {
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.19,
        height: Dimensions.get('window').width * 0.18
      },
      mailCont: {
        alignItems:'center',
        
      },
      flagContainer: {
        position: 'absolute',
        top: 92,
        left: 90,
        width: 219,
        height: 115,
        borderRadius: 30,
        borderColor: '#50c4c7',
        
        borderWidth: 5,
        backgroundColor: 'rgba(171, 184, 206,0.7)',
      },
      flag: {
        position: 'absolute',
        top: 17,
        left: 58,
        width: 90,
        height: 62,
        shadowColor: '#50c4c7',
        shadowOffset: { width: 5, height: 3 },
        shadowRadius: 6,
        borderRadius: 10,
        borderColor: '#707070',
        borderWidth: 3,
  },
  pageContainer: {
    
    backgroundColor: 'rgba(171, 184, 206,0.2)',
    width: Dimensions.get('window').width * 0.98,
    height: Dimensions.get('window').width * 1.4,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 145,
    left: 5,
  
    borderRadius: 30,
    borderColor: '#50c4c7',
    
    borderWidth: 7,
  },
  Ads: {
    justifyContent:'flex-end',
    width: Dimensions.get('window').width * 1.5,
        height: Dimensions.get('window').height * 0.99

  }
    



});