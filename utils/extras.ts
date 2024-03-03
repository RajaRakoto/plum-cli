/* libs */
import * as emoji from 'node-emoji';
import { execa } from 'execa';
import fs from 'fs';
import * as path from 'path';
import { devMode } from '../src';

// ==============================

/**
 * @description A function that exits the CLI
 */
export function exitCLI(): void {
  console.log(`See you soon ${emoji.get('blush')} !`);
  process.exit();
}

/**
 * @description A function that resolves the real path of a file
 * @param relativePath The relative path of the file
 * @returns The real path of the file
 */
export function resolveRealPath(relativePath: string): string {
  const sourceIndex = fs.realpathSync(process.argv[1]);
  const realPath = path.join(path.dirname(sourceIndex), relativePath);
  return realPath;
}

/**
 * @description A function that opens a file using the default application
 * @param filePath The path of the file to open
 */
export async function defaultOpen(filePath: string): Promise<void> {
  try {
    const platform = process.platform;
    const realPath = devMode ? filePath : resolveRealPath(filePath);
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
