declare function _exports({ options, peerId, multiaddrs, repo, keychainConfig, config }: {
    repo: Repo;
    options: IPFSOptions | undefined;
    peerId: PeerId;
    multiaddrs: Multiaddr[] | undefined;
    keychainConfig: KeychainConfig | undefined;
    config: Partial<IPFSConfig> | undefined;
}): import("libp2p") | Promise<import("libp2p")>;
export = _exports;
export type KeychainConfig = {
    pass?: string | undefined;
};
export type Repo = import('ipfs-repo');
export type PeerId = import('peer-id');
export type IPFSOptions = import('../types').Options;
export type LibP2P = import('libp2p');
export type Libp2pOptions = import('libp2p').Libp2pOptions & import('libp2p').CreateOptions;
export type IPFSConfig = import('ipfs-core-types/src/config').Config;
export type Multiaddr = import('multiaddr').Multiaddr;
//# sourceMappingURL=libp2p.d.ts.map