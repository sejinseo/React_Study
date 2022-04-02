// 리액트 쓰는 이유: Wep-app(app이랑 사용성이 비슷함)을 쉽게 만들 수 있다. 새로고침 없이 웹탐색이 가능하다.
// nods.js 설치 이유: npm 툴을 사용해서 라이브러리를 쉽게 설치하기 위해, create-react-app 라이브 설치 때문에
// node_modules: 설치한 라이브러리 모은 폴더
// public: static 파일 보관함(이미지, 파비콘, ...)
// src: 소스코드 보관함
// pacage.json: 설치한 라이브러리 목록

// React에서는 JSX 문법을 쓴다.(HTML 대용)
// JSX는 데이터 바인딩을 쉽게 해준다. {}안에 변수명, 함수를 써서 사용가능.


/* eslint-disable */  // --> 터미널에 뜨는 warning eslint 보기 싫으면 추가
import React, {useState} from 'react';
// 리액트 데이터 저장공간 state 만드는 법
// state를 쓰는 이유: state는 변경되면 HTML이 새로고침 없이 자동으로 재렌더링이 됨. App처럼 동작하게 만들고 싶어서
// 자주 바뀌는 중요한 데이터는 변수말고 state로 저장해서 쓰는게 좋다.

import logo from './logo.svg';
import './App.css';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '제주 맛집']);
  {/* state 사용법 */}
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  // function 제목바꾸기() {
  //   var newArray = [...글제목];
  //   {/* state를 수정하려면 복사본을 일단 만든다음 수정 deep copy [...]*/}
  //   newArray[0] = '여자 코트 추천';
  //   글제목변경(newArray);
  // }

  return (
    <div className="App">
      <div className='black-nav'>
        {/* JSX에서 Class -> ClassName으로 사용  */}
        <div>개발 Blog</div> 
      </div>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span> { 따봉 } </h3>
        {/* onClick = {클릭될 때 실행할 함수} 
            onClick = {() => {실행할 내용}}
            state를 변경할 때는 오른쪽에 같이 만들었던 변경함수 사용 
            ex) let [따봉, 따봉변경] = useState(0) 따봉변경(대체할 데이터)을 사용해서 변경함.
        */}
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>2월 19일 발행</p>
        <hr />
      </div>

      <Modal />

      {/*<button onClick={ 제목바꾸기 }>버튼</button> 
       함수를 넣을때 () 넣으면 함수 바로 실행하기 때문에 생략  */}
    </div>
  );
}

{/* 리액트의 Component 문법: 
    HTML을 한 단어로 줄여서 쓸 수 있다.
    1. 이름 첫 시작은 대문자
    2. return() 안에 있는건 태그 하나로 묶어야 함.
    3. 의미 없는 <div> 쓰기 싫으면 <></> 사용해도됨 
    4. 반복출현하는 HTML 덩어리들, 자주 변경되는 HTML UI들, 다른 페이지 만들 때 Component로 만드는게 좋음 
  
    Component 단점:
    - state 쓸때 복잡해짐
  */}

function Modal() {
  return ( 
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
   
  )
}

export default App;
