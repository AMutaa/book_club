import React, { Component } from 'react';
import { Card, Button } from 'Elements'
import { Header, Content, Footer } from 'Components'


export default class Counter extends Component {
  state = {
    count: 0,
  };

  handleUpcount = () => {
    console.log(this.state.count + 1);
    this.setState({
      count: this.state.count + 1,

    });
  };

  handleDowncount = () => {
    console.log(this.state.count - 1);
    this.setState({
      count: this.state.count - 1,
    });
  }


  render() {
    return (
      <Card>
        <Header><h1>CLAPS</h1></Header>
        <Content>
          <span>{this.state.count}</span>
        </Content>
        <Footer>
          <Button modifiers={['large', 'cancel']} onClick={this.handleDowncount} >-</Button>
          <Button modifiers='large' onClick={this.handleUpcount}>+</Button>
        </Footer>
      </Card>
    );
  }
}
