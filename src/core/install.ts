/* libs */
import inquirer from "inquirer";
import chalk from "chalk";
import * as emoji from "node-emoji";
import ora from "ora";

/* core */
import { create } from "@/core/create";
import { restartAsync } from "@/core/restart";

/* constants */
import { PLUM_PACKAGE, DEV_MODE } from "@/constants";

/* utils */
import { pkgInstaller, pkgFileDetector, pkgManagerDetector } from "@/utils/pkg";

/* types */
import type { I_install_answers } from "@/@types";

// ==============================

const packageLists = ["npm", "yarn", "pnpm", "bun"].map((pkg) => {
	return `${emoji.get("package")} ${pkg}`;
});

const install_prompt = [
	{
		type: "confirm",
		name: "install",
		message: chalk.green(
			"Do you want to install plum package in the current directory ?",
		),
		default: true,
	},
	{
		type: "list",
		name: "pkgManager",
		message: chalk.green("Install plum package with:"),
		loop: true,
		choices: [
			{
				name: packageLists[0],
				value: "npm",
			},
			{
				name: packageLists[1],
				value: "yarn",
			},
			{
				name: packageLists[2],
				value: "pnpm",
			},
			{
				name: packageLists[3],
				value: "bun",
			},
		],
		default: "npm",
		when: (answers: I_install_answers): boolean => answers.install,
	},
];

export async function install(): Promise<void> {
	const install_answers = await inquirer.prompt(install_prompt);
	const start_install_msg = `start installation using ${install_answers.pkgManager}, please wait ${emoji.get("wink")} ...`;
	let installProcess = true;

	// check if project exists
	if (!pkgFileDetector() && !pkgManagerDetector() && install_answers.install) {
		installProcess = await create(install_answers.pkgManager);
	}

	// installation process
	if (installProcess && install_answers.install) {
		console.log(start_install_msg);

		const spinner = ora("Installing plum package ...");
		spinner.start();

		switch (install_answers.pkgManager) {
			case "npm":
			case "yarn":
			case "pnpm":
			case "bun":
				DEV_MODE
					? await pkgInstaller(install_answers.pkgManager, true)
					: await pkgInstaller(install_answers.pkgManager, false, PLUM_PACKAGE);
				await restartAsync(spinner);
				break;
			default:
				DEV_MODE
					? await pkgInstaller("npm", true)
					: await pkgInstaller("npm", false, PLUM_PACKAGE);
				await restartAsync(spinner);
				break;
		}
	} else {
		restartAsync();
	}
}
