export var OFFLINE_ERROR: string;
export var MFS_ROOT_KEY: Key;
export var MFS_MAX_CHUNK_SIZE: number;
export var MFS_MAX_LINKS: number;
export type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
export type UnixFSEntry = import('ipfs-unixfs-exporter').UnixFSEntry;
/** @type {typeof Object.assign} */
export const mergeOptions: typeof Object.assign;
import Key_1 = require("interface-datastore/dist/src/key");
import Key = Key_1.Key;
/**
 * Returns a well-formed ipfs Path.
 * The returned path will always be prefixed with /ipfs/ or /ipns/.
 *
 * @param  {string | CID} pathStr - An ipfs-path, or ipns-path or a cid
 * @returns {string} - ipfs-path or ipns-path
 * @throws on an invalid @param pathStr
 */
export function normalizePath(pathStr: string | CID): string;
/**
 * @param {Uint8Array|CID|string} path
 * @returns {string}
 */
export function normalizeCidPath(path: Uint8Array | CID | string): string;
/**
 * Resolve various styles of an ipfs-path to the hash of the target node.
 * Follows links in the path.
 *
 * Accepts formats:
 * - <base58 string>
 * - <base58 string>/link/to/venus
 * - /ipfs/<base58 string>/link/to/pluto
 * - multihash Buffer
 *
 * @param {import('ipld')} ipld
 * @param {CID | string} ipfsPath - A CID or IPFS path
 * @param {Object} [options] - Optional options passed directly to dag.resolve
 * @returns {Promise<CID>}
 */
export function resolvePath(ipld: import('ipld'), ipfsPath: CID | string, options?: Object | undefined): Promise<CID>;
/**
 * @typedef {import('ipfs-unixfs-exporter').UnixFSEntry} UnixFSEntry
 *
 * @param {UnixFSEntry} file
 * @param {Object} [options]
 * @param {boolean} [options.includeContent]
 */
export function mapFile(file: UnixFSEntry, options?: {
    includeContent?: boolean | undefined;
} | undefined): import("ipfs-core-types/src/root").File;
import withTimeoutOption = require("ipfs-core-utils/src/with-timeout-option");
export function withTimeout<T>(promise: T | Promise<T>, _options?: import("ipfs-core-types/src/utils").AbortOptions | undefined): Promise<T>;
import CID = require("cids");
export { withTimeoutOption };
//# sourceMappingURL=utils.d.ts.map