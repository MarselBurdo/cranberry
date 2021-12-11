export const menu = [
  {
    path: "/",
    textLink: "Home",
    exact: true,
    roles: ["all", "collaborator"],
  },
  {
    path: "/dialog",
    textLink: "Dialog",
    exact: false,
    roles: ["collaborator"],
  },
  {
    path: "/goods",
    textLink: "Goods",
    exact: false,
    roles: ["collaborator"],
  },
  {
    path: "/fun",
    textLink: "Fun Page",
    exact: false,
    roles: ["collaborator"],
  },
  {
    path: "/login",
    textLink: "Login",
    exact: false,
    roles: ["all"],
  },
  {
    path: "/registration",
    textLink: "Registration",
    exact: false,
    roles: ["all"],
  },
];
