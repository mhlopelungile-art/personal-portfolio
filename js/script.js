const portfolioData = {
  projects: [
    {
      title: "Weather Web App",
      description:
        "A responsive weather app that presents forecast information in a clean and easy-to-use interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      label: "Weather App",
      status: "Completed",
      link: "https://github.com/mhlopelungile-art/weather-app",
    },
    {
      title: "Live Website",
      description:
        "A published website built for real users with responsive sections, polished styling, and production-ready structure.",
      tech: ["HTML", "CSS", "JavaScript"],
      label: "Live Website",
      status: "Completed",
      link: "https://github.com/mhlopelungile-art/website-gym",
    },
    {
      title: "Age Calculator",
      description:
        "A useful calculator that takes a date input and instantly returns an age result in a simple interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      label: "Utility Tool",
      status: "Completed",
      link: "https://github.com/mhlopelungile-art/age_calculator",
    },
    {
      title: "Calculator",
      description:
        "A functional calculator application for performing basic arithmetic operations.",
      tech: ["HTML", "CSS", "JavaScript"],
      label: "Calculator",
      status: "Completed",
      link: "https://github.com/mhlopelungile-art/calculator",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing responsive design, projects, and contact information.",
      tech: ["HTML", "CSS", "JavaScript"],
      label: "Portfolio",
      status: "Completed",
      link: "https://github.com/mhlopelungile-art/website-portfolio",
    },
    {
      title: "Community Solve",
      description:
        "An interactive application designed to bring communities together and solve problems collaboratively.",
      tech: ["Figma", "Design"],
      label: "Community App",
      status: "Completed",
      link: "https://grab-cool-75098181.figma.site",
    },
    {
      title: "Website Project",
      description:
        "A multi-section website project built with responsive layout and polished visual structure.",
      tech: ["HTML", "CSS", "JavaScript"],
      label: "Website",
      status: "Completed",
      link: "https://github.com/mhlopelungile-art/website_project",
    },
    {
      title: "Student Register System",
      description:
        "A student-focused system for recording and organizing learner information more clearly and efficiently.",
      tech: ["Python", "HTML", "CSS"],
      label: "Student System",
      status: "Completed",
    },
    {
      title: "More Creative Builds",
      description:
        "A growing collection of experiments and smaller builds exploring coding, interfaces, and prompt-based workflows.",
      tech: ["Python", "JavaScript", "Prompt Engineering"],
      label: "Experiments",
      status: "Ongoing",
    },
  ],
  highlights: [
    {
      title: "Python Projects",
      text: "Building desktop tools, logic-based applications, and practical problem-solving projects.",
    },
    {
      title: "Web Development",
      text: "Creating responsive interfaces with HTML, CSS, and JavaScript for clean user experiences.",
    },
    {
      title: "Prompt Engineering",
      text: "Exploring better ways to guide AI tools for creative and useful outputs.",
    },
  ],
  knownFor: [
    "Problem Solving",
    "Responsive Design",
    "Python Basics",
    "Frontend Development",
    "Learning by Building",
    "User-Friendly Interfaces",
    "Curiosity and Growth",
    "Turning ideas into projects",
  ],
  skills: [
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "Tkinter",
    "Prompt Engineering",
    "Responsive Design",
    "Web Development",
    "Problem Solving",
    "Frontend Projects",
  ],
};

const projectGrid = document.getElementById("projectGrid");
const highlightsGrid = document.getElementById("highlightsGrid");
const knownForList = document.getElementById("knownForList");
const skillsTrack = document.getElementById("skillsTrack");
const yearElement = document.getElementById("year");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.getElementById("formStatus");
const submitButton = document.getElementById("submitButton");
const waterCursor = document.getElementById("waterCursor");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

portfolioData.projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "project-card reveal";
  const linkLabel = project.linkLabel || "View project";
  const linkHtml = project.link ? `<a href="${project.link}" target="_blank" class="project-link">${linkLabel}</a>` : '';
  card.innerHTML = `
    <div class="project-image" aria-hidden="true">
      <span class="project-image-label">${project.label}</span>
    </div>
    <div class="project-content">
      <p class="project-status">${project.status}</p>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tech">
        ${project.tech.map((item) => `<span>${item}</span>`).join("")}
      </div>
      ${linkHtml}
    </div>
  `;
  projectGrid.appendChild(card);
});

portfolioData.highlights.forEach((item) => {
  const block = document.createElement("article");
  block.className = "highlight-item";
  block.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  `;
  highlightsGrid.appendChild(block);
});

portfolioData.knownFor.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  knownForList.appendChild(listItem);
});

const marqueeItems = [...portfolioData.skills, ...portfolioData.skills];
marqueeItems.forEach((skill) => {
  const chip = document.createElement("span");
  chip.textContent = skill;
  skillsTrack.appendChild(chip);
});

yearElement.textContent = new Date().getFullYear();

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    formStatus.classList.remove("is-success", "is-error");

    if (!name || !email || !message) {
      formStatus.classList.add("is-error");
      formStatus.textContent = "Please fill in all fields first.";
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    formStatus.textContent = "Sending your message...";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      formStatus.classList.add("is-success");
      formStatus.textContent = "Message sent successfully.";
      contactForm.reset();
    } catch (error) {
      formStatus.classList.add("is-error");
      formStatus.textContent =
        "Message could not be sent right now. Please try again in a moment.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => {
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => {
    item.classList.add("is-visible");
  });
}

if (waterCursor && !prefersReducedMotion.matches) {
  const cursorState = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    tx: window.innerWidth / 2,
    ty: window.innerHeight / 2,
  };

  function animateWaterCursor() {
    cursorState.x += (cursorState.tx - cursorState.x) * 0.16;
    cursorState.y += (cursorState.ty - cursorState.y) * 0.16;
    waterCursor.style.transform = `translate(${cursorState.x - 90}px, ${cursorState.y - 90}px)`;
    requestAnimationFrame(animateWaterCursor);
  }

  window.addEventListener("mousemove", (event) => {
    cursorState.tx = event.clientX;
    cursorState.ty = event.clientY;
    waterCursor.style.opacity = "1";
  });

  window.addEventListener("mousedown", () => {
    waterCursor.classList.add("is-active");
  });

  window.addEventListener("mouseup", () => {
    waterCursor.classList.remove("is-active");
  });

  document.addEventListener("mouseleave", () => {
    waterCursor.style.opacity = "0";
  });

  requestAnimationFrame(animateWaterCursor);
}
