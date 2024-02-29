import { execa } from 'execa';
import chalk from 'chalk';
import * as emoji from 'node-emoji';

// ==============================

/**
 * @description A function that installs a package using a package manager of choice (npm, yarn, pnpm, bun)
 * @param pkgManager The package manager to use
 * @param dev Whether to install the package as a development dependency (default: false)
 * @param pkg The package to install (default: @nlekane/dummy-npm-package)
 */
export async function pkgInstaller(
  pkgManager: string,
  dev: boolean = false,
  pkg: string = '@nlekane/dummy-npm-package',
): Promise<void> {
  const commandOptions = dev ? ['--dev'] : [];
  const installCMD = pkgManager === 'yarn' ? 'add' : 'install';

  try {
    await execa(pkgManager, [installCMD, ...commandOptions, pkg]);
    console.log(chalk.green(`Installation completed ${emoji.get('grin')} !`));
  } catch (error) {
    console.error('Error during installation:', error);
  }
}
