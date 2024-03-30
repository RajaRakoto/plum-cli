import inquirer from "inquirer";
import chalk from "chalk";
import * as emoji from "node-emoji";

// ==============================

export const menu_prompt = [
	{
		type: "list",
		name: "menu",
		message: chalk.green("What do you want to do ..."),
		loop: false,
		pageSize: 15,
		choices: [
			new inquirer.Separator("============ packages manager ============"),
			{
				name: `${emoji.get("package")} install plum`,
				value: "install",
			},
			{
				name: `${emoji.get("x")} unistall plum`,
				value: "unistall",
			},
			new inquirer.Separator("================== docs =================="),
			{
				name: `${emoji.get("books")} plum docs`,
				value: "docs",
			},
			new inquirer.Separator("================== apps =================="),
			{
				name: `${emoji.get("gear")} animate`,
				value: "app-animate",
			},
			{
				name: `${emoji.get("gear")} buttons2`,
				value: "app-buttons2",
			},
			{
				name: `${emoji.get("gear")} flex`,
				value: "app-flex",
			},
			{
				name: `${emoji.get("gear")} grid`,
				value: "app-grid",
			},
			{
				name: `${emoji.get("gear")} hover2`,
				value: "app-hover2",
			},
			{
				name: `${emoji.get("gear")} magic`,
				value: "app-magic",
			},
			{
				name: `${emoji.get("gear")} buttons`,
				value: "app-buttons",
			},
			{
				name: `${emoji.get("gear")} oc-scheme`,
				value: "app-oc-scheme",
			},
			{
				name: `${emoji.get("gear")} shadows`,
				value: "app-shadows",
			},
			new inquirer.Separator("================= scripts ================"),
			{
				name: `${emoji.get("clipboard")} bootstrap`,
				value: "script-bootstrap",
			},
			{
				name: `${emoji.get("clipboard")} buttons2`,
				value: "script-buttons2",
			},
			new inquirer.Separator("=========================================="),
			{
				name: chalk.red(`${emoji.get("door")} exit`),
				value: "exit",
			},
		],
	},
];
