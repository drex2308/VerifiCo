declare function _exports(context: MfsContext): (path: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => Promise<import("ipfs-core-types/src/files").StatResult>;
export = _exports;
export type MfsContext = import('./').MfsContext;
export type DefaultOptions = {
    withLocal: boolean;
    signal?: AbortSignal | undefined;
    timeout?: number | undefined;
};
export type StatResult = import('ipfs-core-types/src/files').StatResult;
//# sourceMappingURL=stat.d.ts.map