export type DAGLink = import('ipld-dag-pb').DAGLink;
export type CIDVersion = import('cids').CIDVersion;
export type Mtime = import('ipfs-unixfs').Mtime;
export type HashName = import('multihashes').HashName;
export type CID = import('cids');
export type MfsContext = import('../').MfsContext;
/**
 * @param {MfsContext} context
 * @param {string} fileName
 * @param {DAGNode} rootNode
 */
export function generatePath(context: MfsContext, fileName: string, rootNode: DAGNode): Promise<{
    rootBucket: Bucket<any>;
    path: {
        bucket: Bucket<any>;
        prefix: string;
        node?: import("ipld-dag-pb/src/dag-node/dagNode") | undefined;
    }[];
}>;
/**
 * @typedef {import('ipld-dag-pb').DAGLink} DAGLink
 * @typedef {import('cids').CIDVersion} CIDVersion
 * @typedef {import('ipfs-unixfs').Mtime} Mtime
 * @typedef {import('multihashes').HashName} HashName
 * @typedef {import('cids')} CID
 * @typedef {import('../').MfsContext} MfsContext
 */
/**
 * @param {MfsContext} context
 * @param {DAGLink[]} links
 * @param {Bucket<any>} bucket
 * @param {object} options
 * @param {DAGNode} options.parent
 * @param {CIDVersion} options.cidVersion
 * @param {boolean} options.flush
 * @param {HashName} options.hashAlg
 */
export function updateHamtDirectory(context: MfsContext, links: DAGLink[], bucket: Bucket<any>, options: {
    parent: DAGNode;
    cidVersion: CIDVersion;
    flush: boolean;
    hashAlg: HashName;
}): Promise<{
    node: import("ipld-dag-pb/src/dag-node/dagNode");
    cid: import("cids");
    size: number;
}>;
/**
 * @param {DAGLink[]} links
 * @param {Bucket<any>} rootBucket
 * @param {Bucket<any>} parentBucket
 * @param {number} positionAtParent
 */
export function recreateHamtLevel(links: DAGLink[], rootBucket: Bucket<any>, parentBucket: Bucket<any>, positionAtParent: number): Promise<Bucket<any>>;
/**
 * @param {DAGLink[]} links
 */
export function recreateInitialHamtLevel(links: DAGLink[]): Promise<Bucket<any>>;
/**
 * @param {DAGLink[]} links
 * @param {Bucket<any>} bucket
 * @param {Bucket<any>} rootBucket
 */
export function addLinksToHamtBucket(links: DAGLink[], bucket: Bucket<any>, rootBucket: Bucket<any>): Promise<void>;
/**
 * @param {number} position
 */
export function toPrefix(position: number): string;
/**
 * @param {MfsContext} context
 * @param {{ name: string, size: number, cid: CID }[]} contents
 * @param {object} [options]
 * @param {Mtime} [options.mtime]
 * @param {number} [options.mode]
 */
export function createShard(context: MfsContext, contents: {
    name: string;
    size: number;
    cid: CID;
}[], options?: {
    mtime?: import("ipfs-unixfs/dist/src/types").Mtime | undefined;
    mode?: number | undefined;
} | undefined): Promise<any>;
import { DAGNode } from "ipld-dag-pb/src/types";
import { Bucket } from "hamt-sharding";
//# sourceMappingURL=hamt-utils.d.ts.map