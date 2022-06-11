// test
"use strict";
(function() {

  const data = {
    "start":{
      "date":"June 25, 1950",
      "type":"info",
      "description":"During WWII, the Korean peninsula was colonized by the Empire of Japan. "+
      "On August 9, 1945, on the eve of Japan's defeat and surrender, the U.S. proposed and the Soviet Union approved a proposal to occupy the southern and northern parts of the Korean Peninsula, respectively, using the 38th parallel, or latitude 38° N, as the boundary.",
      "choices":{
        "choice1": {
          "description":"Continue",
          "next":"position"
        }
      },
      "img":"img/japan.jpg",
      "footer":"Image credit: <a href='https://www.shutterstock.com/image-illustration/hand-drawn-map-japanese-empire-largest-615098075'>shutterstock</a><br>" +
      "Source: <a href='https://www.nationalgeographic.com/science/article/130805-korean-war-dmz-armistice-38-parallel-geography'>National Geographic, Korea, and the 38th Parallel</a>",
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
      "footer":"Image edited from: <a href='https://www.worldatlas.com/webimage/countrys/asia/outline/koreanpnout.htm'>worldatlas</a>",
      "img":"img/koreanpeninsula.jpg"
    },
    "628":{
      "date":"June 28, 1950",
      "type":"info",
      "description":"North Korean People's Army (NKPA) forces capture Seoul.",
      "choices":{
        "choice1": {
          "description":"Continue",
          "next":"630"
        }
      },
      "footer":"Source: <a href='https://history.army.mil/reference/korea/kw-chrono.htm'The Korean War Chronology</a>"
    },
    "630":{
      "date":"June 30, 1950",
      "type":"question",
      "description":"Do you want to go further south?",
      "choices":{
        "choice1": {
          "description":"Yes",
          "next":"village"
        },
        "choice2": {
          "description":"No",
          "next":"915"
        }
      },
      "footer":""
    },
    "915":{
      "date":"September 15, 1950",
      "type":"info",
      "description":"UN forces, mainly the U.S. forces, get involved today to help South Korea.",
      "choices":{
        "choice1": {
          "description":"Continue",
          "next":"927"
        }
      },
      "footer":"Source: <a href='https://history.army.mil/reference/korea/kw-chrono.htm'>The Korean War Chronology</a>"
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
      "footer":"Source: <a href='https://history.army.mil/reference/korea/kw-chrono.htm'>The Korean War Chronology</a>"
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
      "description":"Do you want to go to South Korea now?",
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
      "description":"You hear that the U.S. corps plan to retreat from Hŭngnam, a port city near Hamhung. Do you want to go to Hŭngnam and follow the U.S. corps to leave for South Korea?",
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
      "footer":"Source: <a href='https://arsof-history.org/articles/v7n1_hungnam_page_1.html'>The Refugee Evacuation from HUngnam</a>"
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
      "img":"img/board.jpeg",
      "footer":"Image credit: U.S. Army"
    },
    "ship4":{
      "date":"December 26, 1950",
      "type":"info",
      "description":"You are on the ship SS Meredith Victory, which will be called the 'Ship of Miracles' later. You hope that you can see your family after the ship stops. The ship arrives in Busan now, but there are already too many refugees in Busan, so the ship of North Korean refugees has to continue its voyage to Geoje Island.",
      "choices":{
        "choice1": {
          "description":"Continue",
          "next":"OE1"
        },
      },
      "img":"img/crowd.jpeg",
      "footer":"Image credit: U.S. Army<br>Source: <a href='https://www.wilsoncenter.org/article/ship-miracles-korea-1950'>Ship of Miracles: Korea 1950</a>"
    },
    "1224":{
      "date":"December 24, 1950",
      "type":"question",
      "description":"You find your family members, but there is no room on the ships of American army to take you and your family any more. You plan to...?",
      "choices":{
        "choice1": {
          "description":"walk to South Korea",
          "next":"toSK2"
        },
        "choice2": {
          "description":"stay in North Korea",
          "next":"NK1"
        }
      },
      "footer":""
    },
    "OE1":{
      "date":"Ending",
      "type":"ending",
      "description":"You arrive in Geoje Island. There, you no longer need to worry about flames of the war. But you still cannot find your family members anywhere even after the war ends. You guess they are left in North Korea. How are they now? You have no ideas about this. You wish they are not killed during the war, and maybe some day, you can meet them again.",
      "choices":{
      },
      "footer":""
    },
    "SK2":{
      "date":"December 25, 1950",
      "type":"question",
      "description":"The U.S. army evacuates from Hŭngnam Port quickly. The communist forces is coming soon. You plan to...?",
      "choices":{
        "choice1": {
          "description":"walk to South Korea",
          "next":"toSK2"
        },
        "choice2": {
          "description":"stay in North Korea",
          "next":"NK"
        }
      },
      "footer":""
    },
    "toSK2":{
      "date":"December 25, 1950",
      "type":"question",
      "description":"When do you plan to leave?",
      "choices":{
        "choice1": {
          "description":"Today",
          "next":"toSK2.1"
        },
        "choice2": {
          "description":"Tomorrow",
          "next":"toSK2.2"
        },
        "choice3": {
          "description":"Wait a few days",
          "next":"toSK2.3"
        }
      },
      "footer":""
    },
    "NK":{
      "date":"December 25, 1950",
      "type":"question",
      "description":"You don't know where is safer if there could be battles anywhere, so you choose to stay in North Korea. Where do you want to go now?",
      "choices":{
        "choice1": {
          "description":"Keep away from cities and villages",
          "next":"NK1.1"
        },
        "choice2": {
          "description":"Stay where you are now.",
          "next":"NK1.2"
        }
      },
      "footer":""
    },
    "toSK2.1":{
      "date":"Ending",
      "type":"ending",
      "description":"You and your family successfully arrive in Busan. Life is hard there with lots of refugees, but congratulation, at least you survives. Perhaps you can have a better life after the war ends.",
      "choices":{
      },
      "footer":"Source: <a href='https://www.youtube.com/watch?v=dJWrPLGakt4'>70th anniversary of Korean War: How Busan became home to millions of refugees</a><br><a href='https://www.koreatimes.co.kr/www/news/special/2010/02/113_60003.html'>January 1951: Life of Korean War Refugees in Busan</a>"
    },
    "toSK2.2":{
      "date":"Ending",
      "type":"ending",
      "description":"Unluckily, you are killed in a bombing.",
      "choices":{},
      "footer":"Source: <a href='http://peacehistory-usfp.org/korean-war/'>The Korean War: Barbarism Unleashed</a>"
    },
    "toSK2.3":{
      "date":"Ending",
      "type":"ending",
      "description":"You are hurt in a bombing, but finally arrive in Busan. Life is hard there with lots of refugees, but congratulation, at least you survives. Perhaps you can have a better life after the war ends.",
      "choices":{
      },
      "footer":"Source: <a href='https://en.wikipedia.org/wiki/Bombing_of_North_Korea#Tonnage_dropped:_Korea_vs._World_War_II_and_Vietnam_War'>Bombing of North Korea</a>"
    },
    "NK1.1":{
      "date":"Ending",
      "type":"ending",
      "description":"Though bombings happen very often, the main air raid targets are the cities and villages. You luckily survive in North Korea, while North Korea lost half of its original population. However, no one outside can get your messages any more, and you cannot receive messages from the outside either. Do you like your life in North Korea? Maybe you like it, maybe you don't. Who knows.",
      "choices":{
      },
      "footer":"Source: <a href='https://en.wikipedia.org/wiki/Bombing_of_North_Korea#Tonnage_dropped:_Korea_vs._World_War_II_and_Vietnam_War'>Bombing of North Korea</a>"
    },
    "NK1.2":{
      "date":"Ending",
      "type":"ending",
      "description":"You are killed in an air raid from the U.S. air force. The majority of North Korean cities and towns are devastrated in air raids.",
      "choices":{
      },
      "footer":"Source: <a href='https://en.wikipedia.org/wiki/Bombing_of_North_Korea#Tonnage_dropped:_Korea_vs._World_War_II_and_Vietnam_War'>Bombing of North Korea</a>"
    },
    "toSK":{
      "date":"October 10, 1950",
      "type":"question",
      "description":"You want to keep far from the battlefront, so you decide to go south to South Korea. On the way, you see a little without her parents. You decide to...?",
      "choices":{
        "choice1": {
          "description":"Help her",
          "next":"help"
        },
        "choice2": {
          "description":"Ignore her.",
          "next":"suspected"
        }
      },
      "footer":""
    },
    "help":{
      "date":"Ending",
      "type":"info",
      "description":"To help the little girl, you delay two days before arriving in South Korea, and miss the massacre of suspected communists in South Korea.",
      "choices":{
        "choice1": {
          "description":"Continue",
          "next":"toSK2.1"
        }
      },
      "footer":"<a href='https://en.wikipedia.org/wiki/List_of_massacres_in_South_Korea'>List of massacres in South Korea</a>"
    },
    "suspected":{
      "date":"Ending",
      "type":"ending",
      "description":"When you arrive in South Korea, you are killed as a suspected communist",
      "choices":{
      },
      "footer":"Source: <a href='http://peacehistory-usfp.org/korean-war/'>The Korean War: Barbarism Unleashed</a>"
    },
    "village":{
      "date":"July 25, 1950",
      "type":"question",
      "description":"Today, you pass through a village. Do you want to take a rest there",
      "choices":{
        "choice1": {
          "description":"Yes",
          "next":"GNR1"
        },
        "choice2": {
          "description":"No",
          "next":"toSK2.1"
        }
      },
      "footer":""
    },
    "NGR1":{
      "date":"July 25, 1950",
      "type":"question",
      "description":"How long do you plan to stay there?",
      "choices":{
        "choice1": {
          "description":"Leave as soon as possible",
          "next":"toSK2.1"
        },
        "choice2": {
          "description":"Take a rest for 1 day",
          "next":"NGR2"
        },
        "choice3": {
          "description":"Take a rest for 2 days",
          "next":"NGR3"
        }
      },
      "footer":""
    },
    "NGR2":{
      "date":"July 26, 1950",
      "type":"info",
      "description":"When you leave the village in the morning, you see several corpses. They seem to be refugees just like you and your family. You are so afraid that you run away as quickly as you can. Luckily, you do not meet any other crime this day.",
      "choices":{
        "choice1": {
          "description":"Continue",
          "next":"toSK2.1"
        }
      },
      "footer":"Source: <a href='https://en.wikipedia.org/wiki/No_Gun_Ri_massacre'>No Gun Ri massacre</a>"
    },
    "NGR3":{
      "date":"July 27, 1950 Ending",
      "type":"ending",
      "description":"You don't know what's happening but you see lots of American soldiers. They never stop shooting. Unforturnately, you are killed.",
      "choices":{
      },
      "footer":"Source: <a href='https://en.wikipedia.org/wiki/No_Gun_Ri_massacre'>No Gun Ri massacre</a><br>Other related information: <a href='https://en.wikipedia.org/wiki/List_of_massacres_in_South_Korea'>List of massacres in South Korea</a><br> <a href='https://en.wikipedia.org/wiki/List_of_massacres_in_North_Korea'>List of massacres in North Korea</a>"
    },
    "BE1":{
      "date":"Ending",
      "type":"ending",
      "description": "You did not know that the wounded man is a communist. You are noticed by the South Korea force and are considered as a communist sympathizer. You are killed.",
      "choices":{},
      "footer":"Source: <a href='https://en.wikipedia.org/wiki/Bodo_League_massacre#cite_note-John_Tirman_2011-10'>Bodo League massacre</a><br><a href='https://www.smh.com.au/world/south-korea-owns-up-to-brutal-past-20081115-gdt2yw.html'>South Korea owns up to brutal past</a>"
    }
  }

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
    qs("footer p").innerHTML = current["footer"];
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