import SectionHeader from "../components/SectionHeader";

const SkillsList = () => {
  return (
    <div>
      <SectionHeader text={"Skills"} />
      <ul>
        <li>
          <b>Web Development</b> &rarr; React, TypeScript, JS, Next.JS, Node.JS,
          HTML/CSS, SCSS
        </li>
        <li><b>Database</b> &rarr; SQL, MySQL, PostgresSQL, MongoDB</li>
        <li><b>Programming Languages</b> &rarr; Java, C, Python</li>
        <li><b>Development Tools</b> &rarr; Git, Github, JIRA, VSCode</li>
        <li><b>Tech Misc.</b> &rarr; Arduino, UNIX</li>
      </ul>
    </div>
  );
};

export default SkillsList;
