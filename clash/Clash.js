/**
 * 个人备份使用，该脚本适用与Mihomo Party和 Clash Verge Rev
 */

/**
 * Clash Verge Rev 全局扩展脚本（懒人配置）/ Mihomo Party 覆写脚本
 * URL: https://github.com/wanswu/my-backup
 */

// DNS配置
const dnsConfig = {
  "enable": true,
  "ipv6": true,
  "prefer-h3": false,
  "respect-rules": true,
  "default-nameserver": ["223.5.5.5", "119.29.29.29"],
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "use-hosts": true,
  "use-system-hosts": false,
  "nameserver": ["1.1.1.1", "8.8.8.8"],
  "proxy-server-nameserver": ['https://doh.pub/dns-query'],
  "direct- nameserver": ['https://doh.pub/dns-query'],
  "nameserver-policy": { "+.makima.online": ["119.29.29.29"], 'geosite:cn,private': ['https://doh.pub/dns-query', 'https://dns.alidns.com/dns-query'] },
  "fallback": ['https://1.1.1.1/dns-query', 'https://doh.apad.pro/dns-query'],
  "fallback-filter": {
    "geoip": false,
    "ipcidr": ["240.0.0.0/4", "0.0.0.0/32", "61.160.148.90/32", '3131:3131:3131:3131:3131:3131:3131:3131/128'],
    "domain": ["+.fmta.boo"]
  },
};
// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400,
  "proxy": "Proxy"
};
// 规则集配置
const ruleProviders = {
  "Lan": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Lan/Lan.yaml",
    "path": "./ruleset/Lan.yaml"
  },
  "Apple": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Apple/Apple_Classical.yaml",
    "path": "./ruleset/Apple.yaml"
  },
  "Telegram": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Telegram/Telegram.yaml",
    "path": "./ruleset/Telegram.yaml"
  },
  "YouTube": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTube/YouTube.yaml",
    "path": "./ruleset/YouTube.yaml"
  },
  "BiliBili": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/BiliBili/BiliBili.yaml",
    "path": "./ruleset/BiliBili.yaml"
  },
  "TikTok": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/TikTok/TikTok.yaml",
    "path": "./ruleset/TikTok.yaml"
  },
  "Spotify": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Spotify/Spotify.yaml",
    "path": "./ruleset/Spotify.yaml"
  },
  "Netflix": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Netflix/Netflix.yaml",
    "path": "./ruleset/Netflix.yaml"
  },
  "Disney": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Disney/Disney.yaml",
    "path": "./ruleset/Disney.yaml"
  },
  "Google": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Google/Google.yaml",
    "path": "./ruleset/Google.yaml"
  },
  "OpenAI": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml",
    "path": "./ruleset/OpenAI.yaml"
  },
  "Microsoft": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft.yaml",
    "path": "./ruleset/Microsoft.yaml"
  },
  "LinkedIn": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/LinkedIn/LinkedIn.yaml",
    "path": "./ruleset/LinkedIn.yaml"
  },
  "Scholar": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/LM-Firefly/Rules@9443f8126d70769b83b2594c42a157bbf779962c/Clash-RuleSet-Classical/PROXY/Scholar.yaml",
    "path": "./ruleset/Scholar.yaml"
  },
  "Twitter": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Twitter/Twitter.yaml",
    "path": "./ruleset/Twitter.yaml"
  },
  "GameDownload": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Game/GameDownload/GameDownload.yaml",
    "path": "./ruleset/GameDownload.yaml"
  },
  "GameDownloadCN": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Game/GameDownloadCN/GameDownloadCN.yaml",
    "path": "./ruleset/GameDownloadCN.yaml"
  },
  "Steam": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Steam/Steam.yaml",
    "path": "./ruleset/Steam.yaml"
  },
  "SteamCN": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/SteamCN/SteamCN.yaml",
    "path": "./ruleset/SteamCN.yaml"
  },
  "OneDrive": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OneDrive/OneDrive.yaml",
    "path": "./ruleset/OneDrive.yaml"
  },
  "Emby": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Emby/Emby.yaml",
    "path": "./ruleset/Emby.yaml"
  },
  "HoYoverse": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/HoYoverse/HoYoverse.yaml",
    "path": "./ruleset/HoYoverse.yaml"
  },
  "GlobalMedia": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/GlobalMedia/GlobalMedia_Classical.yaml",
    "path": "./ruleset/GlobalMedia.yaml"
  },
  "ChinaMax": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/ChinaMax/ChinaMax_Classical.yaml",
    "path": "./ruleset/ChinaMax.yaml"
  },
  "Gemini": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Gemini/Gemini.yaml",
    "path": "./ruleset/Gemini.yaml"
  },
  "Claude": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Claude/Claude.yaml",
    "path": "./ruleset/Claude.yaml"
  },
  "Hijacking": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Hijacking/Hijacking.yaml",
    "path": "./ruleset/Lan.yaml"
  },
  "Github": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/GitHub/GitHub_No_Resolve.yaml",
    "path": "./ruleset/Lan.yaml"
  },
  "Dns_Leak": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "format": "text",
    "url": "https://cdn.jsdelivr.net/gh/xishang0128/rules@main/clash%20or%20stash/prevent_dns_leak/prevent_dns_leak_domain.list",
    "path": "./ruleset/Dns_Leak.list"
  },

};
// 规则
const rules = [
  // 自定义规则
  "RULE-SET,Dns_Leak,Proxy",
  "RULE-SET,Lan,DIRECT",
  "RULE-SET,Telegram,Telegram",
  "RULE-SET,YouTube,YouTube",
  "RULE-SET,BiliBili,BiliBili",
  "RULE-SET,TikTok,TikTok",
  "RULE-SET,Spotify,Spotify",
  "RULE-SET,Netflix,Netflix",
  "RULE-SET,Disney,Disney",
  "RULE-SET,Google,Google",
  "RULE-SET,OpenAI,OpenAI",
  "RULE-SET,Microsoft,Microsoft",
  "RULE-SET,LinkedIn,LinkedIn",
  "RULE-SET,Scholar,Scholar",
  "RULE-SET,Twitter,Twitter",
  "RULE-SET,GameDownload,OtherGame",
  "RULE-SET,GameDownloadCN,OtherGame",
  "RULE-SET,Steam,Steam",
  "RULE-SET,SteamCN,Steam",
  "RULE-SET,OneDrive,OneDrive",
  "RULE-SET,Emby,Emby",
  "RULE-SET,HoYoverse,OtherGame",
  "RULE-SET,GlobalMedia,GlobalMedia",
  "RULE-SET,ChinaMax,DIRECT",
  "RULE-SET,Gemini,Gemini",
  "RULE-SET,Claude,Claude",
  "RULE-SET,Hijacking,Hijacking",
  "RULE-SET,Github,Proxy",
  "GEOIP,CN,China",
  "MATCH,Proxy"
];
// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "max-failed-times": 3,
  "hidden": false
};

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

  // 覆盖原配置中的代理组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "Proxy",
      "type": "select",
      "proxies": ["AUTO", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "DIRECT", "REJECT"],
      "include-all": true,
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Global.png"
    },
    {
      ...groupBaseOption,
      "name": "AUTO",
      "type": "url-test",
      "include-all": true,
      "tolerance": 50,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Speedtest.png"
    },
    {
      ...groupBaseOption,
      "name": "Apple",
      "type": "select",
      "proxies": ["DIRECT", "Proxy", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "REJECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png"
    },
    {
      ...groupBaseOption,
      "name": "Telegram",
      "type": "select",
      "proxies": ["Proxy", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "DIRECT", "REJECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png"
    },
    {
      ...groupBaseOption,
      "name": "YouTube",
      "type": "select",
      "proxies": ["Proxy", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "DIRECT", "REJECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png"
    },
    {
      ...groupBaseOption,
      "name": "BiliBili",
      "type": "select",
      "proxies": ["DIRECT", "Proxy", "REJECT", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/bilibili.png"
    },
    {
      ...groupBaseOption,
      "name": "OpenAI",
      "type": "select",
      "proxies": ["Proxy", "US", "TW", "JP", "KR", "HK", "DE", "SG", "FR", "DIRECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png"
    },
    {
      ...groupBaseOption,
      "name": "Gemini",
      "type": "select",
      "proxies": ["Proxy", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "DIRECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/guaishouxiaoqi/icons@master/Color/Gemini.png"
    },
    {
      ...groupBaseOption,
      "name": "Claude",
      "type": "select",
      "proxies": ["Proxy", "US", "TW", "JP", "KR", "HK", "DE", "SG", "FR", "DIRECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/ke1ewang/Qi@master/Claude.png"
    },
    {
      ...groupBaseOption,
      "name": "TikTok",
      "type": "select",
      "proxies": ["TW", "Proxy", "HK", "JP", "KR", "US", "DE", "SG", "FR", "DIRECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/TikTok.png"
    },
    {
      ...groupBaseOption,
      "name": "Spotify",
      "type": "select",
      "proxies": ["Proxy", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "DIRECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Spotify.png"
    },
    {
      ...groupBaseOption,
      "name": "Netflix",
      "type": "select",
      "proxies": ["Proxy", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "DIRECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netflix.png"
    },
    {
      ...groupBaseOption,
      "name": "Disney",
      "type": "select",
      "proxies": ["Proxy", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "DIRECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Disney.png"
    },
    {
      ...groupBaseOption,
      "name": "Google",
      "type": "select",
      "proxies": ["Proxy", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "DIRECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google.png"
    },
    {
      ...groupBaseOption,
      "name": "OneDrive",
      "type": "select",
      "proxies": ["DIRECT", "Proxy", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/OneDrive.png"
    },
    {
      ...groupBaseOption,
      "name": "Microsoft",
      "type": "select",
      "proxies": ["DIRECT", "Proxy", "REJECT", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png"
    },
    {
      ...groupBaseOption,
      "name": "LinkedIn",
      "type": "select",
      "proxies": ["Proxy", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "DIRECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Blinkload.png"
    },
    {
      ...groupBaseOption,
      "name": "Scholar",
      "type": "select",
      "proxies": ["Proxy", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "DIRECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Scholar.png"
    },
    {
      ...groupBaseOption,
      "name": "Twitter",
      "type": "select",
      "proxies": ["Proxy", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "DIRECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Twitter.png"
    },
    {
      ...groupBaseOption,
      "name": "GlobalMedia",
      "type": "select",
      "proxies": ["Proxy", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "DIRECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Global.png"
    },
    {
      ...groupBaseOption,
      "name": "Emby",
      "type": "select",
      "proxies": ["Proxy", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "DIRECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Emby.png"
    },
    {
      ...groupBaseOption,
      "name": "Steam",
      "type": "select",
      "proxies": ["DIRECT", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "Proxy"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Steam.png"
    },
    {
      ...groupBaseOption,
      "name": "OtherGame",
      "type": "select",
      "proxies": ["DIRECT", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "Proxy"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Game.png"
    },
    {
      ...groupBaseOption,
      "name": "Hijacking",
      "type": "select",
      "proxies": ["Proxy", "HK", "TW", "JP", "KR", "US", "DE", "SG", "FR", "DIRECT"],
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hijacking.png"
    },
    {
      ...groupBaseOption,
      "name": "China",
      "type": "select",
      "proxies": ["DIRECT"],
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/China.png"
    },
    {
      ...groupBaseOption,
      "name": "HK",
      "type": "url-test",
      "include-all": true,
      "filter": "香港|HK|🇭🇰",
      "tolerance": 50,
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png"
    },
    {
      ...groupBaseOption,
      "name": "TW",
      "type": "url-test",
      "include-all": true,
      "filter": "台湾|TW|🇹🇼",
      "tolerance": 50,
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png"
    },
    {
      ...groupBaseOption,
      "name": "JP",
      "type": "url-test",
      "include-all": true,
      "filter": "日本|JP|🇯🇵",
      "tolerance": 50,
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png"
    },
    {
      ...groupBaseOption,
      "name": "KR",
      "type": "url-test",
      "include-all": true,
      "filter": "韩国|KR|🇰🇷",
      "tolerance": 50,
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Korea.png"
    },
    {
      ...groupBaseOption,
      "name": "US",
      "type": "url-test",
      "include-all": true,
      "filter": "美国|US|🇺🇸",
      "tolerance": 50,
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png"
    },
    {
      ...groupBaseOption,
      "name": "DE",
      "type": "url-test",
      "include-all": true,
      "filter": "德国|DE|🇩🇪",
      "tolerance": 50,
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Germany.png"
    },
    {
      ...groupBaseOption,
      "name": "SG",
      "type": "url-test",
      "include-all": true,
      "filter": "新加坡|SG|🇸🇬",
      "tolerance": 50,
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png"
    },
    {
      ...groupBaseOption,
      "name": "FR",
      "type": "url-test",
      "include-all": true,
      "filter": "法国|FR|🇫🇷",
      "tolerance": 50,
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/France.png"
    },
    {
      ...groupBaseOption,
      "name": "UK",
      "type": "url-test",
      "include-all": true,
      "filter": "英国|GB|🇬🇧",
      "tolerance": 50,
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_Kingdom.png"
    }
  ];

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  // 返回修改后的配置
  return config;
}