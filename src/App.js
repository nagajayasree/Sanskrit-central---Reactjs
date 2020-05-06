import React from 'react';
import './index.css';
// import './App.css';
import SideNav from './Components/SideBar';
import Feed from './Components/Feed';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail.js';
import FeedDetail from './Components/FeedDetail';
import './Components/Feed.css';
import './Components/VideoList.css';
import './Components/VideoDetail.css';
import './Components/SideBar.css';
import './Components/FeedDetail.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SideNav>
          {/* <Feed></Feed> */}
        {/* <VideoList /> */}
        <VideoDetail />
        </SideNav>
        {/* <Feed /> */}
        {/* <FeedDetail/> */}
      </header>
    </div>
  );
}

export default App;