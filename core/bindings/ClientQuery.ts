import {
	GetAllProxies,
	GetClashVersion,
	GetProxyConnections,
	GetProxyLogs,
	GetProxyRules,
	GetProxyTraffic
} from './Clash';

export type ClientQuery =
	| GetProxyTraffic
	| GetAllProxies
	| GetProxyRules
	| GetProxyConnections
	| GetProxyLogs
	| GetClashVersion
	| { key: 'testQuery' };
