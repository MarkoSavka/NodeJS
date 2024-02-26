//1 варіант
// require('./module');
// console.log(number);
// func();

//-----------
//2 варіант
// const mod1=require('./module');
// console.log(mod1.number);
// mod1.func();

//-----------
//3 варіант
// const mod1=require('./module');
// console.log(mod1.number);
// mod1.func();

//-----------
//використання вбудованого модуля
// const mod1=require('./module');
// const os=require('os');
// let userName=os.userInfo().username;
// console.log(userName);

//-----------
// const mod1=require('./module');
// console.log(mod1.name);

// const mod2=require('./module');
// mod1.name="pv221";

// console.log(mod2.name);
// console.log(mod1.name);


//-------with new myModule
// const mod1 = require('./myModule');
// const os = require('os');

// let userName=os.userInfo().username;
// console.log(mod1.getMessage(userName));


//------with folder welcome
//правила найменування,реквайр бачить індекс джс
//і підєднює його а також підʼєднює те шо в ньому підʼєднано
// const welcome=require('./welcome');
// welcome.getEveningMessage();
// welcome.getMorningMessage();


//---------передача параметрів в додатку
//є масив process,argv-argument,[0]-шлях до node
// let nodePath=process.argv[0];
// let appPath=process.argv[1];
// let name=process.argv[2];
// let age=process.argv[3];

// console.log(`nodePath: ${nodePath}`);
// console.log(`appPath: ${appPath}`);
// console.log(`name: ${name}`);
// console.log(`age: ${age}`);


//------NPM manager

