/* utils */
import { defaultOpen } from '@/utils/extras';

/* core */
import { restart } from '@/core/restart';

/* constants */
import { DOCS_PATH } from '@/constants';

// ==============================

export function docs(): void {
  defaultOpen(DOCS_PATH);
  restart();
}
