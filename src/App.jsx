import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css'
import { colors } from 'Utilities'
import { Form, DeleteModal, Counter } from 'Components';


export default class App extends Component {
  componentDidMount() {
    alert(
      '🛑 Colors and Designs in this project are chosen for demonstrative purposes only 🛑'
    )
  }

  render() {
    return (
      <AppWrapper>
        <h1 style={{ color: 'brown' }}>STYLED COMPONENTS</h1>
        <CardWrapper>
          <DeleteModal />
          <Form />
          <Counter />
        </CardWrapper>
      </AppWrapper>
    )
  }
}


// first styled component and nesting styles

const AppWrapper = styled.div`
width: 70vw;
margin:0 auto;
height: 90vh;
border-radius:4px;
background: ${colors.lightGrey}
h1{
font-size: 1.5rem;
letter-spacing:0.2rem;

}
`;

// referencing other components

const CardWrapper = styled(AppWrapper)`
padding: 10px 0;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1.5fr 2fr;
grid-gap:10px;
height: 100%;

`

