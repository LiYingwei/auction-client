/**
 * Created by SpaceQ on 2016/12/3.
 */
// var fs = require('fs');
//
// fs.readFile('app/data/items.txt', 'utf8', function (err, data) {
//   var raw_items;
//   if (err || true) { // TODO remove || true
//     raw_items = {
//       1: {
//         ID: 1,
//         title: '青田石六君子',
//         price: 2000,
//         userId: '92',
//         users: {'92': '92', '93': '93'}
//       },
//       2: {
//         ID: 2,
//         title: '寿山芙蓉石',
//         price: 3000,
//         userId: '3',
//         users: {'3': '3', '5': '5'}
//       },
//       3: {
//         ID: 3,
//         title: "三羊开泰钮",
//         price: 5000,
//         userId: '',
//         users: {'79': '79', '80': '80'}
//       },
//       4: {
//         ID: 4,
//         title: '寿山石印章',
//         price: 120000,
//         userId: '167',
//         users: {'166': '166', '167': '167'}
//       }
//     };
//   } else {
//     raw_items = JSON.parse(data);
//   }
//   for(var id in raw_items) {
//     var item = raw_items[id];
//     glb_status.addRoom(item["ID"], item["title"], item["price"],  item["userId"]);
//   }
//   renderItem();
//   // rooms['items'] = items;
// });
