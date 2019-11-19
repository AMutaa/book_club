import React, { useState } from "react";
import { Card, Button } from "Elements";
import { Header, Content, Footer } from "Components";

function Counter() {
  const [state, setCount] = useState(0);
  const majorPlus = () =>
    setCount(prevState => {
      return prevState + 1;
    });
  const majorMinus = () =>
    setCount(prevState => {
      return prevState > 0 ? prevState - 1 : 0;
    });

  return (
    <Card>
      <Header>
        <h1>MYLO</h1>
      </Header>
      <Content>
        <span>{state}</span>
      </Content>
      <Footer>
        <Button modifiers={["large", "cancel"]} onClick={majorMinus}>
          -
        </Button>
        <Button modifiers="large" onClick={majorPlus}>
          +
        </Button>
      </Footer>
    </Card>
  );
}

export default Counter;
