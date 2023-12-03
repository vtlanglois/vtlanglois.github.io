import SectionHeader from "../components/SectionHeader";

const SkillsList = () => {
  const skillsData = [
    {
      category: "Web Development",
      items: ["React", "Next.js", "Node.js"],
      subcategoryList: [
        {
          category: "Languages/Markup",
          items: ["TypeScript", "JavaScript", "HTML/JSX"],
        },
        {
          category: "Styling",
          items: ["CSS", "SCSS", "Bootstrap"],
        },
      ],
    },
    {
      category: "Database",
      items: ["SQL", "MySQL", "PostgresSQL", "MongoDB"],
    },
    {
      category: "Programming Languages",
      items: ["Java", "C", "Python"],
    },
    {
      category: "Development Tools",
      items: ["Git", "GitHub", "JIRA", "VSCode", "Figma"],
    },
    {
      category: "Tech Misc.",
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
              <li>
                <b>
                  <u>{skill.category}</u>
                </b>{" "}
                <span className="arrow"> &rarr;</span> {skill.items.join(", ")}
              </li>
              {skill.subcategoryList &&
                skill.subcategoryList.map((skill) => {
                  return (
                    <>
                      <li className="related-item">
                        <b>
                          <u>{skill.category}</u>
                        </b>{" "}
                        <span className="arrow" role="img" aria-hidden="true">
                          {" "}
                          &rarr;
                        </span>{" "}
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
