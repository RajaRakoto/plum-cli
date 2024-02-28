/* libs */
import inquirer from 'inquirer';
/* menu */
import { menu_prompt } from './menu';
/* core */
// import { install } from './core/install';
/* extras */
import { bannerRenderer } from '../utils/ascii';

// ==============================

/**
 * @description Entry point of the CLI
 */
async function plumCLI(): Promise<void> {
  // show banner
  try {
    const banner = await bannerRenderer('plum-cli');
    console.log(`${banner}\n`);
  } catch (error) {
    console.error('Error: ASCII banner rendering failed !');
    console.dir(error);
  }

  // start menu
  const menu_answers = await inquirer.prompt(menu_prompt);
  console.dir(menu_answers);
}

plumCLI();
