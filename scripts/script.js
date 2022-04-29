/* -------------------------
Variables
----------------------------*/
const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountains_behind = document.getElementById("mountains_behind");
const text = document.getElementById("text");
const btn = document.getElementById("btn");
const mountains_front = document.getElementById("mountains_front");
const sec = document.getElementById("sec");
const header = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";
  mountains_behind.style.top = value * 0.5 + "px";
  // mountains_front.style.top = value * 0 + "px";
  text.style.marginRight = value * 4 + "px";
  btn.style.marginTop = value * 1.5 + "px";
  // header.style.top = value * 0 + "px";
  if (scrollY > 0) {
    header.style.background = "#2b105599";
  } else {
    header.style.background = "transparent";
  }

  // if (scrollY >= 700 && moon.src.includes("moon")) {
  //   moon.src = "images/sun.jpg";
  // } else if (scrollY >= 700 && moon.src.includes("sun")) {
  //   moon.src = "images/moon.png";
  // }

  if (window.innerWidth <= 768) {
    // mountains_front.style.display = 'none'
    moon.style.top = value * 0 + "px";
    mountains_behind.style.top = value * 0 + "px";
    stars.style.left = value * 0 + "px";
    text.style.marginRight = value * 0 + "px";
    btn.style.marginTop = value * 0 + "px";
  }
});

// });

// Search Bar Enable

// function search_bar() {
//   let input = document.getElementById("searchbar").value;
//   input = input.toLowerCase();
//   console.log(input);
//   let x = document.getElementsByClassName("card-title");
//   console.log(x);

//   for (let i = 0; i < x.length; i++) {
//     const element = x[i];
//     console.log(element);
//     if (!element.innerHTML.toLowerCase().includes(input)) {
//       element.style.display = "none";
//     } else {
//       element.style.display = "list-item";
//     }
//   }
// }

// let value = window.scrollY;
// if (screen.width >= 720) {
//   window.addEventListener("scroll", () => {
//     moon.style.top = value * 0 + "px";
//   });
// } else if (screen.width > 720) {
//   moon.style.top = value * 1.05 + "px";
// }

// Loader
const loader = document.querySelector(".section");

setTimeout(() => {
  loader.style.display = "none";
}, 2000);

// Cards Section

let cards = [
  {
    id: 0,
    image: "images/dani.jpg",
    name: "كارتون داني الشبح",
    paragraph: `قصة داني الشبح هي أن هناك فتى يدعى داني ولديه صديقان هما طارق
وسالي، أما داني فله أبوان مشغولان بمحاربة الأشباح ، وكلا
الوالدان يقومان بصناعة أجهزة تساعدهما في القضاء على الاشباح`,
    href: "cartoon/dani.html",
  },
  {
    id: 1,
    image: "images/gemy.jpg",
    name: "كارتون جيمي نيوترون",
    paragraph: ` جيمي فتى عبقري يكره البنات لأن "سيندي" و"بيبي" تكرهان جيمي.
لديه معمل في منزله يُجري فيه التجارب مع صديقه "كارل برادو"،
الذي يحب اللاما، وصديقه الثاني "شين"، الذي يحب أبو شجاعة.`,
    href: "cartoon/gemy.html",
  },
  {
    id: 2,
    image: "images/witch.webp",
    name: "الأبوان السحريان",
    paragraph: ` تيمي ترنر: لون البشرة بيضاء بني الشعر ويتمنى أمنيات عجيبة
فتتحقق وهو مشهور بقبعته الوردية، لا يخبر احدا عن والداه
السحريان، ولد لطيف ومحبوب. واندا: لون الشعر الوردي ولون البشره`,
    href: "cartoon/witch.html",
  },
  {
    id: 3,
    image: "images/cat&dog.jpg",
    name: "بسبس بوبي",
    paragraph: `يتمحور المسلسل حول قط وكلب مزدوجين يحاولان التأقلم في جسد
واحد، وأحيانا ماتقع المشاكل بسبب عدم احترام الذات لكلا
الطرفين، فالقط لايحب أن يفعل الأشياء التي يفعلها الكلب غالبًا`,
    href: "cartoon/cat&dog.html",
  },
  {
    id: 4,
    image: "images/angelo.jpg",
    name: "يحيا أنجلو",
    paragraph: `'هناك دائما طريقة للحصول على ما تريد'
في السن الحادي عشرة، أنجلو هو شاب صغير لكي يسمى رجلاً حكيماً لكنه بالتأكيد يتصرف جيدا على طريقته. من خطط مفصلة وواضحة لاستراتيجيات مصورة،`,
    href: "cartoon/angelo.html",
    // dis: "disabled",
  },
  {
    id: 5,
    image: "images/gumbul.webp",
    name: "عالم غامبول",
    paragraph: `غير مناسب للأطفال تحت سن 10 من دون توجيه من أحد الوالدين في بعض الأحيان. سلسلة غير عادية حيث أنها توظف أنماطًا مختلفة من الرسوم المتحركة، في وقت واحد في أغلب الأحيان.`,
    href: "cartoon/gumbol.html",
    // dis:'disabled'
  },
  {
    id: 6,
    image: "images/worldzone.jpg",
    name: "عالم الطباشير",
    paragraph: `يتبع المسلسل حياة رودي تابوتي، وهو طالب في المدرسة الابتدائية يملك قطعة طباشير سحرية تنقله إلى عالم الطباشير، وهو عالم بديل كل شيء فيه مرسوم على سبورة ويتحول إلى حقيقة. يركز المسلسل على مغامرات رودي وصديقه الحميم سناب وزميله بيني سانشيز`,
    href: "cartoon/worldzone.html",
  },
  {
    id: 7,
    image: "images/flapjack.jpg",
    name: "فلاب جاك",
    paragraph: `فلاب جاك هو فتى صغير لطيف الشكل يعيش على ميناء وقد ربته حوت اسمها بابي، ولكن يلتقى بكابتن كناكلس وهو يعرفه على المغامرات ويقنعه بذلك وتستمر الحكاية، في مغامرات فلاب جاك وكابتن كناكلس.`,
    href: "cartoon/flapjack.html",
  },
  {
    id: 7,
    image: "images/robot.jpg",
    name: "المراهقه الأليه",
    paragraph: `جاري الرفع وتحديث الكارتون وتنزيل جميع الحلقات`,
    href: "cartoon",
    dis: "disabled",
  },
];

cards.forEach((lo) => {
  document.getElementById("loop").innerHTML += `
    <div class="col-lg-4 col-md-6">
    <div class="card text-center">
          <div class="image">
            <img
              src="${lo.image}" />
          </div>
          <div class="details">
            <div class="center">
             <h3 lang="ar" class="card-title text-black my-3">
               ${lo.name}
             </h3>
             <p class="text-dark fw-bolder fs-4">
               ${lo.paragraph}
             </p>
               <a href="${lo.href}" class="btn btn-success ${lo.dis}"
                 >Go To Watch</a
               >
            </div>
          </div>
        </div>
    </div>

  `;

  // `
  // <div class="col-lg-4 col-md-6 p-4">
  // <div class="card" style="width: 18rem; height: 45.6rem">
  // <img
  // src="${lo.image}"
  // class="card-img-top"
  // style="height: 330px"
  // alt="dani"
  // />
  // <div class="card-body">
  // <h3 lang="ar" class="card-title text-black my-3">
  //   ${lo.name}
  // </h3>
  // <p class="text-secondary fw-bolder fs-4">
  //   ${lo.paragraph}
  // </p>
  // <a href="${lo.href}" class="btn btn-success ${lo.dis}"
  //   >Go To Watch</a
  // >
  // </div>
  // </div>
  // </div>`;
});
