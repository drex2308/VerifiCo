export = ObjectAPI;
/**
 * @typedef {import('ipld')} IPLD
 * @typedef {import('../../types').Preload} Preload
 * @typedef {import('../gc-lock').GCLock} GCLock
 * @typedef {import('cids')} CID
 * @typedef {import('ipfs-core-types/src/utils').AbortOptions} AbortOptions
 */
declare class ObjectAPI {
    /**
     * @param {Object} config
     * @param {IPLD} config.ipld
     * @param {Preload} config.preload
     * @param {GCLock} config.gcLock
     */
    constructor({ ipld, preload, gcLock }: {
        ipld: IPLD;
        preload: Preload;
        gcLock: GCLock;
    });
    data: (multihash: import("cids"), options?: any) => Promise<Uint8Array>;
    get: (multihash: import("cids"), options?: any) => Promise<import("ipld-dag-pb/src/dag-node/dagNode")>;
    links: (multihash: import("cids"), options?: any) => Promise<import("ipld-dag-pb/src/dag-link/dagLink")[]>;
    new: (options?: any) => Promise<import("cids")>;
    put: (obj: Uint8Array | import("ipld-dag-pb/src/dag-node/dagNode") | import("ipld-dag-pb/src/types").DAGNodeLike, options?: any) => Promise<import("cids")>;
    stat: (multihash: import("cids"), options?: any) => Promise<import("ipfs-core-types/src/object").StatResult>;
    patch: ObjectPatchAPI;
}
declare namespace ObjectAPI {
    export { IPLD, Preload, GCLock, CID, AbortOptions };
}
import ObjectPatchAPI = require("./patch");
type IPLD = import('ipld');
type Preload = import('../../types').Preload;
type GCLock = import('../gc-lock').GCLock;
type CID = import('cids');
type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
//# sourceMappingURL=index.d.ts.map