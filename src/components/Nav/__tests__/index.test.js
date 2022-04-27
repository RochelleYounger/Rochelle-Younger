import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
afterEach(cleanup);

describe('Nav component', () => {
  it('Baseline test', () => {
    render(<Nav />);
  });

  // Second Test
  it('DOM node structure matches snapshot', () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      expect(getByTestId('link')).toHaveTextContent('Rochelle Younger');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })
})