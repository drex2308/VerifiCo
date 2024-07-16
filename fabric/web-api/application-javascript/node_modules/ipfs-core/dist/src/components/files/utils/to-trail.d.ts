export = toTrail;
/**
 * @typedef {import('../').MfsContext} MfsContext
 * @typedef {object} MfsTrail
 * @property {string} name
 * @property {import('cids')} cid
 * @property {number} [size]
 * @property {string} [type]
 *
 * TODO: export supported types from unixfs-exporter and use for `type` above
 */
/**
 * @param {MfsContext} context
 * @param {string} path
 * @returns {Promise<MfsTrail[]>}
 */
declare function toTrail(context: MfsContext, path: string): Promise<MfsTrail[]>;
declare namespace toTrail {
    export { MfsContext, MfsTrail };
}
type MfsContext = import('../').MfsContext;
type MfsTrail = {
    name: string;
    cid: import('cids');
    size?: number | undefined;
    /**
     * TODO: export supported types from unixfs-exporter and use for `type` above
     */
    type?: string | undefined;
};
//# sourceMappingURL=to-trail.d.ts.map