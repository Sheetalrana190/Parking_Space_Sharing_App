import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App Navigation', () => {
  it('renders the Home screen by default', () => {
    const screen = render(<App />);
    expect(screen.getByText('Lot A')).toBeTruthy(); // or 'Lot B', 'Lot C'
  });

  it('renders successfully', () => {
    const screen = render(<App />);
    expect(screen).toBeDefined();
  });
});