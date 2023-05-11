import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Box from '../../components/box';

const GameHome = () => {
  const {width, height} = Dimensions.get('screen');
  const [isxChance, setIsxChance] = useState(true);
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(null);
  const [boxno, setBoxno] = useState(Array(9).fill(null));
  const player = isxChance ? 'x' : 'o';
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
        if (player === 'x') setWinner('O');
        else setWinner('X');
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

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#10e5d0',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{borderColor: '#fff', flexDirection: 'row'}}>
        {tie == null &&
          (winner == null ? (
            <Text style={{fontSize: 50, color: '#242e2d', fontWeight: 'bold'}}>
              {player.toUpperCase()} CHANCE
            </Text>
          ) : (
            <Text style={{fontSize: 50, color: '#de7635', fontWeight: 'bold'}}>
              {winner} WIN
            </Text>
          ))}
        {tie == 'DRAW' && (
          <Text style={{fontSize: 50, color: '#cc0041', fontWeight: 'bold'}}>
            DRAW
          </Text>
        )}
        <FontAwesome
          name="refresh"
          size={width * 0.11}
          color="#242e2d"
          style={{marginLeft: 20, top: 10}}
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
    </View>
  );
};
export default GameHome;
