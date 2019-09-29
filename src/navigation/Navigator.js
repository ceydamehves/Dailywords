import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen.js";
import WordPageTR from "../screens/WordPageTR.js";
import WordPageEN from "../screens/WordPageEN.js";
import Question from "../screens/Question.js";

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  }, 
  WordPageTR:{
    screen: WordPageTR
  },
  WordPageEN:{
    screen: WordPageEN
  },
  Question:{
    screen: Question
  },
},
{
  headerMode: 'none', 
  navigationOptions: {
  headerVisible: false,
}});

export default createAppContainer(AppNavigator);