/* libs */
import inquirer from "inquirer";
import chalk from "chalk";

/* utils */
import { copyFileAsync } from "@/utils/extras";

/* core */
import { restartAsync } from "@/core/restart";

/* constants */
import { SCRIPTS_PATH } from "@/constants";

// ==============================

const scripts_prompt = [
	{
		type: "input",
		name: "scripts",
		message: chalk.green(
			"Enter the name of the folder to copy (in the current directory)",
		),
		default: "plum-scripts",
	},
];

export async function scripts(fileName: string): Promise<void> {
	const scripts_answers = await inquirer.prompt(scripts_prompt);
	const targetFolder = scripts_answers.scripts;

	switch (fileName) {
		case "bootstrap":
		case "buttons2":
			copyFileAsync(`${SCRIPTS_PATH}${fileName}.min.js`, targetFolder);
			break;
		default:
			console.log(`${fileName} is not a recognized file !`);
	}
	restartAsync();
}
