/**
 * Creates a logger for the given subsystem
 *
 * @param {import('peer-id')} [id]
 * @param {string} [subsystem]
 */
export function logger(id?: import("peer-id") | undefined, subsystem?: string | undefined): debug.Debugger & {
    error: debug.Debugger;
};
/**
 * @template X, T
 * @param {(x:X, t:T) => boolean} pred
 * @param {X} x
 * @param {T[]} list
 * @returns {boolean}
 */
export function includesWith<X, T>(pred: (x: X, t: T) => boolean, x: X, list: T[]): boolean;
/**
 * @template T
 * @param {(x:T, t:T) => boolean} pred
 * @param {T[]} list
 * @returns {T[]}
 */
export function uniqWith<T>(pred: (x: T, t: T) => boolean, list: T[]): T[];
/**
 * @template {string|number|symbol} K
 * @template V
 * @param {(v:V) => K} pred
 * @param {V[]} list
 * @returns {Record<K, V[]>}
 */
export function groupBy<K extends string | number | symbol, V>(pred: (v: V) => K, list: V[]): Record<K, V[]>;
/**
 * @template T, E
 * @param {(a:T, b:E) => boolean} pred
 * @param {T[]} list
 * @param {E[]} values
 * @returns {T[]}
 */
export function pullAllWith<T, E>(pred: (a: T, b: E) => boolean, list: T[], values: E[]): T[];
/**
 * @template T
 * @param {(v:T) => number} fn
 * @param {T[]} list
 * @returns {T[]}
 */
export function sortBy<T>(fn: (v: T) => number, list: T[]): T[];
/**
 * Is equal for Maps of BitswapMessageEntry or Blocks
 *
 * @template {{data?:Uint8Array, equals?: (value:any) => boolean}} T
 * @param {Map<string, T>} a
 * @param {Map<string, T>} b
 * @returns {boolean}
 */
export function isMapEqual<T extends {
    data?: Uint8Array | undefined;
    equals?: ((value: any) => boolean) | undefined;
}>(a: Map<string, T>, b: Map<string, T>): boolean;
import debug = require("debug");
//# sourceMappingURL=index.d.ts.map