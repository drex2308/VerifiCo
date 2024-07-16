export = createIPLD;
/**
 * @param {Object} config
 * @param {import('ipfs-block-service')} config.blockService
 * @param {Partial<import('ipld').Options>} [config.options]
 */
declare function createIPLD({ blockService, options }: {
    blockService: import('ipfs-block-service');
    options?: Partial<import("ipld/dist/src/types").Options> | undefined;
}): Ipld;
import Ipld = require("ipld");
//# sourceMappingURL=ipld.d.ts.map