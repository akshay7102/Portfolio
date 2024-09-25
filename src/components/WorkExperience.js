import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import WorkExperienceIcon from './WorkExperienceIcon'; // Replace with your own icon component
import OptumIcon from '../assets/img/Optum.png'
import AmazonIcon from '../assets/img/amazonLogo.png'
import SmartKnowerIcon from '../assets/img/Smart Knower.png'

const WorkExperience = () => {
  return (
    <section className="work-experience" id="work-experience">
      <h2 className="text-center" style={{ paddingTop: '20px'}}>Work Experience</h2><br/><br/>
      <VerticalTimeline>

      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'grey', color: 'white' }}
          date="July 2023 - December 2024"
          iconStyle={{ background: 'grey', color: 'white' }}
        >
        <img src={OptumIcon} alt='Optum Logo'/><br /><br />
          <h3 className="vertical-timeline-element-title">Associate Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Optum, Hyderabad, India</h4>
          <p>
          &nbsp;&nbsp;- &nbsp;Collaborated on developing and enhancing existing chatbot systems, improving their functionality and performance.<br/><br/>
          &nbsp;&nbsp;- &nbsp;Designed and implemented new chatbots using advanced natural language processing (NLP) techniques and machine learning algorithms.<br/><br/>
          &nbsp;&nbsp;- &nbsp;Worked on migrating chatbot UI code from AngularJS to ReactJS, ensuring a modern and efficient user interface.<br/><br/>
          &nbsp;&nbsp;- &nbsp;Led the migration of data from MongoDB to CosmosDB and made the required changes in Go Lang applications to use data from CosmosDB instead of MongoDB.<br/><br/>
          &nbsp;&nbsp;- &nbsp;Received the <strong>Individual Excellence Award</strong> for the month of November 2022, recognizing outstanding contributions and achievements.<br/><br/>
          &nbsp;&nbsp;- &nbsp;Worked on <strong>"Surest Real-Time Notifications"</strong> displaying notifications in the UI based on the context of conversations between agents and customers. Implemented using Microsoft Luis, Azure Event Hub, and Azure Functions.<br/><br/>
          &nbsp;&nbsp;- &nbsp;Improved the Microsoft Luis model, increasing accuracy in detecting the type of intent based on prompts given to the chatbot.<br/><br/>
          &nbsp;&nbsp;- &nbsp;Utilized Terraform to write Infrastructure as Code (IAC) for deploying Azure applications, ensuring efficient and scalable infrastructure setup.<br/><br/>
          &nbsp;&nbsp;- &nbsp;Worked closely with cross-functional teams to gather requirements and implemented infrastructure changes using Terraform.<br/><br/>
          &nbsp;&nbsp;- &nbsp;Received the <strong>Diamond Recognition Award</strong> for Outstanding Performance in July 2023, acknowledging exceptional dedication and impact.<br/><br/>
          </p>
          <br /> <br />
          <h6>Skills: Java · JavaScript · Node.js · React.js · Go (Programming Language) · Terraform · Microsoft Azure · Jenkins · Natural Language Processing (NLP) · Software Infrastructure · MongoDB · Azure Cosmos DB · AngularJS ·  Relational Databases · SQL · Front-end Development · Programming · Machine Learning · Algorithms · Object-Oriented Programming (OOP) · Software Design · Web Engineering · Software Industry · Engineering </h6>
        </VerticalTimelineElement>

      
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'black', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="January 2022 - June 2022"
          iconStyle={{ background: 'black', color: 'white' }}
        //   icon={<WorkExperienceIcon />}
        >
            <img src={AmazonIcon} alt='amazon logo' /><br /><br />
          <h3 className="vertical-timeline-element-title">Software Development Engineer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Amazon, Hyderabad, India</h4>
          <p>
          1. Enhance Meteor Self Service with CTI Information: <br/><br/>
          &nbsp;&nbsp;- &nbsp;Simplified new operation registration by allowing the creation of new Plugin Owners.<br/>
          &nbsp;&nbsp;- &nbsp;Developed dynamic fetching of Plugin Owner List based on domain, relation, and service name.<br/>
          &nbsp;&nbsp;- &nbsp;Enhanced user interface for rendering and selecting Plugin Owners during operation registration.<br/>
          &nbsp;&nbsp;- &nbsp;Implemented a system to register operations with new Plugin Owner details.<br/><br/>
          2. Add Service Registration Feature in Meteor Self Service:<br/><br/>
          &nbsp;&nbsp;- &nbsp;Addressed manual effort for G2S2 change promotion during New Service Registration.<br/>
          &nbsp;&nbsp;- &nbsp;Created a New Service Registration dashboard, collecting service property details.<br/>
          &nbsp;&nbsp;- &nbsp;Implemented CreateMeteorService API for staging new service registrations.<br/>
          &nbsp;&nbsp;- &nbsp;Enabled users to register service property configurations on the website.<br/>
          &nbsp;&nbsp;- &nbsp;Implemented a tracking mechanism for CR status, allowing users to monitor changes and promotions.<br/>
          </p>
          <br /> <br />
          <h6>Skills: Java · JavaScript · AngularJS · Node.js · React.js · Amazon Web Services (AWS) · Spring MVC · Spring Boot  · Amazon EC2 · Object-Oriented Programming (OOP) · Databases · Software Development · Data Structures · Bootstrap · Agile Methodologies </h6>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'grey', color: 'white' }}
          date="May 2021 - June 2021"
          iconStyle={{ background: 'grey', color: 'white' }}
        //   icon={<WorkExperienceIcon />}
        >
            <img src={SmartKnowerIcon} alt='Smart Knower Logo'/><br /><br />
          <h3 className="vertical-timeline-element-title">Data Science Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Smart Knower, Bangalore, India</h4>
          <p>
          &nbsp;&nbsp;- &nbsp;Worked on the project titled "Covid 19 Pandemic Analysis" as part of the internship program.<br/><br/>
          &nbsp;&nbsp;- &nbsp;Developed insightful visualizations and reports using Tableau to present key findings and trends related to the pandemic.<br/><br/>
          &nbsp;&nbsp;- &nbsp;Collaborated with the team to explore advanced machine learning models for predicting Covid-19 outcomes.<br/><br/>
          &nbsp;&nbsp;- &nbsp;Additionally, created a real-time website to showcase the Covid-19 analysis and provide interactive visualizations to users.<br/><br/>
          </p>
        </VerticalTimelineElement>
        
       
      </VerticalTimeline>
    </section>
  );
};

export default WorkExperience;
