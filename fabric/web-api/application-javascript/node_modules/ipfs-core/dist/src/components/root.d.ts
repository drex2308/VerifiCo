export = Root;
/**
 * @typedef {AddAllContext & CatContext & GetContext & ListContext } Context
 * @typedef {import('./add-all').Context} AddAllContext
 * @typedef {import('./cat').Context} CatContext
 * @typedef {import('./get').Context} GetContext
 * @typedef {import('./ls').Context} ListContext
 */
declare class Root {
    /**
     * @param {Context} context
     */
    constructor({ preload, gcLock, pin, block, ipld, options }: Context);
    addAll: (source: import("ipfs-core-types/src/utils").ImportCandidateStream, options?: any) => AsyncIterable<import("ipfs-core-types/src/root").AddResult>;
    add: (entry: import("ipfs-core-types/src/utils").ImportCandidate, options?: any) => Promise<import("ipfs-core-types/src/root").AddResult>;
    cat: (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => AsyncIterable<Uint8Array>;
    get: (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => AsyncIterable<import("ipfs-core-types/src/root").IPFSEntry>;
    ls: (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => AsyncIterable<import("ipfs-core-types/src/root").IPFSEntry>;
}
declare namespace Root {
    export { Context, AddAllContext, CatContext, GetContext, ListContext };
}
type Context = AddAllContext & CatContext & GetContext & ListContext;
type AddAllContext = import('./add-all').Context;
type CatContext = import('./cat').Context;
type GetContext = import('./get').Context;
type ListContext = import('./ls').Context;
//# sourceMappingURL=root.d.ts.map