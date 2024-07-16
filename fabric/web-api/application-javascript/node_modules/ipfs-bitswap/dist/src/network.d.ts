export = Network;
declare class Network {
    /**
     * @param {import('libp2p')} libp2p
     * @param {import('./index')} bitswap
     * @param {import('./stats')} stats
     * @param {Object} [options]
     * @param {boolean} [options.b100Only]
     */
    constructor(libp2p: import('libp2p'), bitswap: import('./index'), stats: import('./stats'), options?: {
        b100Only?: boolean | undefined;
    } | undefined);
    _log: debug.Debugger & {
        error: debug.Debugger;
    };
    _libp2p: import("libp2p");
    _bitswap: import("./index");
    _protocols: string[];
    _stats: import("./stats");
    _running: boolean;
    /**
     * @private
     * @param {PeerId} peerId
     */
    private _onPeerConnect;
    /**
     * @private
     * @param {PeerId} peerId
     */
    private _onPeerDisconnect;
    /**
     * Handles both types of incoming bitswap messages
     *
     * @private
     * @param {object} connection
     * @param {string} connection.protocol - The protocol the stream is running
     * @param {MuxedStream} connection.stream - A duplex iterable stream
     * @param {Connection} connection.connection - A libp2p Connection
     */
    private _onConnection;
    start(): void;
    _registrarId: string | undefined;
    stop(): void;
    /**
     * Find providers given a `cid`.
     *
     * @param {CID} cid
     * @param {number} maxProviders
     * @param {Object} [options]
     * @param {AbortSignal} [options.signal]
     * @returns {AsyncIterable<Provider>}
     */
    findProviders(cid: CID, maxProviders: number, options?: {
        signal?: AbortSignal | undefined;
    } | undefined): AsyncIterable<Provider>;
    /**
     * Find the providers of a given `cid` and connect to them.
     *
     * @param {CID} cid
     * @param {Object} [options]
     * @param {AbortSignal} [options.signal]
     */
    findAndConnect(cid: CID, options?: {
        signal?: AbortSignal | undefined;
    } | undefined): Promise<void>;
    /**
     * Tell the network we can provide content for the passed CID
     *
     * @param {CID} cid
     * @param {Object} [options]
     * @param {AbortSignal} [options.signal]
     */
    provide(cid: CID, options?: {
        signal?: AbortSignal | undefined;
    } | undefined): Promise<void>;
    /**
     * Connect to the given peer
     * Send the given msg (instance of Message) to the given peer
     *
     * @param {PeerId} peer
     * @param {Message} msg
     */
    sendMessage(peer: PeerId, msg: Message): Promise<void>;
    /**
     * Connects to another peer
     *
     * @param {PeerId|Multiaddr} peer
     * @param {Object} [options]
     * @param {AbortSignal} [options.signal]
     * @returns {Promise<Connection>}
     */
    connectTo(peer: PeerId | Multiaddr, options?: {
        signal?: AbortSignal | undefined;
    } | undefined): Promise<Connection>;
    /**
     * @private
     * @param {PeerId} peer
     * @param {Map<string, {data:Uint8Array}>} blocks
     */
    private _updateSentStats;
}
declare namespace Network {
    export { PeerId, CID, Multiaddr, Connection, MuxedStream, Provider, Stream };
}
type CID = import('cids');
type Provider = {
    id: PeerId;
    multiaddrs: Multiaddr[];
};
type PeerId = import('peer-id');
import Message = require("./types/message");
type Multiaddr = import('multiaddr').Multiaddr;
type Connection = import("libp2p-interfaces/src/connection/connection");
type MuxedStream = import('libp2p-interfaces/src/stream-muxer/types').MuxedStream;
type Stream = {
    source: AsyncIterable<Uint8Array>;
    sink: (output: AsyncIterable<Uint8Array>) => Promise<void>;
};
//# sourceMappingURL=network.d.ts.map