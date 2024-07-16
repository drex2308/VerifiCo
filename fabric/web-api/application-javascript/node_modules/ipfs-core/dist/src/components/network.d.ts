export = Network;
/**
 * @typedef {Object} Online
 * @property {libp2p} libp2p
 * @property {Bitswap} bitswap
 *
 * @typedef {Object} Options
 * @property {PeerId} options.peerId
 * @property {Repo} options.repo
 * @property {Print} options.print
 * @property {IPFSOptions} options.options
 *
 * @typedef {import('ipfs-core-types/src/config').Config} IPFSConfig
 * @typedef {import('../types').Options} IPFSOptions
 * @typedef {import('ipfs-repo')} Repo
 * @typedef {import('../types').Print} Print
 * @typedef {import('libp2p')} libp2p
 * @typedef {import('ipfs-bitswap')} Bitswap
 * @typedef {import('peer-id')} PeerId
 * @typedef {import('ipfs-core-types/src/utils').AbortOptions} AbortOptions
 */
declare class Network {
    /**
     * @param {Options} options
     */
    static start({ peerId, repo, print, options }: Options): Promise<import("./network")>;
    /**
     * @param {Network} network
     */
    static stop(network: Network): Promise<void>;
    /**
     * @param {PeerId} peerId
     * @param {libp2p} libp2p
     * @param {Bitswap} bitswap
     */
    constructor(peerId: PeerId, libp2p: libp2p, bitswap: Bitswap);
    peerId: import("peer-id");
    libp2p: import("libp2p");
    bitswap: IPFSBitswap;
}
declare namespace Network {
    export { Online, Options, IPFSConfig, IPFSOptions, Repo, Print, libp2p, Bitswap, PeerId, AbortOptions };
}
import IPFSBitswap = require("ipfs-bitswap");
type Options = {
    peerId: PeerId;
    repo: Repo;
    print: Print;
    options: IPFSOptions;
};
type PeerId = import('peer-id');
type libp2p = import('libp2p');
type Bitswap = import('ipfs-bitswap');
type Online = {
    libp2p: libp2p;
    bitswap: Bitswap;
};
type IPFSConfig = import('ipfs-core-types/src/config').Config;
type IPFSOptions = import('../types').Options;
type Repo = import('ipfs-repo');
type Print = import('../types').Print;
type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
//# sourceMappingURL=network.d.ts.map