export = RepoAPI;
declare class RepoAPI {
    /**
     * @param {Object} config
     * @param {import('../gc-lock').GCLock} config.gcLock
     * @param {import('ipfs-core-types/src/pin').API} config.pin
     * @param {import('ipfs-repo')} config.repo
     * @param {import('ipfs-core-types/src/refs').API["refs"]} config.refs
     */
    constructor({ gcLock, pin, repo, refs }: {
        gcLock: import('../gc-lock').GCLock;
        pin: import('ipfs-core-types/src/pin').API;
        repo: import('ipfs-repo');
        refs: import('ipfs-core-types/src/refs').API["refs"];
    });
    gc: (_options?: any) => AsyncIterable<import("ipfs-core-types/src/repo").GCResult>;
    stat: (options?: any) => Promise<import("ipfs-core-types/src/repo").StatResult>;
    version: (options?: any) => Promise<number>;
}
//# sourceMappingURL=index.d.ts.map