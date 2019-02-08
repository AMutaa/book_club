import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { lighten } from 'polished';
import { colors, absolute } from 'Utilities';


const BUTTON_MODIFIERS = {

  import: () => `
   background: ${colors.green}
    height:2.5rem;
    color: white;
    font-size:1rem;
    margin: 10px auto;
    width: 30%;
    &:hover{
      background: ${lighten(0.1, '#00ff00')}
      }
    `,

  cancel: () => `
    background: white;
    color: black;
    border: 1px solid grey;
    &: hover {
      background: ${colors.red}
      color: ${colors.white};
      border: none;
    }
    `,

  large: () => `
    width: 40%;
    color:${colors.white};
    background: ${colors.blue}
    &:hover{
      background: ${lighten(0.1, '#095edc')}
      }

    `,

  signin: () => `
    width: 90%;
    margin-top: 40px;
    height: 2.5rem;
    font-size:1rem;
    background: ${colors.pink}
    color: white;
    &:hover{
      background: ${lighten(0.1, '#a11249')}
      }

    `,

  icon: () => `
    background: transparent
    margin: 0 2px;
    ${absolute({ y: 'top', x: 'right' })};
     background:transparent;
    `,

  normal: () => `
   background: ${colors.green}
   color:${colors.white};
   align-items: flex-end;
   &:hover{
    background: ${lighten(0.1, '#00cc00')}
    }


  `


}


// passing props & variables with an extendible system
export const Button = styled.button`
  border-radius:3px;
  font-family: 'Source Sans Pro', sans-serif;
  height:30px;
  color:${colors.black};
  outline:none;
  font-size:0.8rem;
  letter-spacing: 0.03rem;
  border: none;
  margin: auto 10px;
  padding: 0 10px;
  &:hover{
    background: ${lighten(0.2, '#f2f2f2')}
    }

${applyStyleModifiers(BUTTON_MODIFIERS)};
  `;