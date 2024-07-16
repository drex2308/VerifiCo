export = findShardCid;
/**
 * @typedef {object} ShardTraversalContext
 * @property {number} hamtDepth
 * @property {Bucket<boolean>} rootBucket
 * @property {Bucket<boolean>} lastBucket
 *
 * @param {import('ipld-dag-pb').DAGNode} node
 * @param {string} name
 * @param {IPLD} ipld
 * @param {ShardTraversalContext} [context]
 * @param {ExporterOptions} [options]
 * @returns {Promise<CID|null>}
 */
declare function findShardCid(node: import('ipld-dag-pb').DAGNode, name: string, ipld: IPLD, context?: ShardTraversalContext | undefined, options?: import("../types").ExporterOptions | undefined): Promise<CID | null>;
declare namespace findShardCid {
    export { ExporterOptions, IPLD, CID, ShardTraversalContext };
}
type IPLD = import('ipld');
type ShardTraversalContext = {
    hamtDepth: number;
    rootBucket: Bucket<boolean>;
    lastBucket: Bucket<boolean>;
};
type CID = import('cids');
type ExporterOptions = import('../types').ExporterOptions;
import { Bucket } from "hamt-sharding";
//# sourceMappingURL=find-cid-in-shard.d.ts.map