import { EventEmitter } from 'eventemitter3';
import { default as Ros } from './Ros.js';
/**
 * Publish and/or subscribe to a topic in ROS.
 *
 * Emits the following events:
 *  * 'warning' - If there are any warning during the Topic creation.
 *  * 'message' - The message data from rosbridge.
 * @template T
 */
export default class Topic<T> extends EventEmitter<string | symbol, any> {
    /**
     * @param {Object} options
     * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
     * @param {string} options.name - The topic name, like '/cmd_vel'.
     * @param {string} options.messageType - The message type, like 'std_msgs/String'.
     * @param {string} [options.compression=none] - The type of compression to use, like 'png', 'cbor', or 'cbor-raw'.
     * @param {number} [options.throttle_rate=0] - The rate (in ms in between messages) at which to throttle the topics.
     * @param {number} [options.queue_size=100] - The queue created at bridge side for re-publishing webtopics.
     * @param {boolean} [options.latch=false] - Latch the topic when publishing.
     * @param {number} [options.queue_length=0] - The queue length at bridge side used when subscribing.
     * @param {boolean} [options.reconnect_on_close=true] - The flag to enable resubscription and readvertisement on close event.
     */
    constructor(options: {
        ros: Ros;
        name: string;
        messageType: string;
        compression?: string | undefined;
        throttle_rate?: number | undefined;
        queue_size?: number | undefined;
        latch?: boolean | undefined;
        queue_length?: number | undefined;
        reconnect_on_close?: boolean | undefined;
    });
    /** @type {boolean | undefined} */
    waitForReconnect: boolean | undefined;
    /** @type {(() => void) | undefined} */
    reconnectFunc: (() => void) | undefined;
    isAdvertised: boolean;
    ros: Ros;
    name: string;
    messageType: string;
    compression: string;
    throttle_rate: number;
    latch: boolean;
    queue_size: number;
    queue_length: number;
    reconnect_on_close: boolean;
    callForSubscribeAndAdvertise: (message: any) => void;
    _messageCallback: (data: any) => void;
    /**
     * @callback subscribeCallback
     * @param {T} message - The published message.
     */
    /**
     * Every time a message is published for the given topic, the callback
     * will be called with the message object.
     *
     * @param {subscribeCallback} callback - Function with the following params:
     */
    subscribe(callback: (message: T) => any): void;
    subscribeId: string | null | undefined;
    /**
     * Unregister as a subscriber for the topic. Unsubscribing will stop
     * and remove all subscribe callbacks. To remove a callback, you must
     * explicitly pass the callback function in.
     *
     * @param {import('eventemitter3').EventEmitter.ListenerFn} [callback] - The callback to unregister, if
     *     provided and other listeners are registered the topic won't
     *     unsubscribe, just stop emitting to the passed listener.
     */
    unsubscribe(callback?: EventEmitter.ListenerFn<any[]> | undefined): void;
    /**
     * Register as a publisher for the topic.
     */
    advertise(): void;
    advertiseId: string | undefined;
    /**
     * Unregister as a publisher for the topic.
     */
    unadvertise(): void;
    /**
     * Publish the message.
     *
     * @param {T} message - The message to publish.
     */
    publish(message: T): void;
}
