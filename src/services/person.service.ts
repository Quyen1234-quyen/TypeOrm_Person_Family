
import { PersonRepository } from "../repositories/person.repo";
import { getCustomRepository } from 'typeorm';
import { Person } from "../entity/Person";
import { IPerson, IPersonInfo } from "../interfaces/IPerson";
export default class PersonService {
    private personRepository: any = getCustomRepository(PersonRepository);

    public async getAllPerson() {
        return await this.personRepository.getAllPerson();
    }
    public async getPersonById(id: number) {
        return this.personRepository.getPersonById(id);
    }
    public async createPerson(person: IPersonInfo): Promise<IPersonInfo> {

        return this.personRepository.createPerson(person);
    }
    public async updateperson(person: IPersonInfo, id: number): Promise<IPersonInfo> {
        const presonUpdate = await this.getPersonById(id);
        await this.personRepository.merge(presonUpdate, person);
        return this.personRepository.updateperson(presonUpdate);
    }
    public async deletePerson(id: number) {
        const personDelete = await this.getPersonById(id);
        if (personDelete) {
            return await this.personRepository.deletePerson(id);
        } else {
            return new Person();
        }
    }

}
