import React from 'react';
import { StyleSheet, Text, View,Image ,Button} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import App from './App';





const styles = StyleSheet.create({
    slides:{
        
        // backgroundColor:'blue',
       
        marginTop:60,
        
        alignItems:'center',
        
          justifyContent:'center',
        

    },
    title:{
        padding:20,
        textAlign:'center',
        fontSize:35,
        textAlign:'center',
        


    },
    text:{
        padding:40,
        
        textAlign:'center',
        fontSize:25,
        textAlign:'center',

    },
    img:{
        textAlign:'center',
        // position:'absolute',
        
    //    alignItems:'center',
    //    alignContent:'center',
    //    justifyContent:'center',

        height:300,
        width:300,
       
    },
    swipe:{
        color:'black',
        
    }
})

const slides = [
    {
        key: 1,
        title: 'Welcome to ToDo App',
        text: 'Where you can Add your Daily Tasks..',
        image: require('./Assets/screen1.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'One Tap Completion!',
        text: 'And Complete those Tasks with one Tap!!',
        image: require('./Assets/screen2.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        title: 'What you wating For, Get Started !',
        text: 'Add your first Task by clicking Down!',
        image: require('./Assets/screen3.png'),
        backgroundColor: '#22bcb5',
    }
];

export default class Apps extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showRealApp: false
        }
    }
    _renderItem = ({ item }) => {
        return (
            <View 
            style={styles.slides}
            >
                <Text
                style={styles.title}
                >{item.title}</Text>
                <Image style={styles.img} source={item.image} />
                <Text 
                style={styles.text}
                >{item.text}</Text>
            </View>
        );
    }
    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
    }
    render() {
        if (this.state.showRealApp) {
            return <App />;
        } else {
            return (
            <AppIntroSlider 
             activeDotStyle= {{width:30,backgroundColor:'grey'}}
    dotStyle= {{width:20,backgroundColor:'green'}}
            renderItem={this._renderItem} 
            data={slides} onDone={this._onDone} />);
        }
    }
}