/* libs */
import inquirer from 'inquirer';
import chalk from 'chalk';
import * as emoji from 'node-emoji';
/* core */
import { restart } from './restart';
/* utils */
import { pkgUninstaller, pkgManagerDetector } from '../../utils/pkg';

// ==============================

const testMode = true;
const plumPackageName = '@rajarakoto/plum';

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
    console.log(
      `start uninstallation using ${emoji.get('package')} ${pkgManagerDetector()}, please wait ${emoji.get('cry')} ...`,
    );
    testMode ? await pkgUninstaller() : await pkgUninstaller(plumPackageName);
    restart();
  } else {
    console.log(
      chalk.yellow(`Uninstallation cancelled ${emoji.get('sweat_smile')} !`),
    );
    restart();
  }
}