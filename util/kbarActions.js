const actions = [
  {
    id: "home",
    name: "Home",
    shortcut: ["h"],
    keywords: "home page",
    perform: () => (window.location.pathname = "/"),
  },
  {
    id: "blog",
    name: "Map",
    shortcut: ["m"],
    keywords: "courts on map",
    perform: () => (window.location.pathname = "map"),
  },
  {
    id: "list",
    name: "List",
    shortcut: ["l"],
    keywords: "full list of courts",
    perform: () => (window.location.pathname = "courts"),
  },
  {
    id: "search",
    name: "Search",
    shortcut: ["s"],
    keywords: "search court (filter, sort)",
    perform: () => (window.location.pathname = "search"),
  },
  {
    id: "add",
    name: "Add",
    shortcut: ["a"],
    keywords: "add new court",
    perform: () => (window.location.pathname = "add"),
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["c"],
    keywords: "contact (email, social, support)",
    perform: () => (window.location.pathname = "contact"),
  },
];

export default actions;
