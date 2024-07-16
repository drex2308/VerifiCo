export = Notifications;
declare class Notifications extends EventEmitter {
    /**
     * Internal module used to track events about incoming blocks,
     * wants and unwants.
     *
     * @param {PeerId} peerId
     */
    constructor(peerId: PeerId);
    _log: debug.Debugger & {
        error: debug.Debugger;
    };
    /**
     * Signal the system that we received `block`.
     *
     * @param {Block} block
     * @returns {void}
     */
    hasBlock(block: Block): void;
    /**
     * Signal the system that we are waiting to receive the
     * block associated with the given `cid`.
     * Returns a Promise that resolves to the block when it is received,
     * or undefined when the block is unwanted.
     *
     * @param {CID} cid
     * @param {Object} [options]
     * @param {AbortSignal} [options.signal]
     * @returns {Promise<Block>}
     */
    wantBlock(cid: CID, options?: {
        signal?: AbortSignal | undefined;
    } | undefined): Promise<Block>;
    /**
     * Signal that the block is not wanted anymore.
     *
     * @param {CID} cid - the CID of the block that is not wanted anymore.
     * @returns {void}
     */
    unwantBlock(cid: CID): void;
}
declare namespace Notifications {
    export { Block, CID, PeerId };
}
import { EventEmitter } from "events";
type Block = import('ipld-block');
type CID = import('cids');
type PeerId = import('peer-id');
//# sourceMappingURL=notifications.d.ts.map