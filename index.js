import express from 'express';
import { getIstagramCount, getTwitterCount } from './lib/scraper';
import getDB from './lib/db';

// App setup
const app = express();
const db = getDB();

app.get('/scrape', async (req, res, next) => {
  console.log('scraping');
  const [iCount, tCount] = await Promise.all([
    getIstagramCount(),
    getTwitterCount(),
  ]);
  db.get('twitter')
    .push({
      date: Date.now(),
      count: tCount,
    })
    .write();
  db.get('instagram')
    .push({
      date: Date.now(),
      count: iCount,
    })
    .write();
  res.json({ iCount, tCount });
});

app.listen(2019, () => console.log(`Scrapify API running on port: 2019 💻 ✅`));
