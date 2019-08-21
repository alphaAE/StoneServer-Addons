(function () {
    'use strict';

    class Utils {
        static init(system) {
            this.system = system;
        }
        static getEntityName(entity) {
            return this.system.getComponent(entity, "minecraft:nameable" /* Nameable */).data.name;
        }
    }

    const system = server.registerSystem(0, 0);
    system.initialize = function () {
        server.log("TestAddon created by alphaAE Loaded");
        system.listenForEvent("minecraft:entity_created", onPlayerCreated);
        Utils.init(system);
    };
    function onPlayerCreated(eventData) {
        var entity = eventData.data.entity;
        if (!entity)
            throw "not entity";
        if (entity.__identifier__ == "minecraft:player") {
            let name = Utils.getEntityName(entity);
            server.log(`玩家 ${name} 加入游戏`);
            // system.executeCommand(`tell @a[name=${name}] §欢迎你 ${name}`,(data)=>{});
        }
    }

}());
