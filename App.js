import React from 'react';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return <></>;
};
export default App;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },

  box: {
    width: '33%',
    marginBottom: 6,
  },

  card: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },

  message: {
    textAlign: 'center',
    backgroundColor: '#4652B3',
    textTransform: 'uppercase',
    color: '#FFF',
    marginTop: 20,
    paddingVertical: 10,
  },
});
