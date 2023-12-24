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
      <ul>
        {/* <li>
          <b>Web Development</b> &rarr; React, TypeScript, JS, Next.JS, Node.JS,
          HTML/CSS, SCSS
        </li>
        <li><b>Database</b> &rarr; SQL, MySQL, PostgresSQL, MongoDB</li>
        <li><b>Programming Languages</b> &rarr; Java, C, Python</li>
        <li><b>Development Tools</b> &rarr; Git, Github, JIRA, VSCode</li>
        <li><b>Tech Misc.</b> &rarr; Arduino, UNIX</li> */}
        {skillsData.map((skill) => {
          return (
            <>
              <li className="mb-2">
                <b>
                {skill.emoji} <u>{skill.category}</u>:
                </b>{" "}
                {skill.items.join(", ")}
              </li>
              {skill.subcategoryList &&
                skill.subcategoryList.map((skill) => {
                  return (
                    <>
                      <li className="related-item mb-1">
                        <b>
                        {skill.emoji} <u>{skill.category}</u>:
                        </b>{" "}
                        {skill.items.join(", ")}
                      </li>
                    </>
                  );
                })}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;
