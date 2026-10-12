import { buildEscalationProfile } from './admin-profile';

describe('buildEscalationProfile', () => {
  it('marks admin flags for mass-assignment probe', () => {
    const profile = buildEscalationProfile('Audit Bot', 'a@b.com');
    expect(profile.isAdmin).toBe(true);
    expect(profile.role).toBe('admin');
  });
});
