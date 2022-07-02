// Traffic
export type GetProxyTraffic = { key: 'GetProxyTraffic' };
export interface TrafficItem {
	up: number;
	down: number;
}

// Logs
export type GetProxyLogs = { key: 'GetProxyLogs' };
export enum GetLogsLevel {
	error = 'error',
	warning = 'warning',
	info = 'info',
	debug = 'debug'
}

export interface LogItem {
	type: GetLogsLevel;
	payload: string;
	time?: string;
}

// Connections
export type GetProxyConnections = { key: 'GetProxyConnections' };
export interface ConnectionsItem {
	id: string;
	metadata: {
		network: string;
		type: string;
		host: string;
		sourceIP: string;
		sourcePort: string;
		destinationPort: string;
		destinationIP?: string;
	};
	upload: number;
	download: number;
	start: string;
	chains: string[];
	rule: string;
	rulePayload: string;
	curUpload?: number; // calculate
	curDownload?: number; // calculate
}

export interface Connections {
	downloadTotal: number;
	uploadTotal: number;
	connections: ConnectionsItem[];
}

// Proxies
export type GetAllProxies = { key: 'GetAllProxies' };
export type GetProxyRules = { key: 'GetProxyRules' };

export interface ProxyItem {
	type: string;
	name: string;
	udp: boolean;
	history: {
		time: string;
		delay: number;
	}[];
	now?: string;
	all?: string[];
}

export interface RuleItem {
	type: string;
	payload: string;
	proxy: string;
}

export type ProxyGroupItem = Omit<ProxyItem, 'all'> & {
	all: ProxyItem[];
};

// Clash
export type GetClashVersion = { key: 'GetClashVersion' };
export type GetClashConfig = { key: 'GetClashConfig' };
export type ProfileType = 'local' | 'remote' | 'merge' | 'script';

export interface ClashInfo {
	status: string;
	port?: string;
	server?: string;
	secret?: string;
}

export interface ProfileItem {
	uid: string;
	type?: ProfileType | string;
	name?: string;
	desc?: string;
	file?: string;
	url?: string;
	updated?: number;
	selected?: {
		name?: string;
		now?: string;
	}[];
	extra?: {
		upload: number;
		download: number;
		total: number;
		expire: number;
	};
	option?: ProfileOption;
}

export interface ProfileOption {
	user_agent?: string;
	with_proxy?: boolean;
	update_interval?: number;
}

export interface ProfilesConfig {
	current?: string;
	chain?: string[];
	valid?: string[];
	items?: ProfileItem[];
}

export interface CometConfig {
	language?: string;
	clashCore?: string;
	themeMode?: 'light' | 'dark';
	themeBlur?: boolean;
	trafficGraph?: boolean;
	enableTunMode?: boolean;
	enableAutoLaunch?: boolean;
	enableServiceMode?: boolean;
	enableSilentStart?: boolean;
	enableSystemProxy?: boolean;
	enableProxyGuard?: boolean;
	systemProxyByPass?: string;
	themeSetting?: {
		primaryColor?: string;
		secondaryColor?: string;
		primaryText?: string;
		secondaryText?: string;
		infoColor?: string;
		errorColor?: string;
		warningColor?: string;
		successColor?: string;
		fontFamily?: string;
		cssInjection?: string;
	};
}

type ClashConfigValue = any;

export interface ProfileMerge {
	// clash config fields (default supports)
	'rules'?: ClashConfigValue;
	'proxies'?: ClashConfigValue;
	'proxy-groups'?: ClashConfigValue;
	'proxy-providers'?: ClashConfigValue;
	'rule-providers'?: ClashConfigValue;
	// clash config fields (use flag)
	'tun'?: ClashConfigValue;
	'dns'?: ClashConfigValue;
	'hosts'?: ClashConfigValue;
	'script'?: ClashConfigValue;
	'profile'?: ClashConfigValue;
	'payload'?: ClashConfigValue;
	'interface-name'?: ClashConfigValue;
	'routing-mark'?: ClashConfigValue;
	// functional fields
	'use'?: string[];
	'prepend-rules'?: any[];
	'append-rules'?: any[];
	'prepend-proxies'?: any[];
	'append-proxies'?: any[];
	'prepend-proxy-groups'?: any[];
	'append-proxy-groups'?: any[];
}

// partial of the clash config
export type ProfileData = Partial<{
	'rules': any[];
	'proxies': any[];
	'proxy-groups': any[];
	'proxy-providers': any[];
	'rule-providers': any[];

	[k: string]: any;
}>;

export interface ChainItem {
	item: ProfileItem;
	merge?: ProfileMerge;
	script?: string;
}

export interface EnhancedPayload {
	chain: ChainItem[];
	valid: string[];
	current: ProfileData;
	callback: string;
}

export interface EnhancedResult {
	data: ProfileData;
	status: string;
	error?: string;
}
