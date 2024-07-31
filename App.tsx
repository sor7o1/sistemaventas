/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  // Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ThemeProvider, useTheme} from './ThemeContext';
// import Switch from './switch/Index';

function NavBarButtons(): React.JSX.Element {
  return (
    <View>
      <Text style={styles.nav}>Left</Text>
      <Text style={styles.nav}>Right</Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const {theme, toggleTheme} = useTheme();
  // const isDarkMode = theme === 'dark';

  const _isDarkMode = theme === 'dark';

  const backgroundstyle = {
    backgroundColor: _isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.safeArea,backgroundstyle.backgroundColor]}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundstyle}>
        <View style={styles.header}>
          <Text
            style={[
              styles.nav,
              {color: _isDarkMode ? Colors.white : Colors.black},
            ]}>
            Header
          </Text>
        </View>
      </ScrollView>
      {/* <NavBarButtons></NavBarButtons> */}
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={theme ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={_isDarkMode}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  nav: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchContainer: {
    position: 'absolute',
top:35,
    width: '100%',
    alignItems: 'flex-end',
  },
});

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
