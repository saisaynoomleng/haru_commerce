import * as t from 'drizzle-orm/pg-core';
import { ProductTable } from './products.schema';
import { StoreTable } from './stores.schema';
import { timestamps } from './schema-helper';
import { sql } from 'drizzle-orm';

export const InventoryTable = t.pgTable(
  'inventories',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    productId: t
      .uuid('product_id')
      .references(() => ProductTable.id, { onDelete: 'cascade' })
      .notNull(),
    storeId: t
      .uuid('store_id')
      .references(() => StoreTable.id, { onDelete: 'cascade' })
      .notNull(),
    numberInStock: t.integer('number_in_stock').notNull(),
    ...timestamps,
  },
  (table) => [
    t
      .uniqueIndex('inventory_product_store_idx')
      .on(table.productId, table.storeId),

    t.check('inventory_stock_check', sql`${table.numberInStock} >= 0`),
  ],
);
