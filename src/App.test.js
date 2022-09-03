import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', ()=>{
  test('checks if App renders', async()=>{
    render(<App />);
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    expect(screen.queryByText(/Signed in as/)).toBeNull();
    screen.debug();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

    expect(screen.queryByText(/Searches for Javascript/)).toBeNull;

    // fireEvent.change(screen.getByRole('textbox'), {target: {value: 'Javascript'}});
    userEvent.type(screen.getByRole('textbox'), 'Javascript')
    expect(screen.queryByText(/Searches for Javascript/)).toBeInTheDocument;

    screen.debug();
  })
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument(); 7241457387 
// });
