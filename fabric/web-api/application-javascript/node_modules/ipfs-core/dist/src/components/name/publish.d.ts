declare function _exports({ ipns, ipld, peerId, isOnline, keychain }: {
    ipns: import('../ipns');
    ipld: import('ipld');
    peerId: import('peer-id');
    isOnline: import('ipfs-core-types/src/root').API["isOnline"];
    keychain: import('libp2p/src/keychain');
}): (value: string | import("cids"), options?: any) => Promise<import("ipfs-core-types/src/name").PublishResult>;
export = _exports;
//# sourceMappingURL=publish.d.ts.map