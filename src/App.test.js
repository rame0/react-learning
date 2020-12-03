import { render, screen } from '@testing-library/react';
import {App} from './App';
import React from "react";

test('Renders App', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is home/i);
  expect(linkElement).toBeInTheDocument();
});
