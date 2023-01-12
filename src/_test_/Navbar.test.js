import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavBar from '../components/navbar';

jest.mock('react-redux');
describe('Navbar', () => {
  test('should render correctly', () => {
    const tree = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
