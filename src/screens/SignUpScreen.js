import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Button, TextInput, HelperText } from 'react-native-paper';

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Button
          style={styles.cardButton}
          mode="contained"
          color="#004488"
          onPress={this._signUp}
          >
          SIGN UP
        </Button>

        <Button
          style={styles.cardButton}
          mode="contained"
          color="#004488"
          onPress={this._backToSignIn}
          >
          BACK TO SIGN IN
        </Button>
      </View>
    );
  }

  _signUp = () => {
    console.log('Pressed SignUp');
    this.props.navigation.navigate('Main');
  };

  _backToSignIn = () => {
    console.log('Pressed Back to SignIn');
    this.props.navigation.goBack();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  wrapper: {
    paddingVertical: 20,
  },
  inputContainerStyle: {
    margin: 8,
  },
  cardButton: {
    marginTop: 10,
  },
});
