
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
    image: "https://i.ibb.co/936PZ6x/lovely-Img1.jpg",
    text: "PARTNERSHIP GULDLINES",
  },
  {
    image: "https://i.ibb.co/Fs63XLC/lovely-Img2.jpg",
    text: "PARTNERSHIP GULDLINES",
  },
  {
    image: "https://i.ibb.co/vkkwNjL/lovily-Img3.jpg",
    text: "PARTNERSHIP GULDLINES",
  },
  {
    image: "https://i.ibb.co/W632TTm/lovely-Img4.jpg",
    text: "PARTNERSHIP GULDLINES",
  },
  {
    image: "https://i.ibb.co/Q9Jt8ng/lovely-Img5.jpg",
    text: "PARTNERSHIP GULDLINES",
  },
  {
    image: "https://i.ibb.co/kVnPXkw/lovely-Img6.jpg",
    text: "PARTNERSHIP GULDLINES",
  },
];

const wahtWeDo = [
  {
    image:
      "https://i.ibb.co/RH4kC07/setting-Icon.jpg",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image:
      "https://i.ibb.co/h9Rc66G/pancel-Icon.jpg",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image:
      "https://i.ibb.co/b11n1pw/phone-Icon.jpg",
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
      "https://i.ibb.co/RH4kC07/setting-Icon.jpg",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image:
      "https://i.ibb.co/h9Rc66G/pancel-Icon.jpg",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image:
      "https://i.ibb.co/b11n1pw/phone-Icon.jpg",
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
const features = [
  {
    image: "https://i.ibb.co/8MTvjXt/features-Img1.jpg",
    name: "PRODUCT DESIGN: EAMES CHAIRS",
    about:
      "Eames designs are certainly iconic. Everyone of us know at least two or three of their famous chairs. I would even risk saying that most of us dream about having a nice Eames.",
  },
  {
    image: "https://i.ibb.co/Q8wgRHC/features-Img2.jpg",
    name: "ELEGANT AND COLORFULLOGOS",
    about:
      "Eames designs are certainly iconic. Everyone of us know at least two or three of their famous chairs. I would even risk saying that most of us dream about having a nice Eames.",
  },
  {
    image: "https://i.ibb.co/8g5Ffpj/features-Img3.jpg",
    name: "A SHOWCASE OF CREATIVE",
    about:
      "Eames designs are certainly iconic. Everyone of us know at least two or three of their famous chairs. I would even risk saying that most of us dream about having a nice Eames.",
  },
];



let homeAvatarDiv = document.querySelector(".homeAvatarDiv");
const displayTeam = () => {
  team.map((el) => {
    let teamMainBox = document.createElement("div");
    let imgDiv = document.createElement("div");
    let aboutDiv = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("h4");
    let position = document.createElement("h5");
    // let h1 = document.createElement("h1");
    let hoverDiv = document.createElement("div");
    hoverDiv.textContent = "Alok Kumar";

    hoverDiv.setAttribute("class", "teamHoverDiv");

    aboutDiv.setAttribute("class", "teamAboutDiv");
    imgDiv.setAttribute("class", "teamImgDiv");
    // teamMainBox.setAttribute("class", "teamRendomHover")
    teamMainBox.onmouseover = ()=>{
      aboutDiv.style.backgroundColor = "#3a454d";
      name.style.color = "white"
      position.style.color = "white"

    }
    teamMainBox.onmouseout = ()=>{
      aboutDiv.style.backgroundColor = "#e1e6ea"
      name.style.color = "black"
      position.style.color = "black"

    }
    

    img.src = el.avatar;
    name.textContent = el.name;
    position.textContent = el.position;

    imgDiv.append(img);
    aboutDiv.append(name, position);
    teamMainBox.append(hoverDiv,imgDiv, aboutDiv);
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

    let div = document.createElement("div");
    div.setAttribute("class", "lovelyImgHoverDiv");
    div.innerHTML = "✚"
    imgDiv.onmouseover = ()=>{
      h4.style.backgroundColor = "#1d1e1f"
      h4.style.color = "#fff"
      div.style.display = "block";
      h4.style.display = "block";

    }
    imgDiv.onmouseout = ()=>{
      h4.style.background = "none"
      div.style.display = "none";
      h4.style.display = "none";
    }


    img.setAttribute("class", "lovelyImage");
    h4.setAttribute("class", "lovelyWorkText");
    img.src = el.image;
    h4.textContent = el.text;
    imgDiv.append(div,img, h4);
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

let renderFeaturesImg = document.querySelector(".renderFeaturesImg");
const displayFeatures = () => {
  features.map((el) => {
    let imgDiv = document.createElement("div");
    let h4 = document.createElement("h4");
    let img = document.createElement("img");
    let p = document.createElement("p");

    h4.textContent = el.name;
    img.src = el.image;
    p.textContent = el.about;

    imgDiv.append(img, h4, p);
    renderFeaturesImg.append(imgDiv);
  });
};
displayFeatures();
