/* utils */
import { openInBrowser } from '../../utils/extras';
/* utils */
import { restart } from './restart';

// ==============================

export function app(name: string): void {
  switch (name) {
    case 'magic':
      openInBrowser('./apps/magic/index.html');
      break;
    case 'buttons':
      openInBrowser('./apps/buttons.html');
      break;
    default:
      console.log('Nothing app selected !');
      break;
  }
  restart();
}
