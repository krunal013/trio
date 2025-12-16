import Mobiledev from "../../public/images/DigitalSolution/Common/mobiledev.webp";
import Webiledev from "../../public/images/DigitalSolution/Common/coding.webp";
import Cms from "../../public/images/DigitalSolution/Common/cms.webp";
import Uiux from "../../public/images/DigitalSolution/Common/uiux.webp";
import Ecom from "../../public/images/DigitalSolution/Common/ecommerce.webp";
//Tech images
import Reactnative from "../../public/images/DigitalSolution/Common/reactnative.webp";
import Flutter from "../../public/images/DigitalSolution/Common/flutter.webp";
import Angular from "../../public/images/DigitalSolution/Common/angular.webp";
import Php from "../../public/images/DigitalSolution/Common/php.webp";
import Nodejs from "../../public/images/DigitalSolution/Common/nodejs.webp";
import Shopify from "../../public/images/DigitalSolution/Common/shopify.webp";
import Wordpress from "../../public/images/DigitalSolution/Common/wordpress.webp";
import Devops from "../../public/images/DigitalSolution/Common/devops.webp";
// Industries images
import Healthcare from "../../public/images/DigitalSolution/Common/healthcare.webp";
import Finance from "../../public/images/DigitalSolution/Common/fintech.webp";
import Education from "../../public/images/DigitalSolution/Common/education.webp";
import Retail from "../../public/images/DigitalSolution/Common/retail.webp";
import RealEstate from "../../public/images/DigitalSolution/Common/realestate.webp";
import FoodAndBeverage from "../../public/images/DigitalSolution/Common/FoodandBeverage.webp";


// Utility function to create URL-friendly slugs
export const slugify = (title) =>
  title.replace(/\s+/g, "").trim(); // e.g., "Mobile App Development" -> "MobileAppDevelopment"

export const Development = [
  {
    icon: Mobiledev,
    title: "Mobile App Development",
    description:
      "We create high-performing & user-friendly mobile apps according to your needs, from strategy and design to deployment.",
    linkText: "From Idea to App Store!",
  },
  {
    icon: Webiledev,
    title: "Web Development",
    description:
      "Our team builds responsive, high-performance websites tailored to your business goals and user experience.",
    linkText: "See How We Build It!",
  },
  {
    icon: Ecom,
    title: "Ecommerce Development",
    description:
      "We develop secure, scalable e-commerce platforms that enhance user experience and drive sales growth.",
    linkText: "Boost Your Online Sales!",
  },
  {
    icon: Cms,
    title: "Content Management System",
    description:
      "We provide custom CMS solutions for easy content management, tailored to your business needs.",
    linkText: "Manage Content Effortlessly!",
  },
  {
    icon: Uiux,
    title: "UI UX Solutions",
    description:
      "We design intuitive and engaging user interfaces that enhance user experience and drive engagement.",
    linkText: "Transform Your UI/UX!",
  },
  {
    icon: Finance,
    title: "Custom Software Development",
    description:
      "we provide custom software development based on client's requirements.",
    linkText: "Explore Custom Software Development!",
  },
];

export const Tech = [
  {
    icon: Reactnative,
    title: "React Native Development",
    description:
      "We build cross-platform mobile apps with React Native for a seamless user experience on both iOS and Android.",
    linkText: "Explore React Native Solutions!",
  },
  {
    icon: Reactnative,
    title: "React JS Development",
    description:
      "We build robust React applications that deliver exceptional user experiences.",
    linkText: "Discover React Apps!",
  },
  {
    icon: Flutter,
    title:" Flutter Development",
    description:
      "We create natively compiled applications for mobile, web, and desktop from a single codebase using Flutter.",
    linkText: "Discover Flutter Apps!",
  },
  {
    icon: Angular,
    title:"Angular Development",
    description:
      "We develop dynamic web applications using Angular for a seamless user experience.",
    linkText: "Explore Angular Solutions!",
  },
  {
    icon: Php,
    title:"PHP Development",
    description:
      "We build secure and scalable web applications using PHP tailored to your business needs.",
    linkText: "Discover PHP Solutions!",
  },
  {
    icon: Nodejs,
    title:"Node JS Development",
    description:
      "We create fast and scalable server-side applications using Node.js for real-time performance.",
    linkText: "Explore Node.js Solutions!",
  },
  {
    icon: Shopify,
    title:"Shopify Development",
    description:
      "We develop custom Shopify stores that enhance user experience and drive sales growth.",
    linkText: "Boost Your Shopify Store!",
  },
  {
    icon: Wordpress,
    title:"WordPress Development",
    description:
      "We create custom WordPress websites that are easy to manage and tailored to your business needs.",
    linkText: "Discover WordPress Solutions!",
  },
  {
    icon: Devops,
    title:"DevOps Services",
    description:
      "We provide comprehensive DevOps services to streamline your development and operations processes.",
    linkText: "Optimize with DevOps!",
  }
];

export const Industries = [
  {
    icon: Healthcare,
    title: "Healthcare",
    description: "Enhancing patient care and management through digital health platforms, telemedicine, and AI-powered insights.",
  },
  {
    icon: Finance,
    title: "Finance",
    description: "Empowering financial institutions with secure, scalable, and data-driven solutions to optimize trading and investment operations.",
  },
  {
    icon: Education,
    title: "Education",
    description: "Empowering institutions with digital learning platforms, smart content management, and student analytics.",
  },
  {
    icon: Retail,
    title: "Retail",
    description: "Delivering seamless online and offline shopping experiences with custom ecommerce and retail management platforms.",
  },
  {
    icon: RealEstate,
    title: "Real Estate",
    description: "Digitally transforming property management, virtual tours, and client engagement for real estate professionals.",
  },
  {
    icon: FoodAndBeverage,
    title: "Food and Beverage",
    description: "Supporting F&B businesses with digital ordering, inventory control, and customer engagement systems."
  }
];

export const Hiring = [
  {
    icon: Reactnative,
    title: "Hire Our React Native Developer",
    description: "Build high-performance cross-platform mobile apps using React Native expertise."
  },
  {
    icon: Flutter,
    title: "Hire Our Flutter Developer",
    description: "Create beautiful, fast, and natively compiled applications with Flutter."
  },
  {
    icon: Angular,
    title: "Hire Our Angular Developer",
    description: "Develop scalable and enterprise-grade web applications using Angular framework."
  },
  {
    icon: Php,
    title: "Hire Our PHP Developer",
    description: "Build secure and dynamic backend systems powered by PHP."
  },
  {
    icon: Nodejs,
    title: "Hire Our Nodejs Developer",
    description: "Develop fast and scalable server-side applications with Node.js."
  },
  {
    icon: Shopify,
    title: "Hire Our Shopify Developer",
    description: "Build responsive, optimized, and conversion-focused Shopify stores."
  },
  {
    icon: Wordpress,
    title: "Hire Our WordPress Developer",
    description: "Create custom WordPress websites with smooth performance and modern UI."
  },
  {
    icon: Devops,
    title: "Hire Our DevOps Engineer",
    description: "Automate workflows, improve deployment speed, and scale infrastructure efficiently."
  }
];


// Combine all services for easy lookup
export const allServices = [...Development, ...Tech, ...Industries,...Hiring    ].map((item) => ({
  ...item,
  slug: slugify(item.title),
}));
