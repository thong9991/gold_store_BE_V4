"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorRepository = void 0;
const Vendor_1 = require("../../../domain/dtos/Vendor/Vendor");
const data_source_1 = require("../../database/typeorm/data_source");
class VendorRepository {
    async create(data) {
        const vendorRepository = data_source_1.AppDataSource.getRepository(Vendor_1.VendorDTO);
        const vendor = vendorRepository.create(data);
        const results = await vendorRepository.save(vendor);
        return results;
    }
    async update(vendor, data) {
        const vendorRepository = data_source_1.AppDataSource.getRepository(Vendor_1.VendorDTO);
        const updatedVendor = await vendorRepository
            .createQueryBuilder('vendor')
            .update(Vendor_1.VendorDTO)
            .set(data)
            .where('id = :id', { id: vendor.id })
            .returning([
            'id',
            'vendorName',
            'vendorCode',
            'vendorAddress',
            'updatedAt',
        ])
            .updateEntity(true)
            .execute();
        return updatedVendor.raw[0];
    }
    async delete(id) {
        const vendorRepository = data_source_1.AppDataSource.getRepository(Vendor_1.VendorDTO);
        await vendorRepository.delete({ id: id });
    }
    async findById(id) {
        const vendorRepository = data_source_1.AppDataSource.getRepository(Vendor_1.VendorDTO);
        const vendor = await vendorRepository.findOneBy({
            id: id,
        });
        return vendor;
    }
    async findByVendorName(vendorName) {
        const vendorRepository = data_source_1.AppDataSource.getRepository(Vendor_1.VendorDTO);
        const vendor = await vendorRepository.findOneBy({
            vendorName: vendorName,
        });
        return vendor;
    }
    async findAllDataNoPaging() {
        const vendorRepository = data_source_1.AppDataSource.getRepository(Vendor_1.VendorDTO);
        const vendors = await vendorRepository.find({
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                vendorName: true,
            },
            cache: 60 * 1000,
        });
        return vendors;
    }
    async findAll(pageNumber) {
        const perPage = 10;
        const vendorRepository = data_source_1.AppDataSource.getRepository(Vendor_1.VendorDTO);
        const [vendors, total] = await vendorRepository.findAndCount({
            take: perPage,
            skip: Math.ceil((pageNumber - 1) * perPage),
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                vendorName: true,
                vendorCode: true,
                vendorAddress: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return {
            body: vendors,
            total: total,
            page: pageNumber,
            last_page: Math.ceil(total / perPage),
        };
    }
}
exports.VendorRepository = VendorRepository;
//# sourceMappingURL=Vendor.js.map