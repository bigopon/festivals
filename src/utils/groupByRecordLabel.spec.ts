import { describe, it, expect } from 'vitest'
import { groupByRecordLabel } from './groupByRecordLabel';
import festivals from '../../festivals.json';
import { MusicFestival } from '../types';

describe('groupByRecordLabel', () => {
  const mockData: MusicFestival[] = [
    { name: 'fes1', bands: [
      { name: 'band_1', recordLabel: 'company_1' },
      { name: 'band_2', recordLabel: 'company_2' },
    ]}
  ]

  it('groups festival data by record label', () => {
    const output = groupByRecordLabel(mockData);

    expect(output).toEqual({
      company_1: {
        band_1: ['fes1'],
      },
      company_2: {
        band_2: ['fes1'],
      }
    })
  });
});
