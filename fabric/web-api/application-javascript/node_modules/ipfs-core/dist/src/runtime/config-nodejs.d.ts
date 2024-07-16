declare function _exports(): {
    Addresses: {
        Swarm: string[];
        Announce: never[];
        NoAnnounce: never[];
        API: string;
        Gateway: string;
        RPC: string;
        Delegates: string[];
    };
    Discovery: {
        MDNS: {
            Enabled: boolean;
            Interval: number;
        };
        webRTCStar: {
            Enabled: boolean;
        };
    };
    Bootstrap: string[];
    Pubsub: {
        /** @type {'gossipsub'} */
        Router: 'gossipsub';
        Enabled: boolean;
    };
    Swarm: {
        ConnMgr: {
            LowWater: number;
            HighWater: number;
        };
        DisableNatPortMap: boolean;
    };
    Routing: {
        Type: string;
    };
};
export = _exports;
//# sourceMappingURL=config-nodejs.d.ts.map