export = DagAPI;
/**
 * @typedef {Object} ReaderConfig
 * @property {IPLD} ipld
 * @property {Preload} preload
 *
 * @typedef {import('ipld')} IPLD
 * @typedef {import('../../types').Preload} Preload
 * @typedef {import('ipfs-core-types/src/pin').API} Pin
 * @typedef {import('../gc-lock').GCLock} GCLock
 * @typedef {import('ipfs-core-types/src/utils').AbortOptions} AbortOptions
 */
declare class DagAPI {
    /**
     * @param {Object} config
     * @param {IPLD} config.ipld
     * @param {Preload} config.preload
     * @param {Pin} config.pin
     * @param {GCLock} config.gcLock
     */
    constructor({ ipld, pin, preload, gcLock }: {
        ipld: IPLD;
        preload: Preload;
        pin: Pin;
        gcLock: GCLock;
    });
    get: (cid: import("cids"), options?: any) => Promise<import("ipfs-core-types/src/dag").GetResult>;
    resolve: (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => Promise<import("ipfs-core-types/src/dag").ResolveResult>;
    tree: (ipfsPath: import("cids"), options?: any) => Promise<string[]>;
    put: (dagNode: any, options?: any) => Promise<import("cids")>;
}
declare namespace DagAPI {
    export { ReaderConfig, IPLD, Preload, Pin, GCLock, AbortOptions };
}
type IPLD = import('ipld');
type Preload = import('../../types').Preload;
type Pin = import('ipfs-core-types/src/pin').API;
type GCLock = import('../gc-lock').GCLock;
type ReaderConfig = {
    ipld: IPLD;
    preload: Preload;
};
type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
//# sourceMappingURL=index.d.ts.map