import {
  getHTML,
  getTwitterFollowers,
  getInstagramFollowers,
} from './lib/scraper';

async function go() {
  const [twitterHTML, instagramHTML] = await Promise.all([
    getHTML('https://twitter.com/Shomailbintahir'),
    getHTML('https://www.instagram.com/shomail.b.tahir/'),
  ]);
  const twitterFollowers = await getTwitterFollowers(twitterHTML);
  const instagramFollowers = await getInstagramFollowers(instagramHTML);
  console.log(
    `You have ${twitterFollowers} twitter followers, and ${instagramFollowers} instagram followers`
  );
}

go();
