import { cleanErrorMessage, generateAuditEmail } from './audit-utils';

describe('audit-utils', () => {
  it('builds unique audit emails', () => {
    expect(generateAuditEmail(123)).toBe('admin_audit_123@gyanniketan.com');
  });

  it('extracts firebase-style errors', () => {
    expect(cleanErrorMessage({ code: 'PERMISSION_DENIED' })).toBe('PERMISSION_DENIED');
    expect(cleanErrorMessage(new Error('nope'))).toBe('nope');
  });
});
