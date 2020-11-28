import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Container, Content, Header, Body, Title} from 'native-base';

import Icons from './components/Icons';
import Snackbar from 'react-native-snackbar';

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');
  const changeItem = (itemNumber) => {};

  const reloadGame = () => {};

  const checkIsWinner = () => {};

  return (
    <Container style={{backgroundColor: '333945', padding: 5}}>
      <Header>
        <Body>
          <Title>Surya's TicTacToe Game</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.grid}>
          <Icons />
        </View>
      </Content>
    </Container>
  );
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
