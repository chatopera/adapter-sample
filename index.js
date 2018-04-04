const argv = process.argv;
const curdir = __dirname;
const Client = require('@chatopera/adapter-client');
const debug = require("debug")("adapter:sample");

let waitfor = async(ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

// main function
async function main() {
    let client = new Client("qunpin", "p07fc2dpo63runomllyc57hm"); // 创建客户端实例
    await client.open("ws://47.104.19.187:8020"); // 连接
    client.on("message", (data) => {    // 监听下行消息
        // {"openId":"uid","msg":"清明节"}, 发送给openId的消息，msg是消息文字。
        debug("on message: %j", data)
    });
    
    client.send("openId", "nickName", "message"); // 上行消息
}

// on main entry
if (require.main === module) {
    (async function() {
        await main();
    })();
}
