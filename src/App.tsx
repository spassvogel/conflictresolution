import React, { useState, useMemo } from 'react';
import './App.css';
import content from './content/parseContent';
import Main from './components/Main';
import IntroModal from './components/introModal/introModal';
import CompleteModal from './components/completeModal/completeModal';

function App() {

  const [intro, setIntro] = useState(true);
  const [answers, setAnswers] = useState<number[]>([]);
  const [avatar, setAvatar] = useState<string>();

  const handleRestart = () => {
    setAnswers([]);
  }

  const completed = useMemo(() => {
    return answers.filter(Boolean).length === content.length;
  }, [answers]);


  return (
    <>
      { intro && (<IntroModal selectedAvatar={avatar} onClose={() => {setIntro(false)}} onChangeAvatar={setAvatar}/>)}
      { !completed && !intro && avatar && <Main content={content} avatar={avatar} answers={answers} setAnswers={setAnswers} /> }
      { completed && avatar && (<CompleteModal avatar={avatar} restart={handleRestart}/>)}
    </>  
  )
};

export default App;

