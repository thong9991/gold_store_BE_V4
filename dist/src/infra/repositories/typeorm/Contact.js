"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRepository = void 0;
const typeorm_1 = require("typeorm");
const Contact_1 = require("../../../domain/dtos/Contact/Contact");
const data_source_1 = require("../../database/typeorm/data_source");
class ContactRepository {
    async create(data) {
        const contactRepository = data_source_1.AppDataSource.getRepository(Contact_1.ContactDTO);
        const contact = contactRepository.create(data);
        const results = await contactRepository.save(contact);
        return results;
    }
    async update(contact, data) {
        const contactRepository = data_source_1.AppDataSource.getRepository(Contact_1.ContactDTO);
        const updatedContact = await contactRepository
            .createQueryBuilder('contact')
            .update(Contact_1.ContactDTO)
            .set(data)
            .where('id = :id', { id: contact.id })
            .returning([
            'id',
            'name',
            'phoneType',
            'phone',
            'description',
            'updatedAt',
        ])
            .updateEntity(true)
            .execute();
        return updatedContact.raw[0];
    }
    async delete(id) {
        const contactRepository = data_source_1.AppDataSource.getRepository(Contact_1.ContactDTO);
        await contactRepository.delete({ id: id });
    }
    async findById(id) {
        const contactRepository = data_source_1.AppDataSource.getRepository(Contact_1.ContactDTO);
        const contact = await contactRepository.findOneBy({
            id: id,
        });
        return contact;
    }
    async findByIds(idList) {
        const contactRepository = data_source_1.AppDataSource.getRepository(Contact_1.ContactDTO);
        const contacts = await contactRepository.find({
            where: { id: (0, typeorm_1.In)(idList) },
            order: { name: 'ASC' },
            select: {
                id: true,
                name: true,
                phoneType: true,
                phone: true,
                description: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return contacts;
    }
    async findAllSearchData() {
        const contactRepository = data_source_1.AppDataSource.getRepository(Contact_1.ContactDTO);
        const contacts = await contactRepository.find({
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                name: true,
            },
            cache: 10 * 60 * 1000,
        });
        return contacts;
    }
    async findAll(pageNumber) {
        const perPage = 25;
        const contactRepository = data_source_1.AppDataSource.getRepository(Contact_1.ContactDTO);
        const [contacts, total] = await contactRepository.findAndCount({
            take: perPage,
            skip: Math.ceil((pageNumber - 1) * perPage),
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                name: true,
                phoneType: true,
                phone: true,
                description: true,
                createdAt: true,
                updatedAt: true,
            },
            cache: 10 * 60 * 1000,
        });
        return {
            body: contacts,
            total: total,
            page: pageNumber,
            last_page: Math.ceil(total / perPage),
        };
    }
}
exports.ContactRepository = ContactRepository;
//# sourceMappingURL=Contact.js.map