export function buildEscalationProfile(displayName: string, email: string) {
  return {
    displayName,
    email,
    role: 'admin',
    isAdmin: true,
    permissions: ['read', 'write', 'delete', 'manage_users'],
  };
}
