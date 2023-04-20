
// const fs = require('fs');
// const http = require('http')
// fs.writeFileSync("hey.txt", "Code N Code");
// console.log(__dirname);
// console.log(__filename);
// const app = require('./app')
// var x = 10;
// var a = 10;
// let res = (a) => a * 10;

// console.log(res(20));
// console.log("12");
// http.createServer((req, res) => {
//     res.write("Hey Satyam!")
//     res.end();
// }).listen(4500);
// console.log(app.y);
// let arr = [1, 2, 3, 4];

// // console.log(arr[0]);

// let res = arr.filter((item) => {
//     return item == 2;
// })
// console.log(res);

//---------------------------------------------


// Making Simple Basic API

// const http = require('http');
// const data = require('./data')
// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'application.json'})
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(4000);


//--------------------------------------



// Getting input from command line

// const fs = require('fs');

// const input = process.argv;

// console.log(input);
// if(input[2] == 'add'){
//     fs.writeFileSync(input[3], input[4]);
// }
// else if(input[2] == 'del'){
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log('Invalid input');
// }

// --------------------------------------



//Making multiple files in folder


// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname, 'files');

// console.log(dirPath);

// for(var i = 0; i < 5; i++){
//     fs.writeFileSync(path.join(dirPath, "Content"+i+".txt"), 'hey there!');
// }
// fs.readdir(dirPath, (err, files) => {
//     // console.log(files);
//     files.forEach((item) => {
//         console.log(item);
//     })
// });




// ----------------------------------------------------------
// CRUD with file system

// const fs = require('fs');

// const path = require('path');

// const dirPath = path.join(__dirname, 'CRUD');

// const filePath = `${dirPath}/hello.txt`;

// fs.writeFileSync(filePath, 'This is our notepad');

// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log(item);
// })

// fs.appendFile(filePath, ' you can write your notes here', (err)=> {
//     if(!err){
//         console.log('file is updated');
//     }
// })

// fs.rename(filePath, `${dirPath}/notePad.txt`, (err) => {
//     if(!err){
//         console.log('file name is updated');
//     }
// })

// fs.unlinkSync(`${dirPath}/notePad.txt`);


// ------------------------------------------------------


// Promises

// let a = 20;
// let b = 10;

// let waitingData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30);
//     }, 2000);
// })
// console.log(1);
// waitingData.then((data) => {
//     console.log(a + data);
// })
// console.log(a + b);

// -------------------------------------------------------------

//Express Js

// const express = require('express');

// const app = express();

// app.get('', (req, res) => {
//     // console.log("data sent by browser => ", req.query.name);
//     // res.send('Welcome, ' + req.query.name);
//     res.send(`
//         <h1>Welcome to Home Page</h1>
//         <a href = '/about'> Go to About Us Page </a><br><br>
//         <a href = '/help'> Go to Help Page </a>
//     `)
// })

// app.get('/about', (req, res) => {
//     res.send(`
//         <h1>Welcome to About Us page</h1>
//         <input type = text, placeholder = "User name" value = "${req.query.name}" />
//         <button>Submit</button>
//         <a href = '/'> Go to Home Page </a>
//     `);
// })

// app.get('/help', (req, res) => {
//     res.send([
//         {
//             name : 'Satyam Maurya',
//             Email : 'sm@gmail.com'
//         },
//         {
//             name : 'Shubham Maurya',
//             Email : 'sh@gmail.com'
//         }
//     ])

// })

// app.listen(5000);


// -------------------------------------------------------------

// Express - 2

// const express = require('express');

// const app = express();

// const path = require('path')

// const publicPath = path.join(__dirname, 'public');

// // console.log(publicPath);


// // Making dynamic website with the help of ejs
// app.set('view engine', 'ejs');

// // app.use(express.static(publicPath));

// app.get('/Profile', (_, res) => {
//     const user ={
//         name: 'Satya',
//         email: 'sm@gamil.com',
//         city: 'Mzp',
//         skills: ['nodeJs', 'C++', 'HTML', 'CSS']
//     }
//     res.render('Profile', {user});
// })

// app.get('/login', (_, res) => {
//     res.render('login');
// })

// app.get('', (_, res) => {
//     // sendFile is used to remove the extension from the url.
//     res.sendFile(`${publicPath}/index.html`);
// })

// app.get('/about', (_, res) => {
//     res.sendFile(`${publicPath}/about.html`);
// })

// app.get('/help', (_, res) => {
//     res.sendFile(`${publicPath}/help.html`);
// })

// // If any of the above path is not matched
// app.get('*', (_, res) => {
//     res.sendFile(`${publicPath}/noPage.html`);
// })
// app.listen(5000);


// ------------------------------------------------------------------

//Middleware function

// const express = require('express');

// const app = express();

// const path = require('path');

// const publicPath = path.join(__dirname, 'public');

// const reqFilter = require('./middleware');

// const route = express.Router();


// //Application Middileware
// // app.use(reqFilter);


// //Route level Middileware - (For a group of routes)
// route.use(reqFilter);

// route.get('', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`);
// })

// route.get('/about', (req, res) => {
//     res.sendFile(`${publicPath}/about.html`);
// })

// //For single route
// app.get('/help', reqFilter, (req, res) => {
//     res.sendFile(`${publicPath}/help.html`);
// })

// app.use('/', route);

// app.listen(5000);



// ------------------------------------------------------------------------------------------------





// MongoDB

const dbConnect = require('./mongodb');

// dbConnect().then((res) => {
//     res.find({}).toArray().then((data) => {
//         console.log(data);
//     });
// });

const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();