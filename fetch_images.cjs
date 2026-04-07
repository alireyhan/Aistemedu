const https = require('https');

const fetchUrl = (url) => {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
};

const urls = [
  'https://www.pmu.edu.sa/about/biography-of-president',
  'https://wfsf2023paris.org/speaker/dr-faisal-yousif-al-anezi/',
  'https://faculty.pmu.edu.sa/PMUFaculties/Details/mashraf',
  'https://faculty.pmu.edu.sa/PMUFaculties/Details/susman',
  'https://faculty.pmu.edu.sa/PMUFaculties/Details/sabbas',
  'https://faculty.pmu.edu.sa/PMUFaculties/Details/nabulibdeh',
  'https://faculty.pmu.edu.sa/PMUFaculties/Details/mkhalife1',
  'https://faculty.pmu.edu.sa/PMUFaculties/Details/habdelsalam',
  'https://faculty.pmu.edu.sa/PMUFaculties/Details/jsparkes',
  'https://faculty.pmu.edu.sa/PMUFaculties/Details/jrichmond'
];

(async () => {
  for (const url of urls) {
    const html = await fetchUrl(url);
    const matches = html.match(/<img[^>]+src="([^"]+)"/gi);
    if(matches) {
       console.log("=== URL:", url);
       console.log(matches.filter(m => m.toLowerCase().includes('presi') || m.toLowerCase().includes('upload') || m.toLowerCase().includes('profile') || m.toLowerCase().includes('photo') || m.toLowerCase().includes('anezi')).slice(0,3));
    }
  }
})();
