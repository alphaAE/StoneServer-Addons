(function () {
    'use strict';

    class Config {
    }
    Config.addonName = "TestAddon";
    Config.version = "1.0.0";

    class Utils {
        static init(system) {
            this.system = system;
        }
        static log(message) {
            server.log(`[${Config.addonName}] ` + message);
        }
        static getEntityName(entity) {
            return this.system.getComponent(entity, "minecraft:nameable" /* Nameable */).data.name;
        }
    }

    const system = server.registerSystem(0, 0);
    system.initialize = function () {
        Utils.init(system);
        Utils.log("by alphaAE Loaded");
        system.listenForEvent("minecraft:entity_created", onPlayerCreated);
        system.listenForEvent("minecraft:block_interacted_with" /* BlockInteractedWith */, onBlockInteracted);
    };
    function onPlayerCreated(eventData) {
        let entity = eventData.data.entity;
        if (!entity)
            throw "not entity";
        if (entity.__identifier__ == "minecraft:player") {
            let name = Utils.getEntityName(entity);
            Utils.log(`玩家 ${name} 加入游戏!`);
            // system.executeCommand(`tell @a[name=${name}] §欢迎你 ${name}`,(data)=>{});
        }
    }
    function onBlockInteracted(eventData) {
        let player = eventData.data.player;
        let playerHandItemArr = system.getComponent(player, "minecraft:hand_container" /* HandContainer */).data;
        let playerTickWorld = system.getComponent(player, "minecraft:tick_world" /* TickWorld */).data.ticking_area;
        if (playerHandItemArr[0].item === "minecraft:iron_sword") {
            system.setBlock(playerTickWorld, "minecraft:redstone_block", eventData.data.block_position);
        }
        if (playerHandItemArr[0].item === "minecraft:diamond_sword") ;
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
                    if (!this.entity || this.entity.__identifier__ != "minecraft:player")
                        throw `非法玩家!`;
                    system.sendText(this.entity, `${functionName} !`);
                }
            }
        ]
    });

}());
