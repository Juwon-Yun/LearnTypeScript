import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initValue = { count: 0, user : 'kim' }

// function reducer(state = initValue, action : any) { 
// function reducer(state = initValue, action: { type: string }) : {count :number} { 
//   if (action.type === 'increase') {
//     return { ...state, count: state.count + 1 }
//   } else if (action.type === 'decrease') {
//     return { ...state, count: state.count - 1 }
//   } else {
//     return initValue
//    }
// }

// slice = state + reducer
// 3가지 필수 속성 : name, initialState, reducers
// 장점 : 함수형 이라 가독성이 좋음 if문보다
// state 수정시 사본만들 필요가 없음
const counterSlice = createSlice({
  name: 'counter',
  initialState: initValue,
  reducers: {
    increment(state) { 
      state.count += 1
    },
    decrement(state) { 
      state.count -= 1
    },
    incrementByAmount(state, action: PayloadAction<number>) { 
      state.count += action.payload
    }
  }
})


// const store = createStore(reducer)

let store = configureStore({
  reducer: {
    counter1 : counterSlice.reducer
  }
})


// store의 타입을 미리 선언해서 exportgka
export type RootState = ReturnType<typeof store.getState>

// createSlice export
export let { increment, decrement, incrementByAmount } = counterSlice.actions

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
