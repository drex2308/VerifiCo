export = updateTree;
/**
 * @typedef {import('multihashes').HashName} HashName
 * @typedef {import('cids')} CID
 * @typedef {import('cids').CIDVersion} CIDVersion
 * @typedef {import('../').MfsContext} MfsContext
 * @typedef {import('./to-trail').MfsTrail} MfsTrail
 */
/**
 * Loop backwards through the trail, replacing links of all components to update CIDs
 *
 * @param {MfsContext} context
 * @param {MfsTrail[]} trail
 * @param {object} options
 * @param {number} options.shardSplitThreshold
 * @param {HashName} options.hashAlg
 * @param {CIDVersion} options.cidVersion
 * @param {boolean} options.flush
 */
declare function updateTree(context: MfsContext, trail: MfsTrail[], options: {
    shardSplitThreshold: number;
    hashAlg: HashName;
    cidVersion: CIDVersion;
    flush: boolean;
}): Promise<any>;
declare namespace updateTree {
    export { HashName, CID, CIDVersion, MfsContext, MfsTrail };
}
type MfsContext = import('../').MfsContext;
type MfsTrail = import('./to-trail').MfsTrail;
type HashName = import('multihashes').HashName;
type CIDVersion = import('cids').CIDVersion;
type CID = import('cids');
//# sourceMappingURL=update-tree.d.ts.map