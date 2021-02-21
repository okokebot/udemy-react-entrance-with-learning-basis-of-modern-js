import React, {useState} from 'react';
import ColorfullMessage from './components/ColorfulMessage';
import './App.css';

function App() {
  const [num, setNum] = useState(1);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(
       (num + 1)*(num + 1)
    );
  };

  const onClickSwitchFaceShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <React.Fragment>
      <p style={{color: 'red' }}>おげんきですか</p>
      <ColorfullMessage color="blue" message="おげんきですか_>>?" />
      <button onClick={ onClickCountUp }>カウントアップボタン</button>
      <p>{num}</p>
      <button onClick={ onClickSwitchFaceShowFlag }>on/off</button>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </React.Fragment>
  );
}

export default App;
