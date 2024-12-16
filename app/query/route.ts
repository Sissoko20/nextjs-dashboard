import { db } from '@vercel/postgres';

const client = await db.connect();

async function listInvoices() {
  // Requête SQL pour récupérer les factures et les clients
  const data = await client.sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;
  return data.rows; // Retourner les résultats de la requête
}
async function Allbd(){
  const data= await client.sql`
  SELECT * FROM invoices`
  return data.rows
}

export async function GET() {
  try {
    // Appel à la fonction listInvoices et récupération des données
    const invoices = await Allbd();
    
    // Renvoi des données en réponse HTTP
    return new Response(JSON.stringify(invoices), {
      status: 200, // Code HTTP 200 pour indiquer que la requête a réussi
      headers: {
        'Content-Type': 'application/json', // Spécifier le type de contenu de la réponse
      },
    });
  } catch (error) {
    // Gestion des erreurs
    console.log('Error occurred:', error);
    return new Response('Error fetching invoices', { status: 500 });
  }
}
