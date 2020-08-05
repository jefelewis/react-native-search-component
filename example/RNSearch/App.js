import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet,
  Text, TouchableOpacity
} from 'react-native';
import SearchBar from './src/UISearchBar';


const App = () => {
  const [theme, setTheme] = React.useState('LIGHT');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleTheme = () => theme === 'LIGHT' ? setTheme('DARK') : setTheme('LIGHT');
  const themeBasedContainer = [styles.container, { backgroundColor: theme === 'LIGHT' ? 'white' : 'black' }];
  const themeBasedTextStyle = [styles.textStyle, { color: theme === 'LIGHT' ? 'black' : 'white' }];

  const onChange = (e) => {
    setSearchTerm(e?.nativeEvent?.text)
  }
  const onSearchClear = () => setSearchTerm('');

  return (
    <SafeAreaView style={themeBasedContainer}>
      <Text style={themeBasedTextStyle}>Hello,World !</Text>
      <TouchableOpacity style={{ paddingVertical: 12 }} onPress={toggleTheme}>
        <Text style={[styles.textStyle, { color: '#007AFF' }]}>Toggle Theme</Text>
      </TouchableOpacity>
      <SearchBar theme={theme} onChange={onChange} onSearchClear={onSearchClear} />
      <Text style={[themeBasedTextStyle, { textAlign: 'left', paddingLeft: 16 }]}> Search Term : {searchTerm}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 10
  }
})

export default App;
