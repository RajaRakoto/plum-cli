/* libs */
import inquirer from "inquirer";
import { execa } from "execa";
import chalk from "chalk";

// ==============================

const create_prompt = [
	{
		type: "confirm",
		name: "create",
		message: chalk.yellow(
			"No project found, do you want to create a new one ?",
		),
		default: true,
	},
];

export async function create(pkgManager: string): Promise<boolean> {
	const create_answers = await inquirer.prompt(create_prompt);
	const error_unknown_package_manager_msg =
		"\n\nError: Unknown package manager";
	const error_during_init_msg = `Error during ${pkgManager} init:`;

	if (create_answers.create) {
		try {
			let pkgCMD: string = "";
			const pkgArgs: string[] = ["init"];

			switch (pkgManager) {
				case "npm":
					pkgCMD = "npm";
					pkgArgs.push("-y");
					break;
				case "yarn":
					pkgCMD = "yarn";
					pkgArgs.push("-y");
					break;
				case "pnpm":
					pkgCMD = "pnpm";
					break;
				case "bun":
					pkgCMD = "bun";
					pkgArgs.push("-y");
					break;
				default:
					console.error(error_unknown_package_manager_msg);
					return false;
			}

			await execa(pkgCMD, pkgArgs);
			return true;
		} catch (error) {
			console.error(error_during_init_msg, error);
			return false;
		}
	} else {
		return false;
	}
}
