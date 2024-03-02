/* libs */
import inquirer from 'inquirer';
/* menu */
import { menu_prompt } from './menu';
/* core */
import { install } from './core/install';
import { uninstall } from './core/uninstall';
import { app } from './core/app';
/* utils */
import { bannerRenderer } from '../utils/ascii';
import { exitCLI } from '../utils/extras';

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
    case 'update':
      console.log('selected: update');
      break;
    case 'unistall':
      uninstall();
      break;
    case 'magic':
      app('magic');
      break;
    case 'buttons':
      app('buttons');
      break;
    case 'tips':
      console.log('selected: tips');
      break;
    case 'exit':
      exitCLI();
      break;
    default:
      plumCLI();
      break;
  }
}

plumCLI();
