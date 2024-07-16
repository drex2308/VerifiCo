declare function _exports({ network, repo }: {
    network: import('../types').NetworkService;
    repo: import('ipfs-repo');
}): {
    get: (key: Uint8Array, options?: any) => Promise<Uint8Array>;
    put: (key: Uint8Array, value: Uint8Array, options?: any) => AsyncIterable<import("ipfs-core-types/src/dht").DHTQueryMessage>;
    findProvs: (cid: CID, options?: any) => AsyncIterable<import("ipfs-core-types/src/dht").PeerResult>;
    findPeer: (peerId: string, options?: any) => Promise<import("ipfs-core-types/src/dht").PeerResult>;
    provide: (cid: CID | CID[], options?: any) => AsyncIterable<import("ipfs-core-types/src/dht").DHTQueryMessage>;
    query: (peerId: string, options?: any) => AsyncIterable<import("ipfs-core-types/src/dht").PeerResult>;
};
export = _exports;
import CID = require("cids");
//# sourceMappingURL=dht.d.ts.map