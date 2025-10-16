import {describe, expect, it} from 'vitest';
import {findAllByText, render, screen, fireEvent} from '@testing-library/react'
import App from './App';

describe('Test cases for string calc application', () => {
    it('The component must be rendered', async () => {
        render(<App/>);
        const element = await findAllByText(document.body, 'String Calculator');
        expect(element).toBeDefined();
    });
    it('Validation check', async () => {
        render(<App/>);
        const button = await screen.findAllByTestId('Calculate');
        button[0].click();
        const element = await screen.findAllByText('Error: Invalid input');
        expect(element).toBeDefined();
    });
    it('Test case for normal input', async () => {
        render(<App/>);
        const inputField = await screen.findAllByTestId('input-field');
        fireEvent.change(inputField[0], { target: { value: '1\n2,3' } });
        const button = await screen.findAllByTestId('Calculate');
        button[0].click();
        const element = await screen.findAllByText('Result: 6');
        expect(element).toBeDefined();
    });
    it('Test case for custom input edgecase', async () => {
        render(<App/>);
        const inputField = await screen.findAllByTestId('input-field');
        fireEvent.change(inputField[0], { target: { value: '1\n24)(9*1509po10' } });
        const button = await screen.findAllByTestId('Calculate');
        button[0].click();
        const element = await screen.findAllByText('Result: 1553');
        expect(element).toBeDefined();
    });
})