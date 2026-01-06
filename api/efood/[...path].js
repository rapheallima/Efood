export const config = {
  runtime: 'nodejs18.x',
};

export default async function handler(req, res) {
  const path = req.query.path ? req.query.path.join('/') : '';
  const url = `https://fake-api-tau.vercel.app/api/efood/${path}`;

  try {
    const response = await fetch(url);

    const text = await response.text();

    try {
      const data = JSON.parse(text);
      res.status(response.status).json(data);
    } catch {
      res.status(response.status).send(text);
    }
  } catch (error) {
    res.status(500).json({
      error: 'Erro no proxy',
      message: error.message,
    });
  }
}
