(()=>{"use strict";!function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("button"),a=document.createElement("button"),s=document.createElement("button");t.classList.add("header"),n.classList.add("pages"),d.classList.add("home-button"),a.classList.add("contact-button"),s.classList.add("menu-button"),d.innerText="Home",a.innerText="Contact",s.innerText="Menu",e.appendChild(t),t.appendChild(n),n.append(d,a,s);const c=document.createElement("div"),i=document.createElement("img"),m=document.createElement("p"),o=document.createElement("div"),l=document.createElement("h1"),r=document.createElement("ul"),u=document.createElement("li"),p=document.createElement("li"),L=document.createElement("li"),E=document.createElement("li"),T=document.createElement("li");c.classList.add("body"),i.classList.add("image"),m.classList.add("slogan"),o.classList.add("opening-hours"),l.classList.add("opening-text"),r.classList.add("opening-element"),u.classList.add("opening-item"),p.classList.add("opening-item"),L.classList.add("opening-item"),E.classList.add("opening-item"),T.classList.add("opening-item"),i.src="",m.innerText="Come on down to Tasty Divine! Try our amazing food!",l.innerText="We are open on these days!",u.innerHTML="Monday: 8am - 4pm",p.innerHTML="Tuesday: 8am - 4pm",L.innerHTML="Wednesday: 8am - 4pm",E.innerHTML="Thursday: 8am - 4pm",T.innerHTML="Friday: 8am - 4pm",e.appendChild(c),c.append(i,m,o),o.appendChild(r),r.append(u,p,L,E,T);const g=document.createElement("div");g.classList.add("footer"),g.innerText="made by roshaun-code",e.appendChild(g)}()})();