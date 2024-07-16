export = PinManager;
declare class PinManager {
    /**
     * Throws an error if the pin type is invalid
     *
     * @param {any} type
     * @returns {type is PinType}
     */
    static checkPinType(type: any): type is import("ipfs-core-types/src/pin").PinType;
    /**
     * @param {Object} config
     * @param {import('ipfs-repo')} config.repo
     * @param {import('ipld')} config.ipld
     */
    constructor({ repo, ipld }: {
        repo: import('ipfs-repo');
        ipld: import('ipld');
    });
    repo: import("ipfs-repo");
    ipld: import("ipld");
    log: debug.Debugger;
    directPins: Set<any>;
    recursivePins: Set<any>;
    /**
     * @private
     * @param {CID} cid
     * @param {AbortOptions} [options]
     * @returns {AsyncGenerator<CID, void, undefined>}
     */
    private _walkDag;
    /**
     * @param {CID} cid
     * @param {PinOptions & AbortOptions} [options]
     * @returns {Promise<void>}
     */
    pinDirectly(cid: CID, options?: (PinOptions & import("ipfs-core-types/src/utils").AbortOptions) | undefined): Promise<void>;
    /**
     * @param {CID} cid
     * @param {AbortOptions} [options]
     * @returns {Promise<void>}
     */
    unpin(cid: CID, options?: import("ipfs-core-types/src/utils").AbortOptions | undefined): Promise<void>;
    /**
     * @param {CID} cid
     * @param {PinOptions & AbortOptions} [options]
     * @returns {Promise<void>}
     */
    pinRecursively(cid: CID, options?: (PinOptions & import("ipfs-core-types/src/utils").AbortOptions) | undefined): Promise<void>;
    /**
     * @param {AbortOptions} [options]
     */
    directKeys(options?: import("ipfs-core-types/src/utils").AbortOptions | undefined): AsyncGenerator<{
        cid: CID;
        metadata: any;
    }, void, unknown>;
    /**
     * @param {AbortOptions} [options]
     */
    recursiveKeys(options?: import("ipfs-core-types/src/utils").AbortOptions | undefined): AsyncGenerator<{
        cid: CID;
        metadata: any;
    }, void, unknown>;
    /**
     * @param {AbortOptions} [options]
     */
    indirectKeys(options?: import("ipfs-core-types/src/utils").AbortOptions | undefined): AsyncGenerator<CID, void, unknown>;
    /**
     * @param {CID} cid
     * @param {PinQueryType|PinQueryType[]} types
     * @param {AbortOptions} [options]
     */
    isPinnedWithType(cid: CID, types: PinQueryType | PinQueryType[], options?: import("ipfs-core-types/src/utils").AbortOptions | undefined): Promise<{
        cid: CID;
        pinned: boolean;
        reason: "recursive" | "direct";
        metadata: any;
        parent?: undefined;
    } | {
        cid: CID;
        pinned: boolean;
        reason: "indirect";
        parent: CID;
        metadata?: undefined;
    } | {
        cid: CID;
        pinned: boolean;
        reason?: undefined;
        metadata?: undefined;
        parent?: undefined;
    }>;
    /**
     * @param {CID} cid
     * @param {AbortOptions} options
     */
    fetchCompleteDag(cid: CID, options: AbortOptions): Promise<void>;
}
declare namespace PinManager {
    export { PinTypes, Pin, PinType, PinQueryType, PinOptions, AbortOptions };
}
import debug = require("debug");
import CID = require("cids");
type PinOptions = {
    metadata?: any;
};
type PinQueryType = import('ipfs-core-types/src/pin').PinQueryType;
type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
declare namespace PinTypes {
    const direct: 'direct';
    const recursive: 'recursive';
    const indirect: 'indirect';
    const all: 'all';
}
type Pin = {
    depth: number;
    version?: CID.CIDVersion | undefined;
    codec?: multicodec.CodecCode | undefined;
    metadata?: Record<string, any> | undefined;
};
type PinType = import('ipfs-core-types/src/pin').PinType;
import multicodec = require("multicodec");
//# sourceMappingURL=pin-manager.d.ts.map