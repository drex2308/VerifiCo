declare function _exports({ network, preload, blockService, ipns, repo, mfsPreload }: {
    network: import('../types').NetworkService;
    preload: import('../types').Preload;
    blockService: import('ipfs-block-service');
    ipns: import('./ipns');
    repo: import('ipfs-repo');
    mfsPreload: import('../types').MfsPreload;
}): (options?: any) => Promise<void>;
export = _exports;
//# sourceMappingURL=stop.d.ts.map