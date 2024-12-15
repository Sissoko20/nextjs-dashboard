import { db } from "@vercel/postgres";

const client = await db.connect();

async function listInvoices() {
  const data = await client.sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;
  return data.rows;
}

export async function GET() {
  try {
    const result = await client.sql`SELECT version()`;
    console.log(result.rows); // Affiche la version de PostgreSQL dans la console
  } catch (error) {
    console.error('Error during simple query:', error);
  }
}
