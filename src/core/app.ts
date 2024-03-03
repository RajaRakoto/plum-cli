/* utils */
import { defaultOpen } from '../../utils/extras';
/* utils */
import { restart } from './restart';

// ==============================

export function app(name: string): void {
  switch (name) {
    case 'animate':
      defaultOpen('./apps/animate/index.html');
      break;
    case 'buttons2':
      defaultOpen('./apps/buttons2/index.html');
      break;
    case 'flex':
      defaultOpen('./apps/flex/index.html');
      break;
    case 'grid':
      defaultOpen('./apps/grid/index.html');
      break;
    case 'hover2':
      defaultOpen('./apps/hover2/index.html');
      break;
    case 'magic':
      defaultOpen('./apps/magic/index.html');
      break;
    case 'buttons':
      defaultOpen('./apps/buttons.html');
      break;
    case 'oc-scheme':
      defaultOpen('./apps/oc-scheme.png');
      break;
    case 'shadows':
      defaultOpen('./apps/shadows.html');
      break;
    default:
      console.log('Nothing app selected !');
      break;
  }
  restart();
}
