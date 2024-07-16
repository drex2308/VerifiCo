export = Ledger;
/**
 * @typedef {import('cids')} CID
 */
declare class Ledger {
    /**
     * @param {import('peer-id')} peerId
     */
    constructor(peerId: import('peer-id'));
    partner: import("peer-id");
    wantlist: Wantlist;
    exchangeCount: number;
    sentToPeer: Map<any, any>;
    accounting: {
        bytesSent: number;
        bytesRecv: number;
    };
    /**
     * @param {number} n
     */
    sentBytes(n: number): void;
    lastExchange: number | undefined;
    /**
     * @param {number} n
     */
    receivedBytes(n: number): void;
    /**
     *
     * @param {CID} cid
     * @param {number} priority
     * @param {import('../types/message/message').Message.Wantlist.WantType} wantType
     * @returns {void}
     */
    wants(cid: CID, priority: number, wantType: import('../types/message/message').Message.Wantlist.WantType): void;
    /**
     * @param {CID} cid
     * @returns {void}
     */
    cancelWant(cid: CID): void;
    /**
     * @param {CID} cid
     * @returns {import('../types/wantlist/entry')|void}
     */
    wantlistContains(cid: CID): import('../types/wantlist/entry') | void;
    /**
     * @returns {number}
     */
    debtRatio(): number;
}
declare namespace Ledger {
    export { CID };
}
import Wantlist = require("../types/wantlist");
type CID = import('cids');
//# sourceMappingURL=ledger.d.ts.map