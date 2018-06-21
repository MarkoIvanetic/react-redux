'use strict'

import sharedService from './shared-service';

const VFRemotingConstant = window.VFRemotingConstant;

function request(remoteAction, params, options) {

    return new Promise((resolve, reject) => {
        var invokeActionArgs = [];
        invokeActionArgs.push(VFRemotingConstant[remoteAction]);

        if (typeof params !== 'string' && typeof params !== 'function') {
            params.forEach(function(v) {
                invokeActionArgs.push(v);
            });
        } else {
            invokeActionArgs.push(params);
        }

        //callback
        invokeActionArgs.push(function(result, event) {

            if (event.status) {
                try {
                    result = JSON.parse(result);
                    result = sharedService.stripNamespace(result, packagePrefix);
                    resolve(result);
                } catch (e) {
                    resolve(result);
                }
            } else {
                reject(event);
            }


        });

        var vfOptions = { escape: false, buffer: false };

        if (typeof options !== 'undefined') {
            Object.assign(vfOptions, options);
        }
        invokeActionArgs.push(vfOptions);

        VFRemotingConstant.VRMInvokeAction.apply(Visualforce.remoting.Manager, invokeActionArgs);
    });
}

export default request;