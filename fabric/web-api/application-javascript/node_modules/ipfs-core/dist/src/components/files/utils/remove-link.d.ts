export = removeLink;
/**
 * @typedef {import('../').MfsContext} MfsContext
 * @typedef {import('multihashes').HashName} HashName
 * @typedef {import('cids').CIDVersion} CIDVersion
 * @typedef {import('hamt-sharding').Bucket<any>} Bucket
 * @typedef {import('ipld-dag-pb').DAGNode} DAGNode
 *
 * @typedef {object} RemoveLinkOptions
 * @property {string} name
 * @property {number} shardSplitThreshold
 * @property {HashName} hashAlg
 * @property {CIDVersion} cidVersion
 * @property {boolean} flush
 * @property {CID} [parentCid]
 * @property {DAGNode} [parent]
 *
 * @typedef {object} RemoveLinkOptionsInternal
 * @property {string} name
 * @property {number} shardSplitThreshold
 * @property {HashName} hashAlg
 * @property {CIDVersion} cidVersion
 * @property {boolean} flush
 * @property {DAGNode} parent
 */
/**
 * @param {MfsContext} context
 * @param {RemoveLinkOptions} options
 */
declare function removeLink(context: MfsContext, options: RemoveLinkOptions): Promise<{
    node: import("ipld-dag-pb/src/dag-node/dagNode");
    cid: CID;
}>;
declare namespace removeLink {
    export { MfsContext, HashName, CIDVersion, Bucket, DAGNode, RemoveLinkOptions, RemoveLinkOptionsInternal };
}
type MfsContext = import('../').MfsContext;
type RemoveLinkOptions = {
    name: string;
    shardSplitThreshold: number;
    hashAlg: HashName;
    cidVersion: CIDVersion;
    flush: boolean;
    parentCid?: CID | undefined;
    parent?: import("ipld-dag-pb/src/dag-node/dagNode") | undefined;
};
import CID = require("cids");
type HashName = import('multihashes').HashName;
type CIDVersion = import('cids').CIDVersion;
type Bucket = import('hamt-sharding').Bucket<any>;
type DAGNode = import('ipld-dag-pb').DAGNode;
type RemoveLinkOptionsInternal = {
    name: string;
    shardSplitThreshold: number;
    hashAlg: HashName;
    cidVersion: CIDVersion;
    flush: boolean;
    parent: DAGNode;
};
//# sourceMappingURL=remove-link.d.ts.map