export = WantListEntry;
declare class WantListEntry {
    /**
     * @param {import('cids')} cid
     * @param {number} priority
     * @param {import('../message/message').Message.Wantlist.WantType} wantType
     */
    constructor(cid: import('cids'), priority: number, wantType: import('../message/message').Message.Wantlist.WantType);
    _refCounter: number;
    cid: import("cids");
    priority: number;
    wantType: import("../message/message").Message.Wantlist.WantType;
    inc(): void;
    dec(): void;
    hasRefs(): boolean;
    get [Symbol.toStringTag](): string;
    /**
     * @param {any} other
     */
    equals(other: any): boolean;
}
//# sourceMappingURL=entry.d.ts.map