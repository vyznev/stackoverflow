// ==UserScript==
// @name          Stack Exchange Global Flag Summary
// @namespace     http://floern.com/
// @version       0.8.1
// @description   Stack Exchange network wide flag summary available in your network profile
// @author        Floern
// @include       *://stackexchange.com/users/*/*
// @match         *://*.stackexchange.com/users/flag-summary/*
// @match         *://*.stackoverflow.com/users/flag-summary/*
// @match         *://*.superuser.com/users/flag-summary/*
// @match         *://*.serverfault.com/users/flag-summary/*
// @match         *://*.askubuntu.com/users/flag-summary/*
// @match         *://*.stackapps.com/users/flag-summary/*
// @match         *://*.mathoverflow.net/users/flag-summary/*
// @connect       stackexchange.com
// @connect       stackoverflow.com
// @connect       superuser.com
// @connect       serverfault.com
// @connect       askubuntu.com
// @connect       stackapps.com
// @connect       mathoverflow.net
// @grant         GM_xmlhttpRequest
// @grant         GM_addStyle
// @run-at        document-end
// @updateURL     https://raw.githubusercontent.com/Floern/stackoverflow/master/userscripts/SE_global_flag_summary.meta.js
// @downloadURL   https://raw.githubusercontent.com/Floern/stackoverflow/master/userscripts/SE_global_flag_summary.user.js
// ==/UserScript==