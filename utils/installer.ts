import { execa } from 'execa';
import chalk from 'chalk';
import * as emoji from 'node-emoji';

// ==============================

/**
 * @description A function that installs a package using a package manager of choice (npm, yarn, pnpm, bun)
 * @param pkgManager The package manager to use
 * @param pkg The package to install (default: @nlekane/dummy-npm-package)
 */
export async function pkgInstaller(
  pkgManager: string,
  pkg?: string,
): Promise<void> {
  try {
    const pkgTest = '@nlekane/dummy-npm-package';
    await execa(pkgManager, ['install', pkg || pkgTest]);
    console.log(chalk.green(`Installation completed ${emoji.get('grin')} !`));
  } catch (error) {
    console.error('Error during installation:', error);
  }
}
