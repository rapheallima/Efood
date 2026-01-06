export default async function handler(req: any, res: any) {
  const url = `https://fake-api-tau.vercel.app/api/efood${req.url}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados' })
  }
}
