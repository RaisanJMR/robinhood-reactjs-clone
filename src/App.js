import React from 'react';
import './App.css';
import Header from './Header/Header';
import NewsFeed from './NewsFeed/NewsFeed';
import Stats from './Stats/Stats';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <NewsFeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
