export = Stats;
declare class Stats extends EventEmitter {
    /**
     * @param {string[]} [initialCounters]
     * @param {Object} _options
     * @param {boolean} _options.enabled
     * @param {number} _options.computeThrottleTimeout
     * @param {number} _options.computeThrottleMaxQueueSize
     */
    constructor(initialCounters?: string[] | undefined, _options?: {
        enabled: boolean;
        computeThrottleTimeout: number;
        computeThrottleMaxQueueSize: number;
    });
    _initialCounters: string[];
    _options: {
        enabled: boolean;
        computeThrottleTimeout: number;
        computeThrottleMaxQueueSize: number;
        movingAverageIntervals: AverageIntervals;
    } & {
        enabled: boolean;
        computeThrottleTimeout: number;
        computeThrottleMaxQueueSize: number;
    };
    _enabled: boolean;
    _global: Stat;
    /** @type {Map<string, Stat>} */
    _peers: Map<string, Stat>;
    enable(): void;
    disable(): void;
    stop(): void;
    get snapshot(): Record<string, bigint>;
    get movingAverages(): Record<string, Record<number, import("@vascosantos/moving-average").IMovingAverage>>;
    /**
     * @param {PeerId|string} peerId
     * @returns {Stat|void}
     */
    forPeer(peerId: PeerId | string): Stat | void;
    /**
     *
     * @param {string|null} peer
     * @param {string} counter
     * @param {number} inc
     */
    push(peer: string | null, counter: string, inc: number): void;
    /**
     * @param {PeerId} peer
     */
    disconnected(peer: PeerId): void;
}
declare namespace Stats {
    export { CID, PeerId, AverageIntervals };
}
import { EventEmitter } from "events";
type AverageIntervals = [number, number, number];
import Stat = require("./stat");
type PeerId = import('peer-id');
type CID = import('cids');
//# sourceMappingURL=index.d.ts.map