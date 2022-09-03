import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

describe('Search', () => {
    test('calls the onChange callback handler', async () => {
      const onChange = jest.fn();
  
      render(
        <Search value="" onChange={onChange}>
          Search:
        </Search>
      );

    //   fireEvent.change(screen.getByRole('textbox'), {
    //     target: { value: 'JavaScript' },
    //   });
  
    // expect(onChange).toHaveBeenCalledTimes(1);

      await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
  
      expect(onChange).toHaveBeenCalledTimes(10);
    });
});