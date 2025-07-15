const fs = require('fs');
const folderName = process.argv[2] || 'Project'
// fs.mkdir('Hugs', { recursive: true }, (err) => {
//   console.log('In the callback', err)
// });
// console.log('After callback');

fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`, '')
fs.writeFileSync(`${folderName}/app.js`, '')
fs.writeFileSync(`${folderName}/styles.css`, '')