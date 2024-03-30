/* libs */
import { execa } from 'execa';
import chalk from 'chalk';
import * as emoji from 'node-emoji';
import fs from 'fs';

/* constants */
import { DEV_PACKAGE } from '@/constants';

// ==============================

/**
 * @description A function that detect the package.json file in the current directory
 */
export function pkgFileDetector(): boolean {
  const pkgFile = fs.existsSync('package.json');
  return pkgFile ? true : false;
}

/**
 * @description A function that detects the package manager used in the current project
 * @returns The package manager detected in the current project
 */
export function pkgManagerDetector(): string | null {
  const npmLock = fs.existsSync('package-lock.json');
  const yarnLock = fs.existsSync('yarn.lock');
  const pnpmLock = fs.existsSync('pnpm-lock.yaml');
  const bunLock = fs.existsSync('bun.lockb');

  if (npmLock) return 'npm';
  if (yarnLock) return 'yarn';
  if (pnpmLock) return 'pnpm';
  if (bunLock) return 'bun';

  return null;
}

/**
 * @description A function that installs a package using a package manager of choice (npm, yarn, pnpm, bun)
 * @param pkgManager The package manager to use
 * @param dev Whether to install the package as a development dependency (default: false)
 * @param pkg The package to install (default: @nlekane/dummy-npm-package)
 */
export async function pkgInstaller(
  pkgManager: string,
  dev: boolean = false,
  pkg: string = DEV_PACKAGE,
): Promise<void> {
  const commandOptions = dev ? ['--dev'] : [];
  const installCMD = pkgManager === 'yarn' ? 'add' : 'install';

  try {
    await execa(pkgManager, [installCMD, ...commandOptions, pkg]);
    console.log(
      chalk.green(`\n\nInstallation completed ${emoji.get('grin')} !`),
    );
  } catch (error) {
    console.error('\n\nError during installation:', error);
  }
}

/**
 * @description A function that uninstalls a package using the detected package manager
 * @param pkg The package to uninstall (default: @nlekane/dummy-npm-package)
 */
export async function pkgUninstaller(
  pkg: string = DEV_PACKAGE,
): Promise<void> {
  const pkgManager = await pkgManagerDetector();
  if (!pkgManager) {
    console.error(
      chalk.red(`\n\nNo package detected ${emoji.get('worried')} !`),
    );
    return;
  }

  let uninstallCMD;
  if (pkgManager === 'bun' || pkgManager === 'yarn') {
    uninstallCMD = 'remove';
  } else {
    uninstallCMD = 'uninstall';
  }

  try {
    await execa(pkgManager, [uninstallCMD, pkg]);
    console.log(
      chalk.green(`\n\nUninstallation completed ${emoji.get('sob')} !`),
    );
  } catch (error) {
    console.error('\n\nError during uninstallation:', error);
  }
}
