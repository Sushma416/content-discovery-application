import images from "./images";

// skills
const skills = [
    {
        title: "UI/UX DESIGN",
        value: "80%"
    },
    {
        title: "WEB DEVELOPMENT",
        value: "75%"
    },
    {
        title: "APP DEVELOPMENT",
        value: "45%"
    },
    {
        title: "MARKETING",
        value: "15%"
    },
];

// stats
const stats = [
    {
        img: `${images.icon_briefcase}`,
        value:  548,
        title: "projects completed"
    },
    {
        img: `${images.icon_clock}`,
        value: 1465,
        title: "working hours"
    },
    {
        img: `${images.icon_star_white}`,
        value: 612,
        title: "positive feedbacks"
    },
    {
        img: `${images.icon_heart}`,
        value: 735,
        title: "happy clients"
    },
];

// works
const works = [
  {
    img: `${images.work_1}`
  },
  {
    img: `${images.work_2}`
  },
  {
    img: `${images.work_3}`
  },
  {
    img: `${images.work_4}`
  },
]

// services
const services = [
    {
        img: `${images.icon_diamond}`,
        title: "UI / UX DESIGN",
        text: 'UI/UX Design combines visually appealing interfaces (UI) with a seamless and user-friendly experience (UX) to enhance the overall interaction and satisfaction of users with digital products.'
    },
    {
        img: `${images.icon_archer}`,
        title: "WEB DEVELOPMENT",
        text: 'Web development is the creation and maintenance of websites or web applications, involving coding and design to deliver functional and user-friendly digital experiences over the internet.'
    },
    {
        img: `${images.icon_phone}`,
        title: "APP / MOBILE",
        text: 'An app is a software application designed for specific tasks or services, providing users with a focused and interactive experience on mobile devices or computers through a dedicated interface.'
    },
    {
        img: `${images.icon_console}`,
        title: "GAME DESIGN",
        text: 'Game design is the process of conceptualizing and creating interactive experiences, integrating elements like mechanics and aesthetics to craft engaging video games. '
    },
    
];

// testimonials
const testimonials = [
    {
        name: "Christine Troughton, BPTC Officer",
        text: "The staff and support are second to none. They are polished, proficient, accessible and patient.",
    },
    {
        name: "Michael Hopkins",
        text: "Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap."
    },
    {
        name: "Terry Overacker",
        text: "We completed our product website with Dev.Point and are so excited to have it live!! It is so professionally done and eye appealing, not to mention how great it looks and works. We love how easy it is to make changes ourselves, yet know we have the support when/if we need it."
    },
    {
        name: "Tim K. & Kristen H.",
        text: "When you choose Dev.Point you get a wonderful, professional team with innovative ideas, awesome customer service, and exactly what you're looking for. It took the ideas that we had and put them perfecly on the web."
    }
];

export default {skills, stats, works, services, testimonials};
