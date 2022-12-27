import React, { useEffect, useState } from 'react';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';

import MovieRow from './components/MovieRow/MovieRow';
import Tmdb from './Tmdb';

import './App.css';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Getting data
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Getting featured movie data
      let originals = list.filter((i) => i.slug === 'originals');
      let randomChose = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChose];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    };
    loadAll();
  }, []);
  return (
    <div className="page">
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};

export default App;
