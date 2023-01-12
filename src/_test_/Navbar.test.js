import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../components/navbar';

describe('Navbar', () => {
  test('should render correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
