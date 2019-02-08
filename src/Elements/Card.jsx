
import styled from 'styled-components';
import { elevation, colors, display } from 'Utilities'


// Card Component and defining styles for passing props

export const Card = styled.div`
${display}
flex-direction:column;
background: ${props => props.type === 'signin' ? '#3b4148' : colors.white};
border-radius: 5px;
padding-bottom: 15px;
height: 100%;
margin: 0 auto;
color: ${ colors.black};


${
  ({ size }) => {
    if (size === 'large') {
      return `
       width: 60%;
       grid-column:1/-1
       height:70%;
       padding-bottom: 0;
       `
    } else {
      return `
      width: 60%
      `
    }
  }
  }


${ elevation[2]}
&: hover{
  ${ elevation[5]}
}

& Icon{
  border: 2px solid red;

}

`