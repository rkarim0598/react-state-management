import React, { useState } from 'react';
import './App.css';
import StatelessReviews from './StatelessReviews';
import ReviewsClass from './ReviewsClass';
import ReviewsFunction from './ReviewsFunction';
import ReviewsMobx from './ReviewsMobx';
import ReviewsWithContext from './ReviewsWithContext';
import { ReviewProvider } from './ReviewContext';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState(0);

  const modeEnum = {
    NO_STATE: 0,
    CLASS_STATE: 1,
    FUNCTION_STATE: 2,
    MOBX_STATE: 3,
    CONTEXT: 4
  }

  const componentToRender = () => {
    switch (mode) {
      case 0:
        return <StatelessReviews />
      case 1:
        return <ReviewsClass />
      case 2:
        return <ReviewsFunction />
      case 3:
        return <ReviewsMobx />
      case 4:
        return (
          <ReviewProvider>
            <ReviewsWithContext />
          </ReviewProvider>
        )
      default:
        return <StatelessReviews />
    }
  }

  const getModeString = () => {
    return Object.keys(modeEnum).filter(title => modeEnum[title] === mode)[0].split('_').join(' ').toLowerCase();
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="list-container">
          <h2 style={{ textAlign: 'center' }}>{`Book Reviews -- ${getModeString()}`}</h2>
          <div className="mode-setter-container">
            {Object.keys(modeEnum).map(title =>
              <Link to={`/${title}`} key={title} onClick={() => setMode(modeEnum[title])}>
                {title}
              </Link>
            )}
          </div>
          {Object.keys(modeEnum).map(title =>
            <Route path={`/${title}`} component={componentToRender} key={title} />
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
