const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'FilesChapter2', 'start.txt'), 'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'FilesChapter2', 'promistWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'FilesChapter2', 'promistWrite.txt'), "\n\nNice to meet you");
        await fsPromises.renameFile(path.join(__dirname, 'FilesChapter2', 'promistWrite.txt'), (path.join(__dirname, 'FilesChapter2', 'promistComplete.txt')));


    } catch (err) {
        console.error(err)
    }
}

fileOps();







// const fs = require('fs')
// const path = require('path');

// fs.readFile(path.join(__dirname, 'FilesChapter2', 'start.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// fs.writeFile(path.join(__dirname, 'FilesChapter2', 'reply.txt'), "Nice to Meet You", (err) => {
//     if (err) throw err;
//     console.log('write complete');
// })

// fs.appendFile(path.join(__dirname, 'FilesChapter2', 'start.txt'), "nice to see you", (err) => {
//     if (err) throw err;
//     console.log("Complete");
// })