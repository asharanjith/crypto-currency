import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect';
import InfoPage from '../components/infoPage/infoPage';
import fetchCoinReducer from '../Redux/fetchCoin';

jest.mock('react-redux');

const store = configureStore({
  reducer: {
    allCoins: fetchCoinReducer,
  },
});

describe('HomePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <InfoPage />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
