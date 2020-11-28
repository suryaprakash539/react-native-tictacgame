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
const itemArray = new Array(9).fill('empty');

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');

  const changeItem = (itemNumber) => {
    // console.log(itemArray);
    // console.log(itemNumber, 'surya');
    if (winMessage) {
      return Snackbar.show({
        text: winMessage,
        backgroundColor: '#000',
        textColor: '#FFF',
      });
    }

    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'position already filled',
        backgroundColor: 'red',
        textColor: 'white',
      });
    }

    checkIsWinner();
  };

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage('');
    itemArray.fill('empty', 0, 9);
    // console.log(itemArray);
  };

  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== 'empty'
    )
      setWinMessage(`${itemArray[0]} won`);
    else if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== 'empty'
    )
      setWinMessage(`${itemArray[3]} won`);
    else if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== 'empty'
    )
      setWinMessage(`${itemArray[6]} won`);
    else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== 'empty'
    )
      setWinMessage(`${itemArray[0]} won`);
    else if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== 'empty'
    )
      setWinMessage(`${itemArray[2]} won`);
    else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== 'empty'
    )
      setWinMessage(`${itemArray[0]} won`);
    else if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== 'empty'
    )
      setWinMessage(`${itemArray[1]} won`);
    else if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== 'empty'
    )
      setWinMessage(`${itemArray[2]} won`);
  };

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
            <TouchableOpacity
              style={styles.box}
              key={index}
              onPress={() => changeItem(index)}>
              <Card style={styles.card}>
                <Icons name={item} />
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
