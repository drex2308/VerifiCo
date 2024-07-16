export = BitswapMessage;
declare class BitswapMessage {
    /**
     * @param {boolean} full
     */
    constructor(full: boolean);
    full: boolean;
    /** @type {Map<string, Entry>} */
    wantlist: Map<string, Entry>;
    /** @type {Map<string, import('ipld-block')>} */
    blocks: Map<string, import('ipld-block')>;
    /** @type {Map<string, import('./message').Message.BlockPresenceType>} */
    blockPresences: Map<string, import('./message').Message.BlockPresenceType>;
    pendingBytes: number;
    get empty(): boolean;
    /**
     *
     * @param {CID} cid
     * @param {number} priority
     * @param {import('./message').Message.Wantlist.WantType | null} [wantType]
     * @param {boolean} [cancel]
     * @param {boolean} [sendDontHave]
     * @returns {void}
     */
    addEntry(cid: CID, priority: number, wantType?: Message.Wantlist.WantType | null | undefined, cancel?: boolean | undefined, sendDontHave?: boolean | undefined): void;
    /**
     * @param {import('ipld-block')} block
     * @returns {void}
     */
    addBlock(block: import('ipld-block')): void;
    /**
     * @param {CID} cid
     */
    addHave(cid: CID): void;
    /**
     * @param {CID} cid
     */
    addDontHave(cid: CID): void;
    /**
     * @param {CID} cid
     */
    cancel(cid: CID): void;
    /**
     * @param {number} size
     */
    setPendingBytes(size: number): void;
    /**
     * Serializes to Bitswap Message protobuf of
     * version 1.0.0
     *
     * @returns {Uint8Array}
     */
    serializeToBitswap100(): Uint8Array;
    /**
     * Serializes to Bitswap Message protobuf of
     * version 1.1.0
     *
     * @returns {Uint8Array}
     */
    serializeToBitswap110(): Uint8Array;
    /**
     * @param {BitswapMessage} other
     * @returns {boolean}
     */
    equals(other: BitswapMessage): boolean;
    get [Symbol.toStringTag](): string;
}
declare namespace BitswapMessage {
    export function deserialize(raw: Uint8Array): Promise<BitswapMessage>;
    export function blockPresenceSize(cid: CID): number;
    export { Entry };
    export namespace WantType {
        const Block: Message.Wantlist.WantType;
        const Have: Message.Wantlist.WantType;
    }
    export namespace BlockPresenceType {
        const Have_1: Message.BlockPresenceType;
        export { Have_1 as Have };
        export const DontHave: Message.BlockPresenceType;
    }
}
import Entry = require("./entry");
import CID = require("cids");
import { Message } from "./message";
//# sourceMappingURL=index.d.ts.map