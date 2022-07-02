const team = [
  {
    avatar: "https://i.ibb.co/bbG7M0T/Man1.png",
    name: "GLORIA BROMLEY",
    position: "CEO and Founder",
  },
  {
    avatar: "https://i.ibb.co/VqLXQjB/man2.jpg",
    name: "PAUL TORRES",
    position: "Head of Development",
  },
  {
    avatar: "https://i.ibb.co/6X4z6zz/women.jpg",
    name: "JUDITH GILLETTE",
    position: "Graphic Desinger",
  },
  {
    avatar: "https://i.ibb.co/VqLXQjB/man2.jpg",
    name: "DELORES REED",
    position: "Client Service Director",
  },
];

const lovelyWork = [
  {
    image: "https://i.ibb.co/sHfcSH5/lovely-Img1.jpg",
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
    image: "https://i.ibb.co/RH4kC07/setting-Icon.jpg",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image: "https://i.ibb.co/h9Rc66G/pancel-Icon.jpg",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image: "https://i.ibb.co/b11n1pw/phone-Icon.jpg",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image: "https://i.ibb.co/s1YKx7R/whach-Icon.jpg",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image: "https://i.ibb.co/RH4kC07/setting-Icon.jpg",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image: "https://i.ibb.co/h9Rc66G/pancel-Icon.jpg",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image: "https://i.ibb.co/b11n1pw/phone-Icon.jpg",
    name: "EASY THEME SETUP",
    about:
      "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas",
  },
  {
    image: "https://i.ibb.co/s1YKx7R/whach-Icon.jpg",
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

let teamBox1 = document.querySelector(".teamBox1");
let teamAboutDiv1 = document.querySelector(".teamAboutDiv1");
let teamName1 = document.querySelector(".teamName1");
let teamPosition1 = document.querySelector(".teamPosition1");
let teamHoverDiv1 = document.querySelector(".teamHoverDiv1");
teamBox1.onmouseover = () => {
  teamAboutDiv1.style.backgroundColor = "#3a454d";
  teamHoverDiv1.style.display = "block";
  teamName1.style.color = "white";
  teamPosition1.style.color = "white";
};
teamBox1.onmouseout = () => {
  teamAboutDiv1.style.backgroundColor = "#e1e6ea";
  teamHoverDiv1.style.display = "none";
  teamName1.style.color = "black";
  teamPosition1.style.color = "black";
};

let teamBox2 = document.querySelector(".teamBox2");
let teamAboutDiv2 = document.querySelector(".teamAboutDiv2");
let teamName2 = document.querySelector(".teamName2");
let teamPosition2 = document.querySelector(".teamPosition2");
let teamHoverDiv2 = document.querySelector(".teamHoverDiv2");
teamBox2.onmouseover = () => {
  teamAboutDiv2.style.backgroundColor = "#3a454d";
  teamHoverDiv2.style.display = "block";
  teamName2.style.color = "white";
  teamPosition2.style.color = "white";
};
teamBox2.onmouseout = () => {
  teamAboutDiv2.style.backgroundColor = "#e1e6ea";
  teamHoverDiv2.style.display = "none";
  teamName2.style.color = "black";
  teamPosition2.style.color = "black";
};

let teamBox3 = document.querySelector(".teamBox3");
let teamAboutDiv3 = document.querySelector(".teamAboutDiv3");
let teamName3 = document.querySelector(".teamName3");
let teamPosition3 = document.querySelector(".teamPosition3");
let teamHoverDiv3 = document.querySelector(".teamHoverDiv3");
teamBox3.onmouseover = () => {
  teamAboutDiv3.style.backgroundColor = "#3a454d";
  teamHoverDiv3.style.display = "block";
  teamName3.style.color = "white";
  teamPosition3.style.color = "white";
};
teamBox3.onmouseout = () => {
  teamAboutDiv3.style.backgroundColor = "#e1e6ea";
  teamHoverDiv3.style.display = "none";
  teamName3.style.color = "black";
  teamPosition3.style.color = "black";
};

let teamBox4 = document.querySelector(".teamBox4");
let teamAboutDiv4 = document.querySelector(".teamAboutDiv4");
let teamName4 = document.querySelector(".teamName4");
let teamPosition4 = document.querySelector(".teamPosition4");
let teamHoverDiv4 = document.querySelector(".teamHoverDiv4");
teamBox4.onmouseover = () => {
  teamAboutDiv4.style.backgroundColor = "#3a454d";
  teamHoverDiv4.style.display = "block";
  teamName4.style.color = "white";
  teamPosition4.style.color = "white";
};
teamBox4.onmouseout = () => {
  teamAboutDiv4.style.backgroundColor = "#e1e6ea";
  teamHoverDiv4.style.display = "none";
  teamName4.style.color = "black";
  teamPosition4.style.color = "black";
};

let renderLovelyImg = document.querySelector(".renderLovelyImg");
const displayLovilyWork = () => {
  lovelyWork.map((el) => {
    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    let h4 = document.createElement("h4");

    let div = document.createElement("div");
    div.setAttribute("class", "lovelyImgHoverDiv");
    div.innerHTML = "✚";
    imgDiv.onmouseover = () => {
      h4.style.backgroundColor = "#1d1e1f";
      h4.style.color = "#fff";
      div.style.display = "block";
      h4.style.display = "block";
    };
    imgDiv.onmouseout = () => {
      h4.style.background = "none";
      div.style.display = "none";
      h4.style.display = "none";
    };

    img.setAttribute("class", "lovelyImage");
    h4.setAttribute("class", "lovelyWorkText");
    img.src = el.image;
    h4.textContent = el.text;
    imgDiv.append(div, img, h4);
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
