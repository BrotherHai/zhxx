var request = require('request');
var  options = {　　　　　　　method: 'post',
            url: 'http://cj.liuxiaohai.xyz/index.php?s=/Admin/Index/caiji',
          };
request(options, function (err, res, body) {
            if (err) {
              console.log(err)
            }else {
              console.log(body);
            }
          })
