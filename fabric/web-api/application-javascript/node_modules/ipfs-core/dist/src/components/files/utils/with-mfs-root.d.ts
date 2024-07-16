export = loadMfsRoot;
/**
 * @typedef {import('../').MfsContext} MfsContext
 */
/**
 * @param {MfsContext} context
 * @param {import('ipfs-core-types/src/utils').AbortOptions} [options]
 */
declare function loadMfsRoot(context: MfsContext, options?: import("ipfs-core-types/src/utils").AbortOptions | undefined): Promise<CID>;
declare namespace loadMfsRoot {
    export { MfsContext };
}
type MfsContext = import('../').MfsContext;
import CID = require("cids");
//# sourceMappingURL=with-mfs-root.d.ts.map