import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import './introModal.css';
import { Stage, Sprite, Container } from '@inlet/react-pixi';
import {OutlineFilter} from '@pixi/filter-outline';
import {ReflectionFilter} from '@pixi/filter-reflection';
import { gsap } from 'gsap'
import { PixiPlugin } from 'gsap/all';
import * as PIXI from 'pixi.js';

interface Props {
  selectedAvatar: string;
  onClose: () => void;
  onChangeAvatar: (name: string) => void;
}
const stageHeight = 550;
const stageWidth = 1000;
const IntroModal = (props: Props) => {
  const {selectedAvatar} = props;

  const renderAvatar = (name: string, index: number) => {
    const filters = selectedAvatar === name ? [new OutlineFilter(3, 0x3FA535)] : undefined;
    const scale = selectedAvatar === name ? .7 : .6;
    const zIndex = selectedAvatar === name ? 2 : 0;
    return <Sprite image={`${process.env.PUBLIC_URL}/images/avatars/${name}.png`} 
      filters={filters} 
      anchor={[0.5, 0.5]}
      scale={scale}
      y={stageHeight / 2}
      x={stageWidth / 5 + (index * (stageWidth / 5))}
      zIndex={zIndex}
      interactive
      pointerdown={() => props.onChangeAvatar(name)}
    />;
  }

  return (
    <ReactModal
      isOpen={true}
      ariaHideApp={false}
      overlayClassName="modal-overlay modal-intro-overlay"
      className="modal modal-intro"
      onRequestClose={props.onClose}
    >
      <div >
        <h1 className="header">Conflict situations</h1>
        <p>
          Select your player avatar
        </p>
        <div className="avatar-selection">
          <Stage width={stageWidth} height={stageHeight} options={{ backgroundColor: 0xffffff}}>
            <Sprite image={`${process.env.PUBLIC_URL}/images/avatars/background.png`} filters={[new PIXI.filters.BlurFilter()]}/>
            <Container sortableChildren>
              { renderAvatar('avatar1', 0) }
              { renderAvatar('avatar2', 1) }
              { renderAvatar('avatar3', 2) }
              { renderAvatar('avatar4', 3) }
            </Container>
          </Stage>
        </div>
        <p className="footer">
          <button onClick={props.onClose}>Start</button>
        </p>
      </div>
    </ReactModal>  
    )
}

export default IntroModal;
