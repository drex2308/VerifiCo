export = MsgQueue;
declare class MsgQueue {
    /**
     * @param {PeerId} selfPeerId
     * @param {PeerId} otherPeerId
     * @param {Network} network
     */
    constructor(selfPeerId: PeerId, otherPeerId: PeerId, network: Network);
    peerId: import("peer-id");
    network: import("../network");
    refcnt: number;
    /**
     * @private
     * @type {{cid:CID, priority:number, cancel?:boolean}[]}
     */
    private _entries;
    /** @private */
    private _log;
    sendEntries: (() => void) & {
        cancel: () => void;
        flush: () => void;
    };
    /**
     * @param {Message} msg
     */
    addMessage(msg: Message): void;
    /**
     * @param {{cid:CID, priority:number}[]} entries
     */
    addEntries(entries: {
        cid: CID;
        priority: number;
    }[]): void;
    /**
     * @private
     */
    private _sendEntries;
    /**
     * @param {Message} msg
     */
    send(msg: Message): Promise<void>;
}
declare namespace MsgQueue {
    export { PeerId, CID, Network };
}
import Message = require("../types/message");
type CID = import('cids');
type PeerId = import('peer-id');
type Network = import('../network');
//# sourceMappingURL=msg-queue.d.ts.map