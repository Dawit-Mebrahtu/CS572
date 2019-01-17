const dns = require('dns');
const { promisify } = require('util');

// Using ES6
function getIP1(domain){
    dns.resolve4(domain, (err, ip) => {
        console.log(ip);
    });
}

getIP1('www.mum.edu');
getIP1('www.google.com');

// Using promise
const getIP2 = promisify(dns.resolve4);

getIP2('www.mum.edu')
    .then(ip => { console.log(ip);})
    .catch(err => { console.log(err);});


// Using async/await
const getIP3 = promisify(dns.resolve4);

async function main(domain){
    try{
        const ip = await getIP3(domain);
        console.log(ip);
    }
    catch(err){
        console.log(err);
    }
}

main('www.mum.edu');