// usage: phantomjs --config=/home/melocal/Programs/phantomjs/config.json tdd.js
var page = require('webpage').create();
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';
page.viewportSize = {width: 1280, height:1024};
page.open('http://detectmybrowser.com/', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    console.log("status == " + status);
    // console.log(page.plainText);
    page.render('/home/melocal/Programs/phantomjs/detectmybrowser.com.png')
    // $(document).ready(function(){
    // page.evaluate(function() {
    //   // var inBox =
    //   document.getElementById("symbol").value = "FLWS";
    //   // inBox.Value="FLWS";
    //   document.getElementById("frm").submit();
    // });
    // setTimeout(function(){phantom.exit()},1000)
// console.log(ua);
  // $(document).ready(function(){
  //
  // })
  }
  phantom.exit();
});

///home/melocal/workspace/nasdaq/public/angular-app/stock-display/stock.html
