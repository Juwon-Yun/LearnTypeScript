import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState,increment, decrement } from './index';
import { Dispatch } from 'redux';

let a: string = 'a에용'

// div라는 html요소로 타입지정
let box: JSX.IntrinsicElements['div'] = <div>{a}</div>

function App() {
  const getStateData = useSelector((state : RootState) => state )

  const dispatch:Dispatch = useDispatch()
  
  // 타입지정 auto
  let [user, setUser] = useState<string | number>('kim')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {box}
        <Profile name="chulsu" age={20}></Profile>
        {getStateData.counter1.user}
        {getStateData.counter1.count}
        <button onClick={() => { dispatch(increment()) }}>증가</button>
        <button onClick={() => { dispatch(decrement()) }}>감소</button>
      </header>
    </div>
  );
}

// props 때문에 에러가 많다.
// 초기에 props의 타입을 잘 지정해놓으면 버그를 최소화할수있다.

// components
// props 타입지정 props는 object가 default 
function Profile(props: {name : string, age : number}) :JSX.Element { 
  return (
    <div>
      {props.name}
      {props.age}
    </div>
  )
}

export default App;
