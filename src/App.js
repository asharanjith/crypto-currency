import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import HomePage from './components/homePage/homePage';
import InfoPage from './components/infoPage/infoPage';
import { fetchCoins } from './Redux/fetchCoin';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info/:id" element={<InfoPage />} />
      </Routes>
    </div>
  );
};

export default App;
