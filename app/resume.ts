type Experience = {
  title: string;
  company: string;
  date: string;
  description: string;
};

const experience: Experience[] = [
  {
    title: "Software Engineer",
    company: "Google",
    date: "June 2021 - Present",
    description: `I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`,
  },
  {
    title: "Software Engineer",
    company: "Facebook",
    date: "June 2019 - June 2021",
    description: `I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`,
  },
  {
    title: "Software Engineer",
    company: "Microsoft",
    date: "June 2017 - June 2019",
    description: `I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`,
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
    degree: "Bachelor of Science",
    school: "University of Washington",
    date: "June 2013 - June 2017",
    description: `I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
            Vim's keystroke commands and tabs' flexibility for personal viewing
            preferences. This extends to my support for static typing, where its
            early error detection ensures cleaner code, and my preference for dark
            mode, which eases long coding sessions by reducing eye strain.`,
  },
  {
    degree: "High School Diploma",
    school: "Redmond High School",
    date: "June 2009 - June 2013",
    description: `I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
                Vim's keystroke commands and tabs' flexibility for personal viewing
                preferences. This extends to my support for static typing, where its
                early error detection ensures cleaner code, and my preference for dark
                mode, which eases long coding sessions by reducing eye strain.`,
  },
];

export { experience, education };
