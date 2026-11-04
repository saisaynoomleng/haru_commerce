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
}));
