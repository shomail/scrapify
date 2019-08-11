import axios from 'axios';
import cheerio from 'cheerio';

export async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

export async function getTwitterFollowers(html) {
  const $ = cheerio.load(html);
  const span = $('[data-nav="followers"] .ProfileNav-value');
  return span.data('count');
}

export async function getInstagramFollowers(html) {
  const $ = cheerio.load(html);
  const dataStr = $('script[type="application/ld+json"]').html();
  const pageObj = JSON.parse(dataStr);

  return parseInt(
    pageObj.mainEntityofPage.interactionStatistic.userInteractionCount
  );
}

export async function getIstagramCount() {
  const html = await getHTML('https://www.instagram.com/shomail.b.tahir/');
  const instagramCount = await getInstagramFollowers(html);
  return instagramCount;
}

export async function getTwitterCount() {
  const html = await getHTML('https://twitter.com/Shomailbintahir');
  const twitterCount = await getTwitterFollowers(html);
  return twitterCount;
}
