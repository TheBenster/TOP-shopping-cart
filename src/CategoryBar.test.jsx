import React from 'react';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import CategoryBar from './components/CategoryBar';

// Mock the useFetch hook
vi.mock('./hooks/useFetch', () => ({
  default: vi.fn(),
}));
import useFetch from './hooks/useFetch';

describe('CategoryBar', () => {
  beforeEach(() => {
    // clears data after unmount
    useFetch.mockReset();
  });

  it('renders categories when data is fetched', async () => {
    const categories = ['category1', 'category2', 'category3'];
    useFetch.mockReturnValue({ data: categories, isLoading: false, error: null });

    const { getAllByText } = render(<CategoryBar />);

    // are all categories rendered?
    categories.forEach((category) => {
      expect(getAllByText(category)).toHaveLength(1);
    });
  });

  it('renders loading state when fetching data', async () => {
    useFetch.mockReturnValue({ data: [], isLoading: true, error: null });

    const { getByText } = render(<CategoryBar />);

    // check if loading state is rendered
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error message when an error occurs', async () => {
    const errorMessage = 'Failed to fetch data';
    useFetch.mockReturnValue({ data: [], isLoading: false, error: errorMessage });

    const { getByText } = render(<CategoryBar />);

    // check if error message is rendered
    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});