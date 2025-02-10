

import React, { useState } from 'react';
import { Switch, StyleSheet, Image,View,Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, { backgroundColor: isEnabled ? 'yellow' : 'grey' }]}>
        <Image 
          source={{
            uri: isEnabled 
              ? 'https://th.bing.com/th/id/R.83b8b86c46034cf5802aba4d2be82a0f?rik=CH%2fZFtLvC%2b5mTg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2flightbulb-clipart-transparent%2flightbulb-clipart-transparent-23.png&ehk=WmTCvgX55S1rYu6NGLthoY9c%2fTOxyV%2b41%2b57fDDX%2bjo%3d&risl=1&pid=ImgRaw&r=0' 
              : 'https://th.bing.com/th/id/R.83b8b86c46034cf5802aba4d2be82a0f?rik=CH%2fZFtLvC%2b5mTg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2flightbulb-clipart-transparent%2flightbulb-clipart-transparent-23.png&ehk=WmTCvgX55S1rYu6NGLthoY9c%2fTOxyV%2b41%2b57fDDX%2bjo%3d&risl=1&pid=ImgRaw&r=0'
          }}
          style={styles.bulb}
        />

          <Text style ={styles.text}>
                {isEnabled ? 'ON' : 'OFF'}
          </Text>
        <Switch
          trackColor={{ false: '#899076', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bulb: {
    width: 200,
    height: 200,
    marginBottom: 10,
    resizeMode: 'contain',
  
  },
  text: {
    margin:30,
  },
});

export default App;
