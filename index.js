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
    await client.open("ws://localhost:8020");
    client.on("message", (data)=>{
        // on message: {"openId":"uid","msg":"清明节"}
        debug("on message: %j", data)
    })
    client.send("gmis_department_1", "uid", "jim", "怎么开通微信");
}

// on main entry
if (require.main === module) {
    (async function() {
        await main();
    })();
}
