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
          <h3>{product.name}</h3>
          <p>{product.symbol}</p>
          <p>
            Price:
            {product.market_data.current_price.usd}
          </p>
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
    </div>
  );
};

InfoPage.propTypes = {
  innerwidth: PropTypes.number.isRequired,
};

export default InfoPage;
