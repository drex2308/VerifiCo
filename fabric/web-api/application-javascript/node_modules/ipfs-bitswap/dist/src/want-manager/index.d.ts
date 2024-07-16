export = WantManager;
declare class WantManager {
    /**
     * @param {PeerId} peerId
     * @param {import('../network')} network
     * @param {import('../stats')} stats
     */
    constructor(peerId: PeerId, network: import('../network'), stats: import('../stats'));
    /** @type {Map<string, MsgQueue>} */
    peers: Map<string, MsgQueue>;
    wantlist: Wantlist;
    network: import("../network");
    _stats: import("../stats");
    _peerId: import("peer-id");
    _log: debug.Debugger & {
        error: debug.Debugger;
    };
    /**
     * @private
     * @param {CID[]} cids
     * @param {boolean} cancel
     * @param {boolean} [force]
     */
    private _addEntries;
    /**
     * @private
     * @param {PeerId} peerId
     */
    private _startPeerHandler;
    /**
     * @private
     * @param {PeerId} peerId
     */
    private _stopPeerHandler;
    /**
     * add all the cids to the wantlist
     *
     * @param {CID[]} cids
     * @param {Object} [options]
     * @param {AbortSignal} [options.signal]
     */
    wantBlocks(cids: CID[], options?: {
        signal?: AbortSignal | undefined;
    } | undefined): void;
    /**
     * Remove blocks of all the given keys without respecting refcounts
     *
     * @param {CID[]} cids
     */
    unwantBlocks(cids: CID[]): void;
    /**
     * Cancel wanting all of the given keys
     *
     * @param {CID[]} cids
     */
    cancelWants(cids: CID[]): void;
    /**
     * Returns a list of all currently connected peers
     */
    connectedPeers(): string[];
    /**
     * @param {PeerId} peerId
     */
    connected(peerId: PeerId): void;
    /**
     * @param {PeerId} peerId
     */
    disconnected(peerId: PeerId): void;
    start(): void;
    stop(): void;
}
declare namespace WantManager {
    export { PeerId, CID };
}
import MsgQueue = require("./msg-queue");
import Wantlist = require("../types/wantlist");
type CID = import('cids');
type PeerId = import('peer-id');
//# sourceMappingURL=index.d.ts.map