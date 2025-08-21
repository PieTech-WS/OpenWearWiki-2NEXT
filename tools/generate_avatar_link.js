const crypto = require('crypto');
 
function getGravatarUrl(email, size = 80) {
    const trimmedEmail = email.trim().toLowerCase();
    const hash = crypto.createHash('sha256').update(trimmedEmail).digest('hex');
    return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;
}

const args = process.argv.slice(2);

const email = args[0];
const size = args[1]; // Optional size parameter
const gravatarUrl = getGravatarUrl(email, size);

console.log('Gravatar URL:', gravatarUrl);