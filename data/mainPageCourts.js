import pic1 from "../public/images/1.webp";
import pic2 from "../public/images/2.webp";
import pic3 from "../public/images/3.webp";
import pic4 from "../public/images/4.webp";
import pic5 from "../public/images/5.webp";
import pic6 from "../public/images/6.webp";
import pic7 from "../public/images/7.webp";
import pic8 from "../public/images/8.webp";

import asphalt from "../public/images/surfaces/asphalt.webp";
import soft from "../public/images/surfaces/soft.webp";
import gravel from "../public/images/surfaces/gravel.webp";

const mainPageCourts = [
  {
    _id: 1,
    pic: pic1,
    address: "Harakkamyllyntie, 2",
    surface: "gravel",
    type: "sports field",
    baskets: 1,
    surfacePic: gravel,
    link: "https://www.google.com/maps/place/Harakkamyllyntie+2,+00920+Helsinki/@60.2248521,25.0532789,3a,75y,328.9h,83t/data=!3m6!1e1!3m4!1s9Oc6sBs-nJ_CaqtTZfbNDw!2e0!7i13312!8i6656!4m5!3m4!1s0x469208db5f5c85df:0x64c9de446db611a!8m2!3d60.2245389!4d25.0530243",
  },
  {
    _id: 2,
    pic: pic2,
    address: "Agronominkatu, 24",
    surface: "artificial grass",
    type: "outdoor sports park",
    baskets: 2,
    surfacePic: gravel,
    link: "https://www.hel.fi/helsinki/en/administration/participate/contact/search-address/toimipistekuvaus?id=40374",
  },
  {
    _id: 3,
    pic: pic3,
    address: "Kevätkatu, 2",
    surface: "asphalt",
    type: "high school yard",
    baskets: 2,
    surfacePic: asphalt,
    link: "https://www.google.com/maps/place/Kev%C3%A4tkatu+2,+00790+Helsinki/@60.2279812,25.0277728,3a,75y,137.8h,79.84t/data=!3m6!1e1!3m4!1sGlcvSFWDXaPilUh0Wh6NIA!2e0!7i13312!8i6656!4m5!3m4!1s0x469208e43548c4bd:0x2317ac0e0f681107!8m2!3d60.2278631!4d25.0291309",
  },
  {
    _id: 4,
    pic: pic4,
    address: "Eero Erkon katu",
    surface: "soft outdoor surface",
    type: "sports field",
    baskets: 2,
    surfacePic: soft,
    link: "https://www.hs.fi/kaupunki/art-2000006163098.html",
  },
  {
    _id: 5,
    pic: pic5,
    address: "Salpausseläntie, 3",
    surface: "soft outdoor surface",
    type: "school yard",
    baskets: 2,
    surfacePic: soft,
    link: "",
  },
  {
    _id: 6,
    pic: pic6,
    address: "Ylästöntie, 3",
    surface: "asphalt",
    type: "high school yard",
    baskets: 2,
    surfacePic: asphalt,
    link: "https://fi.wikipedia.org/wiki/Helsinge_gymnasium",
  },
  {
    _id: 7,
    pic: pic7,
    address: "Vanha Helsingintie, 5",
    surface: "asphalt",
    type: "vocational school yard",
    baskets: 1,
    surfacePic: asphalt,
    link: "https://www.google.com/maps/place/Vanha+Helsingintie+5,+00700+Helsinki/@60.2436329,25.0150938,3a,75y,31.26h,83.84t/data=!3m6!1e1!3m4!1sBOFDl68kLSQrF22iLrpm7A!2e0!7i13312!8i6656!4m5!3m4!1s0x469209e978b18da9:0x2ab8de7db2c1850e!8m2!3d60.2445979!4d25.0146025",
  },
  {
    _id: 8,
    pic: pic8,
    address: "Vanha Helsingintie, 2",
    surface: "asphalt",
    type: "school yard",
    baskets: 1,
    surfacePic: asphalt,
    link: "https://www.kieloschool.fi/",
  },
];

export default mainPageCourts;
