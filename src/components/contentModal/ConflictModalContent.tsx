import React, { useState } from 'react';
import { ConflictContent } from '../../common/constants';
import { ReactComponent as CheckSvg } from './../../images/ui/check.svg';

interface Props {
  content: ConflictContent;
}

const ConflictModalContent = (props: Props) => {
  const {content} = props;
  const [selectedOption, selectOption] = useState<number | null>(null);

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
        <button disabled={selectedOption === null} >
          <b>Okay</b>
        </button>
      </div>
      <div className="right">
          <div className="balloon">
            {content.situationSpeech}
          </div>
          <div className="situation" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${content.situationImg})`}}>
        </div>
      </div>
    </div>
  )
}

export default ConflictModalContent;

