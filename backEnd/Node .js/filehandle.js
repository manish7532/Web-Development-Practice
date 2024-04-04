const fs = require("fs");
const { ReadStream } = require("tty");

// writeFiles
// fs.writeFile("msg.txt","hello there",(err)=>{
//     if(err) throw err;
// console.log("file created successfully");
// })


//readfiles
// fs.readFile('./msg.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })


//directories
// if (fs.existsSync('./assets')==false) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }        
//             console.log("folder created successfully")
//     });
// }
// else {
//     fs.rmdir('./assets', (err)=>{
//         if(err){
//             console.log(err)
//         }
//             console.log('deleted');
//     });
// }



// ReadStream
//  const readStream = fs.createReadStream('./msg.txt', {encoding: 'utf8'})
//  const writeStream = fs.createWriteStream('./newmsg.txt')

//  readStream.on('data',(chunk)=>{
//     console.log('\n--------new Chunk of data---------\n')
//     console.log(chunk)
//     writeStream.write(chunk);
//  })

// readStream.pipe(writeStream)