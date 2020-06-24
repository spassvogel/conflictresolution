import React, { useState } from 'react';
import './App.css';
import content from './content/parseContent';
import Main from './components/Main';
import IntroModal from './components/introModal/introModal';
import CompleteModal from './components/completeModal/completeModal';

function App() {

  const [intro, setIntro] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [avatar, setAvatar] = useState<string>();

  return (
    <>
      { intro && (<IntroModal selectedAvatar={avatar} onClose={() => {setIntro(false)}} onChangeAvatar={setAvatar}/>)}
      { !completed && !intro && avatar && <Main content={content} avatar={avatar} setCompleted={setCompleted} /> }
      { completed && avatar && (<CompleteModal avatar={avatar}/>)}
    </>  
  )
};

export default App;

