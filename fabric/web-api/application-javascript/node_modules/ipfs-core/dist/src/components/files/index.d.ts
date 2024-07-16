declare function _exports({ ipld, block, blockService, repo, preload, options: constructorOptions }: {
    ipld: import('ipld');
    block: import('ipfs-core-types/src/block').API;
    blockService: import('ipfs-block-service');
    repo: import('ipfs-repo');
    preload: import('../../types').Preload;
    options: import('..').Options;
}): import('ipfs-core-types/src/files').API;
export = _exports;
export type MfsContext = {
    ipld: import('ipld');
    repo: import('ipfs-repo');
    block: import('ipfs-core-types/src/block').API;
};
//# sourceMappingURL=index.d.ts.map