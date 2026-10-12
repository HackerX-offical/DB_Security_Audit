import { generateAuditEmail } from './audit-email';

describe('generateAuditEmail', () => {
  it('embeds timestamp and domain', () => {
    expect(generateAuditEmail(123)).toBe('admin_audit_123@gyanniketan.com');
  });
});
