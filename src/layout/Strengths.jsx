import SectionHeader from "../components/SectionHeader";
import Emoji from "../components/Emoji";

const Strengths = () => {
  const strengthsData = [
    {
      strength: "Problem-Solving",
      emoji: "🔎",
      desc: "Strong analytical and critical thinking abilities for efficient debugging and code optimization. Effective in utilizing available resources to troubleshoot problems and implement solutions.",
    },
    {
      strength: "Prototyping",
      emoji: "🪛",
      desc: "Proficient in rapidly prototyping software to assess feasibility and functionality, enabling quick evaluations of software concepts and potential solutions.",
    },
    {
      strength: "Passionate",
      emoji: "🔥",
      desc: "Committed to staying current with industry trends, fostering a continuous learning mindset, and sharing acquired knowledge to contribute to a collaborative work environment.",
    },
  ];
  return (
    <div>
      <SectionHeader className={"strengths-header"}>
        <Emoji>🦾</Emoji>
        Strengths
      </SectionHeader>
      {strengthsData.map((item) => {
        return (
          <p className="mb-4">
            <b>
              <Emoji>{item.emoji}</Emoji> <u>{item.strength}</u>
            </b>
            : {item.desc}
          </p>
        );
      })}
    </div>
  );
};

export default Strengths;
