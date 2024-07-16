export = ObjectPatchAPI;
/**
 * @typedef {import('ipld')} IPLD
 * @typedef {import('../../../types').Preload} Preload
 * @typedef {import('..').GCLock} GCLock
 * @typedef {import('cids')} CID
 * @typedef {import('ipfs-core-types/src/utils').AbortOptions} AbortOptions
 */
declare class ObjectPatchAPI {
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
    addLink: (multihash: import("cids"), link: import("ipld-dag-pb/src/dag-link/dagLink"), options?: any) => Promise<import("cids")>;
    appendData: (multihash: import("cids"), data: Uint8Array, options?: any) => Promise<import("cids")>;
    rmLink: (multihash: import("cids"), linkRef: string | import("ipld-dag-pb/src/dag-link/dagLink"), options?: any) => Promise<import("cids")>;
    setData: (multihash: import("cids"), data: Uint8Array, options?: any) => Promise<import("cids")>;
}
declare namespace ObjectPatchAPI {
    export { IPLD, Preload, GCLock, CID, AbortOptions };
}
type IPLD = import('ipld');
type Preload = import('../../../types').Preload;
type GCLock = import('..').GCLock;
type CID = import('cids');
type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
//# sourceMappingURL=index.d.ts.map