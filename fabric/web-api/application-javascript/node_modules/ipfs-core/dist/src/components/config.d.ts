declare function _exports({ repo }: {
    repo: import('ipfs-repo');
}): {
    getAll: (options?: any) => Promise<import("ipfs-core-types/src/config").Config>;
    get: (key: string, options: any) => Promise<string | object>;
    set: (key: string, value: any, options: any) => Promise<void>;
    replace: (value: import("ipfs-core-types/src/config").Config, options: any) => Promise<void>;
    profiles: {
        apply: (profileName: string, options?: any) => Promise<import("ipfs-core-types/src/config/profiles").ProfilesApplyResult>;
        list: (_options: any) => Promise<import("ipfs-core-types/src/config/profiles").Profile[]>;
    };
};
declare namespace _exports {
    export { profiles };
    export { Config, Transformer };
}
export = _exports;
export type Config = import('ipfs-core-types/src/config').Config;
export type Transformer = {
    description: string;
    transform: (config: Config) => Config;
};
/**
 * @type {Record<string, Transformer>}
 */
declare const profiles: Record<string, Transformer>;
//# sourceMappingURL=config.d.ts.map