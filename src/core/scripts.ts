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

const scripts_path = './scripts/';
const scripts_default_folder = './plum-scripts';

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
  const targetFolder = devMode
    ? scripts_default_folder
    : scripts_answers.scripts;

  switch (fileName) {
    case 'bootstrap':
    case 'buttons2':
      copyFile(`${scripts_path}${fileName}.min.js`, targetFolder);
      break;
    default:
      console.log(`${fileName} is not a recognized file !`);
  }
  restart();
}
