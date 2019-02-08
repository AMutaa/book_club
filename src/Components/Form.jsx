import React, { Component } from 'react';
import styled from 'styled-components'
import { Header, Content, Footer } from 'Components'
import { Card, Button } from 'Elements'
import { colors } from 'Utilities';

export default class Form extends Component {
  render() {
    return (
      <Card type='signin'>
        <Header type='signin'>
          <h1>SIGN IN</h1>
        </Header>
        <Content>
          <form action="">
            <p>Username</p>
            <Input type='text' name='firstname' required />
            <div style={{ marginTop: '20px' }}></div>
            <p>Password</p>
            <Input type='text' name='lastname' required />
            <Footer><Button modifiers='signin' type='submit'>SIGN IN</Button></Footer>
          </form>
        </Content>
        <Footer>
          <h5><span>Not a member ?</span> Sign Up Now </h5>
        </Footer>
      </Card >
    )
  }
}
const Input = styled.input`
height: 2.5rem;
width: 90%;
color: ${colors.white};
padding-left: 5px;
outline: none;
font-size: 1rem;
border: none;
border-radius: 4px;
background: ${colors.darkGrey}

`
