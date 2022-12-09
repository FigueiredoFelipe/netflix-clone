import React, { useEffect, useState } from 'react';

import MovieRow from './components/MovieRow/MovieRow';
import Tmdb from './Tmdb';

import './App.css';

const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Getting data
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);
  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};

export default App;
// Aula parou no 55:49 https://www.youtube.com/watch?v=tBweoUiMsDg&list=WL&index=6&t=781s
