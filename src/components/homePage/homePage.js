import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './homePage.css';
import { BsInfoCircle } from 'react-icons/bs';

const HomePage = () => {
  // const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { allData } = useSelector((state) => state.allCoins);
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="homePage">
      {/* <form className="homePage__search">
        <input type="text" placeholder="Search" value={search}
        onChange={(e) => setSearch(e.target.value)} />
        /* <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/search/${search}`);
          }}
        >
          Search
        </button>
      </form> */}
      <div className="homePage__products">
        {allData.map((product) => (
          <div className="homePage__product" key={product.id}>
            {width > 500 ? (
              <img src={product.image.large} alt={product.name} className="product-image" />
            ) : (
              <img src={product.image.small} alt={product.name} />
            )}
            <div className="homePage__productDetails">
              <h3 className="product-name">
                {product.name}
                &nbsp;
                <BsInfoCircle onClick={() => navigate(`/info/${product.id}`)} />
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

export default HomePage;
