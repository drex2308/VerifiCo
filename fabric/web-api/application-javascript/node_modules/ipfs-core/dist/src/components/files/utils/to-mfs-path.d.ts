export = toMfsPath;
/**
 * @typedef {import('ipfs-unixfs-exporter').UnixFSEntry} UnixFSEntry
 * @typedef {import('ipfs-unixfs-exporter').ExporterOptions} ExporterOptions
 * @typedef {import('../').MfsContext} MfsContext
 *
 * @typedef {object} FilePath
 * @property {'mfs' | 'ipfs'} type
 * @property {'file'} entryType
 * @property {number} depth
 * @property {string} mfsPath
 * @property {string} mfsDirectory
 * @property {string[]} parts
 * @property {string} path
 * @property {string} name
 * @property {CID} cid
 * @property {boolean} exists
 * @property {import('ipfs-unixfs').UnixFS} unixfs
 * @property {(options?: ExporterOptions) => AsyncIterable<Uint8Array>} content
 *
 * @typedef {object} DirectoryPath
 * @property {'mfs' | 'ipfs'} type
 * @property {'directory'} entryType
 * @property {number} depth
 * @property {string} mfsPath
 * @property {string} mfsDirectory
 * @property {string[]} parts
 * @property {string} path
 * @property {string} name
 * @property {CID} cid
 * @property {boolean} exists
 * @property {import('ipfs-unixfs').UnixFS} unixfs
 * @property {(options?: ExporterOptions) => AsyncIterable<UnixFSEntry>} content
 *
 * @typedef {object} ObjectPath
 * @property {'mfs' | 'ipfs'} type
 * @property {'object'} entryType
 * @property {number} depth
 * @property {string} mfsPath
 * @property {string} mfsDirectory
 * @property {string[]} parts
 * @property {string} path
 * @property {string} name
 * @property {CID} cid
 * @property {boolean} exists
 * @property {(options?: ExporterOptions) => AsyncIterable<any>} content
 *
 * @typedef {object} RawPath
 * @property {'mfs' | 'ipfs'} type
 * @property {'raw'} entryType
 * @property {number} depth
 * @property {string} mfsPath
 * @property {string} mfsDirectory
 * @property {string[]} parts
 * @property {string} path
 * @property {string} name
 * @property {CID} cid
 * @property {boolean} exists
 * @property {(options?: ExporterOptions) => AsyncIterable<Uint8Array>} content
 *
 * @typedef {object} IdentityPath
 * @property {'mfs' | 'ipfs'} type
 * @property {'identity'} entryType
 * @property {number} depth
 * @property {string} mfsPath
 * @property {string} mfsDirectory
 * @property {string[]} parts
 * @property {string} path
 * @property {string} name
 * @property {CID} cid
 * @property {boolean} exists
 * @property {(options?: ExporterOptions) => AsyncIterable<Uint8Array>} content
 *
 * @typedef {FilePath | DirectoryPath | ObjectPath | RawPath | IdentityPath} MfsPath
 */
/**
 * @param {MfsContext} context
 * @param {string | CID} path
 * @param {import('ipfs-core-types/src/utils').AbortOptions} [options]
 */
declare function toMfsPath(context: MfsContext, path: string | CID, options?: import("ipfs-core-types/src/utils").AbortOptions | undefined): Promise<MfsPath>;
declare namespace toMfsPath {
    export { UnixFSEntry, ExporterOptions, MfsContext, FilePath, DirectoryPath, ObjectPath, RawPath, IdentityPath, MfsPath };
}
type MfsContext = import('../').MfsContext;
import CID = require("cids");
type MfsPath = FilePath | DirectoryPath | ObjectPath | RawPath | IdentityPath;
type UnixFSEntry = import('ipfs-unixfs-exporter').UnixFSEntry;
type ExporterOptions = import('ipfs-unixfs-exporter').ExporterOptions;
type FilePath = {
    type: 'mfs' | 'ipfs';
    entryType: 'file';
    depth: number;
    mfsPath: string;
    mfsDirectory: string;
    parts: string[];
    path: string;
    name: string;
    cid: CID;
    exists: boolean;
    unixfs: import('ipfs-unixfs').UnixFS;
    content: (options?: import("ipfs-unixfs-exporter/dist/src/types").ExporterOptions | undefined) => AsyncIterable<Uint8Array>;
};
type DirectoryPath = {
    type: 'mfs' | 'ipfs';
    entryType: 'directory';
    depth: number;
    mfsPath: string;
    mfsDirectory: string;
    parts: string[];
    path: string;
    name: string;
    cid: CID;
    exists: boolean;
    unixfs: import('ipfs-unixfs').UnixFS;
    content: (options?: import("ipfs-unixfs-exporter/dist/src/types").ExporterOptions | undefined) => AsyncIterable<UnixFSEntry>;
};
type ObjectPath = {
    type: 'mfs' | 'ipfs';
    entryType: 'object';
    depth: number;
    mfsPath: string;
    mfsDirectory: string;
    parts: string[];
    path: string;
    name: string;
    cid: CID;
    exists: boolean;
    content: (options?: import("ipfs-unixfs-exporter/dist/src/types").ExporterOptions | undefined) => AsyncIterable<any>;
};
type RawPath = {
    type: 'mfs' | 'ipfs';
    entryType: 'raw';
    depth: number;
    mfsPath: string;
    mfsDirectory: string;
    parts: string[];
    path: string;
    name: string;
    cid: CID;
    exists: boolean;
    content: (options?: import("ipfs-unixfs-exporter/dist/src/types").ExporterOptions | undefined) => AsyncIterable<Uint8Array>;
};
type IdentityPath = {
    type: 'mfs' | 'ipfs';
    entryType: 'identity';
    depth: number;
    mfsPath: string;
    mfsDirectory: string;
    parts: string[];
    path: string;
    name: string;
    cid: CID;
    exists: boolean;
    content: (options?: import("ipfs-unixfs-exporter/dist/src/types").ExporterOptions | undefined) => AsyncIterable<Uint8Array>;
};
//# sourceMappingURL=to-mfs-path.d.ts.map