import SectionHeader from "../components/SectionHeader";
import Emoji from "../components/Emoji";

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
        <Emoji>🛠️</Emoji>
        Skills
      </SectionHeader>
      <ul className="ps-0">
        {skillsData.map((skill) => {
          return (
            <>
              <li className="mb-2 list-unstyled">
                <b>
                  <Emoji>{skill.emoji}</Emoji> <u>{skill.category}</u>:
                </b>{" "}
                {skill.items.join(", ")}
                {skill.subcategoryList && (
                  <ul>
                    {skill.subcategoryList.map((skill) => {
                      return (
                        <li className="mb-1">
                          <b>
                            <Emoji>{skill.emoji}</Emoji>
                            <u>{skill.category}</u>:
                          </b>{" "}
                          {skill.items.join(", ")}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;
