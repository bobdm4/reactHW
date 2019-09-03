import React from 'react';

import Reader from './task1Reader/Reader';
import items from './task1Reader/publication.json';

import MovieGrid from './task2Movie/MovieGrid';
import movie from './task2Movie/movie.json';

const App = () => (
  <>
    <Reader items={items} />
    <MovieGrid items={movie} />
  </>
);

export default App;
