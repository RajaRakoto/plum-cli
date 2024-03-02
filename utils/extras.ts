/* libs */
import * as emoji from 'node-emoji';
import { execa } from 'execa';

// ==============================

export function exitCLI(): void {
  console.log(`See you soon ${emoji.get('blush')} !`);
  process.exit();
}

export async function openInBrowser(filePath: string): Promise<void> {
  try {
    const platform = process.platform;
    let execCMD: string = '';

    switch (platform) {
      case 'win32':
        execCMD = 'start';
        break;
      case 'darwin':
        execCMD = 'open';
        break;
      case 'linux' || 'freebsd' || 'openbsd' || 'sunos':
        execCMD = 'xdg-open';
        break;
      default:
        console.error('\n\nError: Unsupported OS');
        return;
    }

    await execa(execCMD, [filePath]);
  } catch (error) {
    console.error('\n\nError during opening:', error);
  }
}
