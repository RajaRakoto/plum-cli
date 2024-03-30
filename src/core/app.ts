/* utils */
import { defaultOpen } from '@/utils/extras';

/* core */
import { restart } from '@/core/restart';

/* constants */
import { APPS_PATH } from '@/constants';

// ==============================

export function app(name: string): void {
  const path = APPS_PATH[name as keyof typeof APPS_PATH];
  if (path) {
    defaultOpen(path);
  } else {
    console.log('Nothing app selected !');
  }
  restart();
}
