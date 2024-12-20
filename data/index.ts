export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Client satisfaction is my top priority, ensuring open communication and collaboration.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Helping people globally through technology.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an AI Image SaaS.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "My Portfolio",
    des: "Developed an interactive website to professionally showcase my portfolio and projects.",
    img: "/portfolio.png",
    iconLists: ["/re.svg", "/ts.svg", "next.svg", "/tail.svg"],
    link: "You are here!",
  },
  {
    id: 2,
    title: "Speak2AI",
    des: "Developed a Python app for real-time vocal interactions with ChatGPT using pyaudio, websockets, and AssemblyAI.",
    img: "/speak2ai.png",
    iconLists: ["/py.svg", "/openai.svg", "/assemblyai.png"],
    link: "https://github.com/MehrshadFb/Speak2AI",
  },
  {
    id: 3,
    title: "ResuFy",
    des: "Designed Resufy, an AI career app with resume boosting, job matching, and event tools.",
    img: "/resufy.png",
    iconLists: ["/fi.svg"],
    link: "https://www.figma.com/proto/O2PbopjJq9q4RfkMjmJUoT/ResuFy?type=design&node-id=0-1&t=PN8Uh6eYgLpOyRaT-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=307%3A2222",
  },
  {
    id: 4,
    title: "BreviMind",
    des: "Developed an AI application for article summarization using RapidAPI, enhancing user reading efficiency.",
    img: "/brevi-mind.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/red.svg"],
    link: "https://comforting-kleicha-90f752.netlify.app/",
  },
  {
    id: 5,
    title: "Gokoo",
    des: "Developed the website using Framer, featuring an interactive and seamless design.",
    img: "/gokoo.png",
    iconLists: ["/fra.svg", "/re.svg"],
    link: "https://www.gokoo.ca/",
  },
  {
    id: 6,
    title: "Dance With Safa",
    des: "Developed the website on WordPress, integrating e-commerce for course sales and event registration.",
    img: "/dance-with-safa.png",
    iconLists: ["/woo.svg", "/word.svg"],
    link: "https://dancewithsafa.ca/",
  },
  {
    id: 6,
    title: "Simplify Home",
    des: "Implemented the e-commerce website on Shopify, focusing on SEO, responsiveness, and custom coding",
    img: "/simplify-home.png",
    iconLists: ["/sho.svg", "/html.svg", "/css.svg"],
    link: "https://simplifyhome.ca/",
  },
];

export const testimonials = [
  {
    quote: "",
    name: "",
    title: "",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Developer (Co-op)",
    desc: "Developed and maintained a web app using TypeScript and SCSS, designed relational databases in MySQL with Sequelize, and developed REST APIs for seamless front-end and back-end integration.",
    date: "May 2024 - Present",
    className: "md:col-span-2",
    thumbnail: "/kpmpower-logo.png",
  },
  {
    id: 2,
    title: "Web Developer",
    desc: "Developed interactive and user-friendly websites for clients launching their side hustles, using CMS platforms such as Shopify, WordPress, and Webflow.",
    date: "Jan 2023 - Aug 2023",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/gokoo-logo.png",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/MehrshadFb",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   link: ""
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mehrshad-farahbakhsh/",
  },
];
