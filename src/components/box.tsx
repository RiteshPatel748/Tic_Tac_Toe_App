import React, {useEffect, useState } from 'react';
import {ActivityIndicator, Dimensions,ScrollView,StyleSheet,Text, TouchableOpacity, View,} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const Box =({no,chance,winner,box}) =>{
    const {width,height} =Dimensions.get('screen');
    const [isxChance,setIsxChance]=chance;
    const [boxno,setBoxno]=box;
    const player=isxChance? 'x':'o';
// console.log(isxChance);
// console.log(boxno[no]);

// console.log(no);
     const check=()=>{
        if(boxno[no] === null && winner===null){
       setBoxno((p)=>{p[no]=player 
        return p})
        setIsxChance((P)=>{
            return !P})
    }
     }

     return(
        <TouchableOpacity onPress={check}>
        <View style={{width:width*.2,height:width*.2,margin:10,backgroundColor:'#0f91d7',borderRadius:10,justifyContent:'center',}}>
            {boxno[no]!==null?boxno[no]==='x'?(<Feather name='x' size={width*.18} color='#000' style={{alignSelf:'center'}}/>):
            (<Feather name='circle' size={width*.15} color='#10e557' style={{alignSelf:'center',}}/>):<></>}
        </View>
        </TouchableOpacity>
     )
}
export default Box;