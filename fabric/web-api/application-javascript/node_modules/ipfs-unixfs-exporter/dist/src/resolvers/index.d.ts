export = resolve;
/**
 * @type {Resolve}
 */
declare function resolve(cid: import("cids"), name: string, path: string, toResolve: string[], depth: number, ipld: any, options: import("../types").ExporterOptions): Promise<import("../types").ResolveResult>;
declare namespace resolve {
    export { CID, IPLD, ExporterOptions, UnixFSEntry, Resolver, Resolve };
}
type CID = import('cids');
type IPLD = import('ipld');
type ExporterOptions = import('../types').ExporterOptions;
type UnixFSEntry = import('../types').UnixFSEntry;
type Resolver = import('../types').Resolver;
type Resolve = import('../types').Resolve;
//# sourceMappingURL=index.d.ts.map