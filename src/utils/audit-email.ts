export function generateAuditEmail(timestamp: number, domain = 'gyanniketan.com'): string {
  return `admin_audit_${timestamp}@${domain}`;
}
