import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Button,
  Container,
  Content,
  Header,
  Body,
  Title,
  Text,
  Card,
  H3,
  H1,
} from 'native-base';

import Icons from './components/Icons';
import Snackbar from 'react-native-snackbar';

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');

  const itemArray = new Array(9).fill('empty');

  const changeItem = (itemNumber) => {};

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage('');
    itemArray.fill('empty', 0, 9);
    console.log(itemArray);
  };

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
          {itemArray.map((item, index) => (
            <TouchableOpacity style={styles.box} key={index}>
              <Card style={styles.card}>
                <Icons />
              </Card>
            </TouchableOpacity>
          ))}
        </View>
        {winMessage ? (
          <View>
            <H1 style={styles.message}>{winMessage}</H1>
            <Button onPress={reloadGame} primary rounded block>
              <Text>Reload Game</Text>
            </Button>
          </View>
        ) : (
          <H3 style={styles.message}>{isCross ? 'Cross' : 'Circle'} turns</H3>
        )}
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
    marginVertical: 10,
  },
});
