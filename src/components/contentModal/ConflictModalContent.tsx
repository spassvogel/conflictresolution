import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { ConflictContent, SequenceItemType, SceneElement } from '../../common/constants';
import { gsap, Linear, Bounce, Sine } from 'gsap'
import { TextPlugin } from 'gsap/all';
import "./conflictModal.css";
import sound from 'pixi-sound';
import SituationScene from '../pixi/SituationScene';

gsap.registerPlugin(TextPlugin);
const SPEED_MODIFIER = 1; // for debugging

interface Props {
  content: ConflictContent;
  avatar: string;
  setCorrectAnswer: (index: number) => void;
  selectedAnswer?: number; // When answer has been set correctly before
}

const ConflictModalContent = (props: Props) => {
  const {content, avatar, selectedAnswer = null} = props;
  const [selectedOption, selectOption] = useState<number | null>(selectedAnswer);
  // Reaction based on current selection
  const reaction = useMemo(() => {
    if (selectedOption === null) return null;
    return props.content.reactions[selectedOption];
  }, [props.content.reactions, selectedOption]);
  
  const [confirmed, setConfirmed] = useState(selectedAnswer != null);
  const [sceneConfig, setSceneConfig] = useState<SceneElement[]>(reaction?.scene || props.content.scene);
  const balloonRef = useRef<HTMLDivElement>(null);
  const balloonArrowRef = useRef<HTMLDivElement>(null);
  const balloonTextRef = useRef<HTMLSpanElement>(null);
  const insetRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const handleOptionClick = (element: HTMLLIElement, index: number) => {
    element.className = "animating";
    if (!ref.current) return;

    // Fade out the non selected options
    const otherOptions = ref.current!.querySelectorAll(".options .normal");
    gsap.to(otherOptions, {
      duration: 0.5,
      opacity: 0,
      ease: Linear.easeNone,
    });

    // Move current option to top
    var parentTop = ref.current!.querySelector(".options")!.getBoundingClientRect().top; // Initial parent's top distance from the top of the viewport;
    var childTop = element.getBoundingClientRect().top;
    var distance = Math.abs(parentTop - childTop);

    gsap.to(element, {
      duration: 0.5,
      top: -distance,
      ease: Linear.easeNone,
      onComplete: () => {
        setTimeout(() => {
          element.className = "";
          selectOption(index);
        }, 250);
      }
    });
  };

  useEffect(() => {
    sound.add('correct', `${process.env.PUBLIC_URL}/sound/correct.mp3`);    
    sound.add('wrong', `${process.env.PUBLIC_URL}/sound/wrong.mp3`);
  }, []);

  const sequence = useRef<gsap.core.Timeline>();
  const playSequence = useCallback(() => {
    const tl = gsap.timeline();
    sequence.current = tl;
    const balloonText = balloonTextRef!.current!;
    const inset = insetRef.current!;
    gsap.killTweensOf(balloonText);

    // Reset
    if (nextButtonRef.current) nextButtonRef.current!.removeAttribute('style');
    balloonRef.current!.removeAttribute('style');
    inset.removeAttribute('style');

    // Build timeline
    let balloonPos = 0;
    balloonText.innerHTML = content.sequence[0].text;

    // All the sequences
    content.sequence.forEach((sequenceItem, index) => {
      balloonPos = sequenceItem.balloonArrowPos || balloonPos;  // 

      const onStart = () => {
        if (balloonRef.current)
          balloonRef.current!.className = `balloon ${sequenceItem.type}`;
        
        balloonText.innerHTML = sequenceItem.text;
        
        if (balloonArrowRef.current) {
          balloonArrowRef.current.style.visibility = sequenceItem.type === SequenceItemType.speech ? 'visible' : 'hidden';
          balloonArrowRef.current.style.right = `${balloonPos}%`;  
          positionArrow();
        }

        if (sequenceItem.scene) {
          setSceneConfig(sequenceItem.scene);
        }
      }

      tl.add(`seq-${index}`);
      if (sequenceItem.type === SequenceItemType.caption) {
        tl.to(balloonText, {
          onStart,
          delay: 0 / SPEED_MODIFIER,
          duration: sequenceItem.text.length * 0.025 / SPEED_MODIFIER,
          text: {
            value: sequenceItem.text, 
            oldClass: "hidden",
            newClass: "visible"
          },
          ease: Linear.easeNone,
        });
      }
      else {
        tl.to(balloonText, {
          onStart,
          delay: 3 / SPEED_MODIFIER,
          duration: sequenceItem.text.length * 0.025 / SPEED_MODIFIER,
          ease: Linear.easeNone,
        });
      }
    });

    tl.add(`seq-${content.sequence.length}`);

    // Fade the balloon out
    tl.to(balloonRef.current, {
      delay: 3 / SPEED_MODIFIER,
      duration: .5,
      autoAlpha: 0,
      ease: Linear.easeNone,
    });

    // Slide inset in
    tl.to(inset, {
      onStart: () => {
        if (nextButtonRef.current) 
          nextButtonRef.current!.style.display = "none";

        if (balloonArrowRef.current)
          balloonArrowRef.current.style.visibility = 'hidden';
      },
      duration: .5,
      left: 0,
      ease: Sine.easeInOut,
    }, "-=1");
  }, [content.sequence]);

  const positionArrow = () => {
    if (!balloonRef.current || !balloonArrowRef.current) return;
    const rect = balloonRef.current.getBoundingClientRect();
    balloonArrowRef.current.style.top = `${balloonRef.current.offsetTop + rect.height}px`;
  }

  useEffect(() => {
    window.addEventListener('resize', positionArrow);
    return () => {
      window.removeEventListener('resize', positionArrow);
    }
  }, []);

  const handleSkipSequenceStep = () => {
    if (!sequence.current) return;
    const currentIndex = parseInt(sequence.current.currentLabel().substring('seq-'.length));
    sequence.current.seek(`seq-${currentIndex+1}`, false);
  }

  useEffect(() => {
    if (selectedAnswer) {
      insetRef.current!.style.left = '0px';
      balloonRef.current!.style.visibility = 'hidden';
    }
    else {
      playSequence();
    }
  }, [content.sequence, playSequence, selectedAnswer]);

  const handleReplay = () => {
    setSceneConfig(props.content.scene);
    selectOption(null);
    setConfirmed(false);
    playSequence();
  }

  const handleYes = () => {
    setConfirmed(true);
    setSceneConfig(reaction!.scene);

    if (reaction!.correct) {
      sound.play('correct');
      props.setCorrectAnswer(selectedOption!);
    } else {
      sound.play('wrong');
    }
  }

  const renderReaction = () => {
    if (!reaction) {
      return null;
    }
    if (!confirmed) {
      return (
        <>
          <p>{reaction.confirmText}</p>
          <button onClick={handleYes}>yes</button>
          <button onClick={handleReplay}>no</button>
        </>
      )
    }
    return (
      <>
        { reaction?.correct && (<p className="right-option">You’ve chosen the right option!</p>)}
        {reaction.text.split("\n").map(p => <p key={p.substring(0, 10)}>{p}</p>)}
        { (!reaction?.correct) && (
         <button onClick={handleReplay} className="replay">
           Replay
         </button>
        )}     
      </>
    )
  }

  const renderOption = (option: string, index: number) => {
    if (selectedOption === null) {
      // Nothing selected, render all
      return (
        <li key={option} className="normal" onClick={(e) => handleOptionClick(e.currentTarget, index)} >
          <div className="text">
            {option}
          </div>
        </li>
      );
    }
    if (selectedOption === index) {
      // Render only selected option
      let className = '';
      if (confirmed) {
        className = reaction?.correct ? "correct" : "wrong";
      }

      return (
        <li key={option} className={className} >
          <div className="text">
            {option}
          </div>
        </li>
      );
    }
  }

  return (
    <div className="modal-content modal-conflict" ref={ref}>
      <div className="situation">
        { props.content.scene && <SituationScene sceneConfig={sceneConfig} avatar={avatar}/>}
        <div className="inset" ref={insetRef}>
          <p>
            {content.description}
          </p>
          <ul className="options">
            {content.options.map((option, index) => renderOption(option, index))}
          </ul>
          { renderReaction() }
        </div> 
        <div className={`balloon`} ref={balloonRef}>
          <span ref={balloonTextRef}></span>
        </div>
        <div className="balloon-arrow" ref={balloonArrowRef} style={{visibility: 'hidden'}}/>
      </div>
      { !selectedOption && (
        <div className="controls-bottomright">
          <button className="button-replay" onClick={handleReplay}>
            replay
          </button>
          <button className="button-next" ref={nextButtonRef} onClick={handleSkipSequenceStep}>
            >
          </button>
        </div>
      )}
    </div>
  )
}

export default ConflictModalContent;