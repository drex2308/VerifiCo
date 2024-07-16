declare function _exports({ network, preload, peerId, keychain, repo, ipns, blockService, mfsPreload, print, options }: {
    network: import('../types').NetworkService;
    peerId: import('peer-id');
    repo: import('ipfs-repo');
    blockService: import('ipfs-block-service');
    print: import('../types').Print;
    preload: import('../types').Preload;
    mfsPreload: import('../types').MfsPreload;
    ipns: import('./ipns');
    keychain: import('libp2p/src/keychain');
    options: import('../types').Options;
}): () => Promise<void>;
export = _exports;
//# sourceMappingURL=start.d.ts.map