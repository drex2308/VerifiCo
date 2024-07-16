export = DecisionEngine;
declare class DecisionEngine {
    /**
     * @param {PeerId} peerId
     * @param {import('ipfs-repo').Blockstore} blockstore
     * @param {import('../network')} network
     * @param {import('../stats')} stats
     * @param {Object} [opts]
     * @param {number} [opts.targetMessageSize]
     * @param {number} [opts.maxSizeReplaceHasWithBlock]
     */
    constructor(peerId: PeerId, blockstore: import('ipfs-repo').Blockstore, network: import('../network'), stats: import('../stats'), opts?: {
        targetMessageSize?: number | undefined;
        maxSizeReplaceHasWithBlock?: number | undefined;
    } | undefined);
    _log: debug.Debugger & {
        error: debug.Debugger;
    };
    blockstore: import("ipfs-repo/dist/src/types").Blockstore;
    network: import("../network");
    _stats: import("../stats");
    _opts: {
        targetMessageSize?: number | undefined;
        maxSizeReplaceHasWithBlock?: number | undefined;
    } & {
        maxSizeReplaceHasWithBlock: number;
        targetMessageSize: number;
    };
    /** @type {Map<string, Ledger>} */
    ledgerMap: Map<string, Ledger>;
    _running: boolean;
    _requestQueue: RequestQueue;
    /**
     * @template {Object} Opts
     * @param {Opts} opts
     * @returns {Opts & {maxSizeReplaceHasWithBlock:number, targetMessageSize:number}}
     * @private
     */
    private _processOpts;
    /**
     * @private
     */
    private _scheduleProcessTasks;
    /**
     * Pull tasks off the request queue and send a message to the corresponding
     * peer
     *
     * @private
     */
    private _processTasks;
    /**
     * @param {PeerId} peerId
     * @returns {Map<string, import('../types/wantlist/entry')>}
     */
    wantlistForPeer(peerId: PeerId): Map<string, import('../types/wantlist/entry')>;
    /**
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
     * @returns {PeerId[]}
     */
    peers(): PeerId[];
    /**
     * Receive blocks either from an incoming message from the network, or from
     * blocks being added by the client on the localhost (eg IPFS add)
     *
     * @param {Block[]} blocks
     * @returns {void}
     */
    receivedBlocks(blocks: Block[]): void;
    /**
     * Handle incoming messages
     *
     * @param {PeerId} peerId
     * @param {Message} msg
     * @returns {Promise<void>}
     */
    messageReceived(peerId: PeerId, msg: Message): Promise<void>;
    /**
     * @private
     * @param {PeerId} peerId
     * @param {CID[]} cids
     * @returns {void}
     */
    private _cancelWants;
    /**
     * @private
     * @param {PeerId} peerId
     * @param {BitswapMessageEntry[]} wants
     * @returns {Promise<void>}
     */
    private _addWants;
    /**
     * @private
     * @param {import('../types/message/message').Message.Wantlist.WantType} wantType
     * @param {number} blockSize
     */
    private _sendAsBlock;
    /**
     * @private
     * @param {CID[]} cids
     * @returns {Promise<Map<string, number>>}
     */
    private _getBlockSizes;
    /**
     * @private
     * @param {CID[]} cids
     * @returns {Promise<Map<string, Block>>}
     */
    private _getBlocks;
    /**
     * @private
     * @param {Map<string, Block>} blocksMap
     * @param {Ledger} ledger
     */
    private _updateBlockAccounting;
    /**
     * Clear up all accounting things after message was sent
     *
     * @param {PeerId} peerId
     * @param {Object} [block]
     * @param {Uint8Array} block.data
     * @param {CID} [block.cid]
     */
    messageSent(peerId: PeerId, block?: {
        data: Uint8Array;
        cid?: CID | undefined;
    } | undefined): void;
    /**
     * @param {PeerId} peerId
     * @returns {number}
     */
    numBytesSentTo(peerId: PeerId): number;
    /**
     * @param {PeerId} peerId
     * @returns {number}
     */
    numBytesReceivedFrom(peerId: PeerId): number;
    /**
     *
     * @param {PeerId} _peerId
     * @returns {void}
     */
    peerDisconnected(_peerId: PeerId): void;
    /**
     * @private
     * @param {PeerId} peerId
     * @returns {Ledger}
     */
    private _findOrCreate;
    start(): void;
    stop(): void;
}
declare namespace DecisionEngine {
    export { Block, BitswapMessageEntry, PeerId };
}
import Ledger = require("./ledger");
import RequestQueue = require("./req-queue");
type PeerId = import('peer-id');
type Block = import('ipld-block');
import Message = require("../types/message");
import CID = require("cids");
type BitswapMessageEntry = import('../types/message/entry');
//# sourceMappingURL=index.d.ts.map