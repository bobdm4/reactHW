import React from 'react';
import Profile from './task1/Profile';
import Stat from './task2/Stat';
import statistic from './task2/statistic.json';
import PricingPlan from './task3/PricingPlan';
import priceList from './task3/priceList.json';
import TransactionHistory from './task4/TransactionHistory';
import transactionList from './task4/transaction.json';

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
      stats={statistic}
      // title=""
    />
    <PricingPlan items={priceList} />

    <TransactionHistory items={transactionList} />
  </>
);

export default App;
