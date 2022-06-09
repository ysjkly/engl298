"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {
    id("start-btn").addEventListener("click", startGame);
    id("end-btn").addEventListener("click", endGame);
    id("restart-btn").addEventListener("click", restart);
    let btn = qsa("#choices button");
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", next);
    }
  }

  function startGame() {
    toggleHidden();
    generateBoard("start");
  }

  function next() {
    let cEvent = qs("#game>section").id;
    let cChoice = this.id;
    // 复制到past
    let past = gen("section");
    let date = gen("p");
    date.textContent=qs("#current-date p").textContent;
    date.classList.add("past-date")
    past.appendChild(date);
    let event = gen("p");
    event.textContent = qs("#current > p").textContent;
    past.classList.add("past-event")
    past.appendChild(event);
    if (data[cEvent].type === "question") {
      let ans = gen("p");
      ans.innerHTML="Your choice is: <span>" + this.textContent + "</span>";
      past.appendChild(ans);
    }
    qs("#past div").appendChild(past);
    // 创建新事件
    let next = data[cEvent].choices[cChoice].next;
    let nEvent=data[next];
    console.log(nEvent)
    generateBoard(next);
    if (nEvent["type"] === "ending") {
      generateBoard(next);
      hindBtn();
    }
  }

  function ending() {
    hindBtn();
  }

  function endGame() {
    hindBtn();
    toggleHidden();
    qs("#past > div").innerHTML = "";
  }

  function restart() {
    hindBtn();
    qs("#past > div").innerHTML = "";
    generateBoard("start");
  }

  function generateBoard(event) {
    hindBtn();
    let current = data[event];
    qs("#current-date p").textContent=current.date;
    qs("#current > p").textContent=current.description;
    qs("#game>section").id=event;
    let btn = qsa("#choices button");
    for (let i = 0; i < Object.keys(current["choices"]).length; i++) {
      let choice = btn[i].id;
      btn[i].textContent = current.choices[choice].description;
      btn[i].classList.remove("hidden");
    }
    qs("#pic-container").innerHTML = "";
    if (current.img !== undefined) {
      let img = gen("img");
      img.src = current.img;
      qs("#pic-container").appendChild(img);
    }
    qs("footer p").textContent = current["footer"];
  }

  function hindBtn() {
    let btn = qsa("#choices button");
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.add("hidden");
    }
  }

  function toggleHidden() {
    id("game").classList.toggle("hidden");
    id("current").classList.toggle("hidden");
    id("past").classList.toggle("hidden");
    id("start-page").classList.toggle("hidden");
  }

  const data = {
    "start":{
      "date":"June 25, 1950",
      "type":"info",
      "description":"During WWII, the Korean peninsula was colonized by the Empire of Japan."+
      "On August 9, 1945, on the eve of Japan's defeat and surrender, the U.S. proposed and the Soviet Union approved a proposal to occupy the southern and northern parts of the Korean Peninsula, respectively, using the 38th parallel as the boundary.",
      "choices":{
        "choice1": {
          "description":"Continue",
          "next":"position"
        }
      },
      "footer":"",
    },
    "position":{
      "date":"June 25, 1950",
      "type":"question",
      "description":"You are now in...?",
      "choices":{
        "choice2": {
          "description":"Seoul",
          "next":"628"
        },
        "choice1": {
          "description":"Hamhung",
          "next":"915"
        }
      },
      "footer":"",
      "img":"img/koreanpeninsula.jpg"
    },
    "628":{
      "date":"June 28, 1950",
      "type":"info",
      "description":"North Korean People's Army (NKPA) forces capture Seoul.",
      "choices":{
        "choice1": {
          "description":"Continue",
          "next":"927"
        }
      },
      "footer":"Source: https://history.army.mil/reference/korea/kw-chrono.htm"
    },
    "915":{
      "date":"September 15, 1950",
      "type":"info",
      "description":"UN forces, mainly U.S. forces, get involved today to help South Korea.",
      "choices":{
        "choice1": {
          "description":"Continue",
          "next":"101"
        }
      },
      "footer":"Source: https://history.army.mil/reference/korea/kw-chrono.htm"
    },
    "927":{
      "date":"September 27, 1950",
      "type":"info",
      "description":"U.S. and Republic of Korea (ROK) forces capture Seoul.",
      "choices":{
        "choice1": {
          "description":"Continue",
          "next":"a wounded"
        }
      },
      "footer":""
    },
    "101":{
      "date":"October 1, 1950",
      "type":"info",
      "description":"South Korean corps crosses 38th Parallel and then advances up the east coast.",
      "choices":{
        "choice1": {
          "description":"Continue",
          "next":"SK1"
        }
      },
      "footer":""
    },
    "a wounded":{
      "date":"September 28, 1950",
      "type":"question",
      "description":"You find a man unconscious on the side of the road. He is wounded seriously. Do you want to help him?",
      "choices":{
        "choice1": {
          "description":"Yes",
          "next":"BE1"
        },
        "choice2": {
          "description":"No",
          "next":""
        }
      },
      "footer":""
    },
    "further-south":{
      "date":"June 29th ",
      "type":"question",
      "description":"",
      "choices":{
        "choice1": {
          "description":"",
          "next":""
        },
        "choice2": {
          "description":"",
          "next":""
        }
      },
      "footer":""
    },
    "SK1":{
      "date":"October 15, 1950",
      "type":"question",
      "description":"Do you want to go to South Korea now to keep far from the battlefront?",
      "choices":{
        "choice1": {
          "description":"Yes",
          "next":"toSK"
        },
        "choice2": {
          "description":"No",
          "next":"ship1"
        }
      },
      "footer":""
    },
    "ship1":{
      "date":"December 10, 1950",
      "type":"question",
      "description":"You heard that the U.S. corps plan to retreat from Hŭngnam, a port city near Hamhung. Do you want to go to Hŭngnam and follow the U.S. corps to leave for South Korea?",
      "choices":{
        "choice1": {
          "description":"Yes",
          "next":"ship2"
        },
        "choice2": {
          "description":"No",
          "next":"SK2"
        }
      },
      "footer":""
    },
    "cn":{
      "date":"October 19, 1950",
      "type":"info",
      "description":"Chinese forces of the People's Volunteer Army (PVA) entered the war.",
      "choices":{
        "choice1": {
          "description":"Continue",
          "next":"ship1"
        }
      },
      "footer":""
    },
    "ship2":{
      "date":"December 13, 1950",
      "type":"info",
      "description":"When you and your family arrive in Hŭngnam, about 100,000 North Korea refugees have arrived at the port area, and new refugees continue to gather in the port of Hŭngnam. The large amount of civilians is not in the plan of the American army and there is no settlement for you and other North Koreans. You have to stay outside aruond the port with other civilians. Some refugees there die of coldness of the night.",
      "choices":{
        "choice1": {
          "description":"Continue",
          "next":"ship3"
        }
      },
      "footer":""
    },
    "ship3":{
      "date":"December 21, 1950",
      "type":"question",
      "description":"The U.S. army finally makes the decision to take away as many civilians as possible. However, because of the crowd of so many civilians, you get lost with your family members. You want to...?",
      "choices":{
        "choice1": {
          "description":"Board the ship first",
          "next":"ship4"
        },
        "choice2": {
          "description":"Find your family members first",
          "next":"1224"
        }
      },
      "footer":""
    },
    "ship4":{
      "date":"December 24, 1950",
      "type":"info",
      "description":"to geoje",
      "choices":{
        "choice1": {
          "description":"Continue",
          "next":"OE1"
        },
      },
      "footer":""
    },
    "1224":{
      "date":"December 24, 1950",
      "type":"question",
      "description":"You find your family members, but there is no room on the ships of American army to take you and your family any more. You plan to...?",
      "choices":{
        "choice1": {
          "description":"walk to South Korea",
          "next":""
        },
        "choice2": {
          "description":"stay in North Korea",
          "next":""
        }
      },
      "footer":""
    },
    "":{
      "date":"",
      "type":"",
      "description":"",
      "choices":{
        "choice1": {
          "description":"",
          "next":""
        },
        "choice2": {
          "description":"",
          "next":""
        }
      },
      "footer":""
    },
    "BE1":{
      "date":"",
      "type":"ending",
      "description": "You did not know that the wounded man is a communist. You are noticed by the South Korea force and are considered as a communist sympathizer and are killed.",
      "choices":{}
    }
  }

  function gen(tagName) {
    return document.createElement(tagName);
  }

  function id(id) {
    return document.getElementById(id);
  }

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(query) {
    return document.querySelectorAll(query);
  }

})();