"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = (server) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello world';
        }
    });
};
