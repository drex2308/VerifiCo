declare function _exports(repoOwner?: boolean | undefined): Lock;
export = _exports;
export type Lock = {
    readLock: (fn: (...args: any) => any) => (...args: any) => any;
    writeLock: (fn: (...args: any) => any) => (...args: any) => any;
};
//# sourceMappingURL=create-lock.d.ts.map