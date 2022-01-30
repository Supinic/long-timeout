export declare class LongTimeout {
	readonly scheduleTime: number;

	constructor (callback: () => void, time: number, useTimestamp?: boolean);

	clear ();
}
