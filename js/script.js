const portfolioData = {
  gallery: [
    {
      title: "Weather App",
      tag: "JavaScript project",
      background:
        "linear-gradient(135deg, #5dc1e3 0%, #9fe4ff 48%, #f6f0c3 100%)",
    },
    {
      title: "Student System",
      tag: "Python project",
      background:
        "linear-gradient(135deg, #365c34 0%, #6f915e 52%, #d0d9a1 100%)",
    },
    {
      title: "Portfolio Build",
      tag: "Frontend practice",
      background:
        "linear-gradient(135deg, #100f15 0%, #6a1200 58%, #ff5d2d 100%)",
    },
    {
      title: "Age Calculator",
      tag: "Utility app",
      background:
        "linear-gradient(135deg, #46342b 0%, #a86b49 48%, #eedfcf 100%)",
    },
    {
      title: "Calculator",
      tag: "Logic practice",
      background:
        "linear-gradient(135deg, #f0f0f0 0%, #a2a2a2 46%, #393939 100%)",
    },
    {
      title: "UI Experiments",
      tag: "Learning by building",
      background:
        "linear-gradient(135deg, #dbe1ed 0%, #f4f7fb 36%, #f9d0db 100%)",
    },
    {
      title: "Next Build",
      tag: "In progress",
      background:
        "linear-gradient(135deg, #f9b7d0 0%, #f5d7e9 45%, #d9f0ff 100%)",
    },
  ],
  pricing: [
    {
      name: "Frontend",
      price: "01",
      note: "core focus",
      features: ["HTML structure", "CSS styling", "Responsive layouts"],
    },
    {
      name: "Programming",
      price: "02",
      note: "active growth",
      featured: true,
      features: ["Python basics", "JavaScript logic", "Problem solving"],
    },
    {
      name: "Tools",
      price: "03",
      note: "daily practice",
      features: ["GitHub workflow", "Project structure", "Debugging mindset"],
    },
  ],
  work: [
    {
      title: "Weather Web App",
      category: "HTML, CSS, JavaScript",
      summary:
        "A responsive weather app built to display forecast information in a clear and user-friendly interface.",
      link: "https://github.com/mhlopelungile-art/weather-app",
    },
    {
      title: "Student Register System",
      category: "Python project",
      summary:
        "A practical student-focused system created to organize learner information and improve data handling.",
      link: "https://github.com/mhlopelungile-art",
    },
    {
      title: "Portfolio Website",
      category: "Personal website",
      summary:
        "A portfolio build focused on layout, responsiveness, presentation, and showcasing personal work clearly.",
      link: "https://github.com/mhlopelungile-art/website-portfolio",
    },
    {
      title: "Calculator App",
      category: "Logic practice",
      summary:
        "A simple calculator app used to strengthen my understanding of JavaScript logic and user interaction.",
      link: "https://github.com/mhlopelungile-art/calculator",
    },
  ],
  projects: [
    {
      title: "Weather App",
      description:
        "A clean weather application that helped me practice API-style thinking, layout structure, and responsive design.",
      image: "./assets/project-weather.svg",
      background:
        "linear-gradient(135deg, #d4f1df 0%, #f2f7e4 36%, #8db89b 100%)",
      link: "https://github.com/mhlopelungile-art/weather-app",
    },
    {
      title: "Age Calculator",
      description:
        "A useful app that calculates age from a selected date and helped me practice form handling and app logic.",
      image: "./assets/project-age.svg",
      background:
        "linear-gradient(135deg, #f7d0df 0%, #f8edf2 38%, #c5dfff 100%)",
      link: "https://github.com/mhlopelungile-art/age_calculator",
    },
    {
      title: "Calculator",
      description:
        "A basic calculator project built to strengthen my JavaScript fundamentals and interface structure.",
      image: "./assets/project-calculator.svg",
      background:
        "linear-gradient(135deg, #b38c67 0%, #d3b79b 44%, #f6efe5 100%)",
      link: "https://github.com/mhlopelungile-art/calculator",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio site created to present my journey, projects, and progress as a software developer student.",
      image: "./assets/project-portfolio.svg",
      background:
        "linear-gradient(135deg, #161726 0%, #ff5f2e 52%, #ffb16d 100%)",
      link: "https://github.com/mhlopelungile-art/website-portfolio",
    },
  ],
  process: [
    {
      title: "Understand",
      text: "I start by understanding the problem, the goal of the project, and what the application needs to do.",
    },
    {
      title: "Plan",
      text: "I break the idea into smaller steps, decide what tools to use, and think through the best structure.",
    },
    {
      title: "Build",
      text: "I write the code, test the features, and keep improving the design and logic as the project takes shape.",
    },
    {
      title: "Improve",
      text: "I review what worked, fix what needs attention, and use every project to become a stronger developer.",
    },
  ],
};

const scrollGallery = document.getElementById("scrollGallery");
const pricingGrid = document.getElementById("pricingGrid");
const workAccordion = document.getElementById("workAccordion");
const projectGrid = document.getElementById("projectGrid");
const processSteps = document.getElementById("processSteps");
const contactForm = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");
const formStatus = document.getElementById("formStatus");
portfolioData.gallery.forEach((item) => {
  const card = document.createElement("article");
  card.className = "gallery-item reveal";
  card.style.setProperty("--item-bg", item.background);
  card.innerHTML = `
    <div class="gallery-caption">
      <strong>${item.title}</strong>
      <span>${item.tag}</span>
    </div>
  `;
  scrollGallery.appendChild(card);
});

portfolioData.pricing.forEach((plan) => {
  const card = document.createElement("article");
  card.className = `price-card${plan.featured ? " is-featured" : ""}`;
  card.innerHTML = `
    <h3>${plan.name}</h3>
    <p class="price">${plan.price} <small>${plan.note}</small></p>
    <ul>
      ${plan.features.map((feature) => `<li>${feature}</li>`).join("")}
    </ul>
    <a class="pill-button ${plan.featured ? "pill-light" : "pill-accent"}" href="#contact">
      Book now
      <span aria-hidden="true">+</span>
    </a>
  `;
  pricingGrid.appendChild(card);
});

portfolioData.work.forEach((item, index) => {
  const workItem = document.createElement("article");
  workItem.className = `work-item${index === 0 ? " is-open" : ""}`;
  workItem.innerHTML = `
    <button class="accordion-trigger" type="button" aria-expanded="${index === 0}">
      <div>
        <strong>${item.title}</strong>
        <span>${item.category}</span>
      </div>
      <span class="index-pill">${String(index + 1).padStart(2, "0")}</span>
    </button>
    <div class="work-panel">
      <div class="work-panel-inner">
        <div class="work-panel-content">
          <p>${item.summary}</p>
          <a class="work-link" href="${item.link}" target="_blank" rel="noreferrer">
            View project
            <span aria-hidden="true">+</span>
          </a>
        </div>
      </div>
    </div>
  `;
  workAccordion.appendChild(workItem);
});

portfolioData.projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "project-card reveal";
  card.innerHTML = `
    <div class="project-thumb" style="--project-bg:${project.background}">
      <img class="project-thumb-image" src="${project.image}" alt="${project.title} preview" loading="lazy" />
    </div>
    <div class="project-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a class="project-action" href="${project.link}" target="_blank" rel="noreferrer">
        View project
        <span aria-hidden="true">+</span>
      </a>
    </div>
  `;
  projectGrid.appendChild(card);
});

portfolioData.process.forEach((step, index) => {
  const card = document.createElement("article");
  card.className = "process-step reveal";
  card.innerHTML = `
    <span class="step-number">${String(index + 1).padStart(2, "0")}</span>
    <h3>${step.title}</h3>
    <p>${step.text}</p>
  `;
  processSteps.appendChild(card);
});

workAccordion.addEventListener("click", (event) => {
  const trigger = event.target.closest(".accordion-trigger");

  if (!trigger) {
    return;
  }

  const item = trigger.closest(".work-item");
  const items = workAccordion.querySelectorAll(".work-item");
  const shouldOpen = !item.classList.contains("is-open");

  items.forEach((entry) => {
    entry.classList.remove("is-open");
    entry.querySelector(".accordion-trigger")?.setAttribute("aria-expanded", "false");
  });

  if (shouldOpen) {
    item.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
  }
});

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const requiredFields = ["name", "email", "topic", "message"];
    const isMissing = requiredFields.some(
      (field) => !String(formData.get(field) || "").trim()
    );

    formStatus.classList.remove("is-success", "is-error");

    if (isMissing) {
      formStatus.classList.add("is-error");
      formStatus.textContent = "Please fill in every field before sending.";
      return;
    }

    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending<span aria-hidden="true">+</span>';
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

      contactForm.reset();
      formStatus.classList.add("is-success");
      formStatus.textContent = "Your message was sent successfully.";
    } catch (error) {
      formStatus.classList.add("is-error");
      formStatus.textContent =
        "The form could not be sent right now. Please try again in a moment.";
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = 'Send message<span aria-hidden="true">+</span>';
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
