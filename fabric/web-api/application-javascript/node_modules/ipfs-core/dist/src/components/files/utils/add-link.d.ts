export = addLink;
/**
 * @typedef {import('ipfs-unixfs').Mtime} Mtime
 * @typedef {import('multihashes').HashName} HashName
 * @typedef {import('cids').CIDVersion} CIDVersion
 * @typedef {import('hamt-sharding').Bucket<any>} Bucket
 * @typedef {import('../').MfsContext} MfsContext
 */
/**
 * @param {MfsContext} context
 * @param {object} options
 * @param {CID} options.cid
 * @param {string} options.name
 * @param {number} options.size
 * @param {number} options.shardSplitThreshold
 * @param {HashName} options.hashAlg
 * @param {CIDVersion} options.cidVersion
 * @param {boolean} options.flush
 * @param {CID} [options.parentCid]
 * @param {DAGNode} [options.parent]
 */
declare function addLink(context: MfsContext, options: {
    cid: CID;
    name: string;
    size: number;
    shardSplitThreshold: number;
    hashAlg: HashName;
    cidVersion: CIDVersion;
    flush: boolean;
    parentCid?: CID | undefined;
    parent?: import("ipld-dag-pb/src/dag-node/dagNode") | undefined;
}): Promise<any>;
declare namespace addLink {
    export { Mtime, HashName, CIDVersion, Bucket, MfsContext };
}
type MfsContext = import('../').MfsContext;
import CID = require("cids");
type HashName = import('multihashes').HashName;
type CIDVersion = import('cids').CIDVersion;
type Mtime = import('ipfs-unixfs').Mtime;
type Bucket = import('hamt-sharding').Bucket<any>;
//# sourceMappingURL=add-link.d.ts.map