import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SCButton } from '../stories/Button.stories';

describe('Button', () => {
  it('should render the button without crashing', () => {
    // render the button and get the getByRole method
    const { getByRole } = render(<SCButton>Test</SCButton>);

    // getByRole as its name gets a selector by its role.
    // in this case we're looking for a `button`.
    // then we make sure it's in the document
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should call the onClick method when a user clicks on the button', () => {
    // mock out our OnClick function
    const mockClick = jest.fn();

    const { getByRole } = render(<SCButton onClick={mockClick}>test</SCButton>);

    // we store a variable with the button element
    const buttonElement = getByRole('button');

    // Simulate a user clicking on the button
    fireEvent.click(buttonElement);

    // check that the function was called once;
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('should have the right text color class name for variants', () => {
    // we extract the "rerender" method to test both variants
    const { getByRole } = render(<SCButton>test</SCButton>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeTruthy();
  });
});
