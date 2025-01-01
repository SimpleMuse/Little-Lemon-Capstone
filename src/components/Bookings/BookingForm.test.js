import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { fetchAPI } from '../../assets/api/api';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText('Reserve a Table');
    expect(headingElement).toBeInTheDocument();
})

// test('Test initializeTimes', () => {
//     // Verify fetchAPI returns a non-empty array of times.
    
// })

// test('Tests the updateTimes function', () => {
//     // Do something here.
// })