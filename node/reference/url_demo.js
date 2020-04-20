const url = require('url')

const myUrl = new URL('https://github.com:8080/vincentmichael089?tab=repositories')

// get serialized url
console.log(myUrl.href);

// root domain
console.log(myUrl.host);

// host name
console.log(myUrl.hostname);

// path name
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

// params object
console.log(myUrl.searchParams);

// add param
myUrl.searchParams.append('image','none.jpg')
console.log(myUrl.href);

// loop through param
myUrl.searchParams.forEach((name, val)=>{
    console.log(`${name}, ${val}`)
})