/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity
} from 'react-native';


import { Touchable } from '../../components';
import { Button, View, Text, Left, Body, Header, Title, Right, Icon, Badge, Card, CardItem, Footer, FooterTab, Container, Picker, Form, Item, Input, Label, ListItem, List, Content, Thumbnail, Segment, H1, H2, H3, Spinner, CheckBox, Radio, Drawer } from 'native-base';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selected1: 'key0'
    }
  }
  onValueChange (value: string) {
    this.setState({
      selected1 : value
    });
  }
  render() {
    var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
    return (
      <Container>
        <Header>
         <Left>
           <Button transparent onPress={()=> this._drawer._root.open()}>
             <Icon name="cart" />
           </Button>
         </Left>
         <Body>
           <Title>Header</Title>
         </Body>
         <Right>
           <Button ref="test" transparent onPress={()=> console.log('header pressed')}>
             <Icon name="heart" />
           </Button>
         </Right>
       </Header>
        <Content style={{flexGrow: 1}} padder>
         <Picker
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}>
            <Item label="Wallet" value="key0" />
            <Item label="ATM Card" value="key1" />
            <Item label="Debit Card" value="key2" />
            <Item label="Credit Card" value="key3" />
            <Item label="Net Banking" value="key4" />
         </Picker>
        </Content>
        <FooterTab>
          <Button style={{borderStyle: 'none'}}>
            <Text>Camera</Text>
          </Button>
          <Button active style={{borderStyle: 'none'}}>
            <Text>Navigate</Text>
          </Button>
          <Button style={{borderStyle: 'none'}}>
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  touchable: {
    backgroundColor: '#CAE6FE'
  }
});
