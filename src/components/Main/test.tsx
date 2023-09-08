import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from '.';

describe('<Main/>', () => {
  it('should render the heading', () => {
    render(<Main />);
    expect(
      screen.getByRole('heading', { name: /won games/i })
    ).toBeInTheDocument();
  });
});
