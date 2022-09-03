import React from 'react';
import axios from 'axios';
import {render, screen, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AsyncTest from 'AsyncTest';

jest.mock('axios');

describe('AsyncTest', () => {

    test('fetches stories from an API and display them, using act', async() =>{
        const stories = [{objectID: '1', title: 'Hello'}, {objectID: '2', title: 'React'}]
        
        const promise = Promise.resolve({data: {hits: stories}});

        axios.get.mockImplementationOnce(()=> promise)

        render(<AsyncTest />)

        await userEvent.click(screen.getByRole('button'));

        await act(() => promise)

        const items = await screen.findAllByRole('listitem');

        expect(items).toHaveLength(2);

        //shows you how to await a promise in a more explicit way which also works if you don't want to wait for a HTML to show up.

    })

    test('fetches stories from an API and displays them', async()=>{
        const stories = [{objectID: '1', title: 'Hello'}, {objectID: '2', title: 'React'}]

        axios.get.mockImplementationOnce(() => Promise.resolve({data: {hits: stories}}));

        render(<AsyncTest />)

        await userEvent.click(screen.getByRole('button'));

        const items = await screen.findAllByRole('listitem');

        expect(items).toHaveLength(2);
    });

    test('fetches stories from an API and fails', async()=>{
        axios.get.mockImplementationOnce(()=>{
            Promise.reject(new Error());
        })

        render(<AsyncTest />);

        await userEvent.click(screen.getByRole('button'));

        const message = await screen.findByText(/Something went wrong/);

        expect(message).toBeInTheDocument()
    })
})