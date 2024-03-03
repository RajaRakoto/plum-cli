/* libs */
import inquirer from 'inquirer';
/* menu */
import { menu_prompt } from './menu';
/* core */
import { install } from './core/install';
import { uninstall } from './core/uninstall';
import { docs } from './core/docs';
import { app } from './core/app';
/* utils */
import { bannerRenderer } from '../utils/ascii';
import { exitCLI } from '../utils/extras';

// ==============================

export const plumPackageName = '@rajarakoto/plum';
export const devMode = true;

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
      uninstall();
      break;
    case 'docs':
      docs();
      break;
    case 'animate':
      app('animate');
      break;
    case 'buttons2':
      app('buttons2');
      break;
    case 'flex':
      app('flex');
      break;
    case 'grid':
      app('grid');
      break;
    case 'hover2':
      app('hover2');
      break;
    case 'magic':
      app('magic');
      break;
    case 'buttons':
      app('buttons');
      break;
    case 'oc-scheme':
      app('oc-scheme');
      break;
    case 'shadows':
      app('shadows');
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
