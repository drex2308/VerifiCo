export = BitswapAPI;
/**
 * @typedef {import('../../types').NetworkService} NetworkService
 * @typedef {import('peer-id')} PeerId
 * @typedef {import('cids')} CID
 * @typedef {import('ipfs-core-types/src/utils').AbortOptions} AbortOptions
 */
declare class BitswapAPI {
    /**
     * @param {Object} config
     * @param {NetworkService} config.network
     */
    constructor({ network }: {
        network: import("../../types").NetworkService;
    });
    wantlist: (options?: any) => Promise<import("cids")[]>;
    wantlistForPeer: (peerId: string, options?: any) => Promise<import("cids")[]>;
    unwant: (cids: import("cids") | import("cids")[], options?: any) => Promise<void>;
    stat: (options?: any) => Promise<import("ipfs-core-types/src/bitswap").Stats>;
}
declare namespace BitswapAPI {
    export { NetworkService, PeerId, CID, AbortOptions };
}
type NetworkService = import('../../types').NetworkService;
type PeerId = import('peer-id');
type CID = import('cids');
type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
//# sourceMappingURL=index.d.ts.map