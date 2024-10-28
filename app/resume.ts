type Experience = {
  title: string;
  company: string;
  date: string;
  description: string;
  skills?: string;
  link?: string;
};

const experience: Experience[] = [
  {
    title: "Frontend Developer",
    company: "Freelance",
    date: "June 2021 - Present",
    description: `Delivered frontend solutions for clients, designing and implementing interactive web applications using React and Vue.
Customized web components to meet clients’ specific needs, with a focus on responsive and accessible design to improve user engagement.
Collaborated with clients to translate business requirements into functional and visually appealing interfaces, managing projects independently and ensuring timely delivery.`,
    skills: `React, Bootstrap, Vue, Client Communication, Planning, Accessibility Standards, Testing`,
    link: "/",
  },
  {
    title: "Sales Development Representative",
    company: "LinkedIn",
    date: "Oct 2023 - Present",
    description: `Supported Benelux businesses in attracting and engaging top talent by promoting LinkedIn’s Talent Solutions.
Worked with mid-market and SMB clients, focusing on outbound strategies and market research to identify key talent acquisition needs.
Leveraged advanced communication and planning skills to engage and retain high-value clients, enhancing LinkedIn’s presence in the Benelux market.`,
    skills: `Stakeholder Management, Client Communication, Project Planning, Sales Methodology, Market Research`,
  },
  {
    title: "Frontend Developer",
    company: "Elements Interactive",
    date: "Oct 2021 - Sept 2023",
    description: `Key Projects:

Led the rewrite of StembureauApp from Angular 1 to React 18, enhancing scalability and optimizing user experience.
Designed a visually appealing and functional landing page for KPN Glassfiber, aligning with the client’s branding and usability expectations.
Contributed to the development of Part-up’s work management tool, enhancing UI features and optimizing performance for a seamless user experience.
Accessibility Officer:

Conducted accessibility audits across web and mobile platforms to ensure WCAG compliance.
Integrated accessibility features, such as screen reader support, and trained team members on best practices.`,
    skills: `React, Bootstrap, Vue, Client Communication, Planning, Accessibility Standards, Testing`,
  },
  {
    title: "Frontend Developer",
    company: "Ontwerpwerk",
    date: "Mar 2021 - Oct 2021",
    description: `Developed custom Drupal themes and modules, implementing a dynamic map with React and integrating it seamlessly into the Drupal ecosystem.
Collaborated with cross-functional teams to create responsive, user-friendly websites, balancing stakeholder requirements with technical feasibility.`,
    skills: `React, Drupal, JavaScript, jQuery, Sass, Client Communication, Planning`,
  },
];

type Education = {
  degree: string;
  school: string;
  date: string;
  description: string;
};

const education: Education[] = [
  {
    degree: "Gandhi training",
    school: "Corinor",
    date: "2023",
    description: `I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
            Vim's keystroke commands and tabs' flexibility for personal viewing
            preferences. This extends to my support for static typing, where its
            early error detection ensures cleaner code, and my preference for dark
            mode, which eases long coding sessions by reducing eye strain.`,
  },
  {
    degree: "Full Stack Javascript Academy",
    school: "Codaisseur Academy",
    date: "2020 - 2021",
    description: `I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
                Vim's keystroke commands and tabs' flexibility for personal viewing
                preferences. This extends to my support for static typing, where its
                early error detection ensures cleaner code, and my preference for dark
                mode, which eases long coding sessions by reducing eye strain.`,
  },
  {
    degree: "Mandela training",
    school: "Corinor",
    date: "2020 ",
    description: `I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
            Vim's keystroke commands and tabs' flexibility for personal viewing
            preferences. This extends to my support for static typing, where its
            early error detection ensures cleaner code, and my preference for dark
            mode, which eases long coding sessions by reducing eye strain.`,
  },
  {
    degree: "Columbus training",
    school: "Corinor",
    date: "2020",
    description: `I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
            Vim's keystroke commands and tabs' flexibility for personal viewing
            preferences. This extends to my support for static typing, where its
            early error detection ensures cleaner code, and my preference for dark
            mode, which eases long coding sessions by reducing eye strain.`,
  },
  {
    degree: "HBO Human Resource Management",
    school: "Avans Hogeschool",
    date: "2017 - 2020",
    description: `I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
            Vim's keystroke commands and tabs' flexibility for personal viewing
            preferences. This extends to my support for static typing, where its
            early error detection ensures cleaner code, and my preference for dark
            mode, which eases long coding sessions by reducing eye strain.`,
  },
];

export { experience, education };
