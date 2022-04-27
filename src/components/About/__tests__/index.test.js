import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
afterEach(cleanup);

describe('About component', () => {
  // First Test
  it('Baseline test', () => {
    render(<About />);
  });

  // Second Test
  it('DOM node structure matches snapshot', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
})