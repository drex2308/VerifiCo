export = unixFsResolver;
/**
 * @type {Resolver}
 */
declare const unixFsResolver: Resolver;
declare namespace unixFsResolver {
    export { CID, IPLD, DAGNode, ExporterOptions, UnixFSEntry, Resolve, Resolver, UnixfsV1Resolver };
}
type Resolver = import('../../types').Resolver;
type CID = import('cids');
type IPLD = import('ipld');
type DAGNode = import('ipld-dag-pb').DAGNode;
type ExporterOptions = import('../../types').ExporterOptions;
type UnixFSEntry = import('../../types').UnixFSEntry;
type Resolve = import('../../types').Resolve;
type UnixfsV1Resolver = import('../../types').UnixfsV1Resolver;
//# sourceMappingURL=index.d.ts.map