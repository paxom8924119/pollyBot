let telegram = require('telegram-bot-api');
let util = require('util');

//var request = require("request");
//var cheerio = require("cheerio");
//var url = `http://studynow.ru/dicta/allwords/`;
let fs = require('fs');


let wordsLng, TEXT;

let user_id = 546579876;

var api = new telegram({
  token: '666569451:AAH7Q8ZmKNGHgWonU6k8isRoxs7bC_6Djrw',
  updates: {
    enabled: true
  },
});

api.on('message', function(message)
{
    // Received text message
    console.log(message);
    api.sendMessage({
          chat_id: message.chat.id,
          text: `saascasc`,
        })
          .then(function (data) {
          console.log('ok')
          })
          .catch(function (err) {
            console.log(err);
          });
});


// fs.readFile("hello.txt", "utf8",
//   function (error, data) {
//     console.log('ok')
//     if (error) throw error;
//     data = data.replace(/\t/g, '').replace(/<br>/g, '\n');
//     wordsLng = data.split('\n').length;
//     data = data.split('\n').slice(0, 5);
//     data = data.join('\n').toString();
//     TEXT = data;
// //546579876 644045807
  
//      sendWordsToday(data);
//      log(4)
//   });


// api.on('inline.callback.query', function (msg) {

//   var data = msg.data;
//   if(data == '1') {good();log(1)}
//   else if(data == '2') { noIntresting();log(2)}
//   else {INow();log(3)}
//   console.log(TEXT)


// });


// //644045807




// function getDate(){
//   let data = new Date();
//   let hour = data.getHours();
//   let minute = data.getMinutes();
//   console.log(minute)
//  if(hour === 8 && minute == 0){
//    return true;
//  }else return false;
// }



// function INow(){
//   api.sendMessage({
//     chat_id: user_id,
//     text: 'значит повтори)',
//   })
//     .then(function (data) {
//       // console.log(util.inspect(data, false, null));
//       return data;
//     })
//     .catch(function (err) {
//       console.log(err);
//       return err;
//     });
// }

// function noIntresting(){
//   api.sendMessage({
//     chat_id: user_id,
//     text: `Сейчас поменяю , привереда`,
//   })
//     .then(function (data) {
//       // console.log(util.inspect(data, false, null));
//       deleteWords(true)
//       return data;
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

// function good(){
//   api.sendMessage({
//     chat_id: user_id,
//     text: `////////////ГОРЖУСЬ ТОБОЙ////////////
// ты выучила 5 слов из ${wordsLng - 5}
// ////////////ДО ЗАВТРА////////////
// `,
//   })
//     .then(function (data) {
//       // console.log(util.inspect(data, false, null));
//       deleteWords()
//     })
//     .catch(function (err) {
//       console.log(err);
//     });

// }


// function sendWordsToday(data){
//   api.sendMessage({
//     chat_id: user_id,
//     text: data,
//     reply_markup: JSON.stringify({
//       inline_keyboard: [
//         [
//           {
//             text: 'выучила',
//             callback_data: '1'
//           },
//         ],
//         [
//           {
//             text: 'ненужные слова',
//             callback_data: '2'
//           },
//           {
//             text: 'уже знаю',
//             callback_data: '3'
//           }
//         ]
//       ]
//     })
//   })
//     .then(function (data) {
//       // console.log(util.inspect(data, false, null));
//       wordsToday = [];
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }


// function deleteWords( againSend = false){
//   fs.readFile('hello.txt', 'utf8', function (err, TEXTFILE) {
//     if (err) {
//       // check and handle err
//     }
//     var linesExceptFirst = TEXTFILE.split('\n').slice(11).join('\n');
//     fs.writeFile("hello.txt", linesExceptFirst, function (error) {

//       if (error) throw error; // если возникла ошибка
//       console.log('данные успешно удалены');  // выводим считанные данные
//       if(againSend){
//         linesExceptFirst = linesExceptFirst.replace(/\t/g, '').replace(/<br>/g, '\n');
//         linesExceptFirst = linesExceptFirst.split('\n').slice(0, 5);
//         linesExceptFirst = linesExceptFirst.join('\n').toString();
//         sendWordsToday(linesExceptFirst);
//       }
//     });
//   });


// }




// function log(action){
//   let log = '';
//   let date = new Date();
//   switch (action) {
//     case 1:
//       log = `выучила: ${date} \n`
//       break;
//     case 2: 
//       log = `ненужные : ${date} \n`
//       break;
//     case 3:
//       log = `знает : ${date} \n`
//       break;
//     case 4:
//       log = `получила слова : ${date} \n`
//       break;
  
//     default:
//       break;
//   }
//   fs.appendFile("log.txt", log, function (error) {

//     if (error) throw error; // если возникла ошибка
   
    
//   });
// }


