export = IPNS;
/**
 * @typedef {import('libp2p-crypto').PrivateKey} PrivateKey
 * @typedef {import('peer-id')} PeerId
 */
declare class IPNS {
    /**
     * @param {import('ipfs-core-types/src/utils').BufferStore} routing
     * @param {import('interface-datastore').Datastore} datastore
     * @param {PeerId} peerId
     * @param {import('libp2p/src/keychain')} keychain
     * @param {object} options
     * @param {string} options.pass
     * @param {number} [options.initialBroadcastInterval]
     * @param {number} [options.broadcastInterval]
     */
    constructor(routing: import('ipfs-core-types/src/utils').BufferStore, datastore: import('interface-datastore').Datastore, peerId: PeerId, keychain: import('libp2p/src/keychain'), options: {
        pass: string;
        initialBroadcastInterval?: number | undefined;
        broadcastInterval?: number | undefined;
    });
    publisher: IpnsPublisher;
    republisher: IpnsRepublisher;
    resolver: IpnsResolver;
    cache: TLRU<any>;
    routing: import("ipfs-core-types/src/utils").BufferStore;
    /**
     * Publish
     *
     * @param {PrivateKey} privKey
     * @param {Uint8Array} value
     * @param {number} lifetime
     */
    publish(privKey: PrivateKey, value: Uint8Array, lifetime?: number): Promise<{
        name: string;
        value: Uint8Array;
    }>;
    /**
     * Resolve
     *
     * @param {string} name
     * @param {object} options
     * @param {boolean} [options.nocache]
     * @param {boolean} [options.recursive]
     */
    resolve(name: string, options?: {
        nocache?: boolean | undefined;
        recursive?: boolean | undefined;
    }): Promise<any>;
    /**
     * Initialize keyspace
     *
     * Sets the ipns record for the given key to point to an empty directory
     *
     * @param {PrivateKey} privKey
     * @param {Uint8Array} value
     */
    initializeKeyspace(privKey: PrivateKey, value: Uint8Array): Promise<{
        name: string;
        value: Uint8Array;
    }>;
}
declare namespace IPNS {
    export { PrivateKey, PeerId };
}
import IpnsPublisher = require("./publisher");
import IpnsRepublisher = require("./republisher");
import IpnsResolver = require("./resolver");
import TLRU = require("../utils/tlru");
type PrivateKey = import('libp2p-crypto').PrivateKey;
type PeerId = import('peer-id');
//# sourceMappingURL=index.d.ts.map