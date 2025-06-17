#!/usr/bin/env node
import * as ChildProcess from 'node:child_process';
import * as process from 'node:process';
import * as dotenv from 'dotenv';

dotenv.config();

const checkCommitMail = () => {
	// eslint-disable-next-line no-console
	console.log(`Check COMMIT_MAIL`);
	if (!process.env.COMMIT_MAIL) {
		// eslint-disable-next-line no-console
		console.error(
			`No COMMIT_MAIL set in .env, please look at the file '.env.template'`
		);
		process.exit(1);
	}

	const currentMail = ChildProcess.execSync('git config user.email')
		.toString()
		.trim()
		.toLowerCase();
	const commitMail = process.env.COMMIT_MAIL.trim().toLowerCase();
	if (currentMail !== commitMail) {
		// eslint-disable-next-line no-console
		console.error(
			`currentMail: ${currentMail} !== initialMail: ${commitMail}`
		);
		// eslint-disable-next-line no-console
		console.error(
			`Please set your commit user mail for this project like: 'git config user.email "${commitMail}"'`
		);
		process.exit(1);
	}
};

checkCommitMail();
