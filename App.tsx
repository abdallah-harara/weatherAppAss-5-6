import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator,ImageBackground } from 'react-native';
import Weather from './components/Weather';
import SearchBar from './components/SearchBar';
import { sorry } from './assets/backgroundImages/index';

const API_KEY = "46a9246bebba16d42b36aac3fc3ba8af";


export default function App() {

    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(true);

    async function fetchWeatherData(cityName:string) {
        setLoaded(false);
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
        try {
            const response = await fetch(API);
            if(response.status == 200) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                setWeatherData(null);
            }
            setLoaded(true);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchWeatherData('San Francisco');
    }, [])
    

    if(!loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator color='gray'  size={36} />
                
            </View>

        )
    }

    else if(weatherData === null) {
        return (
            <View style={styles.container}>
                <View style={styles.cont}>
                <Text> Weather App</Text>
                </View>
                <SearchBar fetchWeatherData={fetchWeatherData}/>
                <Text style={styles.primaryText}>Type the name correctly!!</Text>
                <ImageBackground 
                source={sorry}
                style={styles.backgroundImg}
                resizeMode='cover'
            >


            </ImageBackground>
            <View style={styles.foter}>
                <Text>ENG ABDALLAH HARARA</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData}  />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont:{
    width:500,
    height:60,backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#eee',
    fontSize:'100',
    fontWeight:'bold'
  },
  primaryText: {
      margin: 20,
      fontSize: 28
  },
  backgroundImg: {
        flex: 1,
        width: 350,
        margin:20,
        height:350,
    },
     foter:{
        width:300, height:50,
        marginTop:-15,paddingTop:20,
        alignItems: 'center',
    justifyContent: 'center',
    background: 'gray'
    }
});
