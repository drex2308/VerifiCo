export = Bitswap;
/**
 * JavaScript implementation of the Bitswap 'data exchange' protocol
 * used by IPFS.
 */
declare class Bitswap {
    /**
     * @param {import('libp2p')} libp2p
     * @param {import('ipfs-repo').Blockstore} blockstore
     * @param {Object} [options]
     * @param {boolean} [options.statsEnabled=false]
     * @param {number} [options.statsComputeThrottleTimeout=1000]
     * @param {number} [options.statsComputeThrottleMaxQueueSize=1000]
     */
    constructor(libp2p: import('libp2p'), blockstore: import('ipfs-repo').Blockstore, options?: {
        statsEnabled?: boolean | undefined;
        statsComputeThrottleTimeout?: number | undefined;
        statsComputeThrottleMaxQueueSize?: number | undefined;
    } | undefined);
    _libp2p: import("libp2p");
    _log: debug.Debugger & {
        error: debug.Debugger;
    };
    _options: {
        statsEnabled: boolean;
        statsComputeThrottleTimeout: number;
        statsComputeThrottleMaxQueueSize: number;
    } & {
        statsEnabled?: boolean | undefined;
        statsComputeThrottleTimeout?: number | undefined;
        statsComputeThrottleMaxQueueSize?: number | undefined;
    };
    _stats: Stats;
    network: Network;
    blockstore: import("ipfs-repo/dist/src/types").Blockstore;
    engine: DecisionEngine;
    wm: WantManager;
    notifications: Notifications;
    /**
     * @type {PeerId}
     */
    get peerId(): import("peer-id");
    /**
     * handle messages received through the network
     *
     * @param {PeerId} peerId
     * @param {BitswapMessage} incoming
     */
    _receiveMessage(peerId: PeerId, incoming: BitswapMessage): Promise<void>;
    /**
     * @private
     * @param {PeerId} peerId
     * @param {Block} block
     * @param {boolean} wasWanted
     */
    private _handleReceivedBlock;
    /**
     * @private
     * @param {string} peerIdStr
     * @param {Block} block
     * @param {boolean} exists
     */
    private _updateReceiveCounters;
    /**
     * handle errors on the receiving channel
     *
     * @param {Error} err
     */
    _receiveError(err: Error): void;
    /**
     * handle new peers
     *
     * @param {PeerId} peerId
     */
    _onPeerConnected(peerId: PeerId): void;
    /**
     * handle peers being disconnected
     *
     * @param {PeerId} peerId
     */
    _onPeerDisconnected(peerId: PeerId): void;
    enableStats(): void;
    disableStats(): void;
    /**
     * Return the current wantlist for a given `peerId`
     *
     * @param {PeerId} peerId
     * @param {any} [_options]
     */
    wantlistForPeer(peerId: PeerId, _options?: any): Map<string, import("./types/wantlist/entry")>;
    /**
     * Return ledger information for a given `peerId`
     *
     * @param {PeerId} peerId
     */
    ledgerForPeer(peerId: PeerId): {
        peer: string;
        value: number;
        sent: number;
        recv: number;
        exchanged: number;
    } | null;
    /**
     * Fetch a given block by cid. If the block is in the local
     * blockstore it is returned, otherwise the block is added to the wantlist and returned once another node sends it to us.
     *
     * @param {CID} cid
     * @param {Object} [options]
     * @param {AbortSignal} [options.signal]
     */
    get(cid: CID, options?: {
        signal?: AbortSignal | undefined;
    } | undefined): Promise<import("ipld-block")>;
    /**
     * Fetch a a list of blocks by cid. If the blocks are in the local
     * blockstore they are returned, otherwise the blocks are added to the wantlist and returned once another node sends them to us.
     *
     * @param {AsyncIterable<CID>|Iterable<CID>} cids
     * @param {Object} [options]
     * @param {AbortSignal} [options.signal]
     */
    getMany(cids: AsyncIterable<CID> | Iterable<CID>, options?: {
        signal?: AbortSignal | undefined;
    } | undefined): AsyncGenerator<import("ipld-block"), void, unknown>;
    /**
     * Removes the given CIDs from the wantlist independent of any ref counts.
     *
     * This will cause all outstanding promises for a given block to reject.
     *
     * If you want to cancel the want for a block without doing that, pass an
     * AbortSignal in to `.get` or `.getMany` and abort it.
     *
     * @param {CID[]|CID} cids
     */
    unwant(cids: CID[] | CID): void;
    /**
     * Removes the given keys from the want list. This may cause pending promises
     * for blocks to never resolve.  If you wish these promises to abort instead
     * call `unwant(cids)` instead.
     *
     * @param {CID[]|CID} cids
     */
    cancelWants(cids: CID[] | CID): void;
    /**
     * Put the given block to the underlying blockstore and
     * send it to nodes that have it in their wantlist.
     *
     * @param {Block} block
     * @param {any} [_options]
     */
    put(block: Block, _options?: any): Promise<void>;
    /**
     * Put the given blocks to the underlying blockstore and
     * send it to nodes that have it them their wantlist.
     *
     * @param {AsyncIterable<Block>|Iterable<Block>} blocks
     */
    putMany(blocks: AsyncIterable<Block> | Iterable<Block>): AsyncGenerator<import("ipld-block"), void, unknown>;
    /**
     * Sends notifications about the arrival of a block
     *
     * @private
     * @param {Block} block
     */
    private _sendHaveBlockNotifications;
    /**
     * Get the current list of wants
     */
    getWantlist(): IterableIterator<[string, import("./types/wantlist/entry")]>;
    /**
     * Get the current list of partners
     */
    peers(): import("peer-id")[];
    /**
     * Get stats about the bitswap node
     */
    stat(): Stats;
    /**
     * Start the bitswap node
     */
    start(): void;
    /**
     * Stop the bitswap node
     */
    stop(): void;
}
declare namespace Bitswap {
    export { Block, PeerId, BitswapMessage, CID };
}
import Stats = require("./stats");
import Network = require("./network");
import DecisionEngine = require("./decision-engine");
import WantManager = require("./want-manager");
import Notifications = require("./notifications");
type PeerId = import('peer-id');
type BitswapMessage = import('./types/message');
type CID = import('cids');
type Block = import('ipld-block');
//# sourceMappingURL=index.d.ts.map