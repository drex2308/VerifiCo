declare function _exports({ network }: {
    network: import('../../types').NetworkService;
}): (options?: any) => AsyncIterable<import("ipfs-core-types/src/stats").BWResult>;
export = _exports;
export type BWOptions = {
    /**
     * - Specifies a peer to print bandwidth for
     */
    peer?: import("peer-id") | undefined;
    /**
     * - Specifies a protocol to print bandwidth for
     */
    proto?: string | undefined;
    /**
     * - Is used to yield bandwidth info at an interval
     */
    poll?: boolean | undefined;
    /**
     * - The time interval to wait between updating output, if `poll` is `true`.
     */
    interval?: string | number | undefined;
};
export type BandwidthInfo = {
    totalIn: bigint;
    totalOut: bigint;
    rateIn: bigint;
    rateOut: bigint;
};
export type libp2p = import('libp2p');
export type PeerId = import('peer-id');
export type CID = import('cids');
export type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
//# sourceMappingURL=bw.d.ts.map