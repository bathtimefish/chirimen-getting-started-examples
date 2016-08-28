/**
*
* Chirimenに装着するWifiドングルは Planex GW-USNano2 動作確認済み
* https://www.planex.co.jp/product/wireless/gw-usnano2/
* 
* WifiドングルをつけてChirimenを起動、SettingsでWifi設定を完了後、以下のソースを実行する
*
*/

window.addEventListener("load", function() {
  console.log("Hello World!");
  var url = 'http://www.bathtimefish.com/get.php?status=1';
  let { spawn } = task;
  spawn(function() {
    // new XmlHttpRequest({systemXHR: true}); にした axios-sysxhr.js を使用した
    var res = yield axios.get(url);
    console.log(res.data);
  });
});
