import { getIstagramCount, getTwitterCount } from './lib/scraper';

async function go() {
  const [iCount, tCount] = await Promise.all([
    getIstagramCount(),
    getTwitterCount(),
  ]);

  console.log(iCount, tCount);
}

go();
