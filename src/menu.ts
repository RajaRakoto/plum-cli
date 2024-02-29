import inquirer from 'inquirer';
import chalk from 'chalk';
import * as emoji from 'node-emoji';

// ==============================

export const menu_prompt = [
  {
    type: 'list',
    name: 'menu',
    message: chalk.green('What do you want to do ...'),
    loop: false,
    pageSize: 15,
    choices: [
      new inquirer.Separator('============ packages manager ============'),
      {
        name: `${emoji.get('package')} install plum`,
        value: 'install',
      },
      {
        name: `${emoji.get('arrows_counterclockwise')} check plum update`,
        value: 'update',
      },
      {
        name: `${emoji.get('x')} unistall plum`,
        value: 'unistall',
      },
      new inquirer.Separator('======== documentations (offline) ========'),
      `${emoji.get('books')} docs 1`,
      `${emoji.get('books')} docs 2`,
      `${emoji.get('books')} docs 3`,
      new inquirer.Separator('================= extras ================='),
      {
        name: `${emoji.get('bulb')} tips`,
      },
      new inquirer.Separator('=========================================='),
      {
        name: chalk.red(`${emoji.get('door')} exit`),
        value: 'exit',
      },
    ],
  },
];
