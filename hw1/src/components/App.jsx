import React from 'react';
import Profile from './task1/Profile';
import Stat from './task2/Stat';
import stat from './task2/stat.json';
// import items from './task3/priceList.json';
// import PricingPlan from './task3/PricingPlan';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Stat
      stats={stat}
      // title=""
    />
    {/* <PricingPlan item={items} /> */}
  </>
);

export default App;
