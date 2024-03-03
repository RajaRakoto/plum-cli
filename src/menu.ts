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
        name: `${emoji.get('x')} unistall plum`,
        value: 'unistall',
      },
      new inquirer.Separator('================== docs =================='),
      {
        name: `${emoji.get('books')} plum docs`,
        value: 'docs',
      },
      new inquirer.Separator('================== apps =================='),
      {
        name: `${emoji.get('gear')} animate`,
        value: 'animate',
      },
      {
        name: `${emoji.get('gear')} buttons2`,
        value: 'buttons2',
      },
      {
        name: `${emoji.get('gear')} flex`,
        value: 'flex',
      },
      {
        name: `${emoji.get('gear')} grid`,
        value: 'grid',
      },
      {
        name: `${emoji.get('gear')} hover2`,
        value: 'hover2',
      },
      {
        name: `${emoji.get('gear')} magic`,
        value: 'magic',
      },
      {
        name: `${emoji.get('gear')} buttons`,
        value: 'buttons',
      },
      {
        name: `${emoji.get('gear')} oc-scheme`,
        value: 'oc-scheme',
      },
      {
        name: `${emoji.get('gear')} shadows`,
        value: 'shadows',
      },
      new inquirer.Separator('=========================================='),
      {
        name: chalk.red(`${emoji.get('door')} exit`),
        value: 'exit',
      },
    ],
  },
];
