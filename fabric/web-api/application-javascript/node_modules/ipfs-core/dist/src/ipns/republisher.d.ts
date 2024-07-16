export = IpnsRepublisher;
declare class IpnsRepublisher {
    /**
     * @param {import('./publisher')} publisher
     * @param {import('interface-datastore').Datastore} datastore
     * @param {PeerId} peerId
     * @param {import('libp2p/src/keychain')} keychain
     * @param {object} options
     * @param {string} options.pass
     * @param {number} [options.initialBroadcastInterval]
     * @param {number} [options.broadcastInterval]
     */
    constructor(publisher: import('./publisher'), datastore: import('interface-datastore').Datastore, peerId: PeerId, keychain: import('libp2p/src/keychain'), options?: {
        pass: string;
        initialBroadcastInterval?: number | undefined;
        broadcastInterval?: number | undefined;
    });
    _publisher: import("./publisher");
    _datastore: import("interface-datastore/dist/src/types").Datastore;
    _peerId: PeerId;
    _keychain: import("libp2p/src/keychain");
    _options: {
        pass: string;
        initialBroadcastInterval?: number | undefined;
        broadcastInterval?: number | undefined;
    };
    _republishHandle: {
        /** @type {null|(() => Promise<void>)} */
        _task: (() => Promise<void>) | null;
        /** @type {null|Promise<void>} */
        _inflightTask: null | Promise<void>;
        /** @type {null|NodeJS.Timeout} */
        _timeoutId: null | NodeJS.Timeout;
        /**
         * @param {function(): number} period
         */
        runPeriodically: (period: () => number) => void;
        cancel: () => Promise<void>;
    } | null;
    start(): Promise<void>;
    stop(): Promise<void>;
    /**
     * @param {PrivateKey} privateKey
     * @param {string} pass
     */
    _republishEntries(privateKey: PrivateKey, pass: string): Promise<void>;
    /**
     * @param {PrivateKey} privateKey
     */
    _republishEntry(privateKey: PrivateKey): Promise<void>;
    /**
     * @param {PeerId} peerId
     */
    _getPreviousValue(peerId: PeerId): Promise<Uint8Array>;
}
declare namespace IpnsRepublisher {
    export { PrivateKey };
}
import PeerId = require("peer-id");
type PrivateKey = import('libp2p-crypto').PrivateKey;
//# sourceMappingURL=republisher.d.ts.map