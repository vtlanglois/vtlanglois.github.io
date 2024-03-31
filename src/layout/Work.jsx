import Emoji from "../components/Emoji";
import SectionHeader from "../components/SectionHeader";

const Work = () => {
  const workData = [
    {
      company: "Eli Lilly & Company",
      location: "Indianapolis, Indiana",
      job: "Software Engineer, Tech@Lilly Software Product Engineering",
      start: {
        text: "Jul '23",
        dateTime: "2023-07",
      },
      end: {
        text: "Present",
        dateTime: new Date().toISOString().split("T")[0],
      },
      details: [
        "Collaborating with cross-functional international teams on the development of LillyDirect™, an online direct-to-consumer pharmacy progressive web app (PWA).",
        "Developing software using clean code practices to elevate code readability, bolstering ongoing and future development initiatives.",
        "Utilizing React and Next.js for front-end development, creating dynamic and interactive user interfaces with a focus on rapid requirement implementation, quick load times, and greatly improved search engine optimization (SEO).",
        "Styling applications with Sass and Bootstrap to ensure dynamic, responsive, and visually appealing design across the platform on multiple devices.",
        "Implementing front-end accessibility enhancements following the Web Content Accessibility Guidelines (WCAG), extending the service’s usability to a broader audience.",
        "Actively engaging in continuous education, such as pursuing online courses and participating in team-wide professional development discussions, to consistently enhance and expand my skill set.",
      ],
    },
    {
      company: "BCForward",
      location: "Carmel, Indiana",
      job: "Software Engineer Intern, TechPoint Xtern",
      start: {
        text: "May '22",
        dateTime: "2022-05",
      },
      end: {
        text: "Aug '22",
        dateTime: "2022-08",
      },
      details: [
        "Collaborated remotely with a 7-person team to develop the Indiana Prosecutor Case Management System website.",
        <>
          Engaged in professional development, civic engagement, and networking
          events as a <a href="https://techpoint.org/xtern/">TechPoint Xtern</a>
          .
        </>,
        "Implemented quality-of-life features that effectively reduced customer service requests by hundreds, enhancing overall user and developer experiences.",
        "Utilized React/Node.js for frontend development, PHP for backend development, and MySQL databases for seamless integration.",
      ],
    },
    {
      company: "Luddy School of Informatics, Computing, and Engineering",
      location: "Bloomington, Indiana",
      job: "Student Engagement & Outreach Intern",
      start: {
        text: "Sep '20",
        dateTime: "2020-09",
      },
      end: {
        text: "Jul '23",
        dateTime: "2023-07",
      },
      details: [
        "Collaborated with a student-led committee to enhance student engagement and promote success throughout Luddy by organizing various events and opportunities for networking and involvement.",
        "Coordinated and managed events with 200+ students and families in attendance.",
        "Led the student outreach division of the Luddy Student Engagement.",
        "Directed and managed Luddy Saturdays, a fun youth outreach program designed to introduce students to tech through block-based programming and encouragement from mentors.",
        "Engaged Luddy students in community service by recruiting them to volunteer in outreach events across Monroe County.",
        "Trained 15+ volunteers on lesson materials and educational tools to ensure excellent performance at our events.",
        "Served and impacted the lives of 70+ students and families from 1st to 7th grade within the Bloomington community.",
      ],
    },
  ];

  return (
    <section aria-labelledby="work-header">
      <div className="container mb-4">
        <div className="row">
          <div className="col">
            <SectionHeader id="work-header" className="work-header">
              <Emoji>🏢</Emoji>
              Leadership & Work Experience
            </SectionHeader>
          </div>
        </div>
        {workData.map((item) => {
          return (
            <>
              <div className="row mb-1">
                <div className="col-md-8 col-sm-8">
                  <h3 className="h5">
                    <b>
                      <u>{item.company}</u>
                    </b>
                    , {item.location}
                  </h3>
                </div>
                <div className="col-md-4 col-sm-4 text-sm-end">
                  <p className="h6">
                    <Emoji>🗓️</Emoji>
                    <time dateTime={item.start.dateTime}>
                      {item.start.text}
                    </time>{" "}
                    - <time dateTime={item.end.dateTime}>{item.end.text}</time>
                  </p>
                </div>
              </div>
              <div className="row mb-1">
                <div className="col">
                  <p className="h6">
                    <Emoji>💼</Emoji>
                    <i>{item.job}</i>
                  </p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <ul>
                    {item.details.map((detail) => {
                      return <li className="mb-1">{detail}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
