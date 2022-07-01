const social_icons = [
  "https://toppng.com/uploads/preview/facebook-logo-white-white-facebook-f-logo-115628618682gxdsl4yn5.png",
  "https://www.pinclipart.com/picdir/middle/356-3561356_facebook-logo-twitter-logo-twitter-icon-white-transparent.png",
  "https://www.pinclipart.com/picdir/middle/356-3561356_facebook-logo-twitter-logo-twitter-icon-white-transparent.png",
  "https://www.pinclipart.com/picdir/middle/356-3561356_facebook-logo-twitter-logo-twitter-icon-white-transparent.png",
  "https://www.pinclipart.com/picdir/middle/356-3561356_facebook-logo-twitter-logo-twitter-icon-white-transparent.png",
];

const team = [
  {
    avatar: "https://i.ibb.co/bbG7M0T/Man1.png",
    name: "GLORIA BROMLEY",
    position: "CEO and Founder",
  },
  {
    avatar: "https://i.ibb.co/bbG7M0T/Man1.png",
    name: "PAUL TORRES",
    position: "Head of Development",
  },
  {
    avatar: "https://i.ibb.co/bbG7M0T/Man1.png",
    name: "JUDITH GILLETTE",
    position: "Graphic Desinger",
  },
  {
    avatar: "https://i.ibb.co/bbG7M0T/Man1.png",
    name: "DELORES REED",
    position: "Client Service Director",
  },
];

let Social_i_cont = document.querySelector(".Social_i_cont");
const displaySocialIcon = () => {
  social_icons.map((el) => {
    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = el;
    imgDiv.append(img);
    Social_i_cont.append(imgDiv);
  });
};
displaySocialIcon();


let homeAvatarDiv = document.querySelector(".homeAvatarDiv");
const displayTeam = () => {
  team.map((el) => {
    let teamMainBox = document.createElement("div");
    let imgDiv = document.createElement("div");
    let aboutDiv = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("h4");
    let position = document.createElement("h5");

    aboutDiv.setAttribute("class", "teamAboutDiv");
    imgDiv.setAttribute("class", "teamImgDiv");


    img.src = el.avatar;
    name.textContent = el.name;
    position.textContent = el.position;

    imgDiv.append(img);
    aboutDiv.append(name,position);
    teamMainBox.append(imgDiv, aboutDiv);
    homeAvatarDiv.append(teamMainBox);
  });
};

displayTeam();
