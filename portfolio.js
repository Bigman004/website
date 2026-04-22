/* ─── portfolio.js ─── */

/* Custom cursor */
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + "px";
  cursor.style.top = my + "px";
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animRing);
}
animRing();

document
  .querySelectorAll("a, button, input, textarea, select")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%,-50%) scale(2.2)";
      ring.style.opacity = "0.15";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%,-50%) scale(1)";
      ring.style.opacity = "0.5";
    });
  });

/* Scroll fade-in */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 80);
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

/* Stagger project rows */
document.querySelectorAll(".project-row").forEach((el, i) => {
  el.style.transitionDelay = i * 0.07 + "s";
  observer.observe(el);
});

function handleSubmit(e) {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_6eo3map",
      "template_mjjrl6c",
      e.target,
      "mSnbR8u0O0txSwK8n",
    )
    .then(
      (result) => {
        alert("Message Sent!");
      },
      (error) => {
        console.log(error.text);
      },
    );
}
