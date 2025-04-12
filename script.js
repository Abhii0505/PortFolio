// gsap.from("#skills .flex", {
//   opacity: 0,
//   y: 50,
//   duration: 0.8,
//   ease: "power2.out",
//   stagger: 0.1,
//   scrollTrigger: {
//     trigger: "#skills",
//     start: "top 80%",
//   },
// });

gsap.from("#hero-sec", {
  opacity: 0,
  y: 50,
  duration: 2,
  ease: "power2.out",
});
gsap.from("#aboutme", {
  opacity: 0,
  x: -50,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#aboutme",
    start: "top 65%", // when top of .box hits 80% of viewport height
    end: "top 30%",
    scrub: true, // sync with scroll
    // show start/end markers
    toggleActions: "play pause resume reverse",
  },
});
gsap.from("#aboutme img", {
  opacity: 0,
  x: 50,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#aboutme",
    start: "top 65%", // when top of .box hits 80% of viewport height
    end: "top 30%",
    scrub: true, // sync with scroll
     // show start/end markers
    toggleActions: "play pause resume reverse",
  },
});
gsap.from("#hero", {
  opacity: 0,
  y: -20,
  duration: 2,
  ease: "power2.out",
});

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex", "slide-down");
  } else {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex", "slide-down");
  }
});
// gsap.registerPlugin(ScrollTrigger);

// gsap.from("#skills .flex", {
//   opacity: 0,
//   y: 30,
//   duration: 1,
//   stagger: 0.2,
//   scrollTrigger: {
//     trigger: "#skills",
//     start: "top 80%",
//   },
// });

// gsap.utils.toArray(".progress-bar").forEach((bar, index) => {
//   const target =
//     bar.previousElementSibling.querySelector(".counter").dataset.target;
//   ScrollTrigger.create({
//     trigger: bar,
//     start: "top 90%",
//     onEnter: () => {
//       gsap.to(bar, {
//         width: target + "%",
//         duration: 1.5,
//         ease: "power2.out",
//       });
//       let count = { val: 0 };
//       gsap.to(count, {
//         val: target,
//         duration: 1.5,
//         ease: "power2.out",
//         onUpdate: () => {
//           bar.previousElementSibling.querySelector(".counter").innerText =
//             Math.floor(count.val);
//         },
//       });
//     },
//   });
// });

const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent default redirection

  const formData = new FormData(form);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
      form.reset(); // optional: clear form
    }, 2000); // hide after 3 seconds
  } else {
    alert("Oops! Something went wrong.");
  }
});
// alert(
//   "Hello! I'm a web developer with a passion for creating beautiful and functional websites. I love to learn new technologies and improve my skills. Feel free to explore my portfolio and reach out if you have any questions or opportunities for collaboration. Thank you for visiting!"
// );
gsap.registerPlugin(ScrollTrigger);

// Target all skill image wrappers
const skillItems = document.querySelectorAll("#skills .flex");

gsap.from(skillItems, {
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.2, // One-by-one animation
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%", // When #skills is 80% down from top of viewport
    toggleActions: "play none none none",
  },
});
gsap.registerPlugin(ScrollTrigger);

const projectCards = document.querySelectorAll("#projects .project-card");

gsap.from(projectCards, {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#projects",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});
