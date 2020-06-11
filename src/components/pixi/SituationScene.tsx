import React, { useRef, useEffect, useState, ComponentProps } from 'react';
import { Sprite, Container, Stage } from '@inlet/react-pixi';
import { SceneElement, SceneElementType } from '../../common/constants';
import * as PIXI from 'pixi.js';

interface Props {
  sceneConfig: SceneElement[];
  avatar: string;
}


if (process.env.NODE_ENV === "development") {
  // @ts-ignore
  window.__PIXI_INSPECTOR_GLOBAL_HOOK__ && window.__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });
}

const SituationScene = (props: Props & ComponentProps<typeof Container>) => {
  // const ref = useRef<PIXI.Sprite>(null);
  // const data = useRef<PIXI.interaction.InteractionData>();
  // const [position, setPosition] = useState<PIXI.Point>(props.position || new PIXI.Point());
  // const popInDuration = 1;
  const {sceneConfig, avatar, ...otherProps} = props;
  const renderElement = (sceneElement: SceneElement) => {
    const scale: [number, number] = [sceneElement.scale || 1, sceneElement.scale || 1];
    if (sceneElement.flipped) scale[0] = -scale[0];


    switch (sceneElement.type) {
      case SceneElementType.avatar:
        return (
          <Sprite 
            image={`${process.env.PUBLIC_URL}/images/avatars/${avatar}-${sceneElement.pose || "front"}.png`} 
            key="avatar" 
            position={sceneElement.position || [0, 0]}
            scale={scale}
            anchor={[0.5, 0]}
          />
        )
      default: 
        return (
          <Sprite 
            image={`${process.env.PUBLIC_URL}/${sceneElement.image}`} 
            key={sceneElement.image} 
            position={sceneElement.position || [0, 0]}
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