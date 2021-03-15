import React, { useState } from 'react';
import LineGraph from './LineGraph/LineGraph';
import './NewsFeed.css';
import TimeLine from './TimeLine/TimeLine';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

function NewsFeed() {
  const [popularTopics, setpopularTopics] = useState([
    'Technology',
    'Top Movies',
    'Earnings',
    'Hot Stocks',
    'Crypto',
    'Cannabis',
    'India',
    'Tesla',
    "Index EFT's",
  ]);
  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolio">
            <h1>$114,685.01</h1>
            <small> &#x2B; $14.56 (&#9662; 0.004%) Today</small>
          </div>
          {/* chart section */}
          <div className="newsfeed__chart">
            <LineGraph />
            <TimeLine />
          </div>
        </div>
        <div className="newsfeed__buying__section">
          <h2> Buying Power</h2>
          <h2> $4.11</h2>
        </div>
        <div className="newsfeed__market__section">
          <div className="newsfeed__market__box">
            <p> Markets Closed</p>
            <h1> Happy Thanksgiving</h1>
          </div>
        </div>
        <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
            <h1>Popular lists</h1>
            <p>Show More</p>
          </div>
          <div className="newsfeed_popularlists_badges">
            {popularTopics.map((topic) => (
              <Chip
                className="topic__badge"
                variant="outlined"
                label={topic}
                avatar={
                  <Avatar
                    src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
