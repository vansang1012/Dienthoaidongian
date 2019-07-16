let Mobile = function (name) {
    this.name = name;
    this.msg = '';
    this.inbox = [];
    this.outbox = [];
    this.status = true;
    this.batterry = 100;

    this.writeMsg = function (msg) {
        this.msg = msg;
    }
    this.sendMsg = function (mobile) {
        this.outbox.push(this.msg);
        mobile.receiveMsg(this.msg);
        this.useBatterry(10);
    }

    this.receiveMsg = function (msg) {
        this.inbox.push(msg);
    }
    this.onOfMobile = function (status) {
        this.status = status;
    }


    this.watchMsg = function () {
        return this.inbox;


    }
    this.watchOubox=function () {
        return this.outbox;
    }
    this.useBatterry = function (value) {
        if (this.batterry > 0) {
            this.batterry -= value;
        }

    }
    this.chargeBatterry = function (value) {
        if (this.batterry < 100) {
            this.batterry += value;
        }
    }
}
