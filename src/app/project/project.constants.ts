import { Project, ProjectTitle } from '../core/models/information/information';

const inforTitleList = [
  {
    id: 1,
    title: 'Personal Detail',
    type: 'object',
    data: {
      name: 'Phan Huu Quang',
      designation: 'Developer',
      birthday: '13-02-2001',
      email: 'phanhuuquang9999@gmail.com',
      address: 'Quy Nhon, Binh Dinh',
    },
  },
  {
    id: 2,
    title: 'Educational Background',
    type: 'array',
    data: [
      '●	Quy Nhon University – Information Technology – Bachelor  degree (2019-2023)',
    ],
  },
  {
    id: 3,
    title: 'Certificates and Award',
    type: 'array',
    data: [
      '●	Obtaining a scholarship to encourage learning, University of Quy Nhon (2020-2021).',
      '●	English: B1 5.5 (2023).',
      '●	Go Java Full Stack with Spring Boot and Angular.',
      '●	Understanding TypeScript.',
    ],
  },
  {
    id: 4,
    title: 'Professional Summary',
    type: 'array',
    data: [
      '•	Hard working, seft-confidence, good communication skill.',
      '•	Work under pressure.',
      '•	High teamwork spirit and eager to learn and share.',
      '•	Sociable, friendly communication in team work.',
      '•	Reading comprehension of English documents.',
      '•	Seft-learning, seft-research.',
    ],
  },
  {
    id: 5,
    title: 'Technical Skills',
    type: 'table',
    data: [
      {
        skill: 'JavaScript',
        proficiency: 'Fundamental Awareness',
        experience: '8 month',
      },
      {
        skill: 'Java',
        proficiency: 'Fundamental Awareness',
        experience: '1 month',
      },
      {
        skill: 'TypeScript',
        proficiency: 'Fundamental Awareness',
        experience: '1 month',
      },
      {
        skill: 'ReactJS Front-end Web Framework',
        proficiency: 'Fundamental Awareness',
        experience: '8 month',
      },
      {
        skill: 'Angular Front-end Web Framework',
        proficiency: 'Fundamental Awareness',
        experience: '1 month',
      },
      {
        skill: 'Bootstrap Framework',
        proficiency: 'Fundamental Awareness',
        experience: '1 month',
      },
      {
        skill: 'CSS Preprocessor (LESS / SASS)',
        proficiency: 'Fundamental Awareness',
        experience: '1 month',
      },
      {
        skill: 'Spring Boot',
        proficiency: 'Fundamental Awareness',
        experience: '1 month',
      },
      {
        skill: 'Eclipse IDE',
        proficiency: 'Fundamental Awareness',
        experience: '1 month',
      },
      {
        skill: 'IntelliJ IDEA',
        proficiency: 'Fundamental Awareness',
        experience: '1 month',
      },
      {
        skill: 'Visual Studio Code IDE',
        proficiency: 'Intermediate',
        experience: '1 year',
      },
    ],
  },
  {
    id: 6,
    title: 'Language Skills',
    type: 'array',
    data: ['●	English -	Limited Working Proficiency'],
  },
  // {
  //   id: 7,
  //   title: 'Professional Experience',
  //   type: 'array',
  //   data: [''],
  // },
];

const projectList: Project[] = [
  {
    projectId: 1,
    name: 'Project 1',
    duration: '04/2023 – 27/04/2023',
    teamSize: '11',
    position: 'Member',
    description:
      'From Requirement, analyse and design a website to manage the transporting system including modules for customer and admin.',
    responsibility: 'Developer',
    technology: 'Java, Javascript, ReactJS, HTML/CSS, PostgreSQL',
  },
  {
    projectId: 2,
    name: 'Project 2',
    duration: '11/2023 - 06/2024',
    teamSize: '41',
    position: 'Member',
    description: 'Implement MES solution based on Rakuraku framework',
    responsibility: 'Developer',
    technology: 'ReactJS, JavaScript, Rakuraku, Oracle SQL',
  },
];

const projectTableTitle: ProjectTitle[] = [
  { title: 'Project Name', key: 'name' },
  { title: 'Duration', key: 'duration' },
  { title: 'Team Size', key: 'teamSize' },
  { title: 'Position', key: 'position' },
  { title: 'Description', key: 'description' },
  { title: 'Responsibility', key: 'responsibility' },
  { title: 'Technology', key: 'technology' },
];

export { inforTitleList, projectList, projectTableTitle };
