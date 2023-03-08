import React, { useState } from 'react'
import Header from './component/Header'

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <ul className="list">
        <li className="note">
          <h4 className="title">안녕하세욧</h4>
          <p>안녕하세요 1111</p>
          <div className="bottom">
            <div className="date">2022-10-20</div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </li>
        <li className="note">
          <h4 className="title">안녕하세욧</h4>
          <p>안녕하세요 1111</p>
          <div className="bottom">
            <div className="date">2022-10-20</div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </li>
        <li className="note">
          <h4 className="title">안녕하세욧</h4>
          <p>안녕하세요 1111</p>
          <div className="bottom">
            <div className="date">2022-10-20</div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </li>
        <li className="note">
          <h4 className="title">안녕하세욧</h4>
          <p>안녕하세요 1111</p>
          <div className="bottom">
            <div className="date">2022-10-20</div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </li>
        <li className="note">
          <h4 className="title">안녕하세욧</h4>
          <p>안녕하세요 1111</p>
          <div className="bottom">
            <div className="date">2022-10-20</div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </li>
      </ul>
    </div>
  )
}
