interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Workouts Map',
  siteUrl: 'https://freshfish2022.github.io/workouts_page/',
  logo: 'https://avatars.githubusercontent.com/u/119868298?v=4',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://github.com/Freshfish2022',
    },
    {
      name: 'About',
      url: 'https://github.com/Freshfish2022',
    },
  ],
};

export default data;
