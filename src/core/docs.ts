/* utils */
import { defaultOpen } from '../../utils/extras';
/* core */
import { restart } from './restart';

// ==============================

export function docs(): void {
  defaultOpen('./docs/index.html');
  restart();
}
