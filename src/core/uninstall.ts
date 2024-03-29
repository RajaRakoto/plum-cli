/* libs */
import inquirer from 'inquirer';
import chalk from 'chalk';
import * as emoji from 'node-emoji';
import ora from 'ora';
/* index */
import { plumPackageName, devMode } from '..';
/* core */
import { restart } from './restart';
/* utils */
import { pkgUninstaller, pkgManagerDetector } from '../../utils/pkg';

// ==============================

const uninstall_start_msg = `start uninstallation using ${pkgManagerDetector()}, please wait ${emoji.get('cry')} ...`;
const uninstall_cancel_msg = chalk.yellow(
  `Uninstallation cancelled ${emoji.get('sweat_smile')} !`,
);

const uninstall_prompt = [
  {
    type: 'confirm',
    name: 'uninstall',
    message: chalk.red('Do you want to uninstall plum package ?'),
    default: false,
  },
];

export async function uninstall(): Promise<void> {
  const uninstall_answers = await inquirer.prompt(uninstall_prompt);
  if (uninstall_answers.uninstall) {
    console.log(uninstall_start_msg);
    const spinner = ora('Uninstalling plum package ...');
    spinner.start();
    devMode ? await pkgUninstaller() : await pkgUninstaller(plumPackageName);
    restart(spinner);
  } else {
    console.log(uninstall_cancel_msg);
    restart();
  }
}
