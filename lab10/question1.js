console.log('We Are Checking IP addresses for Doman names');
const dns = require('node:dns');
const options = {
    family: 4,
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
};
dns.lookup('miu.edu', options, (err, address, family) => console.log('IP Address is: ', address, family));
// address: "2606:2800:220:1:248:1893:25c8:1946" family: IPv6

// When options.all is true, the result will be an Array.
options.all = true;
dns.lookup('evelynhone.edu.zm', options, (err, ip) => console.log('IP Address is: ', ip));
