"reach 0.1";

const [hasResult, FIRST_PLAYER_WINS, DRAW, SECOND_PLAYER_WINS] = makeEnum(3);

const gameInteract = {
	getFingers: Fun([], UInt),
	guessTotalFinger: Fun([UInt], UInt),
	seePlayersTotalFinger: Fun([UInt], Null),
	seePlayerGuessedNumbers: Fun([UInt], Null),
};

export const main = Reach.App(() => {
	const firstPlayer = Participant("Romeo", {
		...gameInteract,
	});

	const secondPlayer = Participant("Juliet", {
		...gameInteract,
	});

	init();

	firstPlayer.only(() => {
		const romeoFingers = declassify(interact.getFingers());
		const romeoGuess = declassify(interact.guessTotalFinger(romeoFingers));
	});

	firstPlayer.publish(romeoFingers);

	commit();

	firstPlayer.publish(romeoGuess);
	commit();

	secondPlayer.only(() => {
		const julietFingers = declassify(interact.getFingers());
		const julietGuess = declassify(interact.guessTotalFinger(julietFingers));
	});

	secondPlayer.publish(julietFingers);
	commit();

	secondPlayer.publish(julietGuess);
	commit();

	firstPlayer.only(() => {
		const totalFingers = romeoFingers + julietFingers;
		const _seePlayersTotal = interact.seePlayersTotalFinger(totalFingers);
	});

	firstPlayer.publish(totalFingers);

	const checkPlayerWinnings = () => {
		if (romeoGuess === julietGuess) {
			const result = DRAW;
			return result;
		} else if (romeoFingers + julietFingers == romeoGuess) {
			const result = DRAW;
			return result;
		} else if (romeoFingers + julietFingers == julietGuess) {
			const result = DRAW;
			return result;
		} else {
			return DRAW;
		}
	};

	each([firstPlayer, secondPlayer], () => {
		interact.seePlayerGuessedNumbers(checkPlayerWinnings());
	});

	commit();

	exit();
});
