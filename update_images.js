import { JSDOM } from 'jsdom';
import fs from 'fs';

const facultyUrls = {
  "https://faculty.pmu.edu.sa/PMUFaculties/Details/mashraf": "https://faculty.pmu.edu.sa/Admin/Upload/Faculty_PIC/",
  "https://faculty.pmu.edu.sa/PMUFaculties/Details/susman": "https://faculty.pmu.edu.sa/Admin/Upload/Faculty_PIC/",
  "https://faculty.pmu.edu.sa/pmufaculties/Details/sabbas": "https://faculty.pmu.edu.sa/Admin/Upload/Faculty_PIC/",
  "https://faculty.pmu.edu.sa/PMUFaculties/Details/nabulibdeh": "https://faculty.pmu.edu.sa/Admin/Upload/Faculty_PIC/",
  "https://faculty.pmu.edu.sa/PMUFaculties/Details/mkhalife1": "https://faculty.pmu.edu.sa/Admin/Upload/Faculty_PIC/",
  "https://faculty.pmu.edu.sa/PMUFaculties/Details/habdelsalam": "https://faculty.pmu.edu.sa/Admin/Upload/Faculty_PIC/",
  "https://faculty.pmu.edu.sa/PMUFaculties/Details/jsparkes": "https://faculty.pmu.edu.sa/Admin/Upload/Faculty_PIC/",
  "https://faculty.pmu.edu.sa/PMUFaculties/Details/jrichmond": "https://faculty.pmu.edu.sa/Admin/Upload/Faculty_PIC/"
};

const presidentUrl = "https://www.pmu.edu.sa/about/biography-of-president";
const aneziUrl = "https://wfsf2023paris.org/speaker/dr-faisal-yousif-al-anezi/";

const getFacultyImage = async (url) => {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const dom = new JSDOM(html);
    const imgs = Array.from(dom.window.document.querySelectorAll('img')).map(img => img.src);
    const profileImg = imgs.find(src => src.includes('Upload/Faculty_PIC'));
    if (profileImg) {
      return profileImg.replace('../../', 'https://faculty.pmu.edu.sa/');
    }
    return null;
  } catch (e) { return null; }
};

const getPresidentImage = async () => {
    try {
        const res = await fetch(presidentUrl);
        const html = await res.text();
        const dom = new JSDOM(html);
        const img = dom.window.document.querySelector('.president-img img, .bio img, img[alt*="President"], img[src*="president"]');
        if(img) return img.src.startsWith('/') ? 'https://www.pmu.edu.sa' + img.src : img.src;
        // fallback known pattern
        return 'https://www.pmu.edu.sa/images/content/about/alansari_photo.jpg';
    } catch(e) { return 'https://www.pmu.edu.sa/images/content/about/alansari_photo.jpg'; }
}

const getAneziImage = async () => {
   try {
        const res = await fetch(aneziUrl);
        const html = await res.text();
        const dom = new JSDOM(html);
        // WP speaker image
        const img = dom.window.document.querySelector('.wfsf-speaker-image img, .speaker-img img, article img');
         if(img) return img.src;
         return null;
   } catch(e) { return null;}
}

(async () => {
  let fileContent = fs.readFileSync('./src/pages/Committee.jsx', 'utf-8');
  
  const presImg = await getPresidentImage();
  const aneziImg = await getAneziImage();
  
  if(presImg) fileContent = fileContent.replace('https://www.pmu.edu.sa/about/biography-of-president', `https://www.pmu.edu.sa/about/biography-of-president", image: "${presImg}`);
  if(aneziImg) fileContent = fileContent.replace('https://wfsf2023paris.org/speaker/dr-faisal-yousif-al-anezi/', `https://wfsf2023paris.org/speaker/dr-faisal-yousif-al-anezi/", image: "${aneziImg}`);
  
  for (const url of Object.keys(facultyUrls)) {
     const img = await getFacultyImage(url);
     if (img) {
        fileContent = fileContent.replaceAll(`"${url}"`, `"${url}", image: "${img}"`);
     }
  }
  
  // also inject image tag into MemberCard
  fileContent = fileContent.replace(
      `{getInitials(member.name)}
    </div>`,
      `{member.image ? <img src={member.image} alt={member.name} style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'50%'}} /> : getInitials(member.name)}
    </div>`
  );
  
  fs.writeFileSync('./src/pages/Committee.jsx', fileContent);
  console.log("Done");
})();
