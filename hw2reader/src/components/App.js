import React from 'react';

import Reader from './Reader/Reader';
import items from './publication.json';

const App = () => (
  <>
    <Reader items={items} />
  </>
);

export default App;
