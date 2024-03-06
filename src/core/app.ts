/* utils */
import { defaultOpen } from '../../utils/extras';
/* core */
import { restart } from './restart';

// ==============================

const path_lists = {
  animate: './apps/animate/index.html',
  buttons2: './apps/buttons2/index.html',
  flex: './apps/flex/index.html',
  grid: './apps/grid/index.html',
  hover2: './apps/hover2/index.html',
  magic: './apps/magic/index.html',
  buttons: './apps/buttons.html',
  'oc-scheme': './apps/oc-scheme.png',
  shadows: './apps/shadows.html',
};

export function app(name: string): void {
  const path = path_lists[name as keyof typeof path_lists];
  if (path) {
    defaultOpen(path);
  } else {
    console.log('Nothing app selected !');
  }
  restart();
}
