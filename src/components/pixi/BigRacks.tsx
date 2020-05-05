import React from 'react';
import { Sprite, Container } from '@inlet/react-pixi';

const BigRacks = (props: React.ComponentProps<typeof Container>) => {
  return (
    <Container {...props}>
      <Sprite image={`${process.env.PUBLIC_URL}/images/map/rack-big.png`} x={385} y={-172} />
      <Sprite image={`${process.env.PUBLIC_URL}/images/map/rack-big.png`} x={191} y={-84}/>
      <Sprite image={`${process.env.PUBLIC_URL}/images/map/rack-big.png`} y={0} x={0} /> 
    </Container>
  );
}

export default BigRacks;