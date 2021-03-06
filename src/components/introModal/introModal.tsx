import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import './introModal.css';
import { Stage, Sprite, Container } from '@inlet/react-pixi';
import {OutlineFilter} from '@pixi/filter-outline';
import * as PIXI from 'pixi.js';

interface Props {
  selectedAvatar?: string;
  onClose: () => void;
  onChangeAvatar: (name: string) => void;
}

const stageHeight = 720;
const stageWidth = 1280;

const IntroModal = (props: Props) => {
  const {selectedAvatar} = props;

  const renderAvatar = (name: string, index: number, flipped: boolean = false) => {
    const filters = selectedAvatar === name ? [new OutlineFilter(4, 0xffcc00)] : [];
    let scale = selectedAvatar === name ? .7 : .6;
    const zIndex = selectedAvatar === name ? 2 : 0;

    const image = `${process.env.PUBLIC_URL}/images/avatars/${getAvatarImage(name)}.png`;

    return <Sprite 
      image={image} 
      filters={filters} 
      anchor={[0.5, 0.5]}
      scale={[(flipped ? -scale : scale), scale]}
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
      portalClassName="modal-portal"
      overlayClassName="modal-overlay modal-intro-overlay"
      className="modal modal-intro"
      onRequestClose={props.onClose}
    >
      <div className="modal-content">
        <h1 className="header">Strife and Fracas</h1>

        <div className="avatar-selection">
          <Stage width={stageWidth} height={stageHeight} options={{ backgroundColor: 0xffffff}}>
            <Sprite image={`${process.env.PUBLIC_URL}/images/avatars/background.png`} 
              // filters={[new PIXI.filters.BlurFilter(4)]} 
              scale={1} 
              anchor={.5}
              y={stageHeight / 2}
              x={stageWidth / 2}
            />
            <Container sortableChildren>
              { renderAvatar('avatar1', 0) }
              { renderAvatar('avatar2', 1) }
              { renderAvatar('avatar3', 2) }
              { renderAvatar('avatar4', 3, true) }
            </Container>
          </Stage>
          <div className="footer">
            <p className="subtext">
            Discord and tensions are particularly high in the warehouse today. 
            As a manager, you have to play the role of a mediator to resolve conflicts and get people working towards common goals.
            See if you can resolve the conflicts popping up all over the warehouse.
            <br/>
            Choose an avatar to start playing.    
            </p>
            <button 
              onClick={props.onClose} 
              disabled={props.selectedAvatar === undefined}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </ReactModal>  
    )
}

const getAvatarImage = (avatar: string) => {
  switch (avatar) {
    case "avatar1":
      return "avatar1-angle";
    case "avatar2":
      return "avatar2-front";
    case "avatar3":
      return "avatar3-front";
    case "avatar4":
      return "avatar4-angle";
  }
}

export default IntroModal;
