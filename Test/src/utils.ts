
export class Utils {

    static addonName = "TestAddon";

    static system;

    static init(system): void {
        this.system = system;
    }

    static log(message: string) :void{
        this.system.log(`[${this.addonName}]` + message);
    }

    static getEntityName(entity: IEntity): string {
        return this.system.getComponent(entity, MinecraftComponent.Nameable).data.name;
    }

}