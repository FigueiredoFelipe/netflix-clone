import React, { useEffect } from 'react';
import Tmdb from './Tmdb';

const App = () => {
  useEffect(() => {
    const loadAll = async () => {
      // Getting data
      let list = await Tmdb.getHomeList();
      console.log(list);
      // Tutorial paused at 41:12
    };
    loadAll();
  }, []);
  return <div>Hello world!</div>;
};

export default App;
