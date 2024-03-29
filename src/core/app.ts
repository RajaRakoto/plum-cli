/* utils */
import { defaultOpen } from '@/utils/extras';

/* core */
import { restart } from '@/core/restart';

/* constants */
import { PATH_LISTS } from '@/constants';

// ==============================

export function app(name: string): void {
  const path = PATH_LISTS[name as keyof typeof PATH_LISTS];
  if (path) {
    defaultOpen(path);
  } else {
    console.log('Nothing app selected !');
  }
  restart();
}
