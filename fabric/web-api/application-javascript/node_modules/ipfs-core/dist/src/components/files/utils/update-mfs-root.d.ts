export = updateMfsRoot;
/**
 * @typedef {import('../').MfsContext} MfsContext
 */
/**
 * @param {MfsContext} context
 * @param {import('cids')} cid
 * @param {import('ipfs-core-types/src/utils').AbortOptions} options
 */
declare function updateMfsRoot(context: MfsContext, cid: import('cids'), options: import('ipfs-core-types/src/utils').AbortOptions): Promise<import("cids")>;
declare namespace updateMfsRoot {
    export { MfsContext };
}
type MfsContext = import('../').MfsContext;
//# sourceMappingURL=update-mfs-root.d.ts.map