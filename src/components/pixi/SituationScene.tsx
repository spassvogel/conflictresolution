import React, { useRef, useEffect, useState } from 'react';
import { Sprite, Container, Stage } from '@inlet/react-pixi';
import { SceneElement } from '../../common/constants';

interface Props {
  sceneConfig: SceneElement[];
}


const SituationScene = (props: Props & React.ComponentProps<typeof Container>) => {
  // const ref = useRef<PIXI.Sprite>(null);
  // const data = useRef<PIXI.interaction.InteractionData>();
  // const [position, setPosition] = useState<PIXI.Point>(props.position || new PIXI.Point());
  // const popInDuration = 1;
  const {sceneConfig, ...otherProps} = props;
  const renderElement = (sceneElement: SceneElement) => {
    switch (sceneElement.type) {
      default: 
        return (
          <Sprite 
            image={`${process.env.PUBLIC_URL}/${sceneElement.image}`} 
            key={sceneElement.image} 
            position={sceneElement.position}
          />
        )
    }
  }
  return (
      <Stage width={1280} height={720} className="scene" options={{backgroundColor: 0xffffff}}>
        <Container {...otherProps} >
         {sceneConfig.map(e => renderElement(e))}
        </Container>
      </Stage>
  )
}

export default SituationScene;