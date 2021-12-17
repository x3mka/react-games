import { render } from '@testing-library/react';

import JapCrossUi from './jap-cross-ui';

describe('JapCrossUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JapCrossUi />);
    expect(baseElement).toBeTruthy();
  });
});
