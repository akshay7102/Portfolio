import 'react-multi-carousel/lib/styles.css';


import { FaCode, FaDatabase, FaCloud, FaTools, FaLanguage, FaCogs, FaBrain, FaFileCode, FaCodeBranch, FaDesktop } from 'react-icons/fa';

export const Skills = () => {
  const skillsData = [
    { icon: <FaDesktop />, title: 'Web Development', skills: 'HTML/HTML5, CSS3, Bootstrap, PHP , AJAX, JSON, jQuery, JavaScript, Typescript ' },
    { icon: <FaDatabase />, title: 'Frameworks/Libraries', skills: 'React JS, Redux, Node JS, AngularJS,Backbone.js, Node.js, Sencha Ext js, Sharepoint' },
    { icon: <FaCloud />, title: 'Testing tools', skills: 'JUnit, Mockito, Jasmine, Karma, Mocha, Chai, Selenium.' },
    { icon: <FaTools />, title: 'IDE', skills: 'Apache Tomcat' },
    { icon: <FaBrain />, title: 'Databases', skills: 'Oracle, DB2, SQL Server, AWS, MS-Access ' },
    { icon: <FaFileCode />, title: 'Version Control', skills: 'Version Control    ' },
    { icon: <FaCogs />, title: 'Operating Systems', skills: 'Linux, Windows' },
  ];

  return (
    <section className="skill" id="skills" style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="container">
        <div className="row" >
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>
              <p>Here are some of the technical skills I possess:</p>
              <div className="card-container">
                {skillsData.map((skill, index) => (
                  <div className="card" key={index} style={{ backgroundColor: 'black', color: 'white' }}>
                    <div className="icon">{skill.icon}</div>
                    <h5>{skill.title}</h5>
                    <p>{skill.skills}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

