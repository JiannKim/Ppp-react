import React, { Component } from 'react';
import './App.css';
import Kakao_clone from './components/Kakao_clone';

class App extends Component {
  render() {
    return (
      <body onload="printClock()">
        <div className="header">
          <div className="status__column">
            <span className="status__clock" id="clock"></span>
          </div>
          <div className="main">
            <div className="me__column">
              <div className="me__column me__column-info">
                <span className="me-info-nick">kim_자몽</span>
              </div>
              <div className="me__column me__column-info">
                <span className="me-info-birth">1 9 9 2 <span className="year">年</span> 8 月 4 日</span>
              </div>
              <div className="me__column me__column-info">
                <span className="me-info-github">__jiannkim.github.io</span>
              </div>
            </div>
            <div className="me__column kakao"><Kakao_clone /></div>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
