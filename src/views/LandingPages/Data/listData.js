

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system//sections";

import imgPricing from "@/assets/img/pricing.png";
import imgFeatures from "@/assets/img/features.png";
import imgBlogPosts from "@/assets/img/blog-posts.png";
import imgTestimonials from "@/assets/img/testimonials.png";
import imgTeam from "@/assets/img/team.png";
import imgStat from "@/assets/img/stat.png";
import imgContent from "@/assets/img/content.png";
import imgPagination from "@/assets/img/pagination.png";
import imgAlert from "@/assets/img/alerts.jpg";
import imgPopover from "@/assets/img/popovers.jpg";
import imgModal from "@/assets/img/modals.jpg";
import imgDropdowns from "@/assets/img/dropdowns.jpg";

export default [
  {
    heading: "Design Blocks",
    description:
      "A selection of 45 page sections that fit perfectly in any combination",
    items: [
      {
        image: imgFeatures,
        title: "Page Headers",
        subtitle: "10 Examples",
        route: "page-headers",
        pro: false
      },
      {
        image: imgFeatures,
        title: "Features",
        subtitle: "14 Examples",
        route: "page-features",
        pro: false
      },
      {
        image: imgPricing,
        title: "Pricing",
        subtitle: "8 Examples",
        route: "",
        pro: true
      },
      {
        image: imgFeatures,
        title: "FAQ",
        subtitle: "1 Example",
        route: "",
        pro: true
      },
      {
        image: imgBlogPosts,
        title: "Blog Posts",
        subtitle: "11 Examples",
        route: "",
        pro: true
      },
      {
        image: imgTestimonials,
        title: "Testimonials",
        subtitle: "11 Examples",
        route: "",
        pro: true
      },
      {
        image: imgTeam,
        title: "Teams",
        subtitle: "6 Examples",
        route: "",
        pro: true
      },
      {
        image: imgStat,
        title: "Stats",
        subtitle: "3 Examples",
        route: "",
        pro: true
      },
      {
        image: imgFeatures,
        title: "Call to Actions",
        subtitle: "8 Examples",
        route: "",
        pro: true
      },
      {
        image: imgFeatures,
        title: "Applications",
        subtitle: "6 Examples",
        route: "",
        pro: true
      },
      {
        image: imgFeatures,
        title: "Logo Areas",
        subtitle: "4 Examples",
        route: "",
        pro: true
      },
      {
        image: imgFeatures,
        title: "Footers",
        subtitle: "10 Examples",
        route: "",
        pro: true
      },
      {
        image: imgFeatures,
        title: "General Cards",
        subtitle: "9 Examples",
        route: "",
        pro: true
      },
      {
        image: imgContent,
        title: "Content Sections",
        subtitle: "8 Examples",
        route: "",
        pro: true
      }
    ]
  },
  {
    heading: "Navigation",
    description: "30+ components that will help go through the pages",
    items: [
      {
        image: imgPagination,
        title: "Navbars",
        subtitle: "4 Examples",
        route: "navigation-navbars",
        pro: false
      },
      {
        image: imgPagination,
        title: "Nav Tabs",
        subtitle: "2 Nav Tabs",
        route: "navigation-navtabs",
        pro: false
      },
      {
        image: imgPagination,
        title: "Pagination",
        subtitle: "3 Examples",
        route: "navigation-pagination",
        pro: false
      }
    ]
  },
  // {
  //   heading: "Input Areas",
  //   description:
  //     "50+ elements that you need for text manipulation and insertion",
  //   items: [
  //     {
  //       image: `${imagesPrefix}/newsletters.jpg`,
  //       title: "Newsletters",
  //       subtitle: "6 Examples",
  //       route: "",
  //       pro: true
  //     },
  //     {
  //       image: `${imagesPrefix}/contact-sections.jpg`,
  //       title: "Contact Sections",
  //       subtitle: "8 Examples",
  //       route: "",
  //       pro: true
  //     },
  //     {
  //       image: `${imagesPrefix}/forms.jpg`,
  //       title: "Forms",
  //       subtitle: "3 Examples",
  //       route: "inputareas-forms",
  //       pro: false
  //     },
  //     {
  //       image: `${imagesPrefix}/inputs.jpg`,
  //       title: "Inputs",
  //       subtitle: "6 Examples",
  //       route: "inputareas-inputs",
  //       pro: false
  //     }
  //   ]
  // },
  {
    heading: "Attention Catchers",
    description:
      "20+ Fully coded components that popup from different places of the screen",
    items: [
      {
        image: imgAlert,
        title: "Alerts",
        subtitle: "4 Examples",
        route: "ac-alerts",
        pro: false
      },
      {
        image: imgPopover,
        title: "Tooltips & Popovers",
        subtitle: "2 Examples",
        route: "ac-tooltips-popovers",
        pro: false
      },
      {
        image: imgModal,
        title: "Modals",
        subtitle: "5 Examples",
        route: "ac-modals",
        pro: false
      }
    ]
  },
  {
    heading: "Elements",
    description:
      "80+ carefully crafted small elements that come with multiple colors and shapes",
    items: [
      {
        image: imgDropdowns,
        title: "Dropdowns",
        subtitle: "2 Examples",
        route: "el-dropdowns",
        pro: false
      },
      {
        image: imgDropdowns,
        title: "Toggles",
        subtitle: "2 Examples",
        route: "el-toggles",
        pro: false
      },
      {
        image: imgDropdowns,
        title: "Social Buttons",
        subtitle: "2 Examples",
        route: "",
        pro: true
      },
      {
        image: imgDropdowns,
        title: "Breadcrumbs",
        subtitle: "1 Example",
        route: "el-breadcrumbs",
        pro: false
      },
      {
        image: imgDropdowns,
        title: "Badges",
        subtitle: "3 Examples",
        route: "el-badges",
        pro: false
      }
    ]
  }
];
