import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCoins } from '../../Redux/fetchCoin';
import './infoPage.css';

const InfoPage = (props) => {
  const { id } = useParams();
  const { innerwidth } = props;
  const { allData } = useSelector((state) => state.allCoins);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const filteredData = allData.filter((product) => product.id === id);
  const product = filteredData[0];

  return (
    <div className="infoPage">
      <div className="infoPage__product">
        {innerwidth > 500 ? (
          <img src={product.image.large} alt={product.name} className="product-image-detail" />
        ) : (
          <img src={product.image.small} alt={product.name} className="product-image-detail" />
        )}
        <div className="infoPage__productDetails">
          <h3>
            {product.name }
            &nbsp;
            {' ( '}
            {product.symbol}
            {' )'}
          </h3>

          <div className="market_data">
            <p>
              Price in USD
&nbsp;&nbsp;&nbsp;
              {product.market_data.current_price.usd}
            </p>
            <p>
              Last updated on
              &nbsp;
              {product.last_updated}
            </p>
            <p>
              Total Volume in USD
              &nbsp;&nbsp;&nbsp;
              {product.market_data.total_volume.usd}

            </p>

            <p>
              Price change in 24h
              &nbsp;&nbsp;&nbsp;
              {product.market_data.price_change_24h}

            </p>

            <p>
              Price change % in 1yr
              &nbsp;&nbsp;&nbsp;
              {product.market_data.price_change_percentage_1y}

            </p>

            <p>
              Market cap
              &nbsp;&nbsp;&nbsp;
              {product.market_data.market_cap.usd}

            </p>

            <p>
              Total supply
              &nbsp;&nbsp;&nbsp;
              {product.market_data.total_supply}

            </p>

            <p>
              Circulating supply
              &nbsp;&nbsp;&nbsp;
              {product.market_data.circulating_supply}

            </p>

          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          navigate('/');
        }}
      >
        Go Back
      </button>
      <footer>
        Copyright reserved. All rights reserved
      </footer>
    </div>
  );
};

InfoPage.propTypes = {
  innerwidth: PropTypes.number.isRequired,
};

export default InfoPage;
