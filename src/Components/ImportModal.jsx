import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Icon, Button } from 'Elements';
import { colors } from 'Utilities';



export default class ImportModal extends Component {
  render() {
    return (
      <Card size='large'>
        <Header style={{ backgroundColor: 'white', color: 'black' }} type='large'>
          <h2>Import your existing contacts</h2>
          <Button modifiers='icon'><Icon name='close' /></Button>
        </Header>
        <Content type='large' style={{ backgroundColor: '#e6ffee' }}>
          <h4>Have existing contacts in a file ? Import a .CSV file of your contacts</h4>
          <Button modifiers='import'>Import from file</Button>
        </Content>
        <Footer type='large'>
          <Button modifiers='cancel'>Cancel</Button>
          <Button modifiers='normal'>Next</Button>

        </Footer>
      </Card>

    )
  }
}


export const Header = styled.div`
  position:relative;
  display: flex;
  height: ${props => props.type === 'large' ? '30%' : '20%'};
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  border-radius: 5px 5px 0 0;
  background: ${props => props.type === 'signin' ? '#606468' : '#0747a6'};
  h3{
   margin: 0;
  }
  h1{
 font-size: 2rem;
   }
  `


export const Content = styled.div`
height: ${props => props.type === 'large' ? '60%' : '70%'};
display:flex;
justify-content: center;
align-content: center;
flex-direction:column;
  span{
   font-size: 7rem;
   border-radius: 5px 5px 0 0;
   display:flex;
   justify-content: center;
   align-items: center;
 }

`
export const Footer = styled.div`
 height: ${props => props.type === 'large' ? '20%' : '10%'};
 justify-content:  ${props => props.type === 'large' ? 'space-between' : 'center'};
 display: flex;
 border-radius: 5px 5px 0 0;
 `;

