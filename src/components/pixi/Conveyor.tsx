import React from 'react';
import { Sprite } from '@inlet/react-pixi';

const Conveyor = (props: React.ComponentProps<typeof Sprite>) => {
  return (
    <>
      <Sprite image={`${process.env.PUBLIC_URL}/images/map/warehouse-conveyor-back.png`} {...props} >
        <Sprite image={`${process.env.PUBLIC_URL}/images/map/warehouse-conveyor-front.png`} x={-55} y={-159}/>
      </Sprite>
      
    </>
  );
}

export default Conveyor;