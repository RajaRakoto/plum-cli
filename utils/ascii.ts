/* libs */
import figlet from 'figlet';
import chalk from 'chalk';
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
        const packageVersion = pkg.version;
        const coloredBanner = chalk.magenta(rendered);
        const result = `${coloredBanner}\n version: ${packageVersion}`;
        resolve(result);
      }
    });
  });
}
