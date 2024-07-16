export = Wantlist;
/**
 * @typedef {import('cids')} CID
 */
declare class Wantlist {
    /**
     *
     * @param {import('../../stats')} [stats]
     */
    constructor(stats?: import("../../stats") | undefined);
    /** @type {Map<string, Entry>} */
    set: Map<string, Entry>;
    _stats: import("../../stats") | undefined;
    get length(): number;
    /**
     * @param {CID} cid
     * @param {number} priority
     * @param {import('../message/message').Message.Wantlist.WantType} wantType
     */
    add(cid: CID, priority: number, wantType: import('../message/message').Message.Wantlist.WantType): void;
    /**
     * @param {CID} cid
     */
    remove(cid: CID): void;
    /**
     * @param {string} cidStr
     */
    removeForce(cidStr: string): void;
    /**
     * @param {(entry:Entry, key:string) => void} fn
     */
    forEach(fn: (entry: Entry, key: string) => void): void;
    entries(): IterableIterator<[string, Entry]>;
    sortedEntries(): Map<string, Entry>;
    /**
     * @param {CID} cid
     */
    contains(cid: CID): Entry | undefined;
}
declare namespace Wantlist {
    export { Entry, CID };
}
import Entry = require("./entry");
type CID = import('cids');
//# sourceMappingURL=index.d.ts.map