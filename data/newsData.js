const newsData = [
  {
    date: "02-12-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/119.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/119.webp",
    alt: "Mikkolankuja, 3",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Mikkolankuja,%203",
    linkText: "Mikkolankuja, 3",
  },
  {
    date: "29-11-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/118.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/118.webp",
    alt: "Pihlajistontie, 1",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Pihlajistontie,%201",
    linkText: "Pihlajistontie, 1",
  },
  {
    date: "26-11-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/46.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/46.webp",
    alt: "Jengipolku, 8",
    text: " is updated. New pictures are added.",
    longText: " is updated. New pictures are added.",
    link: "https://koripallopaikat.com/courts/Jengipolku,%208",
    linkText: "Jengipolku, 8",
  },
  {
    date: "19-11-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/117.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/117.webp",
    alt: "Kuntokatu, 17",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Kuntokatu,%2017",
    linkText: "Kuntokatu, 17",
  },
  {
    date: "16-11-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/116.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/116.webp",
    alt: "Rajakentäntie, 1",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Rajakentäntie,%201",
    linkText: "Rajakentäntie, 1",
  },
  {
    date: "14-11-2021",
    image: "/kbar.webp",
    largeImage: "/kbarLarge.webp",
    alt: "Kbar",
    text: " command+k interface was added to the site. Try it out – press cmd/ctrl and k.",
    link: "https://github.com/timc1/kbar",
    linkText: "Kbar",
  },
  {
    date: "12-11-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/115.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/115.webp",
    alt: "Iiluodonpiha, 1",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Iiluodonpiha,%201",
    linkText: "Iiluodonpiha, 1",
  },
  {
    date: "10-11-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/6.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/6.webp",
    alt: "Ylästöntie, 3",
    text: " is updated. Basketball field has been completely redone.",
    longText:
      " is updated. Basketball field has been completely redone, now it has 2 baskets and an artificial grass surface.",
    link: "https://koripallopaikat.com/courts/Ylästöntie,%203",
    linkText: "Ylästöntie, 3",
  },
  {
    date: "09-11-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/114.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/114.webp",
    alt: "Leikosaarentie, 16",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Leikosaarentie,%2016",
    linkText: "Leikosaarentie, 16",
  },
  {
    date: "08-11-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/113.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/113.webp",
    alt: "Kallvikinniementie, 1",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Kallvikinniementie,%201",
    linkText: "Kallvikinniementie, 1",
  },
  {
    date: "06-11-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/112.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/112.webp",
    alt: "Kallahdenraitti, 3",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Kallahdenraitti,%203",
    linkText: "Kallahdenraitti, 3",
  },
  {
    date: "05-11-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/111.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/111.webp",
    alt: "Prammikuja, 3",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Prammikuja,%203",
    linkText: "Prammikuja, 3",
  },
  {
    date: "04-11-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/110.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/110.webp",
    alt: "Kauppakartanonkatu, 28",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Kauppakartanonkatu,%2028",
    linkText: "Kauppakartanonkatu, 28",
  },
  {
    date: "02-11-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/109.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/109.webp",
    alt: "Prinsessantie, 2",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Prinsessantie,%202",
    linkText: "Prinsessantie, 2",
  },
  {
    date: "01-11-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/108.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/108.webp",
    alt: "Lutherinkatu, 18",
    text: " court was added. Next week I plan to add about 7 more courts.",
    link: "https://koripallopaikat.com/courts/Lutherinkatu,%2018",
    linkText: "Lutherinkatu, 18",
  },
  {
    date: "30-10-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/107.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/107.webp",
    alt: "Merikannontie, 6",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Merikannontie,%206",
    linkText: "Merikannontie, 6",
  },
  {
    date: "27-10-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/106.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/106.webp",
    alt: "Aurinkotuulenkatu, 11",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Aurinkotuulenkatu,%2011",
    linkText: "Aurinkotuulenkatu, 11",
  },
  {
    date: "27-10-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/105.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/105.webp",
    alt: "Urheilukalastajankuja, 1",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Urheilukalastajankuja,%201",
    linkText: "Urheilukalastajankuja, 1",
  },
  {
    date: "25-10-2021",
    image: "https://villivald.com/koripallopaikat/news/news.webp",
    largeImage: "https://villivald.com/koripallopaikat/news/large/news.webp",
    alt: "News page",
    text: " is created and added to the main page.",
    link: "https://koripallopaikat.com/news",
    linkText: "News page",
  },
  {
    date: "20-10-2021",
    image: "https://villivald.com/koripallopaikat/news/insta.webp",
    largeImage: "https://villivald.com/koripallopaikat/news/large/insta.webp",
    alt: "Instagram",
    text: " is out and running. Feel free to follow!",
    link: "https://www.instagram.com/koripallopaikat/",
    linkText: "Our Instagram account",
  },
  {
    date: "08-10-2021",
    image: "https://villivald.com/koripallopaikat/searchPics/104.webp",
    largeImage: "https://villivald.com/koripallopaikat/listPics/104.webp",
    alt: "Tuhkimontie, 10",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Tuhkimontie,%2010",
    linkText: "Tuhkimontie, 10",
  },
];

export default newsData;
