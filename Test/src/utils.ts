
export class Utils {

    static system;

    static init(system): void {
        this.system = system;
    }

    static getEntityName(entity: IEntity): string {
        return this.system.getComponent(entity, MinecraftComponent.Nameable).data.name;
    }

}