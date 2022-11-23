import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecordListing } from './RecordListing';

describe('<RecordListing />', () => {

  it('displays record data', () => {
    const mockData = {
      comp_1: {
        band_1: ['fes 1']
      }
    };
    render(<RecordListing record={mockData} />);

    expect(screen.queryByText('fes 1', { selector: 'li' })).not.toBeNull();
  });

  it('displays empty record label as self register', () => {
    const mockData = {
      '': {
        band_1: ['fes 1']
      }
    };
    render(<RecordListing record={mockData} />);

    expect(screen.queryByText('Self register', { exact: false })).not.toBeNull();
  });
});
