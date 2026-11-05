import { defineRelations } from 'drizzle-orm';
import * as schema from './schema';

export const relations = defineRelations(schema, (r) => ({
  ProductTable: {
    inventories: r.many.InventoryTable({
      from: r.ProductTable.id,
      to: r.InventoryTable.productId,
    }),

    stores: r.many.StoreTable({
      from: r.ProductTable.id.through(r.InventoryTable.productId),
      to: r.StoreTable.id.through(r.InventoryTable.storeId),
    }),
  },

  StoreTable: {
    products: r.many.ProductTable({
      from: r.StoreTable.id.through(r.InventoryTable.storeId),
      to: r.ProductTable.id.through(r.InventoryTable.productId),
    }),
  },

  JobTable: {
    applications: r.many.JobApplicationTable({
      from: r.JobTable.id,
      to: r.JobApplicationTable.jobId,
    }),
  },

  JobApplicationTable: {
    eeo: r.one.JobApplicationEEOTable({
      from: r.JobApplicationTable.id,
      to: r.JobApplicationEEOTable.applicationId,
    }),

    educations: r.many.JobApplicationEducationTable({
      from: r.JobApplicationTable.id,
      to: r.JobApplicationEducationTable.applicationId,
    }),

    experiences: r.many.JobApplicationExperienceTable({
      from: r.JobApplicationTable.id,
      to: r.JobApplicationExperienceTable.applicationId,
    }),

    statusHistories: r.many.JobApplicationStatusHistoryTable({
      from: r.JobApplicationTable.id,
      to: r.JobApplicationStatusHistoryTable.applicationId,
    }),
  },
}));
