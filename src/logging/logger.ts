import { COLORS } from './colors';
import { cleanErrorMessage } from '../utils/errors';

export function logSuccess(message: string): void {
  console.log(`${COLORS.GREEN}[SUCCESS] ${message}${COLORS.RESET}`);
}

export function logFailure(message: string, error?: unknown): void {
  console.log(`${COLORS.RED}[FAILED]  ${message}${COLORS.RESET}`);
  if (error) {
    console.log(`${COLORS.YELLOW}          Reason: ${cleanErrorMessage(error)}${COLORS.RESET}`);
  }
}

export function logStep(stepNumber: number, title: string): void {
  console.log(`\n${COLORS.CYAN}${COLORS.BOLD}STEP ${stepNumber}: ${title}${COLORS.RESET}`);
  console.log(
    `${COLORS.CYAN}-------------------------------------------------------${COLORS.RESET}`,
  );
}
