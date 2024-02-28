/* libs */
import inquirer from 'inquirer';
import chalk from 'chalk';
/* index */
import { plumCLI } from '..';

// ==============================

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
    choices: ['npm', 'yarn', 'pnpm', 'bun'],
    default: 'npm',
  },
];

export async function install(): Promise<void> {
  const install_answers = await inquirer.prompt(install_prompt);
  if (install_answers.inProject) {
    console.log('start installation ...');

    switch (install_answers.pkgManager) {
      case 'npm':
        console.log('npm selected !');
        break;
      case 'yarn':
        console.log('yarn selected !');
        break;
      case 'pnpm':
        console.log('pnpm selected !');
        break;
      case 'bun':
        console.log('bun selected !');
        break;
      default:
        console.log('npm selected !');
        break;
    }
  } else {
    plumCLI();
  }
}
