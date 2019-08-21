(function () {
    'use strict';

    class Utils {
        static init(system) {
            this.system = system;
        }
        static log(message) {
            this.system.log(`[${this.addonName}]` + message);
        }
        static log2(message) {
            this.system.log("log2");
        }
        static getEntityName(entity) {
            return this.system.getComponent(entity, "minecraft:nameable" /* Nameable */).data.name;
        }
    }
    Utils.addonName = "TestAddon";

    const system = server.registerSystem(0, 0);
    system.initialize = function () {
        Utils.init(system);
        Utils.log2("by alphaAE Loaded");
        system.listenForEvent("minecraft:entity_created", onPlayerCreated);
    };
    function onPlayerCreated(eventData) {
        var entity = eventData.data.entity;
        if (!entity)
            throw "not entity";
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
            }
        ]
    });

}());
