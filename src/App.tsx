import React, { useState, useMemo } from 'react';
import defaultContent from './content/parseContent';
import Main from './components/Main';
import IntroModal from './components/introModal/introModal';
import CompleteModal from './components/completeModal/completeModal';
import PlayerBridge from './components/playerBridge';
import { GameData } from './components/playerBridge/GameData';
import './App.css';
import { AnyContent } from './common/constants';

function App() {

  const [intro, setIntro] = useState(true);
  const [answers, setAnswers] = useState<number[]>([]);
  const [avatar, setAvatar] = useState<string>();
  const [situationIsOpen, setSituationOpen] = useState(false);
  const [content, setContent] = useState<AnyContent[]>(defaultContent);

  const handleRestart = () => {
    setAnswers([]);
  }

  const completed = useMemo(() => {
    return answers.filter(Boolean).length === content?.length;
  }, [answers, content]);

  const showCompleted = useMemo(() => completed && !situationIsOpen, [completed, situationIsOpen]);

  const handleGameDataReceived = (data: GameData) => {
    setContent(data.content);
  }

  return (
    <>
      <PlayerBridge gameDataReceived={handleGameDataReceived}/>
      { intro && (<IntroModal selectedAvatar={avatar} onClose={() => {setIntro(false)}} onChangeAvatar={setAvatar}/>)}
      { !showCompleted && !intro && avatar && <Main content={content} avatar={avatar} answers={answers} setAnswers={setAnswers} setSituationOpen={setSituationOpen}/> }
      { showCompleted && avatar && (<CompleteModal avatar={avatar} restart={handleRestart}/>)}
    </>  
  )
};

export default App;

