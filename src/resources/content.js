const person = {
    firstName: "Gnana Prakash",
    lastName: "S",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "Full Stack Engineer",
    avatar: "/images/avatar.jpeg",
    email: "sgp.prakas@gmail.com",
    location: "Asia/Kolkata",
    languages: ["Tamil", "English"],
};

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: (
        <>
            I occasionally write about design, technology, and share thoughts on the intersection of
            creativity and engineering.
        </>
    ),
};

const social = [
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/sgprakas",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/sgprakas/"
    },
    {
        name: "X",
        icon: "x",
        link: "https://x.com/sgp_prakas",
    },
    {
        name: "Email",
        icon: "email",
        link: `mailto:${person.email}`,
    },
];

const home = {
    path: "/",
    image: "/images/og/home.png",
    label: "Home",
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Crafting clean, efficient, and scalable software systems</>,
    featured: {
        display: true,
        title: <>Recent project: <strong className="ml-4">GPflow (WIP 🧑🏻‍💻)</strong></>,
        href: "/work/gpflow-devops-workflow-tool",
    },
    subline: (
        <>
            I'm Gnana Prakash, a Full Stack Engineer passionate about building clean, scalable software systems and developer-first tools.
            <br />
            Outside of work, I enjoy turning ideas into efficient and reliable software, and exploring how AI can be applied to build smarter systems.
        </>
    ),
};

const about = {
    path: "/about",
    label: "About",
    title: `About – ${person.name}`,
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false,
    },
    avatar: {
        display: true,
    },
    resume: {
        display: true,
        link: "/resume/GnanaPrakash_Fullstack_Developer.pdf",
    },
    intro: {
        display: true,
        title: "Introduction",
        description: (
            <>
                Gnana Prakash is a full stack engineer who builds scalable software systems and backend services. At work, he focuses on designing reliable platforms and APIs, while outside of work he enjoys exploring AI, building side projects, and experimenting with new technologies.
            </>
        ),
    },
    work: {
        display: true,
        title: "Work Experience",
        experiences: [
            {
                company: "The Top-class Entertainment LLP",
                timeframe: "August 2022 - Present",
                role: "Full Stack Developer",
                achievements: [
                    <>
                        Here, I led a team of four developers to build and maintain internal platforms for a talent-based media streaming service. A major initiative involved rebuilding a legacy content management system (CMS) into a scalable microservices-based architecture, which greatly improved modularity and long-term maintainability.
                    </>,
                    <>
                        I developed backend APIs for both the CMS and the mobile-facing application using TypeScript and Fastify. To improve development speed and deployment reliability, I implemented CI/CD pipelines and containerized all services with Docker.
                    </>,
                    <>
                        This role also involved close collaboration with the design and QA teams to ensure smooth, stable releases — significantly reducing post-deployment issues.
                    </>
                ],
                images: [],
            },
            {
                company: " Leora Solutions LLC",
                timeframe: "July 2021 - July 2022",
                role: "Full Stack Developer",
                achievements: [
                    <>
                        Here, I built scalable backend APIs using TypeScript and Python, supporting both REST and GraphQL protocols to ensure reliable data access for client platforms.
                    </>,
                    <>
                        I designed and implemented a GraphQL schema that reduced over-fetching by 40%, leading to noticeable improvements in performance and responsiveness.
                    </>,
                    <>
                        I was also involved in the end-to-end delivery of multiple small-scale projects, including an e-commerce platform and a patient management system, handling everything from database modeling to final deployment.
                    </>
                ],
                images: [],
            },
        ],
    },
    studies: {
        display: true,
        title: "Studies",
        institutions: [
            {
                name: "Karpagam College of Engineering",
                description: <>I completed my Bachelor of Technology (B.Tech) in Information Technology here, where I developed a strong foundation in computer science and software engineering.</>,
            }
        ],
    },
    technical: {
        display: true,
        title: "Technical skills",
        skills: {
            frontend: [
                { name: "TypeScript", icon: "/skills/typescript.svg" },
                { name: "JavaScript", icon: "/skills/javascript.svg" },
                { name: "React", icon: "/skills/react.svg" },
                { name: "Bootstrap", icon: "/skills/bootstrap.svg" },
                { name: "MaterialUI", icon: "/skills/mui.svg" },
                {
                    name: "TailwindCSS",
                    icon: "/skills/tailwindcss.svg",
                    color: "#38B2AC",
                },
            ],
            backend: [
                { name: "Node.js", icon: "/skills/nodedotjs.svg" },
                { name: "Express", icon: "/skills/express.svg" },
                { name: "Fastify", icon: "/skills/fastify.svg" },
                { name: "GraphQL", icon: "/skills/graphql.svg" },
                { name: "MQTT", icon: "/skills/mqtt.svg" },
                { name: "Socket.io", icon: "/skills/socketdotio.svg" },
                { name: "Python", icon: "/skills/python.svg" },
                { name: "Flask", icon: "/skills/flask.svg" },
                { name: "SQL", icon: "/skills/mysql.svg" },
                { name: "MongoDB", icon: "/skills/mongodb.svg" },
                { name: "Redis", icon: "/skills/redis.svg" },
                { name: "Mocha", icon: "/skills/mocha.svg" },
            ],
            devops: [
                { name: "Docker", icon: "/skills/docker.svg" },
                { name: "AWS", icon: "/skills/amazonwebservices.svg" },
                { name: "CI/CD", icon: "/skills/jenkins.svg" },
                { name: "Git", icon: "/skills/git.svg" },
            ],
            "AI interests": [
                { name: "Prompt engineering", icon: "" },
                { name: "LLM Integration", icon: "" },
                { name: "AI Agents", icon: "" },
            ]
        },
    },
};

const blog = {
    path: "/blog",
    label: "Blog",
    title: "Writing about design and tech...",
    description: `Read what ${person.name} has been up to recently`,
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
};

const work = {
    path: "/work",
    label: "Work",
    title: `Projects – ${person.name}`,
    description: `Design and dev projects by ${person.name}`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
};

const gallery = {
    path: "/gallery",
    label: "Gallery",
    title: `Photo gallery – ${person.name}`,
    description: `A photo collection by ${person.name}`,
    // Images by https://lorant.one
    // These are placeholder images, replace with your own
    images: [
        {
            src: "/images/gallery/horizontal-1.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/horizontal-2.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/horizontal-3.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/horizontal-4.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/vertical-1.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vertical-2.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vertical-3.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vertical-4.jpg",
            alt: "image",
            orientation: "vertical",
        },
    ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
