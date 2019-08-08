import {getHTML, getTwitterFollowers} from './lib/scraper';

async function go() {
    const html = await getHTML('https://twitter.com/Shomailbintahir')
    const tFollowers = await getTwitterFollowers(html);
    console.log(`You have ${tFollowers} twitter followers`);
}

go();