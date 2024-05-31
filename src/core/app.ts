/* core */
import { restartAsync } from "@/core/restart";

/* constants */
import { APPS_PATH } from "@/constants";

/* utils */
import { defaultOpen } from "@/utils/extras";

// ==============================

export function app(name: string): void {
	const path = APPS_PATH[name as keyof typeof APPS_PATH];
	if (path) {
		defaultOpen(path);
	} else {
		console.log("Nothing app selected !");
	}
	restartAsync();
}
