import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML(url) {
    const {data} = await axios.get('https://twitter.com/Shomailbintahir');
    console.log(data);
    
}

export {getHTML};