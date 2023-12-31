import SectionHeader from "../components/SectionHeader";
import Emoji from "../components/Emoji";

const SkillsList = () => {
  const skillsData = [
    {
      category: "Web Development",
      emoji: "🌐",
      subcategoryList: [
        {
          category: "Full-Stack Development",
          emoji: "💻",
          items: ["React", "Next.js", "Node.js"],
        },
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
      category: "Programming Languages",
      emoji: "📝",
      items: ["Java", "C", "Python"],
    },
    {
      category: "Database",
      emoji: "💽",
      items: ["SQL", "MySQL", "PostgresSQL", "MongoDB"],
    },
    {
      category: "Development Tools",
      emoji: "🧰",
      items: ["Git", "GitHub", "JIRA", "Visual Studio Code", "Figma", "ChatGPT", "GitHub Copilot"],
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
                  <Emoji>{skill.emoji}</Emoji> <u>{skill.category}</u>
                </b>
                : {skill.items && skill.items.join(", ")}
                {skill.subcategoryList && (
                  <ul className="mt-2">
                    {skill.subcategoryList.map((skill) => {
                      return (
                        <li className="mb-2">
                          <b>
                            <Emoji>{skill.emoji}</Emoji>
                            <u>{skill.category}</u>
                          </b>
                          : {skill.items.join(", ")}
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
