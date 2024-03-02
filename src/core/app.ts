/* utils */
import { openInBrowser } from '../../utils/extras';
/* utils */
import { restart } from './restart';

// ==============================

export function app(name: string): void {
  switch (name) {
    case 'buttons':
      openInBrowser('./apps/buttons.html');
      break;
    default:
      console.log('nothing app selected !');
      break;
  }
  restart();
}
