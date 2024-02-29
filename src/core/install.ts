/* libs */
import inquirer from 'inquirer';
import chalk from 'chalk';
import * as emoji from 'node-emoji';
/* core */
import { restart } from './restart';
/* utils */
import { pkgInstaller, pkgManagerDetector } from '../../utils/pkg';
/* types */
interface I_install_answers {
  install: boolean;
  pkgManager: string;
}
// ==============================

const testMode = true;
const plumPackageName = '@rajarakoto/plum';
const packageLists = ['npm', 'yarn', 'pnpm', 'bun'].map((pkg) => {
  return `${emoji.get('package')} ${pkg}`;
});

const install_prompt = [
  {
    type: 'confirm',
    name: 'install',
    message: chalk.green(
      'Do you want to install plum package in the current directory ?',
    ),
    default: true,
  },
  {
    type: 'list',
    name: 'pkgManager',
    message: chalk.green('Install plum package with:'),
    loop: true,
    choices: [
      {
        name: packageLists[0],
        value: 'npm',
      },
      {
        name: packageLists[1],
        value: 'yarn',
      },
      {
        name: packageLists[2],
        value: 'pnpm',
      },
      {
        name: packageLists[3],
        value: 'bun',
      },
    ],
    default: 'npm',
    when: (answers: I_install_answers): boolean => answers.install,
  },
];

export async function install(): Promise<void> {
  const install_answers = await inquirer.prompt(install_prompt);
  if (install_answers.install) {
    console.log(
      `start installation using ${emoji.get('package')} ${pkgManagerDetector()}, please wait ${emoji.get('wink')} ...`,
    );

    switch (install_answers.pkgManager) {
      case 'npm':
        testMode
          ? await pkgInstaller('npm')
          : await pkgInstaller('npm', true, plumPackageName);
        await restart();
        break;
      case 'yarn':
        testMode
          ? await pkgInstaller('yarn')
          : await pkgInstaller('yarn', true, plumPackageName);
        await restart();
        break;
      case 'pnpm':
        testMode
          ? await pkgInstaller('pnpm')
          : await pkgInstaller('pnpm', true, plumPackageName);
        await restart();
        break;
      case 'bun':
        testMode
          ? await pkgInstaller('bun', true)
          : await pkgInstaller('bun', true, plumPackageName);
        await restart();
        break;
      default:
        testMode
          ? await pkgInstaller('npm')
          : await pkgInstaller('npm', true, plumPackageName);
        await restart();
        break;
    }
  }
}
