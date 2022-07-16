import { loadStdLib } from "@reach/std-lib";
import * as backend from "./build/index.main.js";

const stdlib = loadStdLib(process.env);

const amount = stdlib.parseCurrency(1000);

const romeoAcc = stdlib.newTestAccount(amount);

const julietAcc = stdlib.newTestAccount(amount);

const romeoContract = romeoAcc.contract(backend);

const julietContract = julietAcc.contract(backend, romeoContract.info());

const playerinteractInteract = (role) => ({
	getFingers: () => {
		return 4;
	},
	guessTotalFinger: (value) => {
		return 2 + value;
	},
	seePlayersTotalFinger: (total) => {
		console.log(`Total fingers from both players ${total}`);
	},
	seePlayerGuessedNumbers: (guessed) => {
		console.log(`${role} guessed ${guessed} fingers`);
	},
});

await Promise.all([
	romeoContract.p.FirstPlayer(playerinteractInteract("romeo")),
	julietContract.p.SecondPlayer(playerinteractInteract("juliet")),
]);
