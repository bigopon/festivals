import { describe, it, expect } from 'vitest'
import { groupByRecordLabel } from './groupByRecordLabel';
import festivals from '../../festivals.json';
import { MusicFestival } from '../types';

describe('groupByRecordLabel', () => {

  it('groups festival data by record label', () => {
    const mockData: MusicFestival[] = [
      { name: 'fes1', bands: [
        { name: 'band_1', recordLabel: 'company_1' },
        { name: 'band_2', recordLabel: 'company_2' },
      ]}
    ];
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

  it('groups multiple music festivals of the same band', () => {
    const mockData: MusicFestival[] = [
      { name: 'fes1', bands: [
        { name: 'band_1', recordLabel: 'company_1' },
      ]},
      { name: 'fes2', bands: [
        { name: 'band_1', recordLabel: 'company_1' },
      ]}
    ];
    const output = groupByRecordLabel(mockData);

    expect(output).toEqual({
      company_1: {
        band_1: ['fes1', 'fes2'],
      },
    })
  });

  it('groups multiple festivals of the same band under different companies', () => {
    const mockData: MusicFestival[] = [
      { name: 'fes1', bands: [
        { name: 'band_1', recordLabel: 'company_1' },
      ]},
      { name: 'fes2', bands: [
        { name: 'band_1', recordLabel: 'company_2' },
      ]}
    ];
    const output = groupByRecordLabel(mockData);

    expect(output).toEqual({
      company_1: {
        band_1: ['fes1'],
      },
      company_2: {
        band_1: ['fes2']
      }
    })
  });

  it('ignores festival with invalid name', () => {
    const mockData: MusicFestival[] = [
      { name: undefined as any, bands: [
        { name: 'band_1', recordLabel: 'company_1' },
      ]}
    ];
    const output = groupByRecordLabel(mockData);

    expect(output).toEqual({});
  });

  it('groups band without company record label together', () => {
    const mockData: MusicFestival[] = [
      { name: 'fes1', bands: [
        { name: 'band_1', recordLabel: '' },
      ]},
      { name: 'fes2', bands: [
        { name: 'band_1', recordLabel: undefined as any },
      ]},
    ];
    const output = groupByRecordLabel(mockData);

    expect(output).toEqual({
      'No record label': {
        'band_1': ['fes1', 'fes2']
      }
    });
  });
});
