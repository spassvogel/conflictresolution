import React, { useState } from 'react';
import './App.css';
import content from './content/parseContent';
import Main from './components/Main';
import IntroModal from './components/introModal/introModal';



function App() {

  const [intro, setIntro] = useState(true);
  const [avatar, setAvatar] = useState("avatar1");

  return (
    <>
      { intro && (<IntroModal selectedAvatar={avatar} onClose={() => {setIntro(false)}} onChangeAvatar={setAvatar}/>)}
      { !intro && <Main content={content} avatar={avatar}/> }
    </>  
  )
};

export default App;

