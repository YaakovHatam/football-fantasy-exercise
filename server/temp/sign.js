

const crypto = require('crypto');

let hash = crypto.createHash('md5').update('Hellothere!').digest("hex")
console.log(hash);


// a77b55332699835c035957df17630d28
// bb5e1655fafc3c49bffee7667c540d4e