import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Box from '../../components/box';

const GameHome = () => {
  const [bolean,setBolean]=useState(false)
  const [player1,setPlayer1]=useState('')
  const [player2,setPlayer2]=useState('')
  const {width, height} = Dimensions.get('screen');
  const [isxChance, setIsxChance] = useState(true);
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(null);
  const [boxno, setBoxno] = useState(Array(9).fill(null));
  const player = isxChance ? player1 : player2;
  // console.log(boxno);

  const box = no => {
    return (
      <Box
        no={no}
        chance={[isxChance, setIsxChance]}
        winner={winner}
        box={[boxno, setBoxno]}
      />
    );
  };
  const CheckWinner = () => {
    const arr = [
      [0, 1, 2],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
      if (
        boxno[arr[i][0]] !== null &&
        boxno[arr[i][0]] === boxno[arr[i][1]] &&
        boxno[arr[i][0]] === boxno[arr[i][2]]
      ) {
        if (player === player1) setWinner(player2.toUpperCase());
        else setWinner(player1.toUpperCase());
        j = 1;
      }
    }
    var i = 0;
    for (i = 0; i < 9; i++) {
      if (boxno[i] == null) {
        break;
      }
    }
    if (i == 9 && j == 0) {
      setTie('DRAW');
    }
  };
  useEffect(() => {
    CheckWinner();
  }, [isxChance]);

// ****----------------------------****

const callPlay=()=>
{
  if(!player1 || !player2)
  {return (Alert.alert("Enter Player Name"))}
  if(player1===player2)
  {return (Alert.alert("Please enter different name"))}
  setBolean(true)
}

const gameHome=()=>{
  return(
    <>
      <View style={{borderColor: '#fff', flexDirection: 'row',marginBottom:10,marginHorizontal:40}}>
        {tie == null &&
          (winner == null ? (
            <Text style={{fontSize: 25, color: '#242e2d', fontWeight: 'bold'}}>
              {player.toUpperCase()} CHANCE
            </Text>
          ) : (
            <Text style={{fontSize: 25, color: '#de7635', fontWeight: 'bold'}}>
              {winner} WIN
            </Text>
          ))}
        {tie == 'DRAW' && (
          <Text style={{fontSize: 25, color: '#cc0041', fontWeight: 'bold'}}>
            DRAW
          </Text>
        )}
        <FontAwesome
          name="refresh"
          size={width * 0.07}
          color="#242e2d"
          style={{marginLeft: 20, top: 4}}
          onPress={() => {
            setIsxChance(true);
            setWinner(null);
            setBoxno(Array(9).fill(null));
            setTie(null);
          }}
        />
      </View>
      <View style={{backgroundColor: '#000', borderRadius: 20}}>
        <View style={{borderColor: '#fff', flexDirection: 'row'}}>
          {box(0)}
          {box(1)}
          {box(2)}
        </View>
        <View style={{borderColor: '#fff', flexDirection: 'row'}}>
          {box(3)}
          {box(4)}
          {box(5)}
        </View>
        <View style={{borderColor: '#fff', flexDirection: 'row'}}>
          {box(6)}
          {box(7)}
          {box(8)}
        </View>
      </View>
      </>
  )
}

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#10e5d0',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      
    {!bolean?
(      <View style={{borderColor: '#fff',}} >
        <Text style={styles.text}>
        Player1
        </Text>
        <View style={[styles.ellipseGroup, styles.vectorParentSpaceBlock]}> 
          <TextInput
            style={styles.input}
            value={player1}
            placeholder="Enter Name"
            keyboardType="default"
            placeholderTextColor="#fff"
            onChangeText={setPlayer1}
          />
        </View>
        <Text style={styles.text}>
        Player2
        </Text>
        <View style={[styles.ellipseGroup, styles.vectorParentSpaceBlock]}> 
          <TextInput
            style={styles.input}
            value={player2}
            placeholder="Enter Name"
            keyboardType="default"
            placeholderTextColor="#fff"
            onChangeText={setPlayer2}
          />
        </View>
          <TouchableOpacity style={styles.button} onPress={callPlay}>
            <Text style={{fontSize: 24, color: '#242e2d', fontWeight: 'bold',textAlign:'center'}}>
              Play
            </Text>
          </TouchableOpacity>
      </View>):
      (gameHome())
    }
    <Text style={{fontSize: 6, color: '#242e2d', fontWeight: 'bold',top:'-61%',left:'-42%'}}>
        Ritesh Patel
    </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  ellipseGroup: {
    width:250,
    paddingHorizontal: 10,
    height: 40,
    marginTop: 5,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#35455d",
    alignSelf: "stretch",
  },
  vectorParentSpaceBlock: {
    marginTop: 5,
    paddingVertical: 0,
    // flexDirection: "row",
  },
  button:{
    backgroundColor:'#0da192',
    justifyContent:'center',
    marginTop:40,
    borderWidth:1,
    borderRadius:10,
    alignSelf:'center',
    paddingHorizontal:70,
    paddingVertical:3
  },
  input:{
    marginLeft: 10,
    width:'100%',
    alignSelf: "stretch",
    flex: 1,
    color:'#fff'
  },
  text:{
    fontSize: 18, 
    color: '#242e2d', 
    fontWeight: 'bold'
  },
})

export default GameHome;
