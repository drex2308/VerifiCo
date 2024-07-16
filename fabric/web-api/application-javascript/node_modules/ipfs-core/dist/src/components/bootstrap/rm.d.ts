declare function _exports({ repo }: {
    repo: import('ipfs-repo');
}): (multiaddr: import("multiaddr").Multiaddr, options?: any) => Promise<{
    Peers: import("multiaddr").Multiaddr[];
}>;
export = _exports;
//# sourceMappingURL=rm.d.ts.map