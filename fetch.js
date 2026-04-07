import { JSDOM } from 'jsdom';

const fetchImages = async (url) => {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const imgs = Array.from(dom.window.document.querySelectorAll('img')).map(img => img.src);
    console.log(url, imgs.filter(src => src.includes('ProfileImage') || src.includes('upload') || src.includes('Upload')));
  } catch (error) {
    console.error(error);
  }
};

fetchImages('https://faculty.pmu.edu.sa/PMUFaculties/Details/jrichmond');
fetchImages('https://www.pmu.edu.sa/about/biography-of-president');
