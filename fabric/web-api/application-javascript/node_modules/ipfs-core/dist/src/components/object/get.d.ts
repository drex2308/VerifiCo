declare function _exports({ ipld, preload }: {
    ipld: import('ipld');
    preload: import('../../types').Preload;
}): (multihash: CID, options?: any) => Promise<import("ipld-dag-pb/src/dag-node/dagNode")>;
export = _exports;
export type BaseName = import('multibase').BaseName;
import CID = require("cids");
//# sourceMappingURL=get.d.ts.map