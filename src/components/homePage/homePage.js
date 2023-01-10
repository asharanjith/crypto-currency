import React from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import './homePage.css';

const HomePage = () => {
  // const [search, setSearch] = useState('');
  // const navigate = useNavigate();
  const { allData } = useSelector((state) => state.allCoins);

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
            <img src={product.image.small} alt={product.name} />
            <div className="homePage__productDetails">
              <h3>{product.name}</h3>
              <p>{product.symbol}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
