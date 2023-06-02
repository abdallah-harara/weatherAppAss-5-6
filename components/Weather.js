import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar } from 'react-native';
import SearchBar from './SearchBar';
import { haze, rainy, snow, sunny,cloudy } from '../assets/backgroundImages/index';

export default function Weather({ weatherData, fetchWeatherData }) {

    const [backgroundImage, setBackgroundImage] = useState(null);

    const { weather,
            name,
            main: { temp, humidity },
            wind: { speed }
    } = weatherData;
    const [{ main }] = weather;

    useEffect(() => {
        setBackgroundImage(getBackgroundImg(main));
    }, [weatherData])

    function getBackgroundImg(weather) {
        if(weather === 'Snow') return snow
        if(weather === 'Clear') return sunny
        if(weather === 'Rain') return rainy
        if(weather === 'Haze') return haze
        return haze;   
    }

    let textColor = backgroundImage !== snow ? 'white' : 'black'
        
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='black' />
            <ImageBackground 
                source={backgroundImage}
                style={styles.backgroundImg}
                
            >
                <View style={styles.cont}>
                <Text> Weather App</Text>
                </View>
                
                <SearchBar fetchWeatherData={fetchWeatherData} />

                <View style={{alignItems: 'center' }}>

                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold', fontSize: 46 }}>{name}</Text>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold'}}>{main}</Text>
                    <Text style={{ ...styles.headerText, color: textColor,}}>{temp} °C</Text>
                    
                </View>

                <View style={styles.extraInfo}>
                
                </View>
                <ImageBackground 
                source={cloudy}
                style={styles.backgrou}
                resizeMode='cover'
            ></ImageBackground>
             
            </ImageBackground>
            <View style={styles.foter}>
                <Text>ENG ABDALLAH HARARA</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',justifyContent: 'center',
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width,
        
    },
    cont:{
    width:415,
    height:60,backgroundColor: '#fff',
    color:'#eee',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:'bold',
    fontWeight:600
  },
    headerText: {
        fontSize: 36,
        marginTop: 10,
    },
    extraInfo: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        padding: 10
    },
    backgrou:{
        width:300,
        height:240,
        margin: 20,
        marginLeft:50
    }
    ,
    info: {
        width: Dimensions.get('screen').width/2.5,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center'
    },
    foter:{
        width:300, height:50,
        marginTop:-15,paddingTop:20,
        alignItems: 'center',
    justifyContent: 'center',
    background: 'lightgray'
    }
    
});
  