// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed articles, book chapters, and other publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-new-reference-genome-for-the-date-palm-a-gap-free-telomere-to-telomere-assembly-of-the-variety-ajwa-together-with-19-additional-high-quality-genome-assemblies-including-the-barnī-from-al-ʿulā-oasis-now-published-in-scientific-data-celii-et-al-2026",
          title: 'New reference genome for the date palm: a gap-free, telomere-to-telomere assembly of the...',
          description: "",
          section: "News",},{id: "news-from-october-to-december-2026-i-am-based-in-cairo-hosted-by-the-institut-français-d-archéologie-orientale-ifao-to-develop-new-research-partnerships-on-the-date-palm-in-egypt",
          title: 'From October to December 2026, I am based in Cairo, hosted by the...',
          description: "",
          section: "News",},{id: "news-our-study-of-farmers-knowledge-of-date-palm-diversity-in-taghit-oasis-south-western-algeria-combining-folk-nomenclature-fruit-morphometrics-and-four-decades-of-varietal-turnover-has-been-accepted-for-publication-the-preprint-is-available-now-stay-tuned-for-the-final-version",
          title: 'Our study of farmers’ knowledge of date palm diversity in Taghit oasis (south-western...',
          description: "",
          section: "News",},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
