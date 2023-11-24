import SectionHeader from "../components/SectionHeader";

const Strengths = () => {
  const strengthsData = [
    {
      strength: "Problem-Solving",
      desc: "Strong analytical and critical thinking abilities for efficient debugging and code optimization. Effective in utilizing available resources to troubleshoot problems and implement solutions.",
    },
    {
      strength: "Prototyping",
      desc: "Proficient in rapidly prototyping software to assess feasibility and functionality, enabling quick evaluations of software concepts and potential solutions.",
    },
    {
      strength: "Passionate",
      desc: "Committed to staying current with industry trends, fostering a continuous learning mindset, and sharing acquired knowledge to contribute to a collaborative work environment."
    }
  ];
  return (
    <div>
      <SectionHeader className={"strengths-header"} text={"Strengths"} />
      {strengthsData.map((item) => {
        return (
        <p>
          <b>
            <u>{item.strength}</u>
          </b>
          : {item.desc}
        </p>
        )
      })}
    </div>
  );
};

export default Strengths;
