import React from 'react';
import { render} from '@testing-library/react';
import AppHeader from './header'

test('renders without crashing', () => {
    const wrapper = render(<AppHeader />);
    const title = wrapper.getByText("Todos");
    expect(title).toBeInTheDocument();
});
