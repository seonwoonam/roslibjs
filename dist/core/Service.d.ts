import { EventEmitter } from 'eventemitter3';
import { default as Ros } from './Ros.js';
/**
 * A ROS service client.
 * @template TRequest, TResponse
 */
export default class Service<TRequest, TResponse> extends EventEmitter<string | symbol, any> {
    /**
     * @param {Object} options
     * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
     * @param {string} options.name - The service name, like '/add_two_ints'.
     * @param {string} options.serviceType - The service type, like 'rospy_tutorials/AddTwoInts'.
     */
    constructor(options: {
        ros: Ros;
        name: string;
        serviceType: string;
    });
    /**
       * Stores a reference to the most recent service callback advertised so it can be removed from the EventEmitter during un-advertisement
       * @private
       * @type {((rosbridgeRequest) => any) | null}
       */
    private _serviceCallback;
    isAdvertised: boolean;
    ros: Ros;
    name: string;
    serviceType: string;
    /**
     * @callback callServiceCallback
     *  @param {TResponse} response - The response from the service request.
     */
    /**
     * @callback callServiceFailedCallback
     * @param {string} error - The error message reported by ROS.
     */
    /**
     * Call the service. Returns the service response in the
     * callback. Does nothing if this service is currently advertised.
     *
     * @param {TRequest} request - The service request to send.
     * @param {callServiceCallback} [callback] - Function with the following params:
     * @param {callServiceFailedCallback} [failedCallback] - The callback function when the service call failed with params:
     */
    callService(request: TRequest, callback?: ((response: TResponse) => any) | undefined, failedCallback?: ((error: string) => any) | undefined): void;
    /**
     * @callback advertiseCallback
     * @param {TRequest} request - The service request.
     * @param {Partial<TResponse>} response - An empty dictionary. Take care not to overwrite this. Instead, only modify the values within.
     * @returns {boolean} true if the service has finished successfully, i.e., without any fatal errors.
     */
    /**
     * Advertise the service. This turns the Service object from a client
     * into a server. The callback will be called with every request
     * that's made on this service.
     *
     * @param {advertiseCallback} callback - This works similarly to the callback for a C++ service and should take the following params
     */
    advertise(callback: (request: TRequest, response: Partial<TResponse>) => boolean): void;
    unadvertise(): void;
    /**
     * An alternate form of Service advertisement that supports a modern Promise-based interface for use with async/await.
     * @param {(request: TRequest) => Promise<TResponse>} callback An asynchronous callback processing the request and returning a response.
     */
    advertiseAsync(callback: (request: TRequest) => Promise<TResponse>): void;
}
