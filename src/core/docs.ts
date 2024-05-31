/* core */
import { restartAsync } from "@/core/restart";

/* constants */
import { DOCS_PATH } from "@/constants";

/* utils */
import { defaultOpenAsync } from "@/utils/extras";

// ==============================

export function docs(): void {
	defaultOpenAsync(DOCS_PATH);
	restartAsync();
}
