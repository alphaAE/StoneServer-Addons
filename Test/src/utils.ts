
export class Utils {

    static addonName: string = "TestAddon";

    static system;

    static init(system): void {
        this.system = system;
    }

    static log(message: string) {
        this.system.log(`[${this.addonName}]` + message);
    }

    static getEntityName(entity: IEntity): string {
        return this.system.getComponent(entity, MinecraftComponent.Nameable).data.name;
    }

}