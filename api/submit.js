// /api/submit.js
import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  // Разрешаем только POST-запросы
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  try {
    // Получаем данные из обычной HTML формы
    const body = await new Promise((resolve) => {
      let data = '';
      req.on('data', chunk => data += chunk);
      req.on('end', () => resolve(new URLSearchParams(data)));
    });

    const name = body.get('name')?.trim();
    const fone = body.get('fone')?.trim();

    // Проверка заполненности
    if (!name || !fone) {
      return res.redirect(302, '/?error=empty');
    }

    // Вставка данных в таблицу leads
    await sql`
      INSERT INTO leads (name, phone)
      VALUES (${name}, ${fone})
    `;

    // Перенаправляем на страницу "Спасибо"
    return res.redirect(302, '/thanks.html');

  } catch (error) {
    console.error('DB Error:', error);
    return res.redirect(302, '/?error=server');
  }
}
