declare function _exports({ blockService, preload }: {
    blockService: import('ipfs-block-service');
    preload: import('../../types').Preload;
}): (cid: string | Uint8Array | import("cids"), options?: any) => Promise<import("ipld-block")>;
export = _exports;
//# sourceMappingURL=get.d.ts.map