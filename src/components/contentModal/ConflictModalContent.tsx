import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ConflictContent } from '../../common/constants';
import { ReactComponent as CheckSvg } from './../../images/ui/check.svg';
import { gsap, Linear } from 'gsap'
import { TextPlugin } from 'gsap/all';
import "./conflictModal.css";

gsap.registerPlugin(TextPlugin);

interface Props {
  content: ConflictContent;
}

const ConflictModalContent = (props: Props) => {
  const {content} = props;
  const [selectedOption, selectOption] = useState<number | null>(null);
  //const [reaction, setReaction] = useState<string | null>(null);
  const balloonTextRef = useRef(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(balloonTextRef.current, {
      delay: 1,
      duration: 2,
      text: {
        value: content.situationSpeech, 
        oldClass: "hidden",
        newClass: "visible"
      },
      ease: Linear.easeNone,
    });
  }, [content.situationSpeech]);

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
    })
  };

  // Reaction based on current selection
  const reaction = useMemo(() => {
    if (!selectedOption) return null;
    return props.content.reactions[selectedOption];
  }, [props.content.reactions, selectedOption])


  const renderOption = (option: string, index: number) => {
    if (!selectedOption) {
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
      <div className="left">
        <p>
          {content.description}
        </p>
        <ul className="options">
          {content.options.map((option, index) => renderOption(option, index))}
        </ul>
        { reaction && (
          <div className="reaction-text">
            {reaction.text}
          </div>
        )}
        {/* <button disabled={selectedOption === null} >
          <b>Okay</b>
        </button> */}
      </div>
      <div className="right">
        <div className="balloon" >
          <span ref={balloonTextRef}>{content.situationSpeech}</span>
        </div>
        <div className="situation" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${content.situationImg})`}} />
      </div>
    </div>
  )
}

export default ConflictModalContent;

