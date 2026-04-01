import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit instagram
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            instagram
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "VISUAL BRANDING",
    category: "VISUAL BRANDING",
    title: "VISUAL BRANDING",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.reactQuery,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://www.instagram.com/haniselmi.design/",
    github: "https://www.instagram.com/haniselmi.design/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Visual Branding — Brand identity design
          </TypographyP>
          <TypographyP className="font-mono ">
            Visual Branding focuses on shaping the visual identity of a brand in a way that reflects its message,
            vision, and unique character. Through the thoughtful use of design elements like logos, colors, fonts, layouts,
            and visual consistency, it creates a cohesive brand image that connects with the target audience and strengthens brand presence across different platforms.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">HANI SELMI DESIGNER </TypographyH3>
          <p className="font-mono mb-2">

          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/problems.png`,
              `${BASE_PATH}/codingducks/problem.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">BRANDING</TypographyH3>
          <p className="font-mono mb-2">

          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/ducklets.png`,
              `${BASE_PATH}/codingducks/ducklet1.png`,

            ]}
          />
          <TypographyH3 className="my-4 mt-8"> </TypographyH3>

          <p className="font-mono mb-2">

          </p>
          <SlideShow
            images={[

            ]}
          />
          <TypographyH3 className="my-4 mt-8"> </TypographyH3>
          <p className="font-mono mb-2">

          </p>
          <SlideShow images={[]} />
          <TypographyH3 className="my-4 mt-8"> </TypographyH3>
          <p className="font-mono mb-2">

          </p>
          <SlideShow images={[]} />
          <TypographyH3 className="my-4 mt-8"> </TypographyH3>

          <p className="font-mono mb-2">

          </p>
          <SlideShow
            images={[

            ]}
          />
        </div>
      );
    },
  },
  {
    id: "Marketing",
    category: "Marketing",
    title: "Marketing",
    src: "/assets/projects-screenshots/couponluxury/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://www.instagram.com/haniselmi.design/",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.vue,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Marketing Enthusiast | Strategy over Luck 📈
            🧠 Decoding consumer psychology and brand storytelling.
            ✨ Marketing isn't about products; it's about the people who use them.
            💡 Exploring the art of being unforgettable.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            Marketing is not just ads — it's every interaction between your brand and a potential customer,
            from the moment they first hear about you to when they become a loyal advocate who refers others
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/landing.png`]} />
          <TypographyH3 className="my-4 ">Stores</TypographyH3>
          <p className="font-mono mb-2">
            Instagram, TikTok, LinkedIn, X — each platform has its own audience and language. The key is showing up consistently where your audience already spends time.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/stores.png`,
              `${BASE_PATH}/couponluxury/store.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8"> </TypographyH3>

          <p className="font-mono mb-2">

          </p>
          <SlideShow images={[]} />
          <TypographyH3 className="my-4 mt-8"> </TypographyH3>
          <p className="font-mono mb-2">

          </p>
          <SlideShow
            images={[

            ]}
          />
          <p className="font-mono mb-2 mt-5">

          </p>
          <p className="font-mono mb-2">

          </p>
          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
    id: "Brand Identity",
    category: "Brand Identity",
    title: "Brand Identity",
    src: "/assets/projects-screenshots/the-booking-desk/landing.png",
    screenshots: ["1.png"],
    live: "https://www.instagram.com/haniselmi.design/",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.sanity],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A brand is what people feel and think when they hear your name.
            It's the gut reaction someone has the moment they encounter you.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            Brand IdentityThe visual and verbal tools you use to express your brand
          </p>
          <SlideShow images={[`${BASE_PATH}/the-booking-desk/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">BRANDING</TypographyH3>
          <p className="font-mono mb-2">
            The One Thing That Separates Iconic Brands

            They make their customer the hero — and position themselves as the guide.

            It's not about you. It's never about you.
            It's about what your customer becomes because of you.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/blogs.png`,
              `${BASE_PATH}/the-booking-desk/blog.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">ideas</TypographyH3>

          <p className="font-mono mb-2">
            Define your positioning
            What is the one thing you want to be known for? Own that single idea.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/cms-1.png`,
              `${BASE_PATH}/the-booking-desk/cms-2.png`,
            ]}
          />
          <p className="font-mono mb-2 my-8">
            Create your brand guidelines
            Document everything so your brand stays consistent across every channel and team

            Build your visual identity
            Logo, colors, typography, imagery — all aligned to your personality and positioning.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/5.png`,
              `${BASE_PATH}/the-booking-desk/6.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "portfolio behance",
    category: "behance",
    title: "portfolio behance",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "https://www.behance.net/haniselmi?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnM20PZmFDktTHg3nfATOwQCJYBtRSXY-OwMAWeR1OzZeNN6adGvk5P1adLFM_aem_j6fyzhenxKbQ6AZS_aYv_Q",
    github: "https://www.behance.net/haniselmi?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnM20PZmFDktTHg3nfATOwQCJYBtRSXY-OwMAWeR1OzZeNN6adGvk5P1adLFM_aem_j6fyzhenxKbQ6AZS_aYv_Q",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            I'm Hani, a graphic designer with a passion for turning ideas into visual stories. Based in Ramallah, I work across branding & identity, illustration, UI/UX, and motion — because great design doesn't live in just one lane.
            With 1–3 years of hands-on experience, I'm at that exciting stage where curiosity drives everything. I love building brands that feel alive, crafting interfaces that feel intuitive, and bringing motion to visuals that once stood still.
            Every project is a new canvas — and I'm just getting started.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,

            ]}
          />
          <TypographyH3 className="my-4 "> </TypographyH3>
          <p className="font-mono mb-2">

          </p>
          <SlideShow images={[]} />
          <TypographyH3 className="my-4 mt-8"> </TypographyH3>

          <p className="font-mono mb-2">

          </p>
          <SlideShow
            images={[

            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">

          </p>
        </div>
      );
    },
  },
  {
    id: "Design ",
    category: "Design",
    title: "Design vs. Art",
    src: "/assets/projects-screenshots/ghostchat/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://www.instagram.com/haniselmi.design/",
    github: "https://www.instagram.com/haniselmi.design/",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
      backend: [PROJECT_SKILLS.supabase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Design is not decoration. Design is not making things pretty.

            Design is problem solving with visuals. Every color, font, space, and shape has a reason — and that reason is always the audience.

            Good design is invisible. You don't notice it — you just feel it. Bad design screams at you.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ghostchat/1.png`,
              `${BASE_PATH}/ghostchat/2.png`,
              `${BASE_PATH}/ghostchat/3.png`,
              `${BASE_PATH}/ghostchat/4.png`,
              `${BASE_PATH}/ghostchat/5.png`,
              `${BASE_PATH}/ghostchat/6.png`,
              `${BASE_PATH}/ghostchat/7.png`,
              `${BASE_PATH}/ghostchat/8.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "Graphic Designer",
    category: "Graphic Designer",
    title: "Graphic Designer",
    src: "/assets/projects-screenshots/jra/1.png",
    screenshots: ["1.png"],
    live: "https://www.instagram.com/haniselmi.design/",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            I don't just design; I build identities that reflect your ambition. 📈
            Specialized in Branding & Visual Strategy. 💼
            Ready to organize your ideas? Let's talk!
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/jra/1.png`]} />
          <TypographyH3 className="my-4 mt-8">
            Headline: Your vision deserves to be seen. 👁️✨
          </TypographyH3>
          {/* Effortless Results Retrieval: */}
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Great ideas often start as a mess. My job is to take that mess, organize it, and turn it into a visual identity that speaks for itself. 🧩

              I’m Hani Selmi, and I believe that a strong brand is the bridge between your ambition and your audience’s trust. If you're ready to take the next step in your professional journey, I’m here to help you build a face for your success.

              Are you ready to organize your thoughts? Let’s start today!
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Design is the silent ambassador of your brand. 📣</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              A visual identity isn't just about a logo; it's about a feeling, a message, and a promise. I help you craft that promise to match the level of your ambition. ✍️🎨

              Let's build something unforgettable.

              DM to start your branding journey. 📩
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Graphic Designer:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Hani Selmi | Visual Identity Specialist 🎨
              Transforming messy ideas into powerful brand legacies. 🧩✨
              Helping ambitious brands stand out with strategic design. 🚀
              Let’s build your vision. DM for collaborations
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">
            The Investment Angle:
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Investing in a professional identity isn't an "expense"—it's the foundation of your growth. 📈
              <ul className="list-disc font-mono ml-6">
                <li>
                  <strong> </strong>Easily track your

                </li>
                <li>
                  <strong> </strong>
                </li>
                <li>
                  <strong> </strong>

                </li>
                <li>
                  <strong>  </strong>

                </li>
              </ul>
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8"> </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">

            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8"> </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">

            </li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
