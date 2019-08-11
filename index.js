import express from 'express';
import { getIstagramCount, getTwitterCount } from './lib/scraper';

const app = express();

app.get('/scrape', async (req, res, next) => {
  console.log('scraping');
  const [iCount, tCount] = await Promise.all([
    getIstagramCount(),
    getTwitterCount(),
  ]);
  res.json({ iCount, tCount });
});

app.listen(2019, () => console.log(`Scrapify API running on port: 2019 💻 ✅`));
