import { Repository, EntityRepository } from 'typeorm';
import { Person } from '../entity/Person';
import { IPerson,IPersonInfo} from '../interfaces/IPerson';
@EntityRepository(Person)
export class PersonRepository extends Repository<Person>{
    public async getAllPerson(): Promise<Person[]> {
        return await this.find();
    }
    public async getPersonById(id: number): Promise<IPerson> {
        return await this.findOne(id);
    }
    public async createPerson(person: IPersonInfo): Promise<IPersonInfo> {
        return await this.save(person)
    }
    public async updateperson(person:IPersonInfo): Promise<IPersonInfo>{
        return await this. save(person);
    }   
    public async deletePerson(id:number) {
        await this.delete(id);
        return await this.getAllPerson();
    }
}


