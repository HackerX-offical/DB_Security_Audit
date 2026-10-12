import { cleanErrorMessage } from './errors';

describe('cleanErrorMessage', () => {
  it('reads message from Error objects', () => {
    expect(cleanErrorMessage(new Error('boom'))).toBe('boom');
  });
});
