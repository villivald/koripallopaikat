const newsData = [
  {
    date: "02-04-2022",
    image: "https://koripallopaikat.com/koripallopaikat/129/1.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/129/1.webp",
    alt: "Edelfeltin Bulevardi, 2",
    text: " court was added.",
    longText:
      " court was added. I will add more courts from Porvoo in the next couple of days.",
    link: "https://koripallopaikat.com/courts/Edelfeltin%20Bulevardi,%202",
    linkText: "Edelfeltin Bulevardi, 2",
  },
  {
    date: "23-03-2022",
    image: "https://koripallopaikat.com/koripallopaikat/34/1.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/34/1.webp",
    alt: "Messitytönkatu, 4",
    text: " was updated as well as Ahmatie, 1.",
    longText: " was updated as well as Ahmatie, 1. New pictures are added.",
    link: "https://koripallopaikat.com/courts/Messitytönkatu,%204",
    linkText: "Messitytönkatu, 4",
  },
  {
    date: "21-03-2022",
    image: "https://koripallopaikat.com/koripallopaikat/72/1.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/72/1.webp",
    alt: "Hämeentie, 80",
    text: " was updated as well as Laivastokuja, 2.",
    longText:
      " was updated as well as Laivastokuja, 2. New pictures are added.",
    link: "https://koripallopaikat.com/courts/Hämeentie,%2080",
    linkText: "Hämeentie, 80",
  },
  {
    date: "19-03-2022",
    image: "https://koripallopaikat.com/koripallopaikat/27/1.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/89/1.webp",
    alt: "Porttitie, 5",
    text: " was updated as well as Rusthollarintie, 7 & Rusthollarintie, 6.",
    longText:
      " was updated as well as Rusthollarintie, 7 & Rusthollarintie, 6. New pictures are added.",
    link: "https://koripallopaikat.com/courts/Porttitie,%205",
    linkText: "Porttitie, 5",
  },
  {
    date: "24-02-2022",
    image: "https://koripallopaikat.com/koripallopaikat/84/1.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/84/2.webp",
    alt: "Hammarskjöldintie, 5",
    text: " was updated as well as Puotilan metrokatu, 2.",
    longText:
      " was updated as well as Puotilan metrokatu, 2. New pictures are added.",
    link: "https://koripallopaikat.com/courts/Hammarskj%C3%B6ldintie,%205",
    linkText: "Hammarskjöldintie, 5",
  },
  {
    date: "10-02-2022",
    image: "https://koripallopaikat.com/koripallopaikat/18/1.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/18/2.webp",
    alt: "Lucina Hagmanin polku",
    text: " was updated as well as Leikkikuja, 4.",
    longText: " was updated as well as Leikkikuja, 4. New pictures are added.",
    link: "https://koripallopaikat.com/courts/Lucina%20Hagmanin%20polku",
    linkText: "Lucina Hagmanin polku",
  },
  {
    date: "30-01-2022",
    image: "https://koripallopaikat.com/koripallopaikat/16/1.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/16/2.webp",
    alt: "Sturenkatu, 6",
    text: " is updated as well as Mäkelänkatu, 72 & Kullervonkatu, 11.",
    longText:
      " is updated as well as Mäkelänkatu, 72 & Kullervonkatu, 11. New pictures are added.",
    link: "https://koripallopaikat.com/courts/Sturenkatu,%206",
    linkText: "Sturenkatu, 6",
  },
  {
    date: "28-01-2022",
    image: "https://koripallopaikat.com/koripallopaikat/33/2.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/33/1.webp",
    alt: "Hyväntoivonkatu, 5",
    text: " is updated. New pictures are added.",
    longText: " is updated. New pictures are added.",
    link: "https://koripallopaikat.com/courts/Hyv%C3%A4ntoivonkatu,%205",
    linkText: "Hyväntoivonkatu, 5",
  },
  {
    date: "24-01-2022",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/128.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/128.webp",
    alt: "Rionkatu, 10",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Rionkatu,%2010",
    linkText: "Rionkatu, 10",
  },
  {
    date: "22-01-2022",
    image: "https://koripallopaikat.com/koripallopaikat/13/2.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/12/2.webp",
    alt: "Neljäs linja, 11",
    text: " is updated as well as Lastenkodinkatu, 2-10.",
    longText:
      " is updated as well as Lastenkodinkatu, 2-10 (Baana). New pictures are added.",
    link: "https://koripallopaikat.com/courts/Neljäs%20linja,%2011",
    linkText: "Neljäs linja, 11",
  },
  {
    date: "10-01-2022",
    image: "https://koripallopaikat.com/koripallopaikat/9/1.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/9/2.webp",
    alt: "Berliininkatu, 4",
    text: " is updated as well as Arabianpolku, 2 & Arabianpolku, 3.",
    longText:
      " is updated as well as Arabianpolku, 2 & Arabianpolku, 3. New pictures are added.",
    link: "https://koripallopaikat.com/courts/Berliininkatu,%204",
    linkText: "Berliininkatu, 4",
  },
  {
    date: "03-01-2022",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/127.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/127.webp",
    alt: "Veräjäpellonkatu, 14",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Veräjäpellonkatu,%2014",
    linkText: "Veräjäpellonkatu, 14",
  },
  {
    date: "01-01-2022",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/126.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/126.webp",
    alt: "Loviselundinpolku",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Loviselundinpolku",
    linkText: "Loviselundinpolku",
  },
  {
    date: "28-12-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/125.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/125.webp",
    alt: "Veräjäpellonkatu, 12",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Veräjäpellonkatu,%2012",
    linkText: "Veräjäpellonkatu, 12",
  },
  {
    date: "24-12-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/124.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/124.webp",
    alt: "Veräjävahdinpolku",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Veräjävahdinpolku",
    linkText: "Veräjävahdinpolku",
  },
  {
    date: "21-12-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/123.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/123.webp",
    alt: "Veräjäpellonkatu, 2",
    text: " court was added.",
    longText:
      " court was added. There are going to be a few more courts from Leppävaara soon.",
    link: "https://koripallopaikat.com/courts/Veräjäpellonkatu,%202",
    linkText: "Veräjäpellonkatu, 2",
  },
  {
    date: "16-12-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/122.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/122.webp",
    alt: "Veräjäpellonkatu, 2",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Pikkukoskentie,%2023",
    linkText: "Veräjäpellonkatu, 2",
  },
  {
    date: "15-12-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/121.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/121.webp",
    alt: "Teinintie, 12",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Teinintie,%2012",
    linkText: "Teinintie, 12",
  },
  {
    date: "13-12-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/20.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/20.webp",
    alt: "Moreenitie, 4",
    text: " is updated. New pictures are added.",
    longText:
      " is updated. New pictures are added. Ongoing construction works nearby. The 'court' is still available, but deeply not recommended.",
    link: "https://koripallopaikat.com/courts/Moreenitie,%204",
    linkText: "Moreenitie, 4",
  },
  {
    date: "10-12-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/19.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/19.webp",
    alt: "Moreenitie, 2",
    text: " is updated. New pictures are added.",
    longText: " is updated. New pictures are added.",
    link: "https://koripallopaikat.com/courts/Moreenitie,%202",
    linkText: "Moreenitie, 2",
  },
  {
    date: "07-12-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/120.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/120.webp",
    alt: "Siltavoudintie, 24",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Siltavoudintie,%2024",
    linkText: "Siltavoudintie, 24",
  },
  {
    date: "02-12-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/119.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/119.webp",
    alt: "Mikkolankuja, 3",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Mikkolankuja,%203",
    linkText: "Mikkolankuja, 3",
  },
  {
    date: "29-11-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/118.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/118.webp",
    alt: "Pihlajistontie, 1",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Pihlajistontie,%201",
    linkText: "Pihlajistontie, 1",
  },
  {
    date: "26-11-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/46.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/46.webp",
    alt: "Jengipolku, 8",
    text: " is updated. New pictures are added.",
    longText: " is updated. New pictures are added.",
    link: "https://koripallopaikat.com/courts/Jengipolku,%208",
    linkText: "Jengipolku, 8",
  },
  {
    date: "19-11-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/117.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/117.webp",
    alt: "Kuntokatu, 17",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Kuntokatu,%2017",
    linkText: "Kuntokatu, 17",
  },
  {
    date: "16-11-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/116.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/116.webp",
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
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/115.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/115.webp",
    alt: "Iiluodonpiha, 1",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Iiluodonpiha,%201",
    linkText: "Iiluodonpiha, 1",
  },
  {
    date: "10-11-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/6.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/6.webp",
    alt: "Ylästöntie, 3",
    text: " is updated. Basketball field has been completely redone.",
    longText:
      " is updated. Basketball field has been completely redone, now it has 2 baskets and an artificial grass surface.",
    link: "https://koripallopaikat.com/courts/Ylästöntie,%203",
    linkText: "Ylästöntie, 3",
  },
  {
    date: "09-11-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/114.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/114.webp",
    alt: "Leikosaarentie, 16",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Leikosaarentie,%2016",
    linkText: "Leikosaarentie, 16",
  },
  {
    date: "08-11-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/113.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/113.webp",
    alt: "Kallvikinniementie, 1",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Kallvikinniementie,%201",
    linkText: "Kallvikinniementie, 1",
  },
  {
    date: "06-11-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/112.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/112.webp",
    alt: "Kallahdenraitti, 3",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Kallahdenraitti,%203",
    linkText: "Kallahdenraitti, 3",
  },
  {
    date: "05-11-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/111.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/111.webp",
    alt: "Prammikuja, 3",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Prammikuja,%203",
    linkText: "Prammikuja, 3",
  },
  {
    date: "04-11-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/110.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/110.webp",
    alt: "Kauppakartanonkatu, 28",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Kauppakartanonkatu,%2028",
    linkText: "Kauppakartanonkatu, 28",
  },
  {
    date: "02-11-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/109.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/109.webp",
    alt: "Prinsessantie, 2",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Prinsessantie,%202",
    linkText: "Prinsessantie, 2",
  },
  {
    date: "01-11-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/108.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/108.webp",
    alt: "Lutherinkatu, 18",
    text: " court was added. Next week I plan to add about 7 more courts.",
    link: "https://koripallopaikat.com/courts/Lutherinkatu,%2018",
    linkText: "Lutherinkatu, 18",
  },
  {
    date: "30-10-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/107.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/107.webp",
    alt: "Merikannontie, 6",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Merikannontie,%206",
    linkText: "Merikannontie, 6",
  },
  {
    date: "27-10-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/106.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/106.webp",
    alt: "Aurinkotuulenkatu, 11",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Aurinkotuulenkatu,%2011",
    linkText: "Aurinkotuulenkatu, 11",
  },
  {
    date: "27-10-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/105.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/105.webp",
    alt: "Urheilukalastajankuja, 1",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Urheilukalastajankuja,%201",
    linkText: "Urheilukalastajankuja, 1",
  },
  {
    date: "25-10-2021",
    image: "https://koripallopaikat.com/koripallopaikat/news/news.webp",
    largeImage:
      "https://koripallopaikat.com/koripallopaikat/news/large/news.webp",
    alt: "News page",
    text: " is created and added to the main page.",
    link: "https://koripallopaikat.com/news",
    linkText: "News page",
  },
  {
    date: "20-10-2021",
    image: "https://koripallopaikat.com/koripallopaikat/news/insta.webp",
    largeImage:
      "https://koripallopaikat.com/koripallopaikat/news/large/insta.webp",
    alt: "Instagram",
    text: " is out and running. Feel free to follow!",
    link: "https://www.instagram.com/koripallopaikat/",
    linkText: "Our Instagram account",
  },
  {
    date: "08-10-2021",
    image: "https://koripallopaikat.com/koripallopaikat/searchPics/104.webp",
    largeImage: "https://koripallopaikat.com/koripallopaikat/listPics/104.webp",
    alt: "Tuhkimontie, 10",
    text: " court was added.",
    link: "https://koripallopaikat.com/courts/Tuhkimontie,%2010",
    linkText: "Tuhkimontie, 10",
  },
];

export default newsData;
