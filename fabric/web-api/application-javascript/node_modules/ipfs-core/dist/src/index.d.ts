export type IPFS = import('./components');
export type Options = import('./types').Options;
import { create } from "./components";
import crypto = require("libp2p-crypto");
import isIPFS = require("is-ipfs");
import CID = require("cids");
import { multiaddr } from "multiaddr";
import multibase = require("multibase");
export const multihash: typeof multihashing.multihash;
import multihashing = require("multihashing-async");
import multicodec = require("multicodec");
import PeerId = require("peer-id");
import globSource = require("ipfs-utils/src/files/glob-source");
import urlSource = require("ipfs-utils/src/files/url-source");
export { create, crypto, isIPFS, CID, multiaddr, multibase, multihashing, multicodec, PeerId, globSource, urlSource };
//# sourceMappingURL=index.d.ts.map