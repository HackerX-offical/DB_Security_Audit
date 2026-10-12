export function cleanErrorMessage(error: unknown): string {
  if (error && typeof error === 'object') {
    const e = error as { message?: string; code?: string };
    return e.message || e.code || 'Unknown Error';
  }
  return String(error ?? 'Unknown Error');
}
