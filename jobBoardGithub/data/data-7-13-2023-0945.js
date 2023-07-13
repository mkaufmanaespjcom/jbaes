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
      "description": "example ",  
      "location": "City, State ",  
      "locationSlug": "city-state",  
      "department": "Department",
      "style": ["position-"]
    },
     
    // real example
    { "id": 1, 
      "title": "Front-end Developer", 
      "description": "<p>Our Senior Copywriters have a passion for writing and keen understanding of the specific demands of digital media. (In short: love words. Appreciate brevity.) In addition to creating content, media and marketing for a wide variety of users and user needs, Senior Copywriters are responsible for brainstorming creative concepts with the project team, developing original campaigns, and representing the writer’s perspective in client presentations. They express their ideas clearly not just on the page (or screen), but face-to-face. Senior Copywriters also help to foster the talents of our awesome copywriters at every level, both leading by example and sharing their experience. We’re looking for writers who are excited about digital experiences and who understand how to use both traditional and digital to hit campaign and business objectives.&nbsp;</p>\r\n<p><strong>What we’d like to see:</strong></p>\r\n<ul>\r\n<li>4+ years of experience, 2+ years at an agency.</li>\r\n<li>A strong agency background as well as a proven ability to create copy for a variety of audiences, brands, and industries.</li>\r\n<li>Deep experience doing beautiful, smart, print campaigns</li>\r\n<li>Experience in a range of digital platforms from social to online video campaigns.</li>\r\n<li>Great presentation skills, both internally and client-facing. We want you to produce great copy and be able to express your ideas clearly.</li>\r\n<li>An appreciation for the relationship between textual and visual elements (and great design in general). We expect our copywriters to understand that a product isn’t truly great unless the copy and the designs support each other.</li>\r\n<li>Ability to write professionally in a variety of styles for diverse audiences. You need to be able to adapt your voice to each project with extreme ease.</li>\r\n<li>Demonstrated ability to work independently when necessary and meet deadlines without handholding.</li>\r\n<li>Bachelor's degree or equivalent experience in a related field.</li>\r\n</ul>\r\n<p>Huge is an equal opportunity employer (EOE). We strongly support diversity in the workforce.</p>",
      "location": "Jacksonville, FL", 
      "locationSlug": "jacksonville-fl",
      "department": "Development",
      "style": ["position-frontend"]
    }
    
    // the values must stay in one line, but it there is no limit to how long the length of the line can be, so you can make the description as long as you want.
    
    // its recomended to use notepad or text editor for the description and paste into the description once writen for better readability and organization. 
    */
    
    { "id": 1, 
      "title": "Front-end Developer", 
      "description": "<p>Our Senior Copywriters have a passion for writing and keen understanding of the specific demands of digital media. (In short: love words. Appreciate brevity.) In addition to creating content, media and marketing for a wide variety of users and user needs, Senior Copywriters are responsible for brainstorming creative concepts with the project team, developing original campaigns, and representing the writer’s perspective in client presentations. They express their ideas clearly not just on the page (or screen), but face-to-face. Senior Copywriters also help to foster the talents of our awesome copywriters at every level, both leading by example and sharing their experience. We’re looking for writers who are excited about digital experiences and who understand how to use both traditional and digital to hit campaign and business objectives.&nbsp;</p>\r\n<p><strong>What we’d like to see:</strong></p>\r\n<ul>\r\n<li>4+ years of experience, 2+ years at an agency.</li>\r\n<li>A strong agency background as well as a proven ability to create copy for a variety of audiences, brands, and industries.</li>\r\n<li>Deep experience doing beautiful, smart, print campaigns</li>\r\n<li>Experience in a range of digital platforms from social to online video campaigns.</li>\r\n<li>Great presentation skills, both internally and client-facing. We want you to produce great copy and be able to express your ideas clearly.</li>\r\n<li>An appreciation for the relationship between textual and visual elements (and great design in general). We expect our copywriters to understand that a product isn’t truly great unless the copy and the designs support each other.</li>\r\n<li>Ability to write professionally in a variety of styles for diverse audiences. You need to be able to adapt your voice to each project with extreme ease.</li>\r\n<li>Demonstrated ability to work independently when necessary and meet deadlines without handholding.</li>\r\n<li>Bachelor's degree or equivalent experience in a related field.</li>\r\n</ul>\r\n<p>Huge is an equal opportunity employer (EOE). We strongly support diversity in the workforce.</p>",
      "location": "Jacksonville, FL", 
      "locationSlug": "jacksonville-fl",
      "department": "Development",
      "style": ["position-frontend"]
    },
    {
      "id": 2,
      "title": "Project Engineer",
      "description": ' <p>Atlantic Engineering Services (AES) is seeking a full-time Project Engineer to support our growing team. With offices in Pittsburgh, PA; Morgantown, WV; and Jacksonville, FL; AES is an award-winning, full-service structural engineering firm with 35 years of experience. Our exceptional team is passionate about serving our clients and supporting the A/E/C community. Providing consulting services to a wide array of industries, professionals at the firm craft structures in which people live, learn, play, heal, worship, and more. As a Project Engineer, you will work directly with our clientele to design solutions for structures and to nurture existing client relationships.</p>
        
    <p>Duties and Responsibilities </p>
    <ul>
        <li>Design and detail solutions for new and existing structures that meet your clients’ goals and that are code compliant, efficient, and thoroughly detailed</li>
        <li>Act as a Project Engineer on several projects simultaneously that can differ significantly in size, schedule, and complexity</li>
        <li>Develop strong client relationships and engage in smart, client-focused business development practices to maintain long-term business relationships</li>
        <li>Act as a team leader, communicating project requirements and expectations, working closely with others to achieve your projects’ goals and schedules</li>
        <li>Responsibly balance available manpower and resources as required to meet your projects’ goals and schedule</li>
    </ul>

    <p>Requirements and Recommendations</p>
    <ul>
        <li>PE or SE license</li>
        <li>5+ years exhibiting growth in project management and technical expertise for structural engineering </li>
        <li>Competency in organizing and managing project teams to reach successful project conclusions</li>
        <li>Ability to develop and maintain client relationships and to communicate effectively with teams and clients</li>
        <li>Knowledge and experience with analytical software across multiple structural systems</li>
        <li>Recommended - BIM (Revit) Experience</li>
        <li>Recommended - Masters degree in engineering or equivalent program</li>
    </ul>

    <p>Benefits</p>
    <ul>
        <li>Competitive compensation package that includes holiday and paid time off</li>
        <li>Employer assistance in purchasing company health and vision insurances</li>
        <li>Employer-paid long-term disability insurance</li>
        <li>Employer-paid life insurance</li>
        <li>Voluntary Aflac dental and supplemental insurance policies</li>
        <li>Participation in a self-directed 401K plan with matching</li>
    </ul>

    <p>Perks</p>
    <ul>
        <li>Hands-on training and support</li>
        <li>Advancement opportunities</li>
        <li>Financial advisement services for investments and retirement options</li>
        <li>Company trips and events</li>
        <li>Community outreach opportunities</li>
        <li>Flexible work environment - work from home options available</li>
        <li>AES is an Equal Opportunity Employer. AES does not discriminate on the basis of race, religion, color, sex, gender identity, sexual orientation, age, nondisqualifying physical or mental disability, national origin, veteran status, or any other basis covered by appropriate law. All employment is decided on the basis of qualifications, merit, and business need.</li>
    </ul>',
      "location": "Pittsburgh, PA",
      "locationSlug": "pittsburgh-pa",
      "department": "Development",
      "style": ""
    },
    {
      "id": 3,
      "title": "UX Designer NOT LOL",
      "description": "Im purple.",
      "location": "Pittsburgh, PA",
      "locationSlug": "pittsburgh-pa",
      "department": "Design",
      "style": ""
    },
    {
      "id": 4,
      "title": "UX Designess",
      "description": "Join our UX design team and help creas.",
      "location": "Jacksonville, FL",
      "locationSlug": "jacksonville-fl",
      "department": "Design",
      "style": ""
    },
    {
      "id": 5,
      "title": "Engineer",
      "description": "Join us to plan and build things.",
      "location": "Jacksonville, FL",
      "locationSlug": "jacksonville-fl",
      "department": "Engineering",
      "style": ""
    },
    {
      "id": 6,
      "title": "Drafter",
      "description": "Join us.",
      "location": "Jacksonville, FL",
      "locationSlug": "jacksonville-fl",
      "department": "Drafting",
      "style": ""
    }
  ]
