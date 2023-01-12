import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../components/homePage/homePage';
import fetchCoinReducer from '../Redux/fetchCoin';

const store = configureStore({
  reducer: {
    allCoins: fetchCoinReducer,
  },
});

describe('HomePage', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
