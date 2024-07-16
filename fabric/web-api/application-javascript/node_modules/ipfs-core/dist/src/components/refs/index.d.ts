declare function _exports({ ipld, resolve, preload }: {
    ipld: import('ipld');
    resolve: import('ipfs-core-types/src/root').API["resolve"];
    preload: import('../../types').Preload;
}): (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath | import("ipfs-core-types/src/utils").IPFSPath[], options?: import("ipfs-core-types/src/refs").RefsOptions | undefined) => AsyncIterable<import("ipfs-core-types/src/refs").RefsResult>;
declare namespace _exports {
    export { Format };
    export { Node, TraversalResult };
}
export = _exports;
export type Node = {
    name?: string | undefined;
    cid: CID;
};
export type TraversalResult = {
    parent: Node;
    node: Node;
    isDuplicate: boolean;
};
declare namespace Format {
    const _default: string;
    export { _default as default };
    export const edges: string;
}
import CID = require("cids");
//# sourceMappingURL=index.d.ts.map