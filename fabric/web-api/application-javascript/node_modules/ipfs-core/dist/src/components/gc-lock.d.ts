declare function _exports({ path, repoOwner }: {
    path: string;
    repoOwner?: boolean | undefined;
}): GCLock;
export = _exports;
export type GCLock = RWLock;
export type RWLock = {
    readLock: () => Promise<Lock>;
    writeLock: () => Promise<Lock>;
};
export type Lock = () => void;
//# sourceMappingURL=gc-lock.d.ts.map