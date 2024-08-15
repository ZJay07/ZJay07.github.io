import {
    thoughtmachine,
    unifyai,
    buzzSocial,
    foodCLUB,
    macquarie,
  } from '../assets';
  
  export const navLinks = [
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'work',
      title: 'Work',
    },
    {
      id: 'contact',
      title: 'Contact',
    },
  ];
  
  export const experiences = [
    {
      title: 'Flutter Developer',
      company_name: 'Buzz Social',
      icon: buzzSocial,
      iconBg: '#E6DEDD',
      date: 'March 2023 - September 2023',
      points: [
        'In charge of the implementation of front-end features in the application using Flutter from Figma diagrams',
        'Currently on the Apple Store and Google Play Store',
      ],
    },
    {
      title: 'Mobile Development Lead',
      company_name: 'FoodCLUB',
      icon: foodCLUB,
      iconBg: '#383E56',
      date: 'April 2023 - August 2023',
      points: [
        'Led Android MVP development in Kotlin for investors and co-led company\'s Android team.',
        'Organised workflows, meetings and establish strong communication between teams and the founders.',
      ],
    },
    {
      title: 'Backend Engineer',
      company_name: 'Thought Machine',
      icon: thoughtmachine,
      iconBg: '#383E56',
      date: 'July 2023 - September 2023',
      points: [
        'Enhanced Deployment Hub API observability in the infrastructure team by implementing Prometheus metrics in Golang, configuring kube-state-metrics, and establishing database restoration and cluster readiness metrics.',
        'Improved system insights and usability by creating Grafana dashboards for Kubernetes metrics visualization and integrating React.js frontend for enhanced user experience, link sharing, and discussion facilitation.',
      ],
    },
    {
      title: 'Machine Learning Contributor / Engineer',
      company_name: 'UnifyAI',
      icon: unifyai,
      iconBg: '#E6DEDD',
      date: 'Jan 2024 - Present',
      points: [
        'Improved the Ivy framework by fixing test cases and implementing new features in their Machine Learning library',
        'Enhance the current Ivy framework and extending features as part of the development team',
      ],
    },
    {
      title: 'Software Engineer',
      company_name: 'Macquarie Group',
      icon: macquarie,
      iconBg: '#E6DEDD',
      date: 'June 2024 - August 2024',
      points: [
        'Implemented task automation to update database schemas based on changes from the exchange limit definitions',
        'Enhanced data collection efficiency by 200% through concurrent API calls.'
      ],
    },
  ];
