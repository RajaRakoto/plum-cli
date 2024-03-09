/* libs */
import figlet from 'figlet';
import chalk from 'chalk';
import * as emoji from 'node-emoji';
import fs from 'fs';
/* files */
import pkg from '../package.json';
/* utils */
import { resolveRealPath } from './extras';

// ==============================

const font = fs.readFileSync(resolveRealPath('./fonts/Standard.flf'), 'utf8');
figlet.parseFont('StandardFont', font);

/**
 * @description A function that renders a text as a banner using figlet ASCII art
 * @param text The text to render
 * @returns A promise that resolves to the rendered text
 */
export async function bannerRenderer(text: string): Promise<string> {
  try {
    const rendered = await figlet.textSync(text, {
      font: 'StandardFont' as figlet.Fonts,
    });
    const coloredBanner = chalk.magenta(rendered);
    const packageVersion = pkg.version;
    const description = `Customize your website faster with PLUM, a mixins toolset powered by SASS. Quickly produce consistent, scalable CSS output, regardless of project size ${emoji.get('purple_heart')}`;
    const result = `${coloredBanner}\n ${chalk.underline('version:')} ${packageVersion}\n\n ${description}`;
    return result;
  } catch (error) {
    console.error('An error occurred while rendering the banner:', error);
    console.dir(error);
    return '';
  }
}
