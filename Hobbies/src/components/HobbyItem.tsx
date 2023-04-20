import React from 'react';
import { View, Text, Platform, StyleSheet, Pressable, Image } from "react-native";
import { Hobby } from '../model/classes/Hobby';

const Styles = StyleSheet.create({
    mainContainer: {
        margin:16,
        borderRadius:8,
        overflow: Platform.OS === 'android' ? 'hidden': 'visible',
        backgroundColor: 'white',
        elevation:4,
        shadowColor: 'black',
        shadowOpacity:0.25,
        shadowOffset:{ width:0, height:2},
        shadowRadius:8,
    },
    ripple:{
        color: '#ccc'
    },
    elementPressed:{
        opacity:0.1,
    },
    image:{
        width:100,
        height:100,
        justifyContent:'center',
        resizeMode:'stretch',
    },
    innerContainer:{
        borderRadius:8,
        overflow: 'hidden',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8,
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:8,
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12,
    },
    characteristics:{
        padding:5,
        margin:16,
        borderColor:'black',
        backgroundColor:'#ff0',
        borderRadius:5,
        borderWidth:5
    }
});

const HobbyItem = ({title, imageURL, characteristics}: Hobby) => {
    return (
      <View style={Styles.mainContainer}>
        <Pressable
            style={({pressed})=>(pressed ? Styles.elementPressed:null)}
            android_ripple={Styles.ripple}>
            <View style={Styles.innerContainer}>
                <View style={{alignContent:'center',alignItems:'center'}}>
                    <Image source={{uri: imageURL}} style={Styles.image}/>
                    <Text style={Styles.title}>{title}</Text>
                    
                    <Text style={Styles.characteristics}>{characteristics}</Text>
                </View>
            </View>
        </Pressable>
      </View>
    )
  }

  export default HobbyItem
  