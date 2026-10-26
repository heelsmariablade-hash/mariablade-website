import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
"use strict";
const SUPABASE_URL = "https://qjepdqhydoniwqxvoolw.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Vn6A7Rn2hFyTG6CWn46XRg_kdo_xgU5";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const T={
uk:{
skip:"Перейти до змісту",navLabel:"Головна навігація",menu:"Меню",
nAbout:"Про Марію",nBook:"Запис",nMat:"Матеріали",nArt:"Мистецтво",ctaNav:"Записатися на заняття",ctaShort:"Запис",
tagline:"Танцівниця · педагог · авторка",quote:"«Рух як спосіб пізнання себе.»",portraitAlt:"Марія в танцювальній позі, одна рука піднята над головою, друга витягнута вбік, на руках мереживні рукавички",
bioLead:"Танцювальна практика, тілесна усвідомленість та авторський підхід до руху.",
bio1:"Марія викладає танець з 2020 року і працює з учнями різного віку та рівня підготовки, у групах та індивідуально. У роботі спирається на класичну танцювальну техніку, біомеханіку руху, баланс, координацію, музикальність і виразність.",
bio2:"Психологічна освіта дає їй точніший погляд на зв'язок тіла, уваги і самовідчуття. Марія розвиває власну танцювальну манеру і візуальну ідентичність, бере участь у танцювальних кемпах, фестивалях та освітніх поїздках Європою.",
fx1t:"з 2020",fx1:"Викладання танцю",fx2t:"Освіта",fx2:"Психологічна освіта · класична танцювальна техніка",fx3t:"Формати",fx3:"Групові заняття · індивідуальне навчання",
fx4t:"Розвиток",fx4:"Кемпи, фестивалі та освітні поїздки Європою",fx5t:"Проєкти",fx5:"CHERNAMARS — муза і співавторка · MADDER — співзасновниця студії",
pr1m:"Індивідуально",pr1:"Техніка і контроль руху, баланс і координація, музикальність, лінії тіла, власний стиль і робота над хореографією. З нуля або для розвитку того, що вже вмієте.",
pr2m:"Індивідуально",pr2t:"Тілесна <em>практика</em>",pr2:"Увага до відчуттів, дослідження руху, присутність і виразність, усвідомлена взаємодія з простором. Тут немає правильного чи неправильного руху.",

bkEyebrow:"Запис",bkTitle:"Почати <em>з розмови</em>",bkLead:"Опишіть, з чим хочете працювати. Марія відповість і запропонує формат, час і умови заняття.",
o1:"High Heels",o2:"Тілесна практика",o3:"Індивідуальна хореографія",o4:"Творча співпраця",
lDir:"Напрям",lLevel:"Рівень підготовки",sel:"Оберіть",lvA:"Починаю з нуля",lvB:"Є трохи досвіду",lvC:"Танцюю регулярно",lvD:"Професійно",
lGoal:"Мета заняття",pGoal:"Напр. впевненість на підборах",lMethod:"Спосіб зв'язку",lContact:"Контакт",pContact:"@нікнейм, номер або email",
lComment:"Коментар",pComment:"Що важливо знати: досвід, побажання щодо часу, питання",
lConsent:"Погоджуюсь на обробку моїх контактних даних лише для відповіді на цю заявку.",
privSum:"Як використовуються дані",privTxt:"Форма збирає тільки те, що потрібно для відповіді: напрям, рівень, мету, контакт і коментар. Дані не передаються третім особам і не використовуються для розсилок.",
send:"Сформувати заявку",joinBtn:"Стати ученицею",joinQ:"Що означає бути ученицею",joinTitle:"Що означає бути ученицею Марії",join1:"Бути частиною дружнього колективу, де танець вивчають як спосіб самовираження душі й тіла.",join2:"Доступ до навчальних матеріалів Марії: кожен матеріал вона відкриває особисто.",join3:"Особистий профіль з історією занять, швидкий запис на вільні дати і прямий зв'язок з Марією.",channelOff:"Автоматична відправка ще не підключена",
eDir:"Оберіть напрям заняття.",eLevel:"Оберіть рівень підготовки.",eGoal:"Опишіть мету хоча б кількома словами (від 3 символів).",
eMethod:"Оберіть, як з вами зв'язатися.",eContact:"Вкажіть контакт.",eEmail:"Схоже, в email помилка. Приклад: name@mail.com",
ePhone:"Вкажіть номер у міжнародному форматі, наприклад +380…",eHandle:"Вкажіть нікнейм, наприклад @name",eConsent:"Потрібна згода, щоб Марія могла відповісти.",
rEyebrow:"Заявку сформовано · не відправлено",rTitle:"Залишився один крок",
rText:"Канал доставки заявок ще налаштовується, тому сайт не надсилає її автоматично. Скопіюйте текст і надішліть його Марії в Instagram.",
copy:"Скопіювати текст",openIg:"Відкрити Instagram",edit:"Змінити заявку",copied:"Скопійовано",copyFail:"Виділіть текст вручну",
mHead:"Заявка з сайту mariablade.com",mDir:"Напрям",mLevel:"Рівень",mGoal:"Мета",mMethod:"Зв'язок",mContact:"Контакт",mComment:"Коментар",
dirs:{heels:"High Heels",body:"Тілесна практика",choreo:"Індивідуальна хореографія",collab:"Творча співпраця"},
nTrain:"Досвід",trEyebrow:"Досвід",trTitle:"Шлях, що сформував <em>рух</em>",
trNote:"Приклади. Марія заповнить цей розділ своїми кемпами, педагогами і фото з подій.",trList:"Досвід: стрічка подій",pqText:"Тут буде текст Марії: як вона навчалася, у кого, що її надихало і чому рух став для неї способом пізнання себе. Своїми словами, як цитата.",pqEx:"чернетка",trPrev:"Назад",trNext:"Далі",
tr1k:"Спеціальний перформанс",trYk:"Хореографія Ярослави",tr6t:"Tell me",tr6p:"Танцюють: @yaroslaava, @maria_blade, @eliaklius · музика: @whosjakedaniel",tr7t:"would you mind",tr7p:"Хореографія: @yaroslaava",vidTell:"Тріо танцює хореографію Ярослави в залі з теплим світлом",vidWym:"Хореографія Ярослави на темній сцені в червоному світлі",tr1t:"Перформанс у хореографії Ярослави",tr1p:"Хореографія: Ярослава · @yaroslaava",
tr2k:"Кемп",tr2t:"Heels Camp",tr3k:"Інтенсив",tr3t:"Contemporary Intensive",tr4k:"Фестиваль",tr4t:"Dance Festival",tr5k:"Майстер-клас",tr5t:"Floor Work Masterclass",
trPerson:"Педагог: Ім'я Прізвище",ex:"приклад",hand:"місто, рік",phEvent:"Фото з події",
matEyebrow:"Матеріали",matTitle:"Рух <em>у кадрі</em>",gr1:"Хореографії",gr1d:"Постановки і виступи.",gr2:"Кемпи і фестивалі",gr2d:"Танцювальні кемпи і фестивалі в Європі.",
gr3:"Поїздки",gr3d:"Освітні поїздки та навчання.",phVideo:"Відео",phPhoto:"Фото",
vid1Cap:"Хореографія · @yaroslaava",vid1Label:"Марія танцює в партері на темній сцені з червоним світлом",vid2Label:"Марія танцює High Heels у залі з арковими вікнами",
vPlay:"Відтворити",vPause:"Пауза",vSoundOn:"Увімкнути звук",vSoundOff:"Вимкнути звук",
chLead:"Марія була музою і співавторкою мистецтва CHERNAMARS, а згодом стала співзасновницею студії MADDER.",
chP1:"CHERNAMARS — художній всесвіт марсіанського футуризму. Разом з автором проєкту Марія уявляла, яким може бути той світ: його люди, їхні вірування і філософія, мистецтво, танці і сам спосіб рухатися. Частина цієї візуальної мови живе на її тілі, у татуюваннях, кожне з яких має власний унікальний дизайн.",
chP2:"У студії MADDER концепція отримувала тіло в реальному світі: перформанси, татуювання, підготовка проєктів і системна робота над тим, щоб ідея ставала дедалі відчутнішою. Червоне і чорне, чуттєвість, відчуття гармонії, природи і духовного виміру людини: смак Марії багато в чому визначив характер цих проєктів.",
chP3:"Цей досвід став для неї творчою школою: мислити образом і системою одночасно та працювати з концепцією, простором і тілом як з єдиним матеріалом.",
chNextLabel:"Що виросло з цього досвіду",g1:"модні вистави",g2:"постановка шоу",g3:"інсталяції з рухом тіла",g4:"філософське дослідження пластики",
chNext:"З цими ідеями Марія відкрита до творчих колаборацій.",chCta:"Обговорити співпрацю",
ftNav:"Навігація",ftLang:"Мова",ftContact:"Контакт",ftRights:"Maria Blade. Усі права на тексти, фото і відео належать авторці.",
proto:"Прототип mariablade.com. Частина фото і текстів тимчасова та буде замінена реальними матеріалами.",
docTitle:"Maria Blade — рух як спосіб пізнання себе"
},
en:{
skip:"Skip to content",navLabel:"Main navigation",menu:"Menu",
nAbout:"About Maria",nBook:"Booking",nMat:"Materials",nArt:"Art",ctaNav:"Book a session",ctaShort:"Book",
tagline:"Dancer · teacher · author",quote:"“Movement as a way of knowing yourself.”",portraitAlt:"Maria in a dance pose, one arm raised overhead, the other extended to the side, wearing lace gloves",
bioLead:"Dance practice, embodied awareness and an individual approach to movement.",
bio1:"Maria has taught dance since 2020, working with students of different ages and levels, in groups and one to one. Her work rests on classical dance technique, biomechanics, balance, coordination, musicality and expressiveness.",
bio2:"Her background in psychology gives her a sharper view of how body, attention and self-perception connect. Maria develops her own dance manner and visual identity, and takes part in dance camps, festivals and study trips across Europe.",
fx1t:"since 2020",fx1:"Teaching dance",fx2t:"Education",fx2:"Psychology · classical dance technique",fx3t:"Formats",fx3:"Group classes · private tuition",
fx4t:"Growth",fx4:"Camps, festivals and study trips across Europe",fx5t:"Projects",fx5:"CHERNAMARS — muse and co-author · MADDER — studio co-founder",
pr1m:"Private",pr1:"Technique and control, balance and coordination, musicality, body lines, your own style and work on choreography. From zero, or to develop what you already have.",
pr2m:"Private",pr2t:"Embodied <em>practice</em>",pr2:"Attention to sensation, exploring movement, presence and expression, conscious interaction with space. There is no right or wrong movement here.",

bkEyebrow:"Booking",bkTitle:"Start <em>with a conversation</em>",bkLead:"Tell Maria what you would like to work on. She will reply and suggest a format, time and terms.",
o1:"High Heels",o2:"Embodied practice",o3:"Private choreography",o4:"Creative collaboration",
lDir:"Direction",lLevel:"Experience",sel:"Choose",lvA:"Starting from zero",lvB:"A little experience",lvC:"I dance regularly",lvD:"Professional",
lGoal:"Goal of the session",pGoal:"e.g. confidence in heels",lMethod:"Preferred contact",lContact:"Contact",pContact:"@handle, phone or email",
lComment:"Comment",pComment:"Anything useful: experience, preferred times, questions",
lConsent:"I agree to my contact details being used only to reply to this request.",
privSum:"How your data is used",privTxt:"The form collects only what is needed to reply: direction, level, goal, contact and comment. Data is not shared with third parties or used for mailing lists.",
send:"Prepare request",joinBtn:"Become a student",joinQ:"What it means to be a student",joinTitle:"What it means to be Maria's student",join1:"Being part of a close community where dance is studied as a way for soul and body to express themselves.",join2:"Access to Maria's learning materials: she opens each one personally.",join3:"A personal profile with your session history, quick booking of free dates and a direct line to Maria.",channelOff:"Automatic sending is not connected yet",
eDir:"Choose a direction.",eLevel:"Choose your experience level.",eGoal:"Describe your goal in a few words (at least 3 characters).",
eMethod:"Choose how to contact you.",eContact:"Enter your contact.",eEmail:"This email looks mistyped. Example: name@mail.com",
ePhone:"Enter the number in international format, e.g. +44…",eHandle:"Enter a handle, e.g. @name",eConsent:"Consent is needed so Maria can reply.",
rEyebrow:"Request prepared · not sent",rTitle:"One step left",
rText:"The delivery channel is still being set up, so the site does not send requests automatically. Copy the text and send it to Maria on Instagram.",
copy:"Copy text",openIg:"Open Instagram",edit:"Edit request",copied:"Copied",copyFail:"Select the text manually",
mHead:"Request from mariablade.com",mDir:"Direction",mLevel:"Experience",mGoal:"Goal",mMethod:"Contact via",mContact:"Contact",mComment:"Comment",
dirs:{heels:"High Heels",body:"Embodied practice",choreo:"Private choreography",collab:"Creative collaboration"},
nTrain:"Experience",trEyebrow:"Experience",trTitle:"The path that shaped <em>her movement</em>",
trNote:"Examples. Maria will fill this section with her own camps, teachers and event photos.",trList:"Experience: event ribbon",pqText:"Here Maria will write how she trained, with whom, what inspired her and why movement became her way of knowing herself. In her own words, like a quote.",pqEx:"draft",trPrev:"Previous",trNext:"Next",
tr1k:"Special performance",trYk:"Choreography by Yaroslava",tr6t:"Tell me",tr6p:"Dancers: @yaroslaava, @maria_blade, @eliaklius · music: @whosjakedaniel",tr7t:"would you mind",tr7p:"Choreography: @yaroslaava",vidTell:"A trio dancing Yaroslava's choreography in a warmly lit studio",vidWym:"Yaroslava's choreography on a dark stage in red light",tr1t:"A performance choreographed by Yaroslava",tr1p:"Choreography: Yaroslava · @yaroslaava",
tr2k:"Camp",tr2t:"Heels Camp",tr3k:"Intensive",tr3t:"Contemporary Intensive",tr4k:"Festival",tr4t:"Dance Festival",tr5k:"Masterclass",tr5t:"Floor Work Masterclass",
trPerson:"Teacher: Name Surname",ex:"example",hand:"city, year",phEvent:"Event photo",
matEyebrow:"Materials",matTitle:"Movement <em>on camera</em>",gr1:"Choreography",gr1d:"Pieces and performances.",gr2:"Camps and festivals",gr2d:"Dance camps and festivals across Europe.",
gr3:"Trips",gr3d:"Study trips and training.",phVideo:"Video",phPhoto:"Photo",
vid1Cap:"Choreography · @yaroslaava",vid1Label:"Maria dancing floor work on a dark stage in red light",vid2Label:"Maria dancing High Heels in a hall with arched windows",
vPlay:"Play",vPause:"Pause",vSoundOn:"Turn sound on",vSoundOff:"Mute",
chLead:"Maria was the muse and co-author of the CHERNAMARS art, and later co-founded the MADDER studio.",
chP1:"CHERNAMARS is an artistic universe of Martian futurism. Together with the project's author, Maria imagined what that world could be: its people, their beliefs and philosophy, their art, their dances and their very way of moving. Part of this visual language lives on her body, in tattoos that each carry a unique design.",
chP2:"At the MADDER studio the concept took on a body in the real world: performances, tattoos, preparing projects and systematic work to make the idea ever more tangible. Red and black, sensuality, a feeling for harmony, nature and the spiritual side of a person: Maria's taste shaped much of the character of these projects.",
chP3:"This experience became her creative school: thinking in images and in systems at once, and working with concept, space and body as a single material.",
chNextLabel:"What grew from this experience",g1:"fashion performances",g2:"staging shows",g3:"installations with the moving body",g4:"philosophical research of movement",
chNext:"With these ideas Maria is open to creative collaborations.",chCta:"Discuss a collaboration",
ftNav:"Navigation",ftLang:"Language",ftContact:"Contact",ftRights:"Maria Blade. All rights to texts, photos and videos belong to the author.",
proto:"Prototype of mariablade.com. Some photos and texts are temporary and will be replaced with real material.",
docTitle:"Maria Blade — movement as a way of knowing yourself"
}};

const $=id=>document.getElementById(id);
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
/* Each page is served at its own URL (/uk/ or /en/) so the language comes from <html lang>, not from client-side state. */
let lang=document.documentElement.getAttribute("lang")==="en"?"en":"uk";

/* ---------- glass: red drop blooms where the button is pressed ---------- */
function bloom(el,x,y){el.style.setProperty("--dx",x+"px");el.style.setProperty("--dy",y+"px");el.classList.remove("drop");void el.offsetWidth;el.classList.add("drop");}
document.addEventListener("pointerdown",e=>{const g=e.target.closest(".glass");if(!g)return;const r=g.getBoundingClientRect();bloom(g,e.clientX-r.left,e.clientY-r.top);});
document.addEventListener("keydown",e=>{if(e.key!=="Enter"&&e.key!==" ")return;const g=e.target.closest&&e.target.closest(".glass");if(g)bloom(g,g.offsetWidth/2,g.offsetHeight/2);
  const lbl=e.target.closest&&e.target.closest(".chips label");if(lbl&&e.key===" "){const sp=lbl.querySelector(".glass");bloom(sp,sp.offsetWidth/2,sp.offsetHeight/2);}});
document.addEventListener("animationend",e=>{if(e.animationName==="bloodfill")e.target.classList.remove("drop");});
document.querySelectorAll(".chips input").forEach(i=>i.addEventListener("change",()=>{const sp=i.nextElementSibling;if(i.checked&&!sp.classList.contains("drop"))bloom(sp,sp.offsetWidth/2,sp.offsetHeight/2);}));

/* ---------- nav ---------- */
const nav=$("nav"),menu=$("menu"),menuBtn=$("menuBtn");
function closeMenu(){menu.classList.remove("open");document.body.classList.remove("menu-open");menuBtn.setAttribute("aria-expanded","false");}
menuBtn.addEventListener("click",()=>{const o=!menu.classList.contains("open");menu.classList.toggle("open",o);document.body.classList.toggle("menu-open",o);menuBtn.setAttribute("aria-expanded",String(o));if(o)menu.querySelector("a").focus({preventScroll:true});});
menu.addEventListener("click",e=>{if(e.target.closest("a"))closeMenu();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&menu.classList.contains("open")){closeMenu();menuBtn.focus();}});
matchMedia("(min-width:1024px)").addEventListener("change",e=>{if(e.matches)closeMenu();});
const links=[...menu.querySelectorAll("a")];
if("IntersectionObserver" in window){
  const io=new IntersectionObserver(es=>{es.forEach(en=>{if(en.isIntersecting)links.forEach(a=>a.setAttribute("aria-current",String(a.getAttribute("href")==="#"+en.target.id)));});},{rootMargin:"-45% 0px -50% 0px"});
  ["about","booking","materials","training","art"].forEach(id=>io.observe($(id)));
}
const matEl=$("materials"),artEl=$("art");
const absTop=el=>el.getBoundingClientRect().top+scrollY;
function tone(){const t=absTop($("materials"))+innerHeight*.35;const d=scrollY+40>t;nav.dataset.tone=d?"dark":"light";
  document.documentElement.style.setProperty("--navbg",d?"rgba(12,5,7,.42)":"rgba(243,238,228,.62)");}
addEventListener("scroll",tone,{passive:true});
$("year").textContent=new Date().getFullYear();

/* ---------- living background: BLACK WATER ink field, ivory → blood → black space by page depth ---------- */
const trEl=$("training");
const bgc=$("bgc");let gl=null,uni={},raf=0,running=false,K=.55;
try{gl=bgc.getContext("webgl",{antialias:false,alpha:false,depth:false,stencil:false,powerPreference:"low-power"});}catch(e){gl=null;}
const VS="attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";
/* the soak profile, sampled from the reference: long white, rose, brick red, then straight into black */
const RAMP=["#ffffff","#fefefe","#fffdfe","#fefcfd","#fdfbfc","#fcf8f7","#faf4f4","#f7eeef","#f3e7e7","#efdfdf","#ead0d1","#dfc1c1","#d7b0b1","#ce9e9e","#c1898a","#b37172","#a65c5d","#944646","#843332","#6e2222","#5a1518","#460c0b","#320607","#210303","#150102"];
const GH=2.2; /* the gradient is this many screens tall */
const FS=`precision highp float;
uniform vec2 uRes;uniform float uK;uniform float uTop;uniform sampler2D uRamp;
float h1(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h1(i),h1(i+vec2(1,0)),f.x),mix(h1(i+vec2(0,1)),h1(i+vec2(1,1)),f.x),f.y);}
void main(){
  vec2 css=gl_FragCoord.xy/uK;
  float yTop=1.-css.y/uRes.y;
  float x=css.x/uRes.y;
  /* the edge of the wet cloth is almost level, with a barely visible wander */
  float wave=(n2(vec2(x*1.1,yTop*.4+3.))*.65+n2(vec2(x*2.6,yTop*.9+7.))*.35-.5)*.035;
  float u=clamp(uTop+yTop/${GH.toFixed(2)}+wave,0.,1.);
  vec3 c=texture2D(uRamp,vec2(u,.5)).rgb;
  c+=(h1(gl_FragCoord.xy)-.5)/255.;
  gl_FragColor=vec4(c,1.);
}`;
function glInit(){
  const sh=(type,src)=>{const o=gl.createShader(type);gl.shaderSource(o,src);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(o));return o;};
  const pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,VS));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,FS));gl.linkProgram(pr);
  if(!gl.getProgramParameter(pr,gl.LINK_STATUS))throw new Error("link");
  gl.useProgram(pr);
  const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
  const a=gl.getAttribLocation(pr,"a");gl.enableVertexAttribArray(a);gl.vertexAttribPointer(a,2,gl.FLOAT,false,0,0);
  ["uRes","uK","uTop","uRamp"].forEach(n=>uni[n]=gl.getUniformLocation(pr,n));
  /* ramp texture: the reference colours, multiplied by the site's ivory so the light end matches the page */
  const rc=document.createElement("canvas");rc.width=512;rc.height=1;const rx=rc.getContext("2d"),lg=rx.createLinearGradient(0,0,512,0);
  RAMP.forEach((h,i)=>{const n=parseInt(h.slice(1),16),r=(n>>16)&255,g=(n>>8)&255,b=n&255;lg.addColorStop(i/(RAMP.length-1),`rgb(${Math.round(r*243/255)},${Math.round(g*238/255)},${Math.round(b*228/255)})`);});
  rx.fillStyle=lg;rx.fillRect(0,0,512,1);
  const tx=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,tx);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,rc);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
  gl.uniform1i(uni.uRamp,0);
}
try{if(gl){glInit();document.documentElement.classList.add("live");}}catch(e){gl=null;}
/* where the gradient's top edge sits on screen (in gradient lengths) for each scroll position:
   just below the screen at rest, rose under the form, brick red into black at training, all black at art */
let lv=[[0,0],[1,1]];
/* the first red section is the materials, the training follows it */
function setStops(){const vh=innerHeight,H=document.documentElement.scrollHeight,bk=absTop($("booking")),tr=absTop(matEl),mt=absTop(trEl),ar=absTop(artEl);
  const u0=.3-1/GH,pts=[[0,u0],[bk,.04],[tr-.5*vh,.26],[tr+.35*vh,.72],[mt,.84],[ar-.7*vh,1.0],[H,1.05]];
  for(let i=1;i<pts.length;i++)pts[i][0]=Math.max(pts[i][0],pts[i-1][0]+1);lv=pts;}
function levelAt(y){for(let i=1;i<lv.length;i++)if(y<=lv[i][0]){const a=lv[i-1],b=lv[i];return a[1]+(b[1]-a[1])*Math.max(0,y-a[0])/(b[0]-a[0]);}return lv[lv.length-1][1];}
function glSize(){if(!gl)return;K=innerWidth<700?.6:innerWidth>1600?.45:.55;
  bgc.width=Math.max(1,Math.round(innerWidth*K));bgc.height=Math.max(1,Math.round(innerHeight*K));gl.viewport(0,0,bgc.width,bgc.height);
  gl.uniform2f(uni.uRes,innerWidth,innerHeight);gl.uniform1f(uni.uK,K);}
/* the pigment follows the scroll with a little lag, as if soaking in; nothing moves while you don't scroll */
let shown=null,lastT=0;
function frame(ts){const dt=lastT?Math.min(.1,(ts-lastT)/1000):0;lastT=ts;const tgt=levelAt(scrollY);
  if(shown===null||reduce)shown=tgt;else shown+=(tgt-shown)*(1-Math.exp(-dt*3));
  gl.uniform1f(uni.uTop,shown);gl.drawArrays(gl.TRIANGLES,0,3);
  if(Math.abs(tgt-shown)>.0004)raf=requestAnimationFrame(frame);else{running=false;lastT=0;}}
function bgUpdate(){if(!gl||running)return;running=true;raf=requestAnimationFrame(frame);}
addEventListener("scroll",bgUpdate,{passive:true});

let rT=0;function relayout(){clearTimeout(rT);rT=setTimeout(()=>{glSize();setStops();tone();bgUpdate();},120);}
addEventListener("resize",relayout);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(relayout);
addEventListener("load",relayout);


/* ---------- media: missing photos keep their placeholder; videos play while visible ---------- */
document.querySelectorAll(".frame img").forEach(img=>{if(img.complete&&img.naturalWidth===0)img.remove();else img.addEventListener("error",()=>img.remove());});
const vids=[...document.querySelectorAll(".vid")];
vids.forEach(fig=>{
  const v=fig.querySelector("video"),pb=fig.querySelector('[data-act="play"]'),sb=fig.querySelector('[data-act="sound"]'),eb=fig.querySelector('[data-act="expand"]');
  let held=reduce;
  const sync=()=>{const d=T[lang];pb.dataset.on=String(!v.paused);pb.setAttribute("aria-label",v.paused?d.vPlay:d.vPause);sb.dataset.on=String(!v.muted);sb.setAttribute("aria-label",v.muted?d.vSoundOn:d.vSoundOff);sb.setAttribute("aria-pressed",String(!v.muted));};
  fig._sync=sync;
  const tryPlay=()=>{const p=v.play();if(p&&p.catch)p.catch(()=>{});};
  ["play","pause","volumechange"].forEach(ev=>v.addEventListener(ev,sync));
  const fail=()=>fig.classList.add("failed");
  v.addEventListener("error",fail);fig.querySelector("source:last-of-type").addEventListener("error",fail);
  pb.addEventListener("click",()=>{if(v.paused){held=false;tryPlay();}else{held=true;v.pause();}});
  sb.addEventListener("click",()=>{const on=v.muted;if(on)vids.forEach(o=>{const ov=o.querySelector("video");if(ov!==v)ov.muted=true;});v.muted=!on;if(on&&v.paused){held=false;tryPlay();}});
  if(eb)eb.addEventListener("click",()=>openVideoLightbox(v));
  if("IntersectionObserver" in window)new IntersectionObserver(([e])=>{if(e.isIntersecting&&!held)tryPlay();else if(!e.isIntersecting)v.pause();},{threshold:.3}).observe(fig);
  sync();
});

/* ---------- video lightbox: moves the already-loaded <video> into a modal and back, no second copy is ever fetched ---------- */
const vidLb=$("vidLb"),vidLbStage=$("vidLbStage");
function openVideoLightbox(v){
  v._vlbHome=v._vlbHome||{parent:v.parentNode,next:v.nextSibling};
  v.controls=true;
  vidLbStage.appendChild(v);
  dlgOpen(vidLb);
}
vidLb.addEventListener("close",()=>{
  const v=vidLbStage.querySelector("video");
  if(v&&v._vlbHome){v.controls=false;v._vlbHome.parent.insertBefore(v,v._vlbHome.next);}
});

/* ---------- training ribbon: buttons, progress, drag ---------- */
const rb=$("ribbon"),rbBar=$("rbBar");
function rbStep(){const c=rb.querySelector(".pol-card");return c?c.getBoundingClientRect().width+parseFloat(getComputedStyle(rb).columnGap||0):300;}
function rbSync(){const max=rb.scrollWidth-rb.clientWidth;const w=rb.clientWidth/rb.scrollWidth;
  rbBar.style.width=(w*100)+"%";rbBar.style.left=(max>0?rb.scrollLeft/rb.scrollWidth*100:0)+"%";
  $("rbPrev").setAttribute("aria-disabled",String(rb.scrollLeft<4));$("rbNext").setAttribute("aria-disabled",String(rb.scrollLeft>max-4));
  rb.classList.toggle("at-end",rb.scrollLeft>max-4);rb.parentElement.querySelector(".ribbon-ctl").hidden=max<=4;}
$("rbPrev").addEventListener("click",()=>rb.scrollBy({left:-rbStep(),behavior:reduce?"auto":"smooth"}));
$("rbNext").addEventListener("click",()=>rb.scrollBy({left:rbStep(),behavior:reduce?"auto":"smooth"}));
rb.addEventListener("scroll",rbSync,{passive:true});addEventListener("resize",rbSync);
rb.addEventListener("keydown",e=>{if(e.target!==rb)return;if(e.key==="ArrowRight"){e.preventDefault();$("rbNext").click();}else if(e.key==="ArrowLeft"){e.preventDefault();$("rbPrev").click();}});
let dr=null;
rb.addEventListener("pointerdown",e=>{if(e.pointerType!=="mouse"||e.target.closest("button"))return;dr={x:e.clientX,l:rb.scrollLeft,moved:false};});
addEventListener("pointermove",e=>{if(!dr)return;const dx=e.clientX-dr.x;if(Math.abs(dx)>4){dr.moved=true;rb.classList.add("dragging");}if(dr.moved)rb.scrollLeft=dr.l-dx;});
addEventListener("pointerup",()=>{if(!dr)return;const moved=dr.moved;dr=null;rb.classList.remove("dragging");
  if(moved){const i=Math.round(rb.scrollLeft/rbStep());rb.scrollTo({left:i*rbStep(),behavior:reduce?"auto":"smooth"});rb.addEventListener("click",ev=>ev.preventDefault(),{capture:true,once:true});}});
rbSync();

/* ---------- booking form ---------- */
const form=$("bookForm"),result=$("result"),msgEl=$("msg");
function setErr(name,key){const wrap=$("f-"+name),e=$("e-"+name);e.textContent=key?T[lang][key]:"";wrap.classList.toggle("invalid",!!key);
  const ctl=wrap.querySelector("input,select,textarea");if(ctl){if(key){ctl.setAttribute("aria-invalid","true");ctl.setAttribute("aria-describedby","e-"+name);}else ctl.removeAttribute("aria-invalid");}return !key;}
function values(){const fd=new FormData(form);return{direction:fd.get("direction")||"",level:fd.get("level")||"",goal:(fd.get("goal")||"").trim(),method:fd.get("method")||"",contact:(fd.get("contact")||"").trim(),comment:(fd.get("comment")||"").trim(),consent:$("consent").checked};}
function contactErr(m,c){if(!c)return"eContact";
  if(m==="email")return/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c)?null:"eEmail";
  if(m==="whatsapp")return/^\+?[\d\s()-]{8,20}$/.test(c)?null:"ePhone";
  if(m==="instagram"||m==="telegram")return/^@?[A-Za-z0-9._]{3,32}$/.test(c)||/^\+?[\d\s()-]{8,20}$/.test(c)?null:"eHandle";
  return c.length>=3?null:"eContact";}
function validate(focus){const v=values(),bad=[];
  if(!setErr("direction",v.direction?null:"eDir"))bad.push(form.querySelector("input[name=direction]"));
  if(!setErr("level",v.level?null:"eLevel"))bad.push($("level"));
  if(!setErr("goal",v.goal.length>=3?null:"eGoal"))bad.push($("goal"));
  if(!setErr("method",v.method?null:"eMethod"))bad.push($("method"));
  if(!setErr("contact",contactErr(v.method,v.contact)))bad.push($("contact"));
  if(!setErr("consent",v.consent?null:"eConsent"))bad.push($("consent"));
  if(focus&&bad.length)bad[0].focus();return bad.length===0;}
form.addEventListener("input",()=>{if(form.dataset.tried)validate(false);});
form.addEventListener("change",()=>{if(form.dataset.tried)validate(false);});
function buildMessage(){const v=values(),d=T[lang];
  const lines=[d.mHead,"",`${d.mDir}: ${d.dirs[v.direction]||""}`,`${d.mLevel}: ${$("level").selectedOptions[0]?.textContent||""}`,`${d.mGoal}: ${v.goal}`,`${d.mMethod}: ${$("method").selectedOptions[0]?.textContent||""}`,`${d.mContact}: ${v.contact}`];
  if(v.comment)lines.push(`${d.mComment}: ${v.comment}`);msgEl.textContent=lines.join("\n");return v;}
/* ---------- Supabase-backed booking ---------- */
const BookingAdapter={async send(payload){
  const {error}=await supabase.from("bookings").insert({
    student_id:session?.user?.id??null,
    practice_type:payload.direction||null,
    message:[payload.goal?`${T[lang].lGoal}: ${payload.goal}`:"",payload.comment].filter(Boolean).join(" — ")||null,
    contact_name:payload.contact,
    contact_phone:payload.method==="whatsapp"?payload.contact:null,
    contact_instagram:(payload.method==="instagram"||payload.method==="telegram")?payload.contact:null,
    contact_email:payload.method==="email"?payload.contact:null
  });
  return{ok:!error,error};}};
let busy=false;
form.addEventListener("submit",async e=>{e.preventDefault();if(busy)return;form.dataset.tried="1";if(!validate(true))return;
  busy=true;const payload=buildMessage();const r=await BookingAdapter.send({...payload,lang});busy=false;
  const h3=result.querySelector("h3"),p=result.querySelector("p");
  h3.textContent=a(r.ok?"reqSentTitle":"reqErrTitle");p.textContent=a(r.ok?"reqSentText":"reqErrText");
  form.hidden=true;result.hidden=false;$("copied").textContent="";result.focus({preventScroll:true});result.scrollIntoView({behavior:reduce?"auto":"smooth",block:"start"});relayout();});
$("editBtn").addEventListener("click",()=>{result.hidden=true;form.hidden=false;$("submitBtn").focus();relayout();});
$("copyBtn").addEventListener("click",()=>{const ok=()=>{$("copied").textContent=T[lang].copied;};
  const fail=()=>{const r=document.createRange();r.selectNodeContents(msgEl);const s=getSelection();s.removeAllRanges();s.addRange(r);$("copied").textContent=T[lang].copyFail;};
  try{navigator.clipboard.writeText(msgEl.textContent).then(ok,fail);}catch(err){fail();}});

/* ---------- static text (both languages are pre-rendered per page; apply() just wires up dynamic parts) ---------- */
function apply(l){lang=l;const d=T[l];
  document.querySelectorAll(".lang a,.foot-lang").forEach(b=>b.setAttribute("aria-current",String(b.dataset.lang===l)));
  vids.forEach(f=>f._sync&&f._sync());
  acctRefresh();
  if(form.dataset.tried)validate(false);
  if(!result.hidden)buildMessage();
  relayout();}


/* ---------- account: real Supabase Auth + Postgres (RLS) behind the same UI the prototype sketched.
   Maria's panel lives at #infinitylove and requires an admin profile. ---------- */
const A={
uk:{acct:"Акаунт",acctEyebrow:"Особистий кабінет",sub_profile:"Ваші дані та зв'язок з Марією",sub_book:"Вільні дати та ваші заявки",sub_study:"Заняття та історія відвідувань",sub_knowledge:"Матеріали від Марії",sub_reviews:"Кілька слів для Марії",sub_messages:"Пряма переписка з Марією",pData:"Особисті дані",pStatus:"Статус",mailOk:"Пошта закріплена за профілем: Марія відповідатиме на неї.",mailWhy:"Підтвердіть пошту, щоб писати Марії з профілю.",joinNote:"Після реєстрації Марія побачить ваш профіль і відкриє статус учениці.",signIn:"Вхід",signUp:"Реєстрація",createAcc:"Створити акаунт",name:"Ім'я",password:"Пароль",
  signupCheckEmail:"Перевірте пошту: ми надіслали лист із посиланням для підтвердження акаунту.",
  reqSentTitle:"Заявку надіслано",reqSentText:"Марія отримала вашу заявку і зв'яжеться з вами найближчим часом.",
  reqErrTitle:"Не вдалося надіслати",reqErrText:"Спробуйте ще раз або напишіть напряму в Instagram.",
  eName:"Вкажіть ім'я.",eEmail:"Перевірте email.",ePass:"Пароль: щонайменше 8 символів.",eTaken:"Цей email уже зареєстровано.",eWrong:"Невірний email або пароль.",
  student:"Учениця",registered:"Зареєстрована",verified:"Пошту підтверджено",myProfile:"Мій профіль",logout:"Вийти",close:"Закрити",
  t_profile:"Профіль",t_book:"Запис",t_study:"Навчання",t_knowledge:"Знання",t_reviews:"Відгуки",t_messages:"Повідомлення",
  changeAv:"Змінити аватар",social:"Instagram або інша соцмережа",socialPh:"@нікнейм або посилання",verifyEmail:"Надіслати лист повторно",save:"Зберегти",saved:"Збережено",
  verifySent:"Лист надіслано повторно.",
  quickBook:"Швидкий запис",quickBookNote:"Оберіть вільну дату. Контакт уже збережено в профілі, Марія підтвердить запис.",direction:"Напрям",comment:"Коментар",
  bookBtn:"Записатися",ePickSlot:"Оберіть дату.",noSlots:"Марія ще не відкрила вільні дати. Загляньте пізніше або напишіть їй.",myRequests:"Мої заявки",
  st_pending:"очікує",st_confirmed:"підтверджено",st_declined:"відхилено",st_cancelled:"скасовано",booked:"Заявку надіслано Марії",
  studentOnly:"Тільки для учениць",studyLock:"Розділ з'явиться, коли Марія прийме вас ученицею.",knowLock:"Матеріали Марії відкриваються ученицям.",
  upcoming:"Найближчі заняття",history:"Історія відвідувань",visits:"Відвідано занять: ",noUpcoming:"Поки немає запланованих занять.",noHistory:"Історія з'явиться після першого заняття.",
  noMaterials:"Марія ще не додала матеріали.",awaitAccess:"доступ відкриє Марія",
  yourReview:"Ваш відгук для Марії",sendReview:"Надіслати відгук",eEmpty:"Напишіть кілька слів.",rev_pub:"опубліковано",rev_pending:"на модерації",rev_rejected:"не опубліковано",reviewSent:"Відгук надіслано на модерацію",
  msgVerifyFirst:"Підтвердіть пошту в профілі, і тоді зможете писати Марії без введення email: він закріпиться за вами.",
  msgPh:"Повідомлення для Марії",send:"Надіслати",msgFrom:"Відповідь прийде на ",you:"Ви",maria:"Марія",msgSent:"Повідомлення надіслано",
  revsTitle:"Відгуки учениць",
  adm:"Кабінет Марії",admLogin:"Email",admPass:"Пароль",admEnter:"Увійти",
  mfaBadLogin:"Невірний email або пароль.",mfaNotAdmin:"Цей акаунт не має прав адміністраторки.",
  a_students:"Учениці",a_training:"Тренування",a_slots:"Вільні дати",a_messages:"Повідомлення",a_reviews:"Відгуки",a_knowledge:"Знання",
  noUsers:"Поки ніхто не зареєструвався.",makeStudent:"Зробити ученицею",unStudent:"Зняти статус",
  requests:"Нові заявки",noRequests:"Нових заявок немає.",confirm:"Підтвердити",decline:"Відхилити",assign:"Призначити тренування",who:"Учениця",when:"Дата й час",add:"Додати",remove:"Прибрати",
  noSessions:"Немає занять.",addSlot:"Відкрити дату",noFree:"Вільних дат немає.",reply:"Відповісти",noMessages:"Повідомлень немає.",
  approve:"Опублікувати",unpublish:"Сховати",del:"Видалити",noReviews:"Відгуків немає.",
  matTitle:"Назва",matText:"Текст",matImage:"Фото або відео",addMat:"Додати матеріал",access:"Доступ",noStudents:"Ще немає учениць.",
  matCompressing:"Стискаємо відео, зачекайте…",matUploading:"Завантажуємо…",
  eFill:"Заповніть поля.",done:"Готово"},
en:{acct:"Account",acctEyebrow:"Personal account",sub_profile:"Your details and your line to Maria",sub_book:"Free dates and your requests",sub_study:"Sessions and attendance history",sub_knowledge:"Materials from Maria",sub_reviews:"A few words for Maria",sub_messages:"Direct messages with Maria",pData:"Personal details",pStatus:"Status",mailOk:"Your email is attached to the profile: Maria replies to it.",mailWhy:"Confirm your email to message Maria from your profile.",joinNote:"After you sign up, Maria sees your profile and grants you student status.",signIn:"Sign in",signUp:"Sign up",createAcc:"Create account",name:"Name",password:"Password",
  signupCheckEmail:"Check your email: we've sent a confirmation link.",
  reqSentTitle:"Request sent",reqSentText:"Maria has received your request and will get back to you soon.",
  reqErrTitle:"Couldn't send it",reqErrText:"Please try again, or message Maria directly on Instagram.",
  eName:"Enter your name.",eEmail:"Check the email.",ePass:"Password: at least 8 characters.",eTaken:"This email is already registered.",eWrong:"Wrong email or password.",
  student:"Student",registered:"Registered",verified:"Email confirmed",myProfile:"My profile",logout:"Sign out",close:"Close",
  t_profile:"Profile",t_book:"Booking",t_study:"Training",t_knowledge:"Knowledge",t_reviews:"Reviews",t_messages:"Messages",
  changeAv:"Change avatar",social:"Instagram or another social network",socialPh:"@handle or link",verifyEmail:"Resend the email",save:"Save",saved:"Saved",
  verifySent:"Email sent again.",
  quickBook:"Quick booking",quickBookNote:"Pick a free date. Your contact is already in your profile; Maria will confirm.",direction:"Direction",comment:"Comment",
  bookBtn:"Book",ePickSlot:"Pick a date.",noSlots:"Maria hasn't opened free dates yet. Check back later or message her.",myRequests:"My requests",
  st_pending:"pending",st_confirmed:"confirmed",st_declined:"declined",st_cancelled:"cancelled",booked:"Request sent to Maria",
  studentOnly:"Students only",studyLock:"This section appears once Maria accepts you as her student.",knowLock:"Maria's materials open to her students.",
  upcoming:"Upcoming sessions",history:"Attendance history",visits:"Sessions attended: ",noUpcoming:"No sessions scheduled yet.",noHistory:"History appears after your first session.",
  noMaterials:"Maria hasn't added materials yet.",awaitAccess:"Maria will open access",
  yourReview:"Your review for Maria",sendReview:"Send review",eEmpty:"Write a few words.",rev_pub:"published",rev_pending:"in moderation",rev_rejected:"not published",reviewSent:"Review sent for moderation",
  msgVerifyFirst:"Confirm your email in the profile, then you can message Maria without typing it: it stays attached to you.",
  msgPh:"Message to Maria",send:"Send",msgFrom:"Replies go to ",you:"You",maria:"Maria",msgSent:"Message sent",
  revsTitle:"Students' reviews",
  adm:"Maria's panel",admLogin:"Email",admPass:"Password",admEnter:"Sign in",
  mfaBadLogin:"Wrong email or password.",mfaNotAdmin:"This account does not have admin rights.",
  a_students:"Students",a_training:"Training",a_slots:"Free dates",a_messages:"Messages",a_reviews:"Reviews",a_knowledge:"Knowledge",
  noUsers:"Nobody has signed up yet.",makeStudent:"Make student",unStudent:"Remove status",
  requests:"New requests",noRequests:"No new requests.",confirm:"Confirm",decline:"Decline",assign:"Assign a session",who:"Student",when:"Date and time",add:"Add",remove:"Remove",
  noSessions:"No sessions.",addSlot:"Open a date",noFree:"No free dates.",reply:"Reply",noMessages:"No messages.",
  approve:"Publish",unpublish:"Hide",del:"Delete",noReviews:"No reviews.",
  matTitle:"Title",matText:"Text",matImage:"Photo or video",addMat:"Add material",access:"Access",noStudents:"No students yet.",
  matCompressing:"Compressing video, please wait…",matUploading:"Uploading…",
  eFill:"Fill in the fields.",done:"Done"}};
const a=k=>A[lang][k]??k;

/* ---------- session + profile cache (the only synchronous "current user" source) ---------- */
let session=null,profileRow=null,avatarUrl="";
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt=iso=>new Date(iso).toLocaleString(lang==="uk"?"uk-UA":"en-GB",{day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"});
const future=iso=>new Date(iso).getTime()>Date.now();
const dirName=k=>T[lang].dirs[k]||k;
const dirOptions=()=>Object.keys(T[lang].dirs).map(k=>`<option value="${k}">${esc(dirName(k))}</option>`).join("");
const ICON_USER='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.4-3.6 4.2-5.2 7.5-5.2s6.1 1.6 7.5 5.2"/></svg>';
const ICON_LOCK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="5" y="10.5" width="14" height="9.5" rx="2.5"/><path d="M8.5 10.5V8a3.5 3.5 0 017 0v2.5"/></svg>';
function me(){if(!session||!profileRow)return null;
  return{id:profileRow.id,name:profileRow.full_name||session.user.email,email:session.user.email,avatar:avatarUrl,social:profileRow.instagram||"",verified:!!session.user.email_confirmed_at,student:!!profileRow.is_student,role:profileRow.role};}
const avHTML=(u,cls="")=>`<span class="av ${cls}">${u&&u.avatar?`<img src="${u.avatar}" alt="" draggable="false">`:u?esc(((u.name||"?").trim()[0]||"?").toUpperCase()):ICON_USER}</span>`;
const statusPill=u=>u.student?`<span class="pill red">${a("student")}</span>`:`<span class="pill">${a("registered")}</span>`;
const lockHTML=(t,h)=>`<div class="lock">${ICON_LOCK}<strong>${esc(t)}</strong><span class="note">${esc(h)}</span></div>`;
const emptyNote=t=>`<p class="note">${esc(t)}</p>`;
function toast(msg){const t=$("toast");t.textContent=msg;t.hidden=false;t.classList.remove("show");void t.offsetWidth;t.classList.add("show");clearTimeout(toast._t);toast._t=setTimeout(()=>{t.hidden=true;},2600);}

async function loadProfile(){
  if(!session){profileRow=null;avatarUrl="";return;}
  const{data}=await supabase.from("profiles").select("*").eq("id",session.user.id).single();
  profileRow=data||null;avatarUrl="";
  if(profileRow&&profileRow.avatar_url){
    const{data:signed}=await supabase.storage.from("avatars").createSignedUrl(profileRow.avatar_url,3600);
    avatarUrl=signed?.signedUrl||"";
  }
}
async function initAuth(){
  const{data:{session:s}}=await supabase.auth.getSession();session=s;await loadProfile();acctRefresh();
  supabase.auth.onAuthStateChange(async(_event,s2)=>{session=s2;await loadProfile();acctRefresh();});
}

/* ---------- image upload: resize/compress client-side (Canvas), then a private Storage path, resolved to a short-lived signed URL at render time ---------- */
function extOf(file){const m=/\.([a-z0-9]+)$/i.exec(file.name||"");return(m?m[1]:"jpg").toLowerCase();}
const TINT_FILTER="grayscale(1) sepia(1) saturate(1.7) hue-rotate(-38deg) brightness(.95) contrast(1.05)";
async function compressImage(file,{maxDim=1920,quality=.82,tint=""}={}){
  try{
    let src,w,h;
    if(window.createImageBitmap){src=await createImageBitmap(file);w=src.width;h=src.height;}
    else{const url=URL.createObjectURL(file);try{src=new Image();await new Promise((res,rej)=>{src.onload=res;src.onerror=rej;src.src=url;});w=src.naturalWidth;h=src.naturalHeight;}finally{URL.revokeObjectURL(url);}}
    if(!w||!h)throw new Error("no-dims");
    const scale=Math.min(1,maxDim/Math.max(w,h));
    const cw=Math.max(1,Math.round(w*scale)),ch=Math.max(1,Math.round(h*scale));
    const canvas=document.createElement("canvas");canvas.width=cw;canvas.height=ch;
    const ctx=canvas.getContext("2d");if(tint)ctx.filter=tint;ctx.drawImage(src,0,0,cw,ch);
    if(src.close)src.close();
    const blob=await new Promise(res=>canvas.toBlob(res,"image/jpeg",quality));
    if(!blob)throw new Error("tobob-failed");
    return blob;
  }catch{return file;}
}
async function uploadAvatar(file){
  const blob=await compressImage(file,{maxDim:512,quality:.85,tint:TINT_FILTER});
  const ext=blob===file?extOf(file):"jpg";
  const path=`${session.user.id}/avatar.${ext}`;
  const{error}=await supabase.storage.from("avatars").upload(path,blob,{upsert:true,contentType:blob.type||file.type||"image/jpeg"});
  if(error)return{ok:false,error};
  await supabase.from("profiles").update({avatar_url:path}).eq("id",session.user.id);
  await loadProfile();return{ok:true};
}
async function uploadMaterialImage(file){
  const blob=await compressImage(file,{maxDim:1920,quality:.82});
  const ext=blob===file?extOf(file):"jpg";
  const base=(file.name||"image").replace(/\.[a-z0-9]+$/i,"").replace(/[^a-z0-9_.-]/gi,"_");
  const path=`${Date.now()}-${base}.${ext}`;
  const{error}=await supabase.storage.from("materials").upload(path,blob,{contentType:blob.type||file.type||"image/jpeg"});
  return error?{ok:false,error}:{ok:true,path};
}
/* re-encodes a short clip at a capped resolution/bitrate via canvas+MediaRecorder (no server to transcode on);
   skips very long sources and falls back to the original file on any unsupported browser / failure */
async function compressVideo(file,{maxDim=1280,bitrate=1500000,maxDuration=180}={}){
  let url;
  try{
    if(!window.MediaRecorder)throw new Error("no-mediarecorder");
    const mime=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(m=>MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(m));
    if(!mime)throw new Error("no-webm-support");
    url=URL.createObjectURL(file);
    const video=document.createElement("video");
    video.muted=true;video.playsInline=true;video.preload="auto";video.src=url;
    await new Promise((res,rej)=>{video.onloadedmetadata=res;video.onerror=()=>rej(new Error("decode-failed"));});
    if(!video.duration||video.duration>maxDuration||!video.videoWidth)throw new Error("skip-too-long-or-unknown");
    const scale=Math.min(1,maxDim/Math.max(video.videoWidth,video.videoHeight));
    const cw=Math.max(2,Math.round(video.videoWidth*scale)),ch=Math.max(2,Math.round(video.videoHeight*scale));
    const canvas=document.createElement("canvas");canvas.width=cw;canvas.height=ch;
    const ctx=canvas.getContext("2d");
    const stream=canvas.captureStream(30);
    const rec=new MediaRecorder(stream,{mimeType:mime,videoBitsPerSecond:bitrate});
    const chunks=[];rec.ondataavailable=e=>{if(e.data&&e.data.size)chunks.push(e.data);};
    const stopped=new Promise(res=>{rec.onstop=res;});
    let raf;const draw=()=>{ctx.drawImage(video,0,0,cw,ch);raf=requestAnimationFrame(draw);};
    await new Promise((res,rej)=>{video.onplay=res;video.onerror=()=>rej(new Error("play-failed"));video.play().catch(rej);});
    rec.start();draw();
    await new Promise(res=>{video.onended=res;});
    cancelAnimationFrame(raf);rec.stop();await stopped;
    const blob=new Blob(chunks,{type:mime.split(";")[0]});
    if(!blob.size)throw new Error("empty-output");
    return blob.size<file.size?blob:file;
  }catch{return file;}
  finally{if(url)URL.revokeObjectURL(url);}
}
async function uploadMaterialVideo(file,onStatus){
  if(onStatus)onStatus("compressing");
  const blob=await compressVideo(file);
  if(onStatus)onStatus(blob===file?null:"uploading");
  const ext=blob===file?extOf(file):"webm";
  const base=(file.name||"video").replace(/\.[a-z0-9]+$/i,"").replace(/[^a-z0-9_.-]/gi,"_");
  const path=`${Date.now()}-${base}.${ext}`;
  const{error}=await supabase.storage.from("materials").upload(path,blob,{contentType:blob.type||file.type||"video/mp4"});
  if(onStatus)onStatus(null);
  return error?{ok:false,error}:{ok:true,path};
}
async function signedMaterialUrl(path){
  const{data}=await supabase.storage.from("materials").createSignedUrl(path,3600);
  return data?.signedUrl||"";
}
const dlgOpen=d=>{if(!d.open){d.classList.remove("closing");document.documentElement.classList.add("modal-open");if(d.showModal)d.showModal();else d.setAttribute("open","");}};
function softClose(d){if(!d.open||d.classList.contains("closing"))return;if(reduce){d.close();return;}
  d.classList.add("closing");setTimeout(()=>{d.classList.remove("closing");d.close();},440);}
document.querySelectorAll("dialog.dlg").forEach(d=>{d.addEventListener("cancel",e=>{e.preventDefault();softClose(d);});
  d.addEventListener("close",()=>{if(![...document.querySelectorAll("dialog.dlg")].some(x=>x.open))document.documentElement.classList.remove("modal-open");});});

/* ----- nav avatar and the small centred card ----- */
const acct=$("acct"),prof=$("prof"),adm=$("adm"),avBtn=$("avatarBtn");
let authTab="in",profTab="profile",admTab="students",admOk=false,signupPending=false;
function renderNav(){const u=me();avBtn.innerHTML=avHTML(u);avBtn.classList.toggle("on",!!u);avBtn.setAttribute("aria-label",u?`${a("acct")}: ${u.name}`:a("acct"));}
function renderAcct(){const u=me(),v=$("acctBody");
  if(signupPending){v.innerHTML=`<p class="mono eyebrow">${a("acctEyebrow")}</p><h3>${a("signUp")}</h3><p class="note">${a("signupCheckEmail")}</p>`;return;}
  if(!u){v.innerHTML=`<p class="mono eyebrow">${a("acctEyebrow")}</p><h3 id="acctTitle">${authTab==="in"?a("signIn"):a("signUp")}</h3>
    <div class="seg2" role="group"><button type="button" data-a="tab-in" aria-pressed="${authTab==="in"}">${a("signIn")}</button><button type="button" data-a="tab-up" aria-pressed="${authTab==="up"}">${a("signUp")}</button></div>
    <form id="authForm" novalidate>
      ${authTab==="up"?`<div class="field"><label class="lbl" for="au-name">${a("name")}</label><input type="text" id="au-name" autocomplete="name" maxlength="60"></div>`:""}
      <div class="field"><label class="lbl" for="au-email">Email</label><input type="email" id="au-email" autocomplete="email" maxlength="120"></div>
      <div class="field"><label class="lbl" for="au-pass">${a("password")}</label><input type="password" id="au-pass" autocomplete="${authTab==="up"?"new-password":"current-password"}" maxlength="128"></div>
      <div class="err" id="au-err" role="alert"></div>
      <button class="glass" type="submit">${authTab==="in"?a("signIn"):a("createAcc")}<span class="arr">→</span></button>
    </form>${joinIntent&&authTab==="up"?`<p class="note join-note">${a("joinNote")}</p>`:""}`;return;}
  v.innerHTML=`<p class="mono eyebrow">${a("acctEyebrow")}</p><div class="mini-prof">${avHTML(u,"lg")}<div class="mp-txt"><h3 id="acctTitle">${esc(u.name)}</h3><div class="row">${statusPill(u)}${u.verified?`<span class="pill">${a("verified")}</span>`:""}</div><p class="note">${esc(u.email)}</p></div></div>
    <div class="row" style="margin-top:22px"><button class="glass" type="button" data-a="open-prof">${a("myProfile")}<span class="arr">→</span></button><button class="txt-btn" type="button" data-a="logout">${a("logout")}</button></div>`;}
avBtn.addEventListener("click",()=>{joinIntent=false;signupPending=false;renderAcct();dlgOpen(acct);});
/* "become a student" in the booking form: registration first; Maria grants the status afterwards */
let joinIntent=false;
$("joinBtn").addEventListener("click",()=>{if(me()){profTab="profile";renderProf();dlgOpen(prof);return;}authTab="up";joinIntent=true;renderAcct();dlgOpen(acct);});
$("joinQ").addEventListener("click",()=>{const box=$("joinInfo"),o=box.hidden;box.hidden=!o;$("joinQ").setAttribute("aria-expanded",String(o));});

/* ----- my profile ----- */
const PTABS=["profile","book","study","knowledge","reviews","messages"];
const PICON={
  profile:'<path d="M12 12.2a3.8 3.8 0 100-7.6 3.8 3.8 0 000 7.6zM4.8 20c1.3-3.4 4-5 7.2-5s5.9 1.6 7.2 5"/>',
  book:'<rect x="4" y="5.5" width="16" height="14" rx="2.5"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>',
  study:'<path d="M4 18.5h16M6.5 15l3.5-4 3 2.5 4.5-6"/>',
  knowledge:'<path d="M5 5.5c2.5-1 5-1 7 .5 2-1.5 4.5-1.5 7-.5v13c-2.5-1-5-1-7 .5-2-1.5-4.5-1.5-7-.5z"/><path d="M12 6v13"/>',
  reviews:'<path d="M12 4.5l2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7z"/>',
  messages:'<path d="M5 6.5h14v9H10l-4 3v-3H5z"/>'};
const picon=k=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">${PICON[k]}</svg>`;
async function renderProf(){const u=me();if(!u){prof.close();return;}
  const locked=k=>(k==="study"||k==="knowledge")&&!u.student;
  $("profSide").innerHTML=`<div class="side-id">
      <div class="av-wrap">${avHTML(u,"xl")}<label class="av-cam" for="avFile" title="${a("changeAv")}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4.5 8.5h3l1.5-2h6l1.5 2h3v10h-15z"/><circle cx="12" cy="13" r="3.2"/></svg><span class="sr">${a("changeAv")}</span></label><input type="file" id="avFile" accept="image/*" hidden></div>
      <div class="side-txt"><h3>${esc(u.name)}</h3>${statusPill(u)}<span class="side-mail">${esc(u.email)}${u.verified?' <span class="ok" title="'+a("verified")+'">✓</span>':""}</span></div>
    </div>
    <nav class="vtabs" role="tablist" aria-label="${a("myProfile")}">${PTABS.map(k=>`<button type="button" role="tab" data-a="ptab" data-k="${k}" aria-selected="${profTab===k}">${picon(k)}<span>${a("t_"+k)}</span>${locked(k)?`<i class="lk">${ICON_LOCK}</i>`:""}</button>`).join("")}</nav>
    <button type="button" class="txt-btn side-out" data-a="logout">${a("logout")}</button>`;
  $("profTitle").innerHTML=`<p class="mono eyebrow">${a("myProfile")}</p><h3>${a("t_"+profTab)}</h3><p class="note">${a("sub_"+profTab)}</p>`;
  const html=await PANE[profTab](u);
  $("profPane").innerHTML=(profTab==="profile"||profTab==="knowledge"||html.startsWith('<div class="lock"'))?html:`<div class="pcard">${html}</div>`;}
const PANE={
profile:async u=>`<div class="pcards">
  <form id="profForm" class="pcard" novalidate><h4>${a("pData")}</h4>
    <div class="row2"><div class="field"><label class="lbl" for="pf-name">${a("name")}</label><input type="text" id="pf-name" maxlength="60" value="${esc(u.name)}"></div>
    <div class="field"><label class="lbl" for="pf-social">${a("social")}</label><input type="text" id="pf-social" maxlength="120" placeholder="${a("socialPh")}" value="${esc(u.social)}"></div></div>
    <div class="pc-foot"><button class="glass sm" type="submit">${a("save")}</button></div></form>
  <div class="pcard"><h4>Email</h4><div class="pc-row"><span class="pc-val">${esc(u.email)}</span>${u.verified?`<span class="pill">${a("verified")}</span>`:`<button type="button" class="glass sm" data-a="verify">${a("verifyEmail")}</button>`}</div>
    <p class="note">${u.verified?a("mailOk"):a("mailWhy")}</p></div>
  <div class="pcard ${u.student?"is-student":""}"><h4>${a("pStatus")}</h4><div class="pc-row">${statusPill(u)}</div><p class="note">${u.student?"":a("joinNote")}</p></div>
</div>`,
book:async u=>{
  const[{data:slots}, {data:mine}]=await Promise.all([
    supabase.from("slots").select("*").eq("is_open",true).gt("starts_at",new Date().toISOString()).order("starts_at"),
    supabase.from("bookings").select("*").eq("student_id",u.id).order("created_at",{ascending:false})
  ]);
  const free=slots||[],mineList=mine||[];
  return `<h4>${a("quickBook")}</h4><p class="note">${a("quickBookNote")}</p>
  ${free.length?`<form id="qbForm" novalidate><div class="slots" role="radiogroup">${free.map(s=>`<label class="slot"><input type="radio" name="slot" value="${s.id}"><span class="glass sm">${esc(fmt(s.starts_at))}</span></label>`).join("")}</div>
    <div class="row2"><div class="field"><label class="lbl" for="qbDir">${a("direction")}</label><select id="qbDir">${dirOptions()}</select></div>
    <div class="field"><label class="lbl" for="qbNote">${a("comment")}</label><input type="text" id="qbNote" maxlength="300"></div></div>
    <div class="err" id="qbErr" role="alert"></div><button class="glass" type="submit">${a("bookBtn")}<span class="arr">→</span></button></form>`:`<p class="note pc-empty">${a("noSlots")}</p>`}
  ${mineList.length?`<h4>${a("myRequests")}</h4><ul class="list">${mineList.map(r=>`<li class="item"><span>${esc(dirName(r.practice_type))}${r.message?` · «${esc(r.message)}»`:""}</span><span class="pill ${r.status==="confirmed"?"red":""}">${a("st_"+r.status)}</span></li>`).join("")}</ul>`:""}`;},
study:async u=>{if(!u.student)return lockHTML(a("studentOnly"),a("studyLock"));
  const{data}=await supabase.from("lessons").select("*, slots(starts_at)").eq("student_id",u.id);
  const mine=data||[],up=mine.filter(s=>s.status==="scheduled").sort((x,y)=>new Date(x.slots?.starts_at||0)-new Date(y.slots?.starts_at||0)),past=mine.filter(s=>s.status!=="scheduled");
  const li=s=>`<li class="item"><span>${s.slots?.starts_at?esc(fmt(s.slots.starts_at)):""}</span><span class="pill">${esc(s.notes||"")}</span></li>`;
  return `<h3>${a("upcoming")}</h3>${up.length?`<ul class="list">${up.map(li).join("")}</ul>`:emptyNote(a("noUpcoming"))}
  <h3 style="margin-top:28px">${a("history")}</h3><p class="note">${a("visits")}${past.length}</p>${past.length?`<ul class="list">${past.map(li).join("")}</ul>`:emptyNote(a("noHistory"))}`;},
knowledge:async u=>{if(!u.student)return lockHTML(a("studentOnly"),a("knowLock"));
  const{data}=await supabase.from("materials").select("*, material_access!inner(student_id)").eq("material_access.student_id",u.id);
  const mats=data||[];
  if(!mats.length)return emptyNote(a("noMaterials"));
  const cards=await Promise.all(mats.map(async m=>{
    const hasImg=m.kind==="image"&&m.storage_path,hasVid=m.kind==="video"&&m.storage_path;
    const src=(hasImg||hasVid)?await signedMaterialUrl(m.storage_path):"";
    const media=hasImg&&src?`<div class="mat-media protect"><img src="${src}" alt="" draggable="false"><span class="wm">${esc(u.name)} · Maria Blade</span></div>`
      :hasVid&&src?`<div class="mat-media protect"><video src="${src}" controls playsinline controlsList="nodownload"></video><span class="wm">${esc(u.name)} · Maria Blade</span></div>`:"";
    return `<article class="mat"><h4>${esc(m.title)}</h4>${media}<p>${esc(m.description||"").replace(/\n/g,"<br>")}</p></article>`;}));
  return `<div class="mats">${cards.join("")}</div>`;},
reviews:async u=>{const{data}=await supabase.from("reviews").select("*").eq("student_id",u.id).order("created_at",{ascending:false});
  const mine=data||[];
  return `<form id="revForm" novalidate><div class="field"><label class="lbl" for="revText">${a("yourReview")}</label><textarea id="revText" rows="3" maxlength="800"></textarea></div>
  <div class="err" id="revErr" role="alert"></div><button class="glass" type="submit">${a("sendReview")}</button></form>
  ${mine.length?`<ul class="list" style="margin-top:22px">${mine.map(r=>`<li class="item"><span class="rv">${esc(r.body)}</span><span class="pill ${r.status==="approved"?"red":""}">${a("rev_"+r.status)}</span></li>`).join("")}</ul>`:""}`;},
messages:async u=>{const{data}=await supabase.from("messages").select("*").or(`sender_id.eq.${u.id},recipient_id.eq.${u.id}`).order("created_at");
  const th=data||[];
  const thread=th.length?`<div class="thread">${th.map(m=>`<div class="bub ${m.sender_id!==u.id?"her":"mine"}"><span class="mono">${m.sender_id!==u.id?a("maria"):a("you")} · ${esc(fmt(m.created_at))}</span><p>${esc(m.body)}</p></div>`).join("")}</div>`:"";
  if(!u.verified)return `<div class="lock">${ICON_LOCK}<span class="note">${a("msgVerifyFirst")}</span><button type="button" class="glass sm" data-a="verify">${a("verifyEmail")}</button></div>${thread}`;
  return `${thread}<form id="msgForm" novalidate><div class="field"><label class="lbl" for="msgText">${a("msgPh")}</label><textarea id="msgText" rows="3" maxlength="1500"></textarea></div>
  <p class="note">${a("msgFrom")}${esc(u.email)}</p><div class="err" id="msgErr" role="alert"></div><button class="glass" type="submit">${a("send")}<span class="arr">→</span></button></form>`;}
};

/* ----- Maria's panel: email+password ----- */
const ATABS=["students","training","slots","messages","reviews","knowledge"];
function renderAdmLogin(){
  $("admHead").innerHTML=`<div><p class="mono eyebrow">mariablade.com/infinitylove</p><h3>${a("adm")}</h3></div>`;$("admTabs").innerHTML="";
  $("admPane").innerHTML=`<form id="admLogin" class="adm-login" novalidate>
    <div class="field"><label class="lbl" for="ad-l">${a("admLogin")}</label><input type="email" id="ad-l" autocomplete="username" maxlength="120"></div>
    <div class="field"><label class="lbl" for="ad-p">${a("admPass")}</label><input type="password" id="ad-p" autocomplete="current-password" maxlength="128"></div>
    <div class="err" id="adm-err" role="alert"></div>
    <button class="glass" type="submit">${a("admEnter")}<span class="arr">→</span></button></form>`;
}
async function renderAdm(){
  if(!admOk){renderAdmLogin();return;}
  $("admHead").innerHTML=`<div><p class="mono eyebrow">mariablade.com/infinitylove</p><h3>${a("adm")}</h3></div>`;
  $("admTabs").innerHTML=ATABS.map(k=>`<button type="button" role="tab" data-a="atab" data-k="${k}" aria-selected="${admTab===k}">${a("a_"+k)}</button>`).join("");
  $("admPane").innerHTML=await APANE[admTab]();}
const userOpts=students=>students.map(u=>`<option value="${u.id}">${esc(u.full_name||u.id)}${u.is_student?" ★":""}</option>`).join("");
async function fetchStudents(){const{data}=await supabase.from("profiles").select("*").order("created_at");return data||[];}
const APANE={
students:async()=>{const list=await fetchStudents();if(!list.length)return emptyNote(a("noUsers"));
  return `<ul class="list">${list.map(u=>`<li class="item"><div class="row">${avHTML({name:u.full_name})}<div><strong>${esc(u.full_name||"—")}</strong><div class="note">${u.instagram?esc(u.instagram):""}</div></div></div>
  <div class="row">${statusPill({student:u.is_student})}<button type="button" class="glass sm" data-a="toggle-student" data-id="${u.id}" data-on="${u.is_student?"0":"1"}">${u.is_student?a("unStudent"):a("makeStudent")}</button></div></li>`).join("")}</ul>`;},
training:async()=>{
  const[{data:bookings},{data:lessons},students]=await Promise.all([
    supabase.from("bookings").select("*").eq("status","pending").order("created_at"),
    supabase.from("lessons").select("*, slots(starts_at)").order("created_at"),
    fetchStudents()
  ]);
  const byId=Object.fromEntries(students.map(s=>[s.id,s]));
  const req=bookings||[],mine=lessons||[],up=mine.filter(s=>s.status==="scheduled"),past=mine.filter(s=>s.status!=="scheduled");
  const sli=s=>`<li class="item"><span>${s.slots?.starts_at?esc(fmt(s.slots.starts_at))+" · ":""}${esc(byId[s.student_id]?.full_name||"—")}${s.notes?` · ${esc(s.notes)}`:""}</span><button type="button" class="txt-btn" data-a="del-session" data-id="${s.id}">${a("remove")}</button></li>`;
  return `<h4>${a("requests")}</h4>${req.length?`<ul class="list">${req.map(r=>`<li class="item"><span>${esc(byId[r.student_id]?.full_name||r.contact_name||"—")} · ${esc(dirName(r.practice_type))}${r.message?` · «${esc(r.message)}»`:""}</span>
    <span class="row"><button type="button" class="glass sm" data-a="req-ok" data-id="${r.id}" data-student="${r.student_id||""}" data-slot="${r.slot_id||""}">${a("confirm")}</button><button type="button" class="txt-btn" data-a="req-no" data-id="${r.id}">${a("decline")}</button></span></li>`).join("")}</ul>`:emptyNote(a("noRequests"))}
  <h4>${a("assign")}</h4>${students.length?`<form id="assignForm" class="inline-form" novalidate><div class="field"><label class="lbl" for="as-u">${a("who")}</label><select id="as-u">${userOpts(students)}</select></div>
    <div class="field"><label class="lbl" for="as-d">${a("when")}</label><input type="datetime-local" id="as-d"></div><div class="field"><label class="lbl" for="as-k">${a("direction")}</label><select id="as-k">${dirOptions()}</select></div>
    <button class="glass sm" type="submit">${a("add")}</button></form>`:emptyNote(a("noUsers"))}
  <h4>${a("upcoming")}</h4>${up.length?`<ul class="list">${up.map(sli).join("")}</ul>`:emptyNote(a("noSessions"))}
  <h4>${a("history")}</h4>${past.length?`<ul class="list">${past.map(sli).join("")}</ul>`:emptyNote(a("noSessions"))}`;},
slots:async()=>{const{data}=await supabase.from("slots").select("*").eq("is_open",true).gt("starts_at",new Date().toISOString()).order("starts_at");
  const fr=data||[];
  return `<form id="slotForm" class="inline-form" novalidate><div class="field"><label class="lbl" for="sl-d">${a("when")}</label><input type="datetime-local" id="sl-d"></div><button class="glass sm" type="submit">${a("addSlot")}</button></form>
  ${fr.length?`<ul class="list" style="margin-top:18px">${fr.map(s=>`<li class="item"><span>${esc(fmt(s.starts_at))}</span><button type="button" class="txt-btn" data-a="del-slot" data-id="${s.id}">${a("remove")}</button></li>`).join("")}</ul>`:emptyNote(a("noFree"))}`;},
messages:async()=>{
  const[{data:msgs},students]=await Promise.all([supabase.from("messages").select("*").order("created_at"),fetchStudents()]);
  const all=msgs||[];if(!all.length)return emptyNote(a("noMessages"));
  const byId=Object.fromEntries(students.map(s=>[s.id,s]));
  const adminId=profileRow.id;
  const ids=[...new Set(all.map(m=>m.sender_id===adminId?m.recipient_id:m.sender_id).filter(Boolean))];
  return ids.map(id=>{const u=byId[id],th=all.filter(m=>m.sender_id===id||m.recipient_id===id).sort((x,y)=>new Date(x.created_at)-new Date(y.created_at));
    return `<section class="adm-thread"><div class="row">${avHTML({name:u?.full_name})}<strong>${esc(u?.full_name||"—")}</strong></div>
    <div class="thread">${th.map(m=>`<div class="bub ${m.sender_id===adminId?"mine":"her"}"><span class="mono">${m.sender_id===adminId?a("maria"):esc(u?.full_name||"")} · ${esc(fmt(m.created_at))}</span><p>${esc(m.body)}</p></div>`).join("")}</div>
    <form class="replyForm inline-form" data-id="${id}" novalidate><div class="field" style="flex:1"><label class="lbl" for="rp-${id}">${a("reply")}</label><input type="text" id="rp-${id}" maxlength="1500"></div><button class="glass sm" type="submit">${a("send")}</button></form></section>`;}).join("");},
reviews:async()=>{const[{data:revs},students]=await Promise.all([supabase.from("reviews").select("*").order("created_at",{ascending:false}),fetchStudents()]);
  const list=revs||[];if(!list.length)return emptyNote(a("noReviews"));
  const byId=Object.fromEntries(students.map(s=>[s.id,s]));
  return `<ul class="list">${list.map(r=>`<li class="item"><span class="rv"><strong>${esc(r.student_id?byId[r.student_id]?.full_name||"—":r.author_name)}</strong> — ${esc(r.body)} <span class="pill ${r.status==="approved"?"red":""}">${a("rev_"+r.status)}</span></span>
  <span class="row"><button type="button" class="glass sm" data-a="rev-toggle" data-id="${r.id}" data-to="${r.status==="approved"?"rejected":"approved"}">${r.status==="approved"?a("unpublish"):a("approve")}</button><button type="button" class="txt-btn" data-a="rev-del" data-id="${r.id}">${a("del")}</button></span></li>`).join("")}</ul>`;},
knowledge:async()=>{
  const[{data:mats},{data:grants},students]=await Promise.all([
    supabase.from("materials").select("*").order("created_at",{ascending:false}),
    supabase.from("material_access").select("*"),
    fetchStudents()
  ]);
  const list=mats||[],grantRows=grants||[];
  return `<form id="matForm" novalidate><div class="field"><label class="lbl" for="mt-t">${a("matTitle")}</label><input type="text" id="mt-t" maxlength="120"></div>
  <div class="field"><label class="lbl" for="mt-x">${a("matText")}</label><textarea id="mt-x" rows="3" maxlength="4000"></textarea></div>
  <div class="field"><label class="lbl" for="mt-i">${a("matImage")}</label><input type="file" id="mt-i" accept="image/*,video/mp4,video/webm"></div>
  <div class="err" id="mtErr" role="alert"></div><button class="glass sm" type="submit">${a("addMat")}</button></form>
  <ul class="list" style="margin-top:22px">${list.map(m=>`<li class="item col"><div class="row" style="justify-content:space-between;width:100%"><strong>${esc(m.title)}</strong><button type="button" class="txt-btn" data-a="mat-del" data-id="${m.id}">${a("del")}</button></div>
    <div class="row"><span class="mono note">${a("access")}:</span>${students.length?students.map(u=>`<label class="chk"><input type="checkbox" data-a="grant" data-m="${m.id}" data-u="${u.id}" ${grantRows.some(g=>g.material_id===m.id&&g.student_id===u.id)?"checked":""}><span>${esc(u.full_name||"—")}</span></label>`).join(""):`<span class="note">${a("noStudents")}</span>`}</div></li>`).join("")}</ul>`;}
};

/* ----- public reviews (only those Maria published) ----- */
async function renderPubRevs(){const box=$("pubRevs");
  const{data}=await supabase.from("reviews").select("*").eq("status","approved").order("created_at",{ascending:false}).limit(4);
  const list=data||[];box.hidden=!list.length;
  box.innerHTML=list.length?`<span class="mono">${a("revsTitle")}</span>${list.map(r=>`<figure class="rev">${avHTML({name:r.author_name})}<figcaption><p>${esc(r.body)}</p><span class="mono">${esc(r.author_name)}</span></figcaption></figure>`).join("")}`:"";}

function acctRefresh(){renderNav();renderPubRevs();if(acct.open)renderAcct();if(prof.open)renderProf();if(adm.open)renderAdm();}

/* ----- clicks ----- */
document.addEventListener("click",async e=>{const b=e.target.closest("[data-a]");
  if(e.target.matches("dialog.dlg"))softClose(e.target);
  if(!b)return;const act=b.dataset.a,id=b.dataset.id,u=me();
  switch(act){
    case"close":softClose(b.closest("dialog"));break;
    case"tab-in":authTab="in";renderAcct();break;
    case"tab-up":authTab="up";renderAcct();break;
    case"logout":await supabase.auth.signOut();admOk=false;softClose(acct);break;
    case"open-prof":acct.close();profTab="profile";renderProf();dlgOpen(prof);break;
    case"ptab":profTab=b.dataset.k;renderProf();break;
    case"verify":if(u){await supabase.auth.resend({type:"signup",email:u.email});toast(a("verifySent"));}break;
    case"atab":admTab=b.dataset.k;renderAdm();break;
    case"toggle-student":await supabase.from("profiles").update({is_student:b.dataset.on==="1"}).eq("id",id);renderAdm();break;
    case"req-ok":{const slotId=b.dataset.slot||null,studentId=b.dataset.student||null;
      await supabase.from("bookings").update({status:"confirmed"}).eq("id",id);
      await supabase.from("lessons").insert({student_id:studentId,slot_id:slotId,booking_id:id,status:"scheduled"});
      if(slotId)await supabase.from("slots").update({is_open:false}).eq("id",slotId);
      renderAdm();break;}
    case"req-no":await supabase.from("bookings").update({status:"declined"}).eq("id",id);renderAdm();break;
    case"del-session":await supabase.from("lessons").delete().eq("id",id);renderAdm();break;
    case"del-slot":await supabase.from("slots").delete().eq("id",id);renderAdm();break;
    case"rev-toggle":await supabase.from("reviews").update({status:b.dataset.to,moderated_at:new Date().toISOString(),moderated_by:profileRow?.id}).eq("id",id);renderAdm();renderPubRevs();break;
    case"rev-del":await supabase.from("reviews").delete().eq("id",id);renderAdm();renderPubRevs();break;
    case"mat-del":await supabase.from("materials").delete().eq("id",id);renderAdm();break;
  }});
document.addEventListener("change",async e=>{const t=e.target;
  if(t.id==="avFile"&&t.files[0]){const r=await uploadAvatar(t.files[0]);if(r.ok){renderNav();if(prof.open)renderProf();toast(a("saved"));}}
  if(t.dataset&&t.dataset.a==="grant"){
    if(t.checked)await supabase.from("material_access").insert({material_id:t.dataset.m,student_id:t.dataset.u,granted_by:profileRow?.id});
    else await supabase.from("material_access").delete().eq("material_id",t.dataset.m).eq("student_id",t.dataset.u);
  }});

/* ----- forms ----- */
const val=id=>($(id)?.value||"").trim();
const setE=(id,k)=>{const el=$(id);if(el)el.textContent=k?a(k):"";return !k;};
document.addEventListener("submit",async e=>{const f=e.target;if(!f.closest("dialog.dlg"))return;e.preventDefault();const u=me();

  if(f.id==="authForm"){const email=val("au-email").toLowerCase(),pass=$("au-pass").value;
    if(authTab==="up"){const name=val("au-name");
      if(!name)return setE("au-err","eName");if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))return setE("au-err","eEmail");if(pass.length<8)return setE("au-err","ePass");
      const{error}=await supabase.auth.signUp({email,password:pass,options:{data:{full_name:name}}});
      if(error){if(error.message.toLowerCase().includes("already"))return setE("au-err","eTaken");$("au-err").textContent=error.message;return;}
      signupPending=true;renderAcct();return;}
    else{const{error}=await supabase.auth.signInWithPassword({email,password:pass});if(error)return setE("au-err","eWrong");
      softClose(acct);return;}
  }
  if(f.id==="profForm"&&u){const name=val("pf-name");await supabase.from("profiles").update({full_name:name||u.name,instagram:val("pf-social")}).eq("id",u.id);await loadProfile();renderProf();toast(a("saved"));return;}
  if(f.id==="qbForm"&&u){const s=f.querySelector("input[name=slot]:checked");if(!s)return setE("qbErr","ePickSlot");
    await supabase.from("bookings").insert({student_id:u.id,slot_id:s.value,practice_type:$("qbDir").value,message:val("qbNote")||null,contact_name:u.name,contact_email:u.email});
    renderProf();toast(a("booked"));return;}
  if(f.id==="revForm"&&u){const t=val("revText");if(t.length<3)return setE("revErr","eEmpty");
    await supabase.from("reviews").insert({student_id:u.id,author_name:u.name,body:t});renderProf();toast(a("reviewSent"));return;}
  if(f.id==="msgForm"&&u&&u.verified){const t=val("msgText");if(t.length<2)return setE("msgErr","eEmpty");
    await supabase.from("messages").insert({sender_id:u.id,recipient_id:null,body:t});renderProf();toast(a("msgSent"));return;}

  if(f.id==="admLogin"){const email=val("ad-l"),pass=$("ad-p").value;
    const{data,error}=await supabase.auth.signInWithPassword({email,password:pass});
    if(error)return setE("adm-err","mfaBadLogin");
    const{data:prof2}=await supabase.from("profiles").select("*").eq("id",data.user.id).single();
    if(!prof2||prof2.role!=="admin"){await supabase.auth.signOut();return setE("adm-err","mfaNotAdmin");}
    profileRow=prof2;session=data.session;admOk=true;renderAdm();return;}
  if(!admOk)return;
  if(f.id==="assignForm"){const d=val("as-d");if(!d)return toast(a("eFill"));
    await supabase.from("lessons").insert({student_id:$("as-u").value,status:"scheduled",notes:dirName($("as-k").value)+" · "+new Date(d).toLocaleString()});renderAdm();toast(a("done"));return;}
  if(f.id==="slotForm"){const d=val("sl-d");if(!d)return toast(a("eFill"));
    await supabase.from("slots").insert({starts_at:new Date(d).toISOString(),ends_at:new Date(d).toISOString()});renderAdm();return;}
  if(f.classList.contains("replyForm")){const inp=f.querySelector("input"),t=inp.value.trim();if(!t)return;
    await supabase.from("messages").insert({sender_id:profileRow.id,recipient_id:f.dataset.id,body:t});renderAdm();return;}
  if(f.id==="matForm"){const t=val("mt-t"),x=val("mt-x"),file=$("mt-i").files[0];if(!t||(!x&&!file))return setE("mtErr","eFill");
    const btn=f.querySelector('button[type="submit"]');
    let storagePath="",kind="article";
    if(file){
      const isVideo=file.type.startsWith("video/");
      if(btn)btn.disabled=true;
      const up=isVideo
        ?await uploadMaterialVideo(file,status=>setE("mtErr",status==="compressing"?"matCompressing":status==="uploading"?"matUploading":null))
        :await uploadMaterialImage(file);
      if(btn)btn.disabled=false;
      if(up.ok){storagePath=up.path;kind=isVideo?"video":"image";}
    }
    await supabase.from("materials").insert({title:t,description:x,storage_path:storagePath,kind,created_by:profileRow.id});renderAdm();return;}
});

/* ----- Maria's entrance: mariablade.com/infinitylove ----- */
function admRoute(){if(location.pathname.replace(/\/$/,"").endsWith("/infinitylove")||location.hash==="#infinitylove"){renderAdm();dlgOpen(adm);}}
addEventListener("hashchange",admRoute);
adm.addEventListener("close",()=>{admOk=false;if(location.hash==="#infinitylove"){try{history.replaceState(null,"",location.pathname+location.search);}catch(e){}}});

/* ----- media: no right-click save, no dragging, no iOS long-press save; materials carry a name watermark ----- */
document.addEventListener("contextmenu",e=>{if(e.target.closest("img,video,.frame,.polaroid,.portrait,.protect"))e.preventDefault();});
document.addEventListener("dragstart",e=>{if(e.target.closest("img,video"))e.preventDefault();});

renderNav();initAuth();

apply(lang);glSize();setStops();tone();bgUpdate();admRoute();

/* ---------- loader: wait for fonts and the jungle image (at least the writing time, at most 4.5 s) ---------- */
(function(){const d=document.documentElement;
  const done=()=>{if(!d.classList.contains("js-loading"))return;d.classList.remove("js-loading");d.classList.add("loaded");relayout();};
  const minT=new Promise(r=>setTimeout(r,reduce?250:2100));
  const fontsP=document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve();
  const imgP=new Promise(r=>{if(real.complete)r();else{real.addEventListener("load",r);real.addEventListener("error",r);}});
  Promise.race([Promise.all([minT,fontsP,imgP]),new Promise(r=>setTimeout(r,4500))]).then(()=>requestAnimationFrame(done));
})();
