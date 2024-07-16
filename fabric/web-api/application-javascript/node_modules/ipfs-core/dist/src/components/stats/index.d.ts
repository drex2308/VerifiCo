export = StatsAPI;
declare class StatsAPI {
    /**
     * @param {Object} config
     * @param {import('ipfs-repo')} config.repo
     * @param {import('../../types').NetworkService} config.network
     */
    constructor({ repo, network }: {
        repo: import('ipfs-repo');
        network: import('../../types').NetworkService;
    });
    repo: (options?: any) => Promise<import("ipfs-core-types/src/repo").StatResult>;
    bw: (options?: any) => AsyncIterable<import("ipfs-core-types/src/stats").BWResult>;
    bitswap: (options?: any) => Promise<import("ipfs-core-types/src/bitswap").Stats>;
}
//# sourceMappingURL=index.d.ts.map