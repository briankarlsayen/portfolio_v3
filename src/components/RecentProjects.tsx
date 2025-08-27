import { BsCursor } from "react-icons/bs";
import projects from "../project.json";

function RecentProjects() {
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
    <div
      className={`grid grid-cols-2 lg:grid-cols-5 lg:gap-4 gap-20  pt-12 pb-32 ${bg}`}
    >
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
                className="bg-green-700 rounded-2xl px-3 py-1.5 md:px-4 md:py-2 md:text-sm text-xs text-primary-font-dark"
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
              className="lg:h-[32rem] md:h-[25rem] h-[16rem] object-cover"
              src={image}
              alt="stone key dashboard"
            />
          ))
        ) : (
          <img
            className={`lg:h-[32rem] md:h-[25rem] h-[16rem] object-cover ${
              project?.imagePos ?? ""
            }`}
            src={project?.imageSrc}
            alt="stone key dashboard"
          />
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
