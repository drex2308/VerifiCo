export = createNode;
/**
 * @typedef {import('ipfs-unixfs').MtimeLike} MtimeLike
 * @typedef {import('cids').CIDVersion} CIDVersion
 * @typedef {import('../').MfsContext} MfsContext
 */
/**
 * @param {MfsContext} context
 * @param {'file' | 'directory'} type
 * @param {object} options
 * @param {import('multihashes').HashName} options.hashAlg
 * @param {CIDVersion} options.cidVersion
 * @param {boolean} options.flush
 * @param {MtimeLike} [options.mtime]
 * @param {number} [options.mode]
 */
declare function createNode(context: MfsContext, type: 'file' | 'directory', options: {
    hashAlg: import('multihashes').HashName;
    cidVersion: CIDVersion;
    flush: boolean;
    mtime?: import("ipfs-unixfs/dist/src/types").MtimeLike | undefined;
    mode?: number | undefined;
}): Promise<{
    cid: import("cids");
    node: import("ipld-dag-pb/src/dag-node/dagNode");
}>;
declare namespace createNode {
    export { MtimeLike, CIDVersion, MfsContext };
}
type MfsContext = import('../').MfsContext;
type CIDVersion = import('cids').CIDVersion;
type MtimeLike = import('ipfs-unixfs').MtimeLike;
//# sourceMappingURL=create-node.d.ts.map