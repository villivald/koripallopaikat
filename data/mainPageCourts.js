import pic1 from "../public/images/1.webp";
import pic2 from "../public/images/2.webp";
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
    lat: 60.224656096983466,
    lon: 25.053045756427437,
    district: "Myllypuro",
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
    lat: 60.2320971901178,
    lon: 25.036502356427654,
    district: "Latokartano",
  },
  {
    _id: 3,
    pic: pic4,
    address: "Eero Erkon katu",
    surface: "soft outdoor surface",
    type: "sports field",
    baskets: 2,
    surfacePic: soft,
    link: "https://www.hs.fi/kaupunki/art-2000006163098.html",
    lat: 60.17296238175858,
    lon: 24.93697582055306,
    district: "Kluuvi",
  },
  {
    _id: 4,
    pic: pic5,
    address: "Salpausseläntie, 3",
    surface: "soft outdoor surface",
    type: "school yard",
    baskets: 2,
    surfacePic: soft,
    link: "",
    lat: 60.23225260869468,
    lon: 25.00225421212958,
    district: "Pihlajisto",
  },
  {
    _id: 5,
    pic: pic6,
    address: "Käskynhaltijantie, 11",
    surface: "asphalt",
    type: "sports park",
    baskets: 8,
    surfacePic: asphalt,
    link: "https://www.hel.fi/helsinki/fi/kaupunki-ja-hallinto/osallistu-ja-vaikuta/ota-yhteytta/hae-yhteystietoja/toimipistekuvaus?id=45651",
    lat: 60.234365986568676,
    lon: 24.959387609971888,
    district: "Patola",
  },
  {
    _id: 6,
    pic: pic7,
    address: "Kontulankaari, 15",
    surface: "asphalt",
    type: "sports park",
    baskets: 2,
    surfacePic: asphalt,
    link: "https://www.hel.fi/helsinki/fi/kaupunki-ja-hallinto/osallistu-ja-vaikuta/ota-yhteytta/hae-yhteystietoja/toimipistekuvaus?id=45667",
    lat: 60.24451222811895,
    lon: 25.08280388329361,
    district: "Kontula",
  },
  {
    _id: 7,
    pic: pic8,
    address: "Kellaritie, 14",
    surface: "soft outdoor surface",
    type: "sports park",
    baskets: 2,
    surfacePic: soft,
    link: "https://www.suomi.fi/palvelut/palvelupiste/ala-malmin-liikuntapuisto-koripallokentta-helsingin-kaupunki/9da29a87-4423-432b-a484-4c8c90d1f640",
    lat: 60.24816325484996,
    lon: 25.023472165732894,
    district: "Ala-Malmi",
  },
];

export default mainPageCourts;
