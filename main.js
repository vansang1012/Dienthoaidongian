let nokia=new Mobile("Nokia");
let iphone = new Mobile("IphoneX");

nokia.writeMsg("Hello Iphone");
nokia.sendMsg(iphone);

nokia.writeMsg("Im Nokia");
nokia.sendMsg(iphone);

iphone.writeMsg("Im iphoneX");
iphone.sendMsg(nokia);
console.log(nokia.watchMsg());
console.log(nokia.watchOubox());
//console.log(iphone);
//console.log((nokia));