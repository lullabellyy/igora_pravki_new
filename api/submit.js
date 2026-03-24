import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  // Только POST
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  const { name, fone } = req.body;

  // Проверка что поля заполнены
  if (!name || !fone) {
    return res.redirect(302, '/?error=empty');
  }

  try {
    // Создаём таблицу если не существует (при первом запросе)
    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    // Сохраняем заявку
    await sql`
      INSERT INTO leads (name, phone) VALUES (${name}, ${fone})
    `;

    // Перенаправляем на страницу "спасибо"
    return res.redirect(302, '/thanks.html');
  } catch (error) {
    console.error('DB Error:', error);
    return res.redirect(302, '/?error=server');
  }
}
