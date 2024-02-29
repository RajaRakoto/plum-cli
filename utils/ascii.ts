/* libs */
import figlet from 'figlet';
import chalk from 'chalk';
import * as emoji from 'node-emoji';
/* files */
import pkg from '../package.json';

// ==============================

/**
 * @description A function that renders a text as a banner using figlet ASCII art
 * @param text The text to render
 * @returns A promise that resolves to the rendered text
 */
export function bannerRenderer(text: string): Promise<string> {
  return new Promise((resolve, reject) => {
    figlet(text, function (err, rendered) {
      if (err) {
        reject(err);
      } else {
        const coloredBanner = chalk.magenta(rendered);
        const packageVersion = pkg.version;
        const description = `Customize your website faster with PLUM, a mixins toolset powered by SASS. Quickly produce consistent, scalable CSS output, regardless of project size ${emoji.get('purple_heart')}`;
        const result = `${coloredBanner}\n ${chalk.underline('version:')} ${packageVersion}\n\n ${description}`;
        resolve(result);
      }
    });
  });
}
