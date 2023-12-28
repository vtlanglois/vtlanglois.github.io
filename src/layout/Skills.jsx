import SectionHeader from "../components/SectionHeader";

const SkillsList = () => {
  const skillsData = [
    {
      category: "Web Development",
      emoji: "🌐",
      items: ["React", "Next.js", "Node.js"],
      subcategoryList: [
        {
          category: "Languages",
          emoji: "📝",
          items: ["TypeScript", "JavaScript", "HTML/JSX"],
        },
        {
          category: "Styling",
          emoji: "🎨",
          items: ["CSS", "SCSS", "Bootstrap"],
        },
      ],
    },
    {
      category: "Database",
      emoji: "💽",
      items: ["SQL", "MySQL", "PostgresSQL", "MongoDB"],
    },
    {
      category: "Programming Languages",
      emoji: "📝",
      items: ["Java", "C", "Python"],
    },
    {
      category: "Development Tools",
      emoji: "🧰",
      items: ["Git", "GitHub", "JIRA", "VSCode", "Figma"],
    },
    {
      category: "Tech Misc.",
      emoji: "📚",
      items: ["Arduino", "UNIX", "Markdown"],
    },
  ];

  return (
    <div>
      <SectionHeader className={"skills-header"}>
        <span className="me-2" role="img" aria-hidden="true">
          🛠️
        </span>
        Skills
      </SectionHeader>
      <ul className="ps-0">
        {skillsData.map((skill) => {
          return (
            <>
              <li className="mb-2 list-unstyled">
                <b>
                {skill.emoji} <u>{skill.category}</u>:
                </b>{" "}
                {skill.items.join(", ")}
                {skill.subcategoryList && 
                <ul>
                  {skill.subcategoryList.map((skill) => {
                    return (
                      <li className="mb-1">
                        <b>
                        {skill.emoji} <u>{skill.category}</u>:
                        </b>{" "}
                        {skill.items.join(", ")}
                      </li>
                    )
                  })}
                </ul>
                }
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;
