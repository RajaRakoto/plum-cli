import * as emoji from 'node-emoji';

// ==============================

export function exitCLI(): void {
  console.log(`See you soon ${emoji.get('blush')} !`);
  process.exit();
}
