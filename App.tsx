import React from 'react';
import {StatusBar, useColorScheme, View, SafeAreaView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import GameHome from './src/screens/HomeScreen';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.dark : Colors.lighter,
    flex: 1,
  };
  return (
	  <View style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? Colors.dark : Colors.lighter} />
			  <GameHome/>
    </View>
  );
};
export default App;