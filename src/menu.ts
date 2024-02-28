/* libs */
import inquirer from 'inquirer';
import chalk from 'chalk';

// ==============================

export const menu_prompt = [
  {
    type: 'list',
    name: 'menu',
    message: chalk.green('What do you want to do ...'),
    loop: false,
    choices: [
      new inquirer.Separator('============ packages manager ============'),
      {
        name: 'install plum',
        value: 'install',
      },
      {
        name: 'unistall plum',
        value: 'unistall',
      },
      {
        name: 'check plum update',
        value: 'update',
      },
      new inquirer.Separator('======== documentations (offline) ========'),
      'docs 1',
      'docs 2',
      'docs 3',
      new inquirer.Separator('================= extras ================='),
      {
        name: 'tips',
      },
      new inquirer.Separator('=========================================='),
      {
        name: chalk.red('exit'),
        value: 'exit',
      },
    ],
  },
];
