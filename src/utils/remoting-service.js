'use strict'

import sharedService from './shared-service';
import request from './vfremoting-service';

let publishMacdFieldMapping = function() {
    return new Promise((resolve, reject) => {
        try {
            request("publishMacdFieldMapping", [])
                .then(function(response) {
                    resolve(response);
                });
        } catch (error) {
            reject(error.message.substring(0, 110));
        }
    });
}
let publishPricingMatrix = function() {
    return new Promise((resolve, reject) => {
        try {
            request("publishPricingMatrix", [])
                .then(function(response) {
                    resolve(response);
                });
        } catch (error) {
            reject(error.message.substring(0, 110));
        }
    });
}
let getHeaderInformation = function() {
    return new Promise((resolve, reject) => {
        try {
            request("getHeaderInformation", [])
                .then(function(response) {
                    resolve(response);
                });
        } catch (error) {
            reject(error.message.substring(0, 110));
        }
    });
}
let getPluginHeaders = function() {
    return new Promise((resolve, reject) => {
        try {
            request("getPluginHeaders", [])
                .then(function(response) {
                    resolve(response);
                });
        } catch (error) {
            reject(error.message.substring(0, 110));
        }
    });
}
let getObjectGraphInitiators = function() {
    return new Promise((resolve, reject) => {
        try {
            request("getObjectGraphInitiators", [])
                .then(function(response) {
                    resolve(response);
                });
        } catch (error) {
            reject(error.message.substring(0, 110));
        }
    });
}
let runCheckCycle = function(start, finish) {
    return new Promise((resolve, reject) => {
        try {
            runCheckCycle("getObjectGraphHandlers", [start, finish])
                .then(function(response) {
                    resolve(response);
                });
        } catch (error) {
            reject(error.message.substring(0, 110));
        }
    });
}
let checkOrgConfiguration = function() {
    return new Promise((resolve, reject) => {
        try {
            request("checkOrgConfiguration", [])
                .then(function(response) {
                    resolve(response);
                });
        } catch (error) {
            reject(error.message.substring(0, 110));
        }
    });
}
let publishOrgLevelHandler = function(handlerName) {
    return new Promise((resolve, reject) => {
        try {
            request("publishOrgLevelHandler", [handlerName])
                .then(function(response) {
                    resolve(response);
                });
        } catch (error) {
            reject(error.message.substring(0, 110));
        }
    });
}
let checkRunPrivilage = function(securitySetting) {
    return new Promise((resolve, reject) => {
        try {
            request("checkRunPrivilage", [securitySetting])
                .then(function(response) {
                    resolve(response);
                });
        } catch (error) {
            reject(error.message.substring(0, 110));
        }
    });
}
let getOutgoingMessages = function(handlerNames) {
    return new Promise((resolve, reject) => {
        try {
            request("getOutgoingMessages", [handlerNames])
                .then(function(response) {
                    resolve(response);
                });
        } catch (error) {
            reject(error.message.substring(0, 110));
        }
    });
}
let handlerPublicationOngoing = function(handlerNames) {
    return new Promise((resolve, reject) => {
        try {
            request("handlerPublicationOngoing", [handlerNames])
                .then(function(response) {
                    resolve(response);
                });
        } catch (error) {
            reject(error.message.substring(0, 110));
        }
    });
}

let getObjectGraphHandlers = function() {
    return new Promise((resolve, reject) => {
        try {
            request("getObjectGraphHandlers", [])
                .then(function(response) {
                    resolve(response);
                });
        } catch (error) {
            reject(error.message.substring(0, 110));
        }
    });
}
let checkRecreateOgPrivilage = function() {
    return new Promise((resolve, reject) => {
        try {
            request("checkRecreateOgPrivilage", [])
                .then(function(response) {
                    resolve(response);
                });
        } catch (error) {
            reject(error.message.substring(0, 110));
        }
    });
}
let storeObjectGraphHandlers = function(handlerNames) {
    return new Promise((resolve, reject) => {
        try {
            request("storeObjectGraphHandlers", [handlerNames])
                .then(function(response) {
                    resolve(response);
                });
        } catch (error) {
            reject(error.message.substring(0, 110));
        }
    });
}

let remoteActions = {
    publishMacdFieldMapping: publishMacdFieldMapping,
    publishPricingMatrix: publishPricingMatrix,
    getHeaderInformation: getHeaderInformation,
    getPluginHeaders: getPluginHeaders,
    getObjectGraphInitiators: getObjectGraphInitiators,
    runCheckCycle: runCheckCycle,
    checkOrgConfiguration: checkOrgConfiguration,
    publishOrgLevelHandler: publishOrgLevelHandler,
    checkRunPrivilage: checkRunPrivilage,
    getOutgoingMessages: getOutgoingMessages,
    handlerPublicationOngoing: handlerPublicationOngoing,
    getObjectGraphHandlers: getObjectGraphHandlers,
    checkRecreateOgPrivilage: checkRecreateOgPrivilage,
    storeObjectGraphHandlers: storeObjectGraphHandlers
};


export default remoteActions;