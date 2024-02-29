/* libs */
import inquirer from 'inquirer';
import * as emoji from 'node-emoji';
/* menu */
import { menu_prompt } from './menu';
/* core */
import { install } from './core/install';
/* extras */
import { bannerRenderer } from '../utils/ascii';

// ==============================

/**
 * @description Entry point of the CLI
 */
export async function plumCLI(): Promise<void> {
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

  // switch menu
  switch (menu_answers.menu) {
    case 'install':
      install();
      break;
    case 'unistall':
      console.log('selected: unistall');
      break;
    case 'update':
      console.log('selected: update');
      break;
    case 'tips':
      console.log('selected: tips');
      break;
    case 'exit':
      console.log(`See you soon ${emoji.get('blush')} !`);
      process.exit();
      break;
    default:
      plumCLI();
      break;
  }
}

plumCLI();
