import React from 'react';
import { View, StyleSheet,} from 'react-native';
export default function headerApp() {
    return
    <View>
    <View 
    style={styles.cont}>
    <Text> Weather App</Text>
    </View>
    <View style={styles.foter}>
      <Text>ENG ABDALLAH HARARA</Text>
    </View>
    </View>
}
const styles = StyleSheet.create({
    cont:{
    width:500,
    height:50,backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:100,
    fontWeight:800
  }
});