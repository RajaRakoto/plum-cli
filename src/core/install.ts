/* libs */
import inquirer from 'inquirer';
import chalk from 'chalk';
import * as emoji from 'node-emoji';
/* index */
import { plumCLI } from '..';
/* extras */
import { pkgInstaller } from '../../utils/pkg';
/* types */
interface I_install_answers {
  inProject: boolean;
  pkgManager: string;
}
// ==============================

const plumPackageName = '@rajarakoto/plum';
const testMode = true;
const packageLists = ['npm', 'yarn', 'pnpm', 'bun'].map((pkg) => {
  return `${emoji.get('package')} ${pkg}`;
});

const install_prompt = [
  {
    type: 'confirm',
    name: 'inProject',
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
    when: (answers: I_install_answers): boolean => answers.inProject,
  },
];

export async function install(): Promise<void> {
  const install_answers = await inquirer.prompt(install_prompt);
  if (install_answers.inProject) {
    console.log(`start installation, please wait ${emoji.get('wink')} ...`);

    switch (install_answers.pkgManager) {
      case 'npm':
        testMode
          ? pkgInstaller('npm')
          : pkgInstaller('npm', true, plumPackageName);
        break;
      case 'yarn':
        testMode
          ? pkgInstaller('yarn')
          : pkgInstaller('yarn', true, plumPackageName);
        break;
      case 'pnpm':
        testMode
          ? pkgInstaller('pnpm')
          : pkgInstaller('pnpm', true, plumPackageName);
        break;
      case 'bun':
        testMode
          ? pkgInstaller('bun', true)
          : pkgInstaller('bun', true, plumPackageName);
        break;
      default:
        testMode
          ? pkgInstaller('npm')
          : pkgInstaller('npm', true, plumPackageName);
        break;
    }
  } else {
    plumCLI();
  }
}
