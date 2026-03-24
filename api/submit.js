import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  // Получаем данные из обычной формы
  const body = await new Promise((resolve) => {
    let data = '';
    req.on('data', chunk => data += chunk);
    req.on('end', () => resolve(new URLSearchParams(data)));
  });

  const name = body.get('name');
  const fone = body.get('fone');

  if (!name || !fone) return res.redirect(302, '/?error=empty');

  try {
    // Сохраняем заявку в базе
    await sql`
      INSERT INTO leads (name, phone) VALUES (${name}, ${fone})
    `;
    return res.redirect(302, '/thanks.html');
  } catch (error) {
    console.error('DB Error:', error);
    return res.redirect(302, '/?error=server');
  }
}
