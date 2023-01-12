import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import HomePage from './components/homePage/homePage';
import InfoPage from './components/infoPage/infoPage';
import { fetchCoins } from './Redux/fetchCoin';

const App = () => {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage innerwidth={width} />} />
        <Route path="/info/:id" element={<InfoPage innerwidth={width} />} />
      </Routes>
    </div>
  );
};

export default App;
