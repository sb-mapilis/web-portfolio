import React from 'react';
import { render } from '@testing-library/react';
import CornerLines from '../component/CornerLines'; // 👈 correct relative path

describe('CornerLines', () => {
  test('renders without crashing', () => {
    const { container } = render(<CornerLines />);
    expect(container).toBeInTheDocument();
  });

  test('renders 3 horizontal lines', () => {
    const { container } = render(<CornerLines />);
    const hLines = container.querySelectorAll('.h-line');
    expect(hLines.length).toBe(3);
  });

  test('renders 3 vertical lines', () => {
    const { container } = render(<CornerLines />);
    const vLines = container.querySelectorAll('.v-line');
    expect(vLines.length).toBe(3);
  });
});
