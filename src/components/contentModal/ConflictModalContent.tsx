import React, { useState, useEffect, useRef } from 'react';
import { ConflictContent } from '../../common/constants';
import { ReactComponent as CheckSvg } from './../../images/ui/check.svg';
import { gsap, Linear } from 'gsap'
import { TextPlugin } from 'gsap/all';

gsap.registerPlugin(TextPlugin);

interface Props {
  content: ConflictContent;
}

const ConflictModalContent = (props: Props) => {
  const {content} = props;
  const [selectedOption, selectOption] = useState<number | null>(null);
  const [reaction, setReaction] = useState<string | null>(null);
  const balloonTextRef = useRef(null);

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

  return (
    <div className="modal-content modal-conflict">
      <div className="left">
        <p>
          {content.description}
        </p>
        <ul className="options">
          {content.options.map((option, index) => (
            <li key={option} className={index === selectedOption ? "active" : ""} onClick={() => selectOption(index)} >
              <div className="checkbox">
                <CheckSvg className="check" />
              </div>
              <div className="text">
                {option}
              </div>
            </li>
          ))}
        </ul>
        { reaction && (
          <div>

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

