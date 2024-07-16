export = hamtShardedDirectoryContent;
/**
 * @typedef {import('ipld-dag-pb').DAGNode} DAGNode
 * @typedef {import('ipld')} IPLD
 * @typedef {import('../../../types').ExporterOptions} ExporterOptions
 * @typedef {import('../../../types').Resolve} Resolve
 * @typedef {import('../../../types').UnixfsV1DirectoryContent} UnixfsV1DirectoryContent
 * @typedef {import('../../../types').UnixfsV1Resolver} UnixfsV1Resolver
 */
/**
 * @type {UnixfsV1Resolver}
 */
declare const hamtShardedDirectoryContent: UnixfsV1Resolver;
declare namespace hamtShardedDirectoryContent {
    export { DAGNode, IPLD, ExporterOptions, Resolve, UnixfsV1DirectoryContent, UnixfsV1Resolver };
}
type UnixfsV1Resolver = import('../../../types').UnixfsV1Resolver;
type DAGNode = import('ipld-dag-pb').DAGNode;
type IPLD = import('ipld');
type ExporterOptions = import('../../../types').ExporterOptions;
type Resolve = import('../../../types').Resolve;
type UnixfsV1DirectoryContent = import('../../../types').UnixfsV1DirectoryContent;
//# sourceMappingURL=hamt-sharded-directory.d.ts.map