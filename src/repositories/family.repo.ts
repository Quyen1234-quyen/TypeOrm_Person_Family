import { Repository, EntityRepository } from "typeorm";
import { Family } from "../entity/Family";

@EntityRepository(Family)
export class FamilyRepository extends Repository<Family>{
    public async getAllFamily(): Promise<Family[]> {
        return await this.find();
    }
    public async getFamilyById(id: number): Promise<Family> {
        return await this.findOne(id);
    }
    public async createFamily(family: Family): Promise<Family> {
        return await this.save(family);
    }
    public async updateFamily(family:Family):Promise<Family>{
        return await this.save(family);
    }
    public async deteleFamilyById(id: number):Promise<Family[]>  {
        await this.delete(id)
        return this.getAllFamily();
    }
}
