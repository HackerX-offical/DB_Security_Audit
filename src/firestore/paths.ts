export const USERS_COLLECTION = 'users';
export const AUDIT_LOGS_COLLECTION = 'audit_logs';

export function userDocPath(uid: string): string {
  return `${USERS_COLLECTION}/${uid}`;
}
