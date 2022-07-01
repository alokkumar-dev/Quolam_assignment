const social_icons = [
  "https://toppng.com/uploads/preview/facebook-image-white-white-facebook-f-image-115628618682gxdsl4yn5.png",
  "https://www.pinclipart.com/picdir/middle/356-3561356_facebook-image-twitter-image-twitter-icon-white-transparent.png",
  "https://www.pinclipart.com/picdir/middle/356-3561356_facebook-image-twitter-image-twitter-icon-white-transparent.png",
  "https://www.pinclipart.com/picdir/middle/356-3561356_facebook-image-twitter-image-twitter-icon-white-transparent.png",
  "https://www.pinclipart.com/picdir/middle/356-3561356_facebook-image-twitter-image-twitter-icon-white-transparent.png",
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

const lovelyWork = [
  {
    image: "https://i.ibb.co/vkkwNjL/lovily-Img3.jpg",
    text: "PARTNERSHIP GULDLINES",
  },
  {
    image: "https://i.ibb.co/vkkwNjL/lovily-Img3.jpg",
    text: "PARTNERSHIP GULDLINES",
  },
  {
    image: "https://i.ibb.co/vkkwNjL/lovily-Img3.jpg",
    text: "PARTNERSHIP GULDLINES",
  },
  {
    image: "https://i.ibb.co/vkkwNjL/lovily-Img3.jpg",
    text: "PARTNERSHIP GULDLINES",
  },
  {
    image: "https://i.ibb.co/vkkwNjL/lovily-Img3.jpg",
    text: "PARTNERSHIP GULDLINES",
  },
  {
    image: "https://i.ibb.co/vkkwNjL/lovily-Img3.jpg",
    text: "PARTNERSHIP GULDLINES",
  },
];

const wahtWeDo = [
  {
    image:
      "https://icons.iconarchive.com/icons/double-j-design/ravenna-3d/256/Settings-icon.png",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image:
      "https://icons.iconarchive.com/icons/double-j-design/ravenna-3d/256/Settings-icon.png",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image:
      "https://icons.iconarchive.com/icons/double-j-design/ravenna-3d/256/Settings-icon.png",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image:
      "https://icons.iconarchive.com/icons/double-j-design/ravenna-3d/256/Settings-icon.png",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image:
      "https://icons.iconarchive.com/icons/double-j-design/ravenna-3d/256/Settings-icon.png",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image:
      "https://icons.iconarchive.com/icons/double-j-design/ravenna-3d/256/Settings-icon.png",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image:
      "https://icons.iconarchive.com/icons/double-j-design/ravenna-3d/256/Settings-icon.png",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image:
      "https://icons.iconarchive.com/icons/double-j-design/ravenna-3d/256/Settings-icon.png",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
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
    aboutDiv.append(name, position);
    teamMainBox.append(imgDiv, aboutDiv);
    homeAvatarDiv.append(teamMainBox);
  });
};

displayTeam();

let renderLovelyImg = document.querySelector(".renderLovelyImg");
const displayLovilyWork = () => {
  lovelyWork.map((el) => {
    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    let h4 = document.createElement("h4");

    // imgDiv.setAttribute("class", "lovelyImgDiv")
    img.setAttribute("class", "lovelyImage");
    h4.setAttribute("class", "lovelyWorkText");
    img.src = el.image;
    h4.textContent = el.text;
    imgDiv.append(img, h4);
    renderLovelyImg.append(imgDiv);
  });
};
displayLovilyWork();


let renderWhatDoData = document.querySelector(".renderWhatDoData");
const displayWhatWeDo = () => {
  wahtWeDo.map((el) => {
    let imgDiv = document.createElement("div");
    let h4 = document.createElement("h4");
    let img = document.createElement("img");
    let p = document.createElement("p");

    h4.textContent = el.name;
    img.src = el.image;
    p.textContent = el.about;

    imgDiv.append(img, h4, p);
    renderWhatDoData.append(imgDiv);
  });
};

displayWhatWeDo();
