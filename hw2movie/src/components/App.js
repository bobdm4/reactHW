import React from 'react';


import MovieGrid from './MovieGrid/MovieGrid';
import movie from './movie.json';

const App = () => (
  <>
    <MovieGrid items={movie} />
  </>
);

export default App;
