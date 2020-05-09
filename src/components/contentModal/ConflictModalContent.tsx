import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { ConflictContent } from '../../common/constants';
import { ReactComponent as CheckSvg } from './../../images/ui/check.svg';
import { gsap, Linear, Bounce } from 'gsap'
import { TextPlugin } from 'gsap/all';
import "./conflictModal.css";
import sound from 'pixi-sound';

gsap.registerPlugin(TextPlugin);
const SPEED_MODIFIER = 4; // for debugging

interface Props {
  content: ConflictContent;
  setCorrectAnswer: (index: number) => void;
  selectedAnswer?: number; // When answer has been set correctly before
}

const ConflictModalContent = (props: Props) => {
  const {content, selectedAnswer = null} = props;
  const [selectedOption, selectOption] = useState<number | null>(selectedAnswer);
  const [situationImage, setSituationImage] = useState<string>(content.situationImage);
  const balloonRef = useRef<HTMLDivElement>(null);
  const balloonTextRef = useRef<HTMLSpanElement>(null);
  const insetRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedOption === null) {
      // gsap.to(balloonTextRef.current, {
      //   delay: 1,
      //   duration: 2,
      //   text: {
      //     value: content.situationSpeech, 
      //     oldClass: "hidden",
      //     newClass: "visible"
      //   },
      //   ease: Linear.easeNone,
      // });
    }
  }, [content.situationSpeech, selectedOption]);

  const handleOptionClick = (element: HTMLLIElement, index: number) => {
    element.className = "animating";
    //selectOption(index);
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
    if ( props.content.reactions[index].correct) {
      sound.play('correct');
      props.setCorrectAnswer(index);
    } else {
      sound.play('wrong');
    }

  };

  useEffect(() => {
    sound.add('correct', `${process.env.PUBLIC_URL}/sound/correct.mp3`);    
    sound.add('wrong', `${process.env.PUBLIC_URL}/sound/wrong.mp3`);
  }, []);

  const playSequence = useCallback(() => {
    const tl = gsap.timeline();
    const balloonText = balloonTextRef!.current!;
    const inset = insetRef.current!;
    gsap.killTweensOf(balloonText);

    // Reset
    balloonRef.current!.style.visibility = 'visible';
    balloonRef.current!.style.opacity = '1';
    inset.style.left = '-50%';

    // Build timeline
    balloonText.innerHTML =  content.sequence[0].text;
    let sequenceBalloonCls = '';
    content.sequence.forEach((sequenceItem, index) => {
      sequenceBalloonCls = sequenceItem.balloonClass || sequenceBalloonCls;  // if specified use balloonClass, otherwise use one of previous sequence    
      const balloonCls = `balloon ${sequenceItem.type} ${sequenceBalloonCls}`;

      const onStart = () => {
        balloonRef.current!.className = balloonCls;
        if (sequenceItem.situationImage) {
          setSituationImage(sequenceItem.situationImage);
        }
      }

      tl.to(balloonText, {
        onStart,
        delay: (index > 0 ? 3 : 0) / SPEED_MODIFIER,
        duration: sequenceItem.text.length * 0.025 / SPEED_MODIFIER,
        text: {
          value: sequenceItem.text, 
          oldClass: "hidden",
          newClass: "visible"
        },
        ease: Linear.easeNone,
      });  
    });

    // Fade the balloon out
    tl.to(balloonRef.current, {
      delay: 3,
      duration: .5,
      autoAlpha: 0,
      ease: Linear.easeNone,
    });

    // Slide inset in
    tl.to(inset, {
      duration: .5,
      left: 0,
      ease: Bounce.easeInOut,
    });

  }, [content.sequence]);

  useEffect(() => {
    playSequence();
  }, [content.sequence, playSequence])



  const handleReplay = () => {
    playSequence();
  }

  // Reaction based on current selection
  const reaction = useMemo(() => {
    if (selectedOption === null) return null;
    return props.content.reactions[selectedOption];
  }, [props.content.reactions, selectedOption])

  const renderOption = (option: string, index: number) => {
    if (selectedOption === null) {
      // Nothing selected, render all
      return (
        <li key={option} className="normal" onClick={(e) => handleOptionClick(e.currentTarget, index)} >
          <div className="checkbox"/>
          <div className="text">
            {option}
          </div>
        </li>
      );
    }
    if (selectedOption === index) {
      // Render only selected option
      const className = reaction?.correct ? "correct" : "wrong";
      return (
        <li key={option} className={className} >
          <div className="checkbox">
            <CheckSvg className="check" />
          </div>
          <div className="text">
            {option}
          </div>
        </li>
      );
    }
  }


  return (
    <div className="modal-content modal-conflict" ref={ref}>
      {/* */}
      <div className="situation">
        <div className="inset" ref={insetRef}>
          <p>
            {content.description}
          </p>
          <ul className="options">
            {content.options.map((option, index) => renderOption(option, index))}
          </ul>
          { reaction && (
            <>
            <div className="reaction-text">
              {reaction.text}
            </div>
            { (!reaction?.correct) && (
              <button onClick={handleReplay} className="replay">
                Replay
              </button>
            )}
            </>
          )}
        </div> 
        <div className={`balloon`} ref={balloonRef}>
          <span ref={balloonTextRef}></span>
        </div>
        <div className="situation-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${situationImage})`}} />
      </div>
      <button className="button-replay" onClick={handleReplay}>
        replay
      </button>
    </div>
  )
}

export default ConflictModalContent;

