import SectionHeader from "../components/SectionHeader";

const Work = () => {
  const workData = [
    {
      company: "Eli Lilly & Company",
      location: "Indianapolis, Indiana",
      job: "Software Developer, Tech@Lilly Software Product Engineering",
      start: "Jul '23",
      end:"Present",
      details: [
        "Collaborating with cross-functional international teams on the development of Lilly Direct, an online direct-to-consumer pharmacy progressive web app (PWA).",
        "Developing software using clean code practices to elevate code readability, bolstering ongoing and future development initiatives.",
        "Utilizing React and Next.js for front-end development, creating dynamic and interactive user interfaces with a focus on rapid requirement implementation, quick load times, and greatly improved SEO.",
        "Styling applications with SCSS and Bootstrap to ensure dynamic, responsive, and visually appealing design across the platform on multiple devices.",
        "Implementing front-end accessibility enhancements following A11y specifications, extending the service’s usability to a broader audience.",
        "Actively engaging in continuous education, such as pursuing online courses and participating in team-wide professional development discussions, to consistently enhance and expand my skill set as a junior software developer."
      ],
    },
    {
      company: "BCForward",
      location: "Carmel, Indiana",
      job: "Software Engineer Intern, TechPoint Xtern",
      start: "May '22",
      end: "Aug '22",
      details: [
        "Collaborated remotely with a 7-person team to develop the Indiana Prosecutor Case Management System website.",
        "Engaged in professional development, civic engagement, and networking events as a TechPoint Xtern.",
        "Implemented quality-of-life features that effectively reduced customer service requests by hundreds, enhancing overall user and developer experiences.",
        "Utilized React/Node.js for frontend development, PHP for backend development, and MySQL databases for seamless integration."
      ],
    },
    {
      company: "Luddy School of Informatics, Computing, and Engineering",
      location: "Bloomington, Indiana",
      job: "Student Engagement & Outreach Intern",
      start: "Sep '20",
      end: "Jul '23",
      details: [
        "Collaborated with a student-led committee to enhance student engagement and promote success throughout Luddy by organizing various events and opportunities for networking and involvement.",
        "Coordinated and managed events with 200+ students and families in attendance.",
        "Led the student outreach division of the Luddy Student Engagement.",
        "Directed and managed Luddy Saturdays, a fun youth outreach program designed to introduce students to tech through block-based programming and encouragement from mentors.",
        "Engaged Luddy students in community service by recruiting them to volunteer in outreach events across Monroe County.",
        "Trained 15+ volunteers on lesson materials and educational tools to ensure excellent performance at our events.",
        "Served and impacted the lives of 70+ students and families from 1st to 7th grade within the Bloomington community."
      ],
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <SectionHeader className="work-header" text={"Leadership & Work Experience"} />
          </div>
        </div>
        {workData.map((item) => {
          return (
            <div className="row">
            <div className="col-md-8 col-sm-8">
              <h5><b><u>{item.company}</u></b>, {item.location}</h5>
            </div>
            <div className="col-md-4 col-sm-4 text-sm-end">
              <h6 className="date-item">{`${item.start} - ${item.end}`}</h6>
            </div>
            <div className="row">
              <div className="col">
                <i>
                  <h6 className="job-title">{item.job}</h6>
                </i>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ul>
                  {item.details.map((detail) => {
                    return (
                      <li>{detail}</li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
