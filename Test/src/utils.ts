import { Config } from "./config";

export class Utils {

    static system: IVanillaServerSystem;

    static init(system: IVanillaServerSystem): void {
        this.system = system;
    }

    static log(message: string) {
        server.log(`[${Config.addonName}] ` + message);
    }

    static getEntityName(entity: IEntity): string {
        return this.system.getComponent<INameableComponent>(entity, MinecraftComponent.Nameable).data.name;
    }
    
}