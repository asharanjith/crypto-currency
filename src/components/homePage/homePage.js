import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './homePage.css';
import { BsInfoCircle } from 'react-icons/bs';

const HomePage = (props) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { innerwidth } = props;
  const { allData } = useSelector((state) => state.allCoins);

  return (
    <div className="homePage">
      <form className="homePage__search">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {' '}
      </form>
      <div className="homePage__products">
        {allData
          .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
          .map((product, index) => (
            <div
              className="homePage__product"
              key={product.id}
              style={index % 2 === 0 ? { backgroundColor: '#0096c7' } : { backgroundColor: '#00b4d8' }}
            >
              {innerwidth > 500 ? (
                <img
                  src={product.image.large}
                  alt={product.name}
                  className="product-image"
                />
              ) : (
                <img
                  src={product.image.small}
                  alt={product.name}
                />
              )}
              <div className="homePage__productDetails">
                <h3 className="product-name">
                  {product.name}
                &nbsp;
                  <BsInfoCircle className="infoButton" onClick={() => navigate(`/info/${product.id}`)} />
                </h3>
                <p>{product.symbol}</p>
                <p>
                  Price :$
                  {product.market_data.current_price.usd}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

HomePage.propTypes = {
  innerwidth: PropTypes.number.isRequired,
};

export default HomePage;
