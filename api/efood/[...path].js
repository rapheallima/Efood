export default async function handler(req, res) {
  const path = req.query.path?.join('/') || '';
  const url = `https://fake-api-tau.vercel.app/api/efood/${path}`;

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
}
