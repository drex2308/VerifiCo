declare function _exports({ preload, files, options }: {
    preload: import('./types').Preload;
    files: import('ipfs-core-types/src/files').API;
    options?: Options | undefined;
}): {
    /**
     * @returns {Promise<void>}
     */
    start(): Promise<void>;
    /**
     * @returns {void}
     */
    stop(): void;
};
export = _exports;
export type Options = PreloadOptions & MFSPreloadOptions;
export type MFSPreloadOptions = {
    interval?: number | undefined;
};
export type PreloadOptions = import('./types').PreloadOptions;
//# sourceMappingURL=mfs-preload.d.ts.map