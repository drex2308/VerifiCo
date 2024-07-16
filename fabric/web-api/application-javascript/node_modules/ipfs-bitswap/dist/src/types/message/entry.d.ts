export = BitswapMessageEntry;
declare class BitswapMessageEntry {
    /**
     * @param {import('cids')} cid
     * @param {number} priority
     * @param {import('./message').Message.Wantlist.WantType} wantType
     * @param {boolean} [cancel]
     * @param {boolean} [sendDontHave]
     */
    constructor(cid: import('cids'), priority: number, wantType: import('./message').Message.Wantlist.WantType, cancel?: boolean | undefined, sendDontHave?: boolean | undefined);
    entry: import("../wantlist/entry");
    cancel: boolean;
    sendDontHave: boolean;
    set cid(arg: import("cids"));
    get cid(): import("cids");
    set priority(arg: number);
    get priority(): number;
    set wantType(arg: import("./message").Message.Wantlist.WantType);
    get wantType(): import("./message").Message.Wantlist.WantType;
    get [Symbol.toStringTag](): string;
    /**
     * @param {this} other
     */
    equals(other: import("./entry")): boolean;
}
//# sourceMappingURL=entry.d.ts.map