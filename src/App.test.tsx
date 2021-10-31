import React from 'react';
import { render} from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
    const wrapper = render(<App />);
    const title = wrapper.getByText("Todos");
    expect(title).toBeInTheDocument();
});
