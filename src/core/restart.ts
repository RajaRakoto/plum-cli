/* libs */
import inquirer from 'inquirer';
import chalk from 'chalk';
/* index */
import { plumCLI } from '..';
/* utils */
import { exitCLI } from '../../utils/extras';

// ==============================

const restart_prompt = [
  {
    type: 'confirm',
    name: 'restart',
    message: chalk.gray('Return to main menu ?'),
    default: true,
  },
];

export async function restart(): Promise<void> {
  const restart_answers = await inquirer.prompt(restart_prompt);
  if (restart_answers.restart) {
    plumCLI();
  } else {
    exitCLI();
  }
}
