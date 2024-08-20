/**
 * @fileOverview
 * @author Brandon Alexander - baalexander@gmail.com
 */
/**
 * Message objects are used for publishing and subscribing to and from topics.
 *
 * @constructor
 * @template T
*/
export default class Message<T> {
    /**
     * @param {T} [values={}] - An object matching the fields defined in the .msg definition file.
     */
    constructor(values?: T | undefined);
}
