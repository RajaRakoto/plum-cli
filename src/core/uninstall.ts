/* libs */
import inquirer from "inquirer";
import chalk from "chalk";
import * as emoji from "node-emoji";
import ora from "ora";

/* core */
import { restartAsync } from "@/core/restart";

/* utils */
import { pkgUninstaller, pkgManagerDetector } from "@/utils/pkg";

/* constants */
import { PLUM_PACKAGE, DEVMODE } from "@/constants";

// ==============================

const uninstall_start_msg = `start uninstallation using ${pkgManagerDetector()}, please wait ${emoji.get("cry")} ...`;
const uninstall_cancel_msg = chalk.yellow(
	`Uninstallation cancelled ${emoji.get("sweat_smile")} !`,
);

const uninstall_prompt = [
	{
		type: "confirm",
		name: "uninstall",
		message: chalk.red("Do you want to uninstall plum package ?"),
		default: false,
	},
];

export async function uninstall(): Promise<void> {
	const uninstall_answers = await inquirer.prompt(uninstall_prompt);
	if (uninstall_answers.uninstall) {
		console.log(uninstall_start_msg);
		const spinner = ora("Uninstalling plum package ...");
		spinner.start();
		DEVMODE ? await pkgUninstaller() : await pkgUninstaller(PLUM_PACKAGE);
		restartAsync(spinner);
	} else {
		console.log(uninstall_cancel_msg);
		restartAsync();
	}
}
