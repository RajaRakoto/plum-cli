/* libs */
import inquirer from 'inquirer';
import chalk from 'chalk';
/* index */
import { devMode } from '..';
/* utils */
import { copyFile } from '../../utils/extras';
/* core */
import { restart } from './restart';

// ==============================

const scripts_prompt = [
  {
    type: 'input',
    name: 'scripts',
    message: chalk.green(
      'Enter the name of the folder to copy (in the current directory)',
    ),
    default: 'plum-scripts',
  },
];

export async function scripts(fileName: string): Promise<void> {
  const scripts_answers = await inquirer.prompt(scripts_prompt);

  switch (fileName) {
    case 'bootstrap':
      devMode
        ? copyFile('./scripts/bootstrap.min.js')
        : copyFile('./scripts/bootstrap.min.js', scripts_answers.scripts);
      break;
    case 'buttons2':
      devMode
        ? copyFile('./scripts/buttons2.min.js')
        : copyFile('./scripts/buttons2.min.js', scripts_answers.scripts);
      break;
    default:
      console.log(`${fileName} is not a recognized file !`);
  }
  restart();
}
