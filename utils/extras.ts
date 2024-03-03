/* libs */
import * as emoji from 'node-emoji';
import { execa } from 'execa';
import * as path from 'path';
/* index */
import { devMode } from '../src';

// ==============================

export function exitCLI(): void {
  console.log(`See you soon ${emoji.get('blush')} !`);
  process.exit();
}

export async function openInBrowser(filePath: string): Promise<void> {
  try {
    const platform = process.platform;
    const realPath = devMode ? filePath : path.join(__dirname, filePath);
    let execCMD: string = '';

    switch (platform) {
      case 'win32':
        execCMD = 'start';
        break;
      case 'darwin':
        execCMD = 'open';
        break;
      case 'linux':
      case 'freebsd':
      case 'openbsd':
      case 'sunos':
        execCMD = 'xdg-open';
        break;
      default:
        console.error('\n\nError: Unsupported OS');
        return;
    }

    await execa(execCMD, [realPath]);
  } catch (error) {
    console.error('\n\nError during opening:', error);
  }
}
