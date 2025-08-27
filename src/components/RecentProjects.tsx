import { BsCursor } from "react-icons/bs";
import projects from "../project.json";

// interface IProject {
//   name: string;
//   description: string;
//   website: string;
//   imageSrc: string | string[];
//   imagePos?: string;
//   techs: string[];
//   tag: string;
// }

function RecentProjects() {
  // const projects: IProject[] = [
  //   {
  //     name: "Stonekey",
  //     description:
  //       "Securely store and manage all your application passwords using advanced encryption to protect your data, ensuring privacy and security at all times.",
  //     website: "https://stone-key.web.app/",
  //     imageSrc: "./images/stonekey-img.png",
  //     techs: ["ReactJS", "Typescript", "Redux", "MongoDB", "PWA", "NodeJS"],
  //     tag: "Password Manager",
  //   },
  //   {
  //     name: "Urbanik",
  //     description:
  //       "A fast, secure, and SEO-friendly eCommerce platform built with Next.js and server-side rendering. Enjoy seamless shopping with dynamic product listings, lightning-fast performance, and optimized search visibility. Designed for scalability, this application delivers a smooth user experience while keeping your online store efficient and future-ready.",
  //     website: "https://next-shop-livid.vercel.app/",
  //     imageSrc: "./images/urbanik-img.png",
  //     imagePos: "object-left",
  //     techs: ["NextJS", "Typescript", "NodeJS", "Paypal"],
  //     tag: "Eccomerce",
  //   },
  //   {
  //     name: "Frugio",
  //     description:
  //       "Track your expenses effortlessly and stay in control of your finances with our budget tracking app. Easy to visualize spending with intuitive charts. Simple, secure, and designed to help you achieve your financial goals anytime, anywhere.",
  //     website: "https://github.com/briankarlsayen/frugio",
  //     imageSrc: ["./images/frugio-img.png", "./images/frugio-img2.png"],
  //     techs: ["ReactNative", "SQLite"],
  //     tag: "Budget tracking",
  //   },
  //   {
  //     name: "Silong",
  //     description:
  //       "Manage your inventory and track sales effortlessly with our powerful web application. Monitor stock levels, record transactions, and generate real-time reports to streamline your business operations. Simple, efficient, and accessible from anywhere, it’s the ultimate tool to keep your business organized and profitable.",
  //     website:
  //       "gAAAAABorYftl2QEWYPwII-zjJAIeos4AhEZ0HW1GAE5Vix1iunA0shkvGl0O5QxNZdnEulb5phQtuFMfjTHOTRCiE1PefySH5iVUzTk7Nx9eDBtYQ_qDTgFYMsPRD4T45DqRhmqzjzO5YLdzn705M7-_hY5GrPraA==",
  //     imageSrc: "./images/silong-img.png",
  //     imagePos: "object-left",
  //     techs: ["VueJS", "Typescript", "MongoDB", "Django"],
  //     tag: "Inventory & Stock Monitoring",
  //   },
  // ];

  return (
    <div id="recent-projects" className="pt-20 w-full">
      <h2>Recent Projects</h2>
      <div className="flex flex-col gap-8">
        {projects?.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

const ProjectCard = ({ project, bgColor }: any) => {
  const bg = bgColor ?? "bg-transparent";

  const multiImg = typeof project?.imageSrc !== "string";
  return (
    <div className={`grid grid-cols-5 gap-4 pt-12 pb-32 ${bg}`}>
      <div className="col-span-2 flex flex-col gap-2">
        <p className="uppercase text-xs opacity-70 mb-[-4px]">{project?.tag}</p>
        <h4 className="pb-4">
          <a
            href={project?.website}
            target="__blank"
            className="project-title group"
          >
            {project?.name}
            <span>
              <BsCursor />
            </span>
          </a>
        </h4>
        <p>{project?.description}</p>
        <div className="pt-2">
          <ul className="flex flex-wrap gap-2">
            {project?.techs?.map((item: string) => (
              <li
                key={item}
                className="bg-green-700 rounded-2xl px-4 py-2 text-sm text-primary-font-dark"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-3 flex gap-4 justify-center">
        {multiImg ? (
          project?.imageSrc.map((image: string) => (
            <img
              key={image}
              className="h-[32rem] object-cover"
              src={image}
              alt="stone key dashboard"
            />
          ))
        ) : (
          <img
            className={`h-[32rem] object-cover ${project?.imagePos ?? ""}`}
            src={project?.imageSrc}
            alt="stone key dashboard"
          />
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
