import React, { useState, useRef, useEffect, useMemo } from "react";
import { Viewport as PixiViewport } from "pixi-viewport";
import { AnyContent } from "../common/constants";
import sound from 'pixi-sound';
import Marker from "./pixi/Marker";
import { Stage, Sprite } from "@inlet/react-pixi";
import ContentModal from "./contentModal";
import Viewport from "./pixi/Viewport";
import * as PIXI from 'pixi.js';
import { PixiPlugin } from 'gsap/all';
import { gsap } from 'gsap'

PixiPlugin.registerPIXI(PIXI);
gsap.registerPlugin(PixiPlugin);

if (process.env.NODE_ENV === "development") {
  // @ts-ignore
  window.__PIXI_INSPECTOR_GLOBAL_HOOK__ && window.__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });
}

interface Props {
  content: AnyContent[];
}

const Main = (props: Props) => {
  const { content } = props;
  const viewportRef = useRef<PixiViewport>(null);
  const [selectedSituation, setSelectedSituation] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const worldWidth = 3369;
  const worldHeight = 1483;
  //const scaleFactor = 1.86875; //scaled the original map up

  const [canvasWidth, setCanvasWidth] = useState(1200);
  const [canvasHeight, setCanvasHeight] = useState(600);

  useEffect(() => {
    // This will set the dimensions of the canvas to that of the window
    const resize = () => {
      const width = Math.min(window.innerWidth, window.outerWidth);
      const height = Math.min(window.innerHeight, window.outerHeight);
      setCanvasWidth(width);
      setCanvasHeight(height); 
    }
    resize();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    // Center the map
    if (viewportRef.current) {
      const viewport = viewportRef.current;
      viewport.moveCenter(worldWidth / 2, worldHeight / 2);  
      viewport.scale = new PIXI.Point(0.5, 0.5);
    }
  }, [canvasWidth, canvasHeight]);

  useEffect(() => {
    // Blur the map when situation is selected
    if (selectedSituation) {
      gsap.to(viewportRef.current, {duration: .5, pixi: {blur:20}});
    } else {
      gsap.to(viewportRef.current, {duration: .5, pixi: {blur:0}});
    }
  }, [selectedSituation]);

  useEffect(() => {
    sound.add('plops', {
      url: `${process.env.PUBLIC_URL}/sound/plops.wav`,
      autoPlay: true,
    });    
  }, []);

  const handleMarkerClick = (content: AnyContent, index: number) => {
    setSelectedSituation(index);
  }

  const handleClose = () => {
    setSelectedSituation(null);
  }

  const selectedContent = useMemo(() => {
    if (selectedSituation === null) {
      return null;
    }
    return content?.[selectedSituation];
  }, [content, selectedSituation]);
  
  const renderMarker = (contentItem: AnyContent, index: number) => {
    const delay = index * 0.5;
    const position = new PIXI.Point(contentItem.position[0], contentItem.position[1]);
    return (
      <Marker 
        position={position} 
        pointerdown={() => handleMarkerClick(contentItem, index)}
        delay={delay} />
    );
  }

  return (
    <>
      <Stage width={canvasWidth} height={canvasHeight} >
      <Viewport screenWidth={canvasWidth} screenHeight={canvasHeight} worldWidth={worldWidth} worldHeight={worldHeight} ref={viewportRef} >
        <Sprite image={`${process.env.PUBLIC_URL}/images/map/warehouse-type2-80.jpg`}  />
        {content.map((contentItem, index) => renderMarker(contentItem, index))}
      </Viewport>
    </Stage>
    { selectedContent && <ContentModal content={selectedContent} onClose={handleClose} /> }

    </>
  )
};

export default Main;