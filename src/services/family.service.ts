import { FamilyRepository } from "../repositories/family.repo";
import { getCustomRepository } from "typeorm";
import {Family} from "../entity/Family";
export class FamilyService{
    private familyRepository=getCustomRepository(FamilyRepository);

    public  async getAllFamily(){
        return await this.familyRepository.getAllFamily();
    }
    public async getFamilyById(id :number){
        return await this.familyRepository.getFamilyById(id);
    }
    public async createFamily(family:Family){
        return await this.familyRepository.createFamily(family);
    }
    public async updateFamily(family:Family,id:number){
        const familyUpdate=await this.getFamilyById(id);
        await this.familyRepository.merge(familyUpdate,family);
        return await this.familyRepository.updateFamily(familyUpdate);
    }
    public async deteleFamilyById(id:number){
        const familyDetele=await this.getFamilyById(id);
        if(familyDetele){
            return await this.familyRepository.deteleFamilyById(id);
        }else{
            return new Family();
        }
        
    }
}