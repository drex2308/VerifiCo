declare function _exports({ dns, ipns, peerId, isOnline, options: { offline } }: {
    dns: import('ipfs-core-types/src/root').API["dns"];
    ipns: import('../ipns');
    peerId: import('peer-id');
    isOnline: import('ipfs-core-types/src/root').API["isOnline"];
    options: import('../../types').Options;
}): (name: string, options?: any) => AsyncIterable<string>;
export = _exports;
//# sourceMappingURL=resolve.d.ts.map