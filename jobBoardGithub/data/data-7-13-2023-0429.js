let jobsdata = [  /* You can add more positions and information based on the format below */
    /* { "id": #, 
      "title": "Position", 
      "description": "example ",  // (you can add html elements like <strong> to make text bold and <ul> and <li> to makes lists, the only exception is <p> because it is the default in the modal window but it would still be recognized so no worries)
      "location": "City, State ",  // (abbreiviate State)
      "locationSlug": "city-state",  // (make sure its lowercase and a dash between city and state, otherwise you may have to use the slugify api and lowercase)
      "department": "Department",
       "style": ["position-backend, styleItem2, styleItem3, ..."]  // you can leave it empty or have a single style (empty ex| "style": "") (single ex| "style: ["position-job"]
    },  // the comma matters if you want to add another entry after, the last entry doesnt need a comma at the end

    // you can copy this as a template
    { "id": #, 
      "title": "position", 
      "description": "example ",  // or you can use `` instead of "" for multiline   
      "location": "City, State ",  
      "locationSlug": "city-state",  
      "department": "Department",
      "style": ["position-"]
    },
     
    // real example
    { "id": 1, 
      "title": "Front-end Developer", 
      "description": `<p>Our Senior Copywriters have a passion for writing and keen understanding of the specific demands of digital media. (In short: love words. Appreciate brevity.)
      In addition to creating content, media and marketing for a wide variety of users and user needs, Senior Copywriters are responsible for brainstorming creative concepts with the project team, developing original campaigns, 
      and representing the writer’s perspective in client presentations. They express their ideas clearly not just on the page (or screen), but face-to-face. Senior Copywriters also help to foster the talents of our awesome 
      copywriters at every level, both leading by example and sharing their experience. We’re looking for writers who are excited about digital experiences and who understand how to use both traditional and digital to hit 
      campaign and business objectives.&nbsp;</p>\r\n<p><strong>What we’d like to see:</strong></p>
      \r\n
      <ul>\r\n
      <li>4+ years of experience, 2+ years at an agency.</li>
      \r\n<li>A strong agency background as well as a proven ability to create copy for a variety of audiences, brands, and industries.</li>
      \r\n<li>Deep experience doing beautiful, smart, print campaigns</li>\r\n<li>Experience in a range of digital platforms from social to online video campaigns.</li>
      \r\n<li>Great presentation skills, both internally and client-facing. We want you to produce great copy and be able to express your ideas clearly.</li>
      \r\n<li>An appreciation for the relationship between textual and visual elements (and great design in general). We expect our copywriters to understand that a product isn’t truly great unless the copy and the designs support each other.</li>
      \r\n<li>Ability to write professionally in a variety of styles for diverse audiences. You need to be able to adapt your voice to each project with extreme ease.</li>
      \r\n<li>Demonstrated ability to work independently when necessary and meet deadlines without handholding.</li>\r\n<li>Bachelor's degree or equivalent experience in a related field.</li>
      \r\n</ul>\r\n
      <p>Huge is an equal opportunity employer (EOE). We strongly support diversity in the workforce.</p>`,
      "location": "Jacksonville, FL", 
      "locationSlug": "jacksonville-fl",
      "department": "Development",
      "style": ["position-frontend"]
    }
    
    // the values must stay in one line, but it there is no limit to how long the length of the line can be, so you can make the description as long as you want.
    
    // its recomended to use notepad or text editor for the description and paste into the description once writen for better readability and organization. 
    */
    
    {
      "id": 1,
      "title": "Project Engineer",
      "description": `<p>Atlantic Engineering Services (AES) is seeking a full-time Project Engineer to support our growing team. With offices in 
        Pittsburgh, PA; Morgantown, WV; and Jacksonville, FL; AES is an award-winning, full-service structural engineering firm with 35 years of experience. 
        Our exceptional team is passionate about serving our clients and supporting the A/E/C community. Providing consulting services to a wide array of industries, 
        professionals at the firm craft structures in which people live, learn, play, heal, worship, and more. 
        As a Project Engineer, you will work directly with our clientele to design solutions for structures and to nurture existing client relationships.</p>
        
    <p><strong>Duties and Responsibilities</strong></p>
    <ul>
        <li>Design and detail solutions for new and existing structures that meet your clients’ goals and that are code compliant, efficient, and thoroughly detailed</li>
        <li>Act as a Project Engineer on several projects simultaneously that can differ significantly in size, schedule, and complexity</li>
        <li>Develop strong client relationships and engage in smart, client-focused business development practices to maintain long-term business relationships</li>
        <li>Act as a team leader, communicating project requirements and expectations, working closely with others to achieve your projects’ goals and schedules</li>
        <li>Responsibly balance available manpower and resources as required to meet your projects’ goals and schedule</li>
    </ul>
    <br>
    
    <p><strong>Requirements and Recommendations</strong></p>
    <ul>
        <li>PE or SE license</li>
        <li>5+ years exhibiting growth in project management and technical expertise for structural engineering </li>
        <li>Competency in organizing and managing project teams to reach successful project conclusions</li>
        <li>Ability to develop and maintain client relationships and to communicate effectively with teams and clients</li>
        <li>Knowledge and experience with analytical software across multiple structural systems</li>
        <li>Recommended - BIM (Revit) Experience</li>
        <li>Recommended - Masters degree in engineering or equivalent program</li>
    </ul>
    <br>
    
    <p><strong>Benefits</strong></p>
    <ul>
        <li>Competitive compensation package that includes holiday and paid time off</li>
        <li>Employer assistance in purchasing company health and vision insurances</li>
        <li>Employer-paid long-term disability insurance</li>
        <li>Employer-paid life insurance</li>
        <li>Voluntary Aflac dental and supplemental insurance policies</li>
        <li>Participation in a self-directed 401K plan with matching</li>
    </ul>
    <br>
    
    <p><strong>Perks</strong></p>
    <ul>
        <li>Hands-on training and support</li>
        <li>Advancement opportunities</li>
        <li>Financial advisement services for investments and retirement options</li>
        <li>Company trips and events</li>
        <li>Community outreach opportunities</li>
        <li>Flexible work environment - work from home options available</li>
    </ul>
    <br>
    
    <p><i>AES is an Equal Opportunity Employer. AES does not discriminate on the basis of race, religion, color, sex, gender identity, sexual orientation, 
        age, nondisqualifying physical or mental disability, national origin, veteran status, or any other basis covered by appropriate law. 
        All employment is decided on the basis of qualifications, merit, and business need.</i></p>`,
      "location": "Pittsburgh, PA",
      "locationSlug": "pittsburgh-pa",
      "department": "Drafting",
      "style": ["bulletPNT"]
    },
    {
      "id": 2,
      "title": "CADD/BIM Tech",
      "description": `<p>Atlantic Engineering Services (AES) is seeking a full-time CADD/BIM Technician to support our growing team. With offices in 
        Pittsburgh, PA; Morgantown, WV; and Jacksonville, FL; AES is an award-winning, full-service structural engineering firm with over 30 years of experience. 
        Our exceptional team of professionals are passionate about serving our clients, providing engineering expertise to the architectural design and construction community. 
        Providing consulting services to a wide array of industries across the east coast, professionals at the firm craft structures in which people live, learn, 
        play, heal, worship, and more. As a CADD/BIM Technician, you will work alongside our structural engineers and architectural clients to prepare construction 
        documents using Revit and AutoCAD software.</p>

    <p><strong>Requirements</strong></p>
    <ul>
        <li>A minimum of 3 years of experience in the Revit production of structural systems and drawings for various types of projects including commercial, 
            industrial, institutional, healthcare, and residential construction</li>

        <li>Experience in the structural drawing preparation process for composite steel, concrete, tilt-up, masonry, and wooden buildings</li>
        <li>Experience with Revit and AutoCAD</li>
        <li>Recommendations</li>
        <li>Technical Associates Degree</li>
    </ul>
    <br>
    
    <p><strong>Benefits</strong></p>
    <ul>
        <li>Competitive compensation package that includes holiday and paid time off</li>
        <li>Employer assistance in purchasing company health and vision insurances</li>
        <li>Employer-paid long term disability insurance</li>
        <li>Employer-paid life insurance</li>
        <li>Voluntary Aflac dental and supplemental insurance policies</li>
        <li>Participation in self-directed 401K plan with matching</li>
    </ul>
    <br>
    
    <p><strong>Perks</strong></p>
    <ul>
        <li>Hands-on training and support</li>
        <li>Advancement opportunities</li>
        <li>Financial advisement services for investments and retirement options</li>
        <li>Company trips and events</li>
        <li>Community outreach opportunities</li>
        <li>Flexible work opportunities, work-from-home options possible</li>
    </ul>
    <br>

    <p><strong>Location Options</strong></p>
    <ul>
        <li>Position available through either the Pittsburgh, Jacksonville, and Morgantown office locations</li>
    </ul>
    <br>

    <p><i>AES is an Equal Opportunity Employer. AES does not discriminate on the basis of race, religion, color, sex, gender identity, sexual orientation, 
        age, non-disqualifying physical or mental disability, national origin, veteran status, or any other basis covered by appropriate law. 
        All employment is decided on the basis of qualifications, merit, and business need.</i></p>`,
      "location": "Pittsburgh, PA",
      "locationSlug": "pittsburgh-pa",
      "department": "Engineering",
      "style": ["bulletPNT"]
    },
    {
      "id": 3,
      "title": "Structural Designer",
      "description": `<p>Atlantic Engineering Services (AES) is seeking a full-time Structural Designer to support our team. With offices in Pittsburgh, PA; Jacksonville, 
        FL; and Morgantown, WV; AES is an award-winning, full-service structural engineering firm with over 30 years of experience. 
        Our exceptional team of professionals is passionate about serving our clients, providing engineering expertise to the architectural design and construction community. 
        Providing consulting services to a wide array of industries across the east coast, professionals at the firm craft structures in which people live, learn, play, heal, 
        worship, and more. As a Structural Designer, you will work alongside our structural engineers and clientele to design solutions for structures 
        using state-of-the-art hardware and software.</p>

    <p><strong>Duties & Responsibilities</strong></p>
    <ul>
        <li>Work directly with and report to our Project Engineers and Managers</li>
        <li>Take responsibility for the accurate design, detailing, and checking of the engineering and design tasks assigned to you by our Project Engineers</li>
        <li>Communicate and coordinate with our BIM/CADD Technicians who are responsible for drafting work</li>
        <li>Maintain man-hours and schedules agreed upon with your upline Project Engineers for your portions of work</li>
        <li>Maintain an open line of communication with our Project Engineers to keep them fully informed of what is transpiring on your projects</li>
        <li>Maintain a high level of confidentiality concerning projects, schedules, details, etc. with our clients, unless approval is obtained from a Project Engineer or Manager</li>
    </ul>
    <br>
    
    <p><strong>Requirements & Recommendations</strong></p>
    <ul>
        <li>Bachelor of Science Degree in Civil Engineering, with an emphasis in Structural Engineering, or equivalent degree</li>
        <li>Engineer in Training (EIT) Certification</li>
        <li>Strong interpersonal skills</li>
        <li>Recommended - Masters of Science in Civil or Structural Engineering, or equivalent degree</li>
        <li>Recommended - Experience with Bluebeam, ENERCALC, RAM Connection, RAM Elements, RAM Structural System</li>
        <li>Recommended - Experience with US building codes including IBC, ASCE 7, ACI, and AISC</li>
        <li>Recommended - Experience designing and analyzing traditional steel and concrete structures</li>
    </ul>
    <br>
    
    <p><strong>Benefits</strong></p>
    <ul>
        <li>Competitive compensation package that includes holiday and paid time off</li>
        <li>Employer assistance in purchasing company health and vision insurances</li>
        <li>Employer-paid long term disability insurance</li>
        <li>Employer-paid life insurance</li>
        <li>Voluntary Aflac dental and supplemental insurance policies</li>
        <li>Participation in self-directed 401K plan with matching</li>
        <li>Flexible work atmosphere with work from home opportunities</li>
    </ul>
    <br>
    
    <p><strong>Perks</strong></p>
    <ul>
        <li>Hands-on training and support</li>
        <li>Advancement opportunities</li>
        <li>Financial advisement services for investments and retirement options</li>
        <li>Company trips and events</li>
        <li>Community outreach opportunities</li>
        <li>Flexible work environment - work from home options available</li>
    </ul>
    <br>
    
    <p><strong>Location Options</strong></p>
    <ul>
        <li>Position available through either the Pittsburgh, Jacksonville, and Morgantown office locations</li>
    </ul>
    <br>
    
    <p><i>AES is an Equal Opportunity Employer. AES does not discriminate on the basis of race, religion, color, sex, gender identity, sexual orientation, 
    age, non-disqualifying physical or mental disability, national origin, veteran status, or any other basis covered by appropriate law. 
    All employment is decided on the basis of qualifications, merit, and business need.</i></p>`,
      "location": "Pittsburgh, PA",
      "locationSlug": "pittsburgh-pa",
      "department": "Engineering",
      "style": ["bulletPNT"]
    },
    {
        "id": 4,
        "title": "Marketing Assistant",
        "description": `<p>Atlantic Engineering Services (AES) is seeking a full-time Marketing Assistant to support our growing team. With offices in 
      Pittsburgh, PA; Morgantown, WV; and Jacksonville, FL; AES is an award-winning, full-service structural engineering firm with 35 years of experience. 
      Our exceptional team is passionate about serving our clients and supporting the A/E/C community. Providing consulting services to a wide array of industries, 
      professionals at the firm craft structures in which people live, learn, play, heal, worship, and more. 
      As a Marketing Assistant, you will support AES’s marketing department and our technical staff to help respond to clients and support our team as we generate new business.</p>
  
      <p><strong>Duties & Responsibilities</strong></p>
      <ul>
          <li>Gather and analyze data to support market research efforts: collect information on customer demographics, preferences, and behaviors, 
              as well as research competitors and industry trends</li>
  
          <li>Create and edit marketing content such as blog posts, social media updates, newsletters, and advertisements</li>
          <li>Assist in the coordination and execution of marketing campaigns, including organizing timelines, tracking deliverables, and ensuring tasks are completed on schedule</li>
          <li>Help manage social media accounts, including scheduling posts, monitoring engagement, responding to comments or messages, and analyzing social media metrics</li>
          <li>Provide administrative support to AES’s marketing and doer-seller teams, involving managing calendars, scheduling meetings, 
              coordinating travel arrangements, handling correspondence, and maintaining files and documents</li>
  
          <li>Collect and analyze data related to marketing campaigns, website traffic, and customer behavior, involving tools like Google Analytics or CRM software 
              to track key performance indicators and generate reports</li>
  
          <li>Help organize and coordinate events such as trade shows, conferences, product launches, or promotional activities. This includes logistics planning, 
              vendor coordination, and ensuring the smooth execution of events.</li>
  
          <li>Interact with internal teams, external partners, or customers to gather information, provide updates, or respond to inquiries</li>
          <li>Stay informed about industry trends, emerging technologies, and marketing best practices through webinars, conferences, or training sessions</li>
          <li>Work closely with marketing team members, sharing ideas, providing input, and collaborating on various projects to achieve marketing objectives</li>
      </ul>
      <br>

      <p><strong>Requirements & Recommendations</strong></p>
      <ul>
          <li>Understanding of marketing principles, strategies, and best practices</li>
          <li>Strong written and verbal communication skills to effectively convey marketing messages, collaborate with team members, 
              interact with stakeholders, and write clear and engaging content</li>
  
          <li>Familiarity with digital marketing channels and tools, including social media platforms, 
              email marketing, content management systems, customer relationship management (CRM) software, and web analytics tools</li>
  
          <li>Proficiency in data analysis and interpretation is beneficial. Knowledge of tools like Google Analytics, 
              Excel, or other data analysis software can help in analyzing marketing campaign performance, customer behavior, and market trends</li>
  
          <li>Strong organizational skills to manage multiple tasks, prioritize deadlines, and coordinate marketing activities effectively</li>
          <li>Attentiveness to detail and the ability to handle administrative tasks efficiently </li>
          <li>Creative thinking skills to contribute to content creation, campaign ideas, and problem-solving</li>
          <li>Strong teamwork and collaboration skills to work effectively with a number of teams at AES are 
              important to work well with others, share ideas, and contribute to a positive team environment</li>
  
          <li>Adaptability, openness to change, and willingness to learn new tools, techniques, and strategies</li>
          <li>Professionalism in behavior, communication, and appearance</li>
          <li>Recommended - Bachelor's degree in marketing, business administration, communications, or a related field</li>
          <li>Recommended - Knowledge of market research techniques, content creation, social media marketing, and data analysis</li>
          <li>Recommended - Experience with graphic design or video editing software may be a plus.</li>
          <li>Recommended - Previous experience within the A/E/C industry for internships, part-time roles, or volunteer experience in marketing or related field</li>
      </ul>
        <br>

      <p><strong>Benefits</strong></p>
      <ul>
          <li>Competitive compensation package that includes holiday and paid time off</li>
          <li>Employer assistance in purchasing company health and vision insurances</li>
          <li>Employer-paid long term disability insurance</li>
          <li>Employer-paid life insurance</li>
          <li>Voluntary Aflac dental and supplemental insurance policies</li>
          <li>Participation in a self-directed 401K plan with matching</li>
      </ul>
        <br>

      <p><strong>Perks</strong></p>
      <ul>
          <li>Hands-on training and support</li>
          <li>Advancement opportunities</li>
          <li>Financial advisement services for investments and retirement options</li>
          <li>Company trips and events</li>
          <li>Community outreach opportunities</li>
          <li>Flexible work environment - work from home options available</li>
      </ul>
        <br>

      <p><i>AES is an Equal Opportunity Employer. AES does not discriminate on the basis of race, religion, color, sex, gender identity, sexual orientation, 
          age, nondisqualifying physical or mental disability, national origin, veteran status, or any other basis covered by appropriate law. 
          All employment is decided on the basis of qualifications, merit, and business need.</i></p>`,
        "location": "Pittsburgh, PA",
        "locationSlug": "pittsburgh-pa",
        "department": "Marketing",
        "style": ["bulletPNT"]
      },
      {
        "id": 5,
        "title": "Senior Project Engineer",
        "description": `<p>Atlantic Engineering Services (AES) seeks a full-time Senior Project Engineer to support our growing team. With offices in 
          Pittsburgh, PA; Morgantown, WV; and Jacksonville, FL; AES is an award-winning, full-service structural engineering firm with 35 years of experience. 
          Our exceptional team is passionate about serving our clients and supporting the A/E/C community. 
          Providing consulting services to various industries, professionals at the firm craft structures in which people live, learn, play, heal, worship, and more. 
          As a Senior Project Engineer, you will play a vital role in providing expert guidance and support in the design, analysis, and implementation of structural 
          engineering projects. Your in-depth knowledge and experience in structural engineering principles will be utilized to ensure the safety, efficiency, and compliance 
          of various construction and infrastructure projects. You will collaborate closely with internal teams, clients, architects, and contractors to deliver 
          high-quality solutions that meet project objectives and adhere to industry standards.
      </p>
      
      <p><strong>Duties & Responsibilities</strong></p>
      <ul>
          <li>Provide technical expertise and consultation throughout the project lifecycle, offering recommendations on structural design, materials, 
              and construction methods. Advise on structural feasibility, load calculations, and building code compliance.</li>
  
          <li>Collaborate with architects, clients, and internal teams to develop project scopes, specifications, and design criteria. 
              Review and analyze architectural and engineering drawings to identify structural requirements and potential challenges.</li>
  
          <li>Conduct comprehensive structural analysis using advanced software and engineering principles to assess the integrity, stability, and performance of structures. 
              Identify potential risks and propose mitigation strategies.</li>
  
          <li>Review and evaluate structural design proposals, calculations, and construction documents to ensure accuracy, adherence to standards, 
              and compliance with applicable codes and regulations.</li>
  
          <li>Prepare detailed engineering reports, technical specifications, and construction documentation, including drawings, schedules, and material specifications. 
              Clearly communicate complex engineering concepts to clients, stakeholders, and project teams.</li>
  
          <li>Collaborate with project managers to develop project schedules, budgets, and resource allocation plans. Monitor project progress, identify issues, 
              and propose corrective actions to ensure timely and successful project completion.</li>
  
          <li>Provide mentorship and guidance to junior engineers and technical staff. Foster a collaborative work environment, promoting knowledge sharing and continuous learning.</li>
  
          <li>Build and maintain strong relationships with clients by understanding their needs, addressing concerns, and delivering high-quality engineering solutions. 
              Collaborate with clients to identify opportunities for additional services or future projects.</li>
      </ul>
      <br>

      <p><strong>Requirements & Recommendations</strong></p>
      <ul>
          <li>Bachelor's degree in Civil or Structural Engineering (Master's degree preferred)</li>
          <li>Professional Engineer (PE) licensure or equivalent certification</li>
          <li>Extensive experience in structural engineering, including consultation on complex projects</li>
          <li>In-depth knowledge of structural engineering principles, building codes, and regulations</li>
          <li>Proficiency in structural analysis software and design tools</li>
          <li>Strong project management skills, including the ability to manage multiple projects simultaneously</li>
          <li>Excellent communication and interpersonal skills, with the ability to collaborate effectively with diverse stakeholders</li>
          <li>Detail-oriented mindset with a focus on quality and accuracy</li>
          <li>Leadership abilities with experience in mentoring and guiding junior engineers</li>
      </ul>
      <br>

      <p><strong>Benefits</strong></p>
      <ul>
          <li>A competitive compensation package that includes holiday and paid time off</li>
          <li>Employer assistance in purchasing company health and vision insurance</li>
          <li>Employer-paid long-term disability insurance</li>
          <li>Employer-paid life insurance</li>
          <li>Voluntary Aflac dental and supplemental insurance policies</li>
          <li>Participation in a self-directed 401K plan with matching</li>
      </ul>
      <br>

      <p><strong>Perks</strong></p>
      <ul>
          <li>Hands-on training and support</li>
          <li>Advancement opportunities</li>
          <li>Financial advisement services for investments and retirement options</li>
          <li>Company trips and events</li>
          <li>Community outreach opportunities</li>
          <li>Flexible work environment - work-from-home options available</li>
      </ul>
      <br>

      <p><i>AES is an Equal Opportunity Employer. AES does not discriminate on the basis of race, religion, color, sex, gender identity, sexual orientation, 
          age, nondisqualifying physical or mental disability, national origin, veteran status, or any other basis covered by appropriate law. 
          All employment is decided on the basis of qualifications, merit, and business need.</i></p>`,
        "location": "Pittsburgh, PA",
        "locationSlug": "pittsburgh-pa",
        "department": "Drafting",
        "style": ["bulletPNT"]
      },
      {
        "id": 6,
        "title": "Senior Project Manager",
        "description": `<p>Atlantic Engineering Services (AES) seeks a full-time Senior Project Manager to support our growing team. With offices in 
          Pittsburgh, PA; Morgantown, WV; and Jacksonville, FL; AES is an award-winning, full-service structural engineering firm with 35 years of experience.
           Our exceptional team is passionate about serving our clients and supporting the A/E/C community. 
           Providing consulting services to various industries, professionals at the firm craft structures in which people live, learn, play, heal, worship, and more. 
           As a Senior Project Manager specializing in structural engineering consultation, you will play a critical role in overseeing and managing complex engineering 
           projects from inception to completion. Your extensive experience in project management and deep understanding of structural engineering principles will be 
           instrumental in ensuring the successful delivery of projects while meeting client objectives, quality standards, and timelines. You will collaborate closely 
           with cross-functional teams, clients, architects, and contractors to drive project efficiency, mitigate risks, and deliver exceptional results.</p>
  
      <p><strong>Duties & Responsibilities</strong></p>
      <ul>
          <li>Lead the planning, coordination, and execution of structural engineering projects, ensuring adherence to project scopes, budgets, and schedules. 
              Develop comprehensive project plans, including work breakdown structures, resource allocation, and procurement strategies.</li>
  
          <li>Serve as the primary point of contact for clients, understanding their project requirements, objectives, and expectations. 
              Proactively communicate project updates, resolve issues, and address client concerns while maintaining strong client relationships.</li>
  
          <li>Provide effective leadership to cross-functional project teams, including engineers, architects, and technicians. 
              Foster a collaborative work environment, promoting teamwork, knowledge sharing, and effective communication.</li>
  
          <li>Identify and assess project risks, develop risk mitigation strategies, and implement proactive measures to ensure project success. 
              Monitor project progress, identify deviations, and take appropriate corrective actions to keep projects on track.</li>
  
          <li>Establish and implement quality control processes to ensure that project deliverables meet established standards and comply with applicable codes and regulations. 
              Conduct regular reviews and audits to verify adherence to quality guidelines.</li>
  
          <li>Optimize resource allocation and utilization, ensuring the efficient allocation of personnel, equipment, and materials. 
              Collaborate with internal teams to identify resource requirements, resolve conflicts, and mitigate bottlenecks.</li>
  
          <li>Oversee the preparation of project documentation, including contracts, proposals, progress reports, and change orders. 
              Ensure accurate and timely reporting of project status, milestones, and financial performance.</li>
  
          <li>Identify opportunities for process improvement and innovation to enhance project delivery efficiency and effectiveness. 
              Implement best practices, lessons learned, and industry advancements to drive continuous improvement initiatives.</li>
  
          <li>Ensure compliance with health and safety regulations and promote a culture of safety on project sites. 
              Implement and enforce proper safety protocols and risk mitigation measures.</li>
      </ul>
      <br>

      <p><strong>Requirements & Recommendations</strong></p>
      <ul>
          <li>Bachelor's degree in Civil or Structural Engineering (Master's degree preferred)</li>
          <li>Proven experience as a Project Manager in structural engineering projects, preferably in a consulting environment</li>
          <li>PMP (Project Management Professional) certification or equivalent is preferred</li>
          <li>Strong knowledge of structural engineering principles, building codes, and regulations</li>
          <li>Demonstrated experience in managing complex projects with multiple stakeholders</li>
          <li>Proficiency in project management software and tools</li>
          <li>Excellent leadership, communication, and interpersonal skills</li>
          <li>Strong problem-solving and decision-making abilities</li>
          <li>Financial acumen with the ability to manage project budgets and financial performance</li>
          <li>Ability to prioritize and manage multiple projects simultaneously</li>
          <li>Health and safety awareness with a commitment to promoting a safe work environment</li>
      </ul>
      <br>

      <p><strong>Benefits</strong></p>
      <ul>
          <li>A competitive compensation package that includes holiday and paid time off</li>
          <li>Employer assistance in purchasing company health and vision insurance</li>
          <li>Employer-paid long-term disability insurance</li>
          <li>Employer-paid life insurance</li>
          <li>Voluntary Aflac dental and supplemental insurance policies</li>
          <li>Participation in a self-directed 401K plan with matching</li>
      </ul>
      <br>

      <p><strong>Perks</strong></p>
      <ul>
          <li>Hands-on training and support</li>
          <li>Advancement opportunities</li>
          <li>Financial advisement services for investments and retirement options</li>
          <li>Company trips and events</li>
          <li>Community outreach opportunities</li>
          <li>Flexible work environment - work-from-home options available</li>
      </ul>
      <br>
  
      <p><i>AES is an Equal Opportunity Employer. AES does not discriminate on the basis of race, religion, color, sex, gender identity, sexual orientation, 
          age, nondisqualifying physical or mental disability, national origin, veteran status, or any other basis covered by appropriate law. 
          All employment is decided on the basis of qualifications, merit, and business need.</i></p>`,
        "location": "Pittsburgh, PA",
        "locationSlug": "pittsburgh-pa",
        "department": "Engineering",
        "style": ["bulletPNT"]
      }
  ]
