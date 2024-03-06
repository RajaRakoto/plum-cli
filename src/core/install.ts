/* libs */
import inquirer from 'inquirer';
import chalk from 'chalk';
import * as emoji from 'node-emoji';
import ora from 'ora';
/* index */
import { plumPackageName, devMode } from '..';
/* core */
import { create } from './create';
import { restart } from './restart';
/* utils */
import {
  pkgInstaller,
  pkgFileDetector,
  pkgManagerDetector,
} from '../../utils/pkg';
/* types */
interface I_install_answers {
  install: boolean;
  pkgManager: string;
}
// ==============================

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
  const start_install_msg = `start installation using ${install_answers.pkgManager}, please wait ${emoji.get('wink')} ...`;
  let installProcess: boolean = true;

  // check if project exists
  if (!pkgFileDetector() && !pkgManagerDetector() && install_answers.install) {
    installProcess = await create(install_answers.pkgManager);
  }

  // installation process
  if (installProcess && install_answers.install) {
    console.log(start_install_msg);

    const spinner = ora('Installing plum package ...');
    spinner.start();

    switch (install_answers.pkgManager) {
      case 'npm' || 'yarn' || 'pnpm' || 'bun':
        devMode
          ? await pkgInstaller(install_answers.pkgManager)
          : await pkgInstaller(
              install_answers.pkgManager,
              true,
              plumPackageName,
            );
        await restart(spinner);
        break;
      default:
        devMode
          ? await pkgInstaller('npm')
          : await pkgInstaller('npm', true, plumPackageName);
        await restart(spinner);
        break;
    }
  } else {
    restart();
  }
}
