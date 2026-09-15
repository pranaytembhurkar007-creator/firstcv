// Intentionally empty by default.
// Add Drizzle tables here when the site actually needs a database.
// See examples/d1/db/schema.ts for an opt-in example.
import { sqliteTable,text,integer,index,uniqueIndex } from 'drizzle-orm/sqlite-core';
export const settings=sqliteTable('settings',{id:text('id').primaryKey(),data:text('data').notNull()});
export const resumes=sqliteTable('resumes',{id:text('id').primaryKey(),userId:text('user_id').notNull(),title:text('title').notNull(),data:text('data').notNull(),updatedAt:text('updated_at').notNull()},t=>[index('resumes_user').on(t.userId)]);
export const orders=sqliteTable('orders',{id:text('id').primaryKey(),userId:text('user_id').notNull(),email:text('email').notNull(),plan:text('plan').notNull(),amount:integer('amount').notNull(),status:text('status').notNull(),paymentStatus:text('payment_status').notNull(),providerOrderId:text('provider_order_id'),paymentId:text('payment_id'),brief:text('brief').notNull(),snapshot:text('snapshot').notNull(),revisions:integer('revisions').notNull().default(0),createdAt:text('created_at').notNull(),updatedAt:text('updated_at').notNull()},t=>[index('orders_user').on(t.userId,t.createdAt),uniqueIndex('orders_provider').on(t.providerOrderId),uniqueIndex('orders_payment').on(t.paymentId)]);
export const messages=sqliteTable('messages',{id:text('id').primaryKey(),orderId:text('order_id').notNull(),author:text('author').notNull(),body:text('body').notNull(),createdAt:text('created_at').notNull()},t=>[index('messages_order').on(t.orderId,t.createdAt)]);
export const files=sqliteTable('files',{id:text('id').primaryKey(),orderId:text('order_id').notNull(),name:text('name').notNull(),objectKey:text('object_key').notNull(),kind:text('kind').notNull(),createdAt:text('created_at').notNull()},t=>[index('files_order').on(t.orderId)]);
export const limits=sqliteTable('limits',{id:text('id').primaryKey(),count:integer('count').notNull(),expires:integer('expires').notNull()});
