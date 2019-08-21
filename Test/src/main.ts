import { Utils } from "./utils";

const system = server.registerSystem(0, 0);

system.initialize = function () {
    server.log("TestAddon created by alphaAE Loaded");
    system.listenForEvent("minecraft:entity_created", onPlayerCreated);
    Utils.init(system);
}

function onPlayerCreated(eventData) {
    var entity = eventData.data.entity;
    if (!entity) throw "not entity";
    if (entity.__identifier__ == "minecraft:player") {
        let name = Utils.getEntityName(entity);
        Utils.log(`玩家 ${name} 加入游戏!`);
        // system.executeCommand(`tell @a[name=${name}] §欢迎你 ${name}`,(data)=>{});
    }
}

system.registerCommand("test", {
    description: "这是一个测试命令",
    permission: 1,
    overloads: [
        {
            parameters: [
                {
                    type: "string",
                    name: "函数名"
                }
            ],

            handler([functionName]) {
                // eval(functionName + "();");
                Utils.log(functionName + "();");
            }
        } as CommandOverload<["string"]>
    ]
});

function say(){
    Utils.log("!say");
}
