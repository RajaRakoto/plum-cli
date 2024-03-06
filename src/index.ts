/* libs */
import inquirer from 'inquirer';
import { Command } from 'commander';
/* menu */
import { menu_prompt } from './menu';
/* core */
import { app } from './core/app';
import { docs } from './core/docs';
import { install } from './core/install';
import { uninstall } from './core/uninstall';
import { scripts } from './core/scripts';
/* utils */
import { bannerRenderer } from '../utils/ascii';
import { exitCLI } from '../utils/extras';
/* files */
import pkg from '../package.json';

// ==============================

export const plumPackageName = '@rajarakoto/plum';
export const devMode = false;

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
    case 'app-animate':
      app('animate');
      break;
    case 'app-buttons2':
      app('buttons2');
      break;
    case 'app-flex':
      app('flex');
      break;
    case 'app-grid':
      app('grid');
      break;
    case 'app-hover2':
      app('hover2');
      break;
    case 'app-magic':
      app('magic');
      break;
    case 'app-buttons':
      app('buttons');
      break;
    case 'app-oc-scheme':
      app('oc-scheme');
      break;
    case 'app-shadows':
      app('shadows');
      break;
    case 'script-bootstrap':
      scripts('bootstrap');
      break;
    case 'script-buttons2':
      scripts('buttons2');
      break;
    case 'exit':
      exitCLI();
      break;
    default:
      plumCLI();
      break;
  }
}

function args(): void {
  const packageVersion = pkg.version;
  const program = new Command();
  program.option('-v, --version', 'show plum CLI version');
  program.parse(process.argv);
  if (program.opts().version) {
    console.log(`version ${packageVersion}`);
  } else {
    plumCLI();
  }
}

args();
