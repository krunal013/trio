export async function generateStaticParams() {
  return allServices.map((item) => ({
    service: item.slug,
  }));
}


import React from "react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { allServices } from "@/Data/digitalServices";
import MobileDev1 from "@/components/DigitalSolutions/Development/MobileDev";
import Faq from "@/components/DigitalSolutions/Common/Faq";
import CTA from "@/components/Cta";
import WhyUS from "@/components/DigitalSolutions/Tech/WhyUS";
import WhyUSDev from "@/components/DigitalSolutions/Development/WhyUS";
import WebDev from "@/components/DigitalSolutions/Development/WebDev";
import UiUx from "@/components/DigitalSolutions/Development/UiUx";
import CustomDev from "@/components/DigitalSolutions/Development/CustomDev";
import TechSolutions from "@/components/Home/TechSolutions";
import TechHero from "@/components/DigitalSolutions/Tech/TechHero";
import OurTech from "@/components/DigitalSolutions/Tech/OurTech";
import CaseStudySuggest from "@/components/CaseStudies/CaseStudySuggest";
import IndHero from "@/components/DigitalSolutions/Industries/IndHero";
// /app/Data/faqData.js
import HealthInd from "../../../../public/images/DigitalSolution/Industies/healthcarehero.webp";
import Fintechero from "../../../../public/images/DigitalSolution/Industies/fintechero.webp";
import Educationhero from "../../../../public/images/DigitalSolution/Industies/educationhero.webp";
import Logisticshero from "../../../../public/images/DigitalSolution/Industies/logisticshero.webp";
import Ondemandhero from "../../../../public/images/DigitalSolution/Industies/on-demandhero.webp";
import IndBenifits from "@/components/DigitalSolutions/Industries/IndBenifits";

import { FaAmbulance, FaChartLine, FaLock, FaGlobe, FaCog, FaLightbulb, FaHeartbeat } from "react-icons/fa";
import IndTypes from "@/components/DigitalSolutions/Industries/IndTypes";
import { FaBookMedical, FaPersonCirclePlus, FaStethoscope, FaUserNurse } from "react-icons/fa6";
import EcommerceDev from "@/components/DigitalSolutions/Development/EcommerceDev";
import {
  AngularDevelopment,
  CMSFaqs,
  ecommerceFaqs,
  educationFaqs,
  financeFaqs,
  FlutterDevelopment,
  FoodsandBeverage,
  healthcareFaqs,
  HireOurReactNativeDeveloperfaq,
  HireOurFlutterDeveloperfaq,
  HireOurAngularDeveloperfaq,
  HireOurPHPDeveloperfaq,
  HireOurNodejsDeveloperfaq,
  HireOurShopifyDeveloperfaq,
  HireOurWordpressDeveloperfaq,
  HireOurDevOpsEngineerfaq,
  mobileAppFaqs,
  NodeJSDevelopment,
  PHPDevelopment,
  ReactJSDevelopment,
  ReactNativeDevelopment,
  DevOpsServices,
  realEstateFaqs,
  retailFaqs,
  ShopifyDevelopment,
  UiUXFaqs,
  webAppFaqs,
  WordPressDevelopment,
  CustomSoftwareDevelopmentFaqs
} from "@/Data/FaqData";

import DevProccess from "@/components/DigitalSolutions/Development/DevProccess";
import CmsDev from "@/components/DigitalSolutions/Development/CmsDev";
import HiringTypes from "@/components/DigitalSolutions/Hiring/HiringTypes";
import HiringSteps from "@/components/DigitalSolutions/Hiring/HiringSteps";
import HiringHero from "@/components/DigitalSolutions/Hiring/HiringHero";
import Container from "@/components/ui/Container";





const ServicePage = async ({ params }) => {
  const { service } = await params; // e.g., "MobileAppDevelopment"
  const data = allServices.find((s) => s.slug === service);

  if (!data) return notFound();

  return (
    <>
    <Breadcrumb
        paths={[
          { name: "Home", href: "/" },
          { name: "Digital Solutions", href: "/DigitalSolutions" },
          { name: data.title, href: `/DigitalSolutions/${service}` },
        ]}
        title={data.title}
        description={data.description}
      buttonText="Get in Touch"
      buttonLink="/contact"
      />
        
      {service === "MobileAppDevelopment" && (
        <div className="mt-5">
          <MobileDev1 />
          <WhyUSDev techname="Mobile App" description="Choose Triosphere for a seamless mobile app development experience." />
          <CaseStudySuggest />
          <Faq
            title="Mobile App Development FAQs"
            subtitle="FAQ"
            faqs={mobileAppFaqs}
          />
          <CTA />
        </div>
      )}

      {service === "WebDevelopment" && (
        <div className="mt-5">
          <WebDev />
          <WhyUSDev techname="Web Development" description="Choose Triosphere for cutting-edge web development solutions." />
          <Faq
            title="Answers You’re Looking For About Web Development"
            subtitle="FAQ"
            faqs={webAppFaqs}
          />
        </div>
      )}
      {service === "EcommerceDevelopment" && (
        <div className="mt-5">
          <EcommerceDev />
          <WhyUSDev techname="E-commerce Development" description="Choose Triosphere for robust e-commerce solutions that drive sales." />
          <Faq
            title="E-commerce Development FAQs"
            subtitle="FAQ"
            faqs={ecommerceFaqs}
          />
        </div>
      )}
      {service === "ContentManagementSystem" && (
        <div className="mt-5">
          <CmsDev />
          <CustomDev />
          <TechSolutions />
          <WhyUSDev techname="CMS Development" description="Choose Triosphere for flexible and scalable CMS solutions." />
          <Faq
            title="CMS Development FAQs"
            subtitle="FAQ"
            faqs={CMSFaqs}
          />
        </div>
      )}
      {service === "UIUXSolutions" && (
        <div className="mt-5">
          <UiUx />
          <WhyUSDev techname="UI/UX Solutions" description="Choose Triosphere for innovative UI/UX designs that enhance user engagement." />
          <Faq
            title="Answers about UI/UX Solutions"
            subtitle="FAQ"
            faqs={UiUXFaqs}
          />
        </div>
      )}
      {service === "CustomSoftwareDevelopment" && (
        <div className="">
          <CustomDev />
          <WhyUSDev techname="Custom Software Development" description="Choose Triosphere for tailored software solutions that fit your unique business needs." />
          <Faq
            title="Custom Software Development FAQs"
            subtitle="FAQ"
            faqs={CustomSoftwareDevelopmentFaqs}
          />
        </div>
      )}
      {service === "AIAgentDevelopment" && (
        <div className="mt-5">
          <WhyUSDev techname="AI-Agent Development" description="Choose Triosphere for intelligent AI-Agent solutions tailored to your needs." />
          <Faq
            title="AI-Agent Development FAQs"
            subtitle="FAQ"
            faqs={AI_AgentFaqs}
          />
        </div>
      )}
      {service === "ReactNativeDevelopment" && (
        <div className="">
          <TechHero
            heading="Powerful React Native App Development Services for Business Growth at Triosphere Tech."
            description1="Looking to build high-performing cross-platform mobile applications? We are a trusted React Native app development company in India, offering end-to-end solutions — from concept to deployment — using Facebook’s powerful open-source framework. Our React Native experts craft apps that work seamlessly on both iOS and Android platforms with native-like performance and stunning UI/UX experiences. Whether you’re a startup, SME, or enterprise, we deliver scalable and future-ready mobile applications tailored to your business goals."
            description2="Want to hire experienced React Native developers? Our dedicated React Native team comprises skilled engineers and architects who specialize in delivering smooth, responsive, and secure cross-platform apps. From API integration to real-time features, we help you leverage the power of React Native to reduce time-to-market and development costs without compromising quality. Hire our React Native professionals to bring your app idea to life — efficiently and cost-effectively."
            points={[
              "Custom Cross-Platform App Development",
              "React Native UI/UX Design & Prototyping",
              "API Development & Third-Party Integration",
              "React Native App Migration & Modernization",
              "Real-Time & Cloud-Enabled App Solutions",
              "App Testing, Debugging, and Optimization",
              "Maintenance, Support, and Version Upgrades",
            ]}
          />
          <DevProccess />
          <WhyUS
            techname="React Native"
            description="Leverage the power of React Native for fast, cross-platform app development with native-like performance and seamless scalability."
          />
          <CaseStudySuggest />
          <Faq
            title="React Native Development FAQs"
            subtitle="FAQ"
            faqs={ReactNativeDevelopment}
          />
          <CTA />
        </div>
      )}


      {service === "FlutterDevelopment" && (
        <div className="mt-5">
          <TechHero
            heading="High-Performance Flutter App Development Services for Seamless Multi-Platform Experiences."
            description1="Looking to build beautiful, fast, and natively compiled applications for mobile, web, and desktop — all from a single codebase? Our Flutter app development services empower businesses to create exceptional cross-platform experiences with reduced cost and development time. As a trusted Flutter development company in India, we combine Google’s Flutter framework with our design and engineering expertise to deliver visually stunning, feature-rich applications that perform like native apps."
            description2="Our dedicated Flutter developers craft pixel-perfect UIs, integrate advanced APIs, and ensure consistent performance across Android, iOS, and the web. Whether you’re a startup seeking an MVP or an enterprise aiming for digital scalability, we provide end-to-end Flutter development — from concept and design to deployment and long-term support."
            points={[
              "Custom Flutter App Design & Development",
              "Cross-Platform Mobile, Web & Desktop Solutions",
              "Flutter UI/UX Design & Animation Implementation",
              "Integration with Firebase & Third-Party APIs",
              "Migration from Native to Flutter Framework",
              "Quality Assurance, Testing & Performance Optimization",
              "Maintenance, Updates & Long-Term Support",
            ]}
          />
          <DevProccess />
          <WhyUS
            techname="Flutter"
            description="Create beautiful, high-performance applications for mobile, web, and desktop from a single codebase with Flutter."
          />
          <CaseStudySuggest />
          <Faq
            title="Flutter Development FAQs"
            subtitle="FAQ"
            faqs={FlutterDevelopment}
          />
          <CTA />
        </div>
      )}

      {service === "AngularDevelopment" && (
        <div className="mt-5">
          <TechHero
            heading="High-Performance Angular Development Services for Scalable Web Applications."
            description1="Build robust, scalable, and dynamic web applications using Angular — one of the most powerful front-end frameworks by Google. Our Angular development team leverages TypeScript and Angular’s modular architecture to deliver responsive, secure, and feature-rich web solutions tailored to your business goals. Whether you’re building enterprise-grade dashboards, SPAs, or custom portals, we ensure speed, scalability, and seamless performance."
            description2="With extensive experience in Angular versions and a deep understanding of modern web ecosystems, our developers craft maintainable and future-ready applications. We focus on code quality, reusability, and clean architecture to help your business stay ahead of the competition."
            points={[
              "Custom Angular Web Application Development",
              "Single Page Application (SPA) Development",
              "Enterprise Dashboard & Portal Development",
              "API Integration & RESTful Services",
              "Angular Migration & Version Upgrades",
              "Angular UI/UX Design & Optimization",
              "Performance Tuning & Maintenance Support",
            ]}
          />
          <DevProccess />
          <WhyUS
            techname="Angular"
            description="Develop dynamic and feature-rich web applications using Angular for a seamless, high-performance user experience."
          />
          <CaseStudySuggest />
          <Faq
            title="Angular Development FAQs"
            subtitle="FAQ"
            faqs={AngularDevelopment}
          />
          <CTA />
        </div>
      )}

      {service === "PHPDevelopment" && (
        <div className="mt-5">
          <TechHero
            heading="Custom PHP Web Development Services for Scalable and Secure Web Solutions."
            description1="Harness the flexibility and power of PHP to build dynamic, database-driven web applications that scale with your business. Our PHP developers create secure, high-performing, and feature-packed web platforms using the latest frameworks like Laravel, CodeIgniter, and Symfony. From CMS development to enterprise-grade applications, we deliver solutions that meet your unique requirements."
            description2="Our team combines deep technical expertise with creative problem-solving to deliver clean, optimized, and well-documented PHP code. Whether you need a small business website or a complex enterprise application, we help you achieve reliability, scalability, and long-term success."
            points={[
              "Custom PHP Application Development",
              "PHP Framework Development (Laravel, CodeIgniter, Symfony)",
              "CMS & E-commerce Web Solutions",
              "API & Third-Party Integration",
              "Legacy System Modernization & Migration",
              "PHP Application Testing & Optimization",
              "Ongoing Support & Maintenance",
            ]}
          />
          <DevProccess />
          <WhyUS
            techname="PHP"
            description="Build secure, scalable, and high-performance web applications using PHP tailored to your business goals."
          />
          <CaseStudySuggest />
          <Faq
            title="PHP Development FAQs"
            subtitle="FAQ"
            faqs={PHPDevelopment}
          />
          <CTA />
        </div>
      )}

      {service === "ReactJSDevelopment" && (
        <div className="mt-5">
          <TechHero
            heading="Modern React JS Development Services to Build Dynamic, Scalable Web Applications."
            description1="Empower your business with high-performance web applications built using React JS — the most powerful JavaScript library for modern front-end development. As a leading React JS development company in India, we specialize in creating dynamic, SEO-friendly, and interactive web solutions that deliver exceptional user experiences. Our team leverages React’s component-based architecture to build fast, scalable, and maintainable applications that align with your business goals."
            description2="Whether you’re building a new platform or enhancing an existing one, our expert React developers can help you transform ideas into robust, production-ready web apps. From custom UI/UX design to API integration and progressive web app (PWA) development, we provide full-cycle React JS development tailored to your unique needs. Partner with us to accelerate your digital transformation using React JS."
            points={[
              "Custom React JS Web Application Development",
              "Single Page Application (SPA) Development",
              "Progressive Web App (PWA) Development",
              "React JS Frontend Architecture & Component Design",
              "API Integration & Backend Connectivity",
              "Migration to React or React Version Upgrades",
              "Ongoing Support, Optimization & Maintenance",
            ]}
          />
          <DevProccess />
          <WhyUS
            techname="React JS"
            description="Build robust, scalable, and interactive web applications with our expert React JS development team."
          />
          <CaseStudySuggest />
          <Faq
            title="React JS Development FAQs"
            subtitle="FAQ"
            faqs={ReactJSDevelopment}
          />
          <CTA />

        </div>
      )}

      {service === "NodeJSDevelopment" && (
        <div className="mt-5">
          <TechHero
            heading="Next-Generation Node.js Development Services for Scalable Server-Side Applications."
            description1="Leverage the power of Node.js to build lightning-fast, real-time, and scalable backend solutions. As a leading Node.js development company, we specialize in creating efficient APIs, real-time chat applications, and microservices architectures. Our developers use the event-driven, non-blocking I/O model of Node.js to deliver high-performance applications with unmatched scalability."
            description2="From startups to enterprises, we help businesses harness Node.js to build modern digital ecosystems that are reliable and maintainable. Whether it’s integrating databases, managing APIs, or scaling your app to millions of users, our team ensures smooth and optimized performance."
            points={[
              "Custom Node.js Application Development",
              "API Development & Integration",
              "Real-Time Chat & Collaboration Tools",
              "Microservices Architecture Development",
              "Serverless & Cloud-Based App Solutions",
              "Node.js Performance Optimization",
              "Maintenance, Support, and Scalability Services",
            ]}
          />
          <DevProccess />
          <WhyUS
            techname="Node JS"
            description="Create high-performance and scalable backend systems with our expert Node.js development services."
          />
          <CaseStudySuggest />
          <Faq
            title="Node.js Development FAQs"
            subtitle="FAQ"
            faqs={NodeJSDevelopment}
          />
          <CTA />
        </div>
      )}

      {service === "WordPressDevelopment" && (
        <div className="mt-5">
          <TechHero
            heading="Custom WordPress Development Services for Stunning, High-Performance Websites."
            description1="Empower your brand with a feature-rich and user-friendly website built on WordPress — the world’s most popular content management system. Our team specializes in developing fully customized WordPress websites that are SEO-optimized, responsive, and easy to manage. From simple blogs to advanced e-commerce sites, we build digital experiences that engage and convert."
            description2="With expertise in custom theme design, plugin development, and performance optimization, we ensure your WordPress site delivers a fast and secure browsing experience. Whether you want to revamp an existing website or launch a new one, we provide end-to-end WordPress solutions aligned with your goals."
            points={[
              "Custom WordPress Website Design & Development",
              "Theme Development & Customization",
              "Plugin Development & Integration",
              "WooCommerce E-commerce Solutions",
              "WordPress Speed Optimization",
              "SEO-Friendly Website Structure",
              "Maintenance, Security & Updates",
            ]}
          />
          <DevProccess />
          <WhyUS
            techname="WordPress"
            description="Create a feature-rich, SEO-friendly website with our professional WordPress development services."
          />
          <CaseStudySuggest />
          <Faq
            title="WordPress Development FAQs"
            subtitle="FAQ"
            faqs={WordPressDevelopment}
          />
          <CTA />
        </div>
      )}

      {service === "ShopifyDevelopment" && (
        <div className="mt-5">
          <TechHero
            heading="Professional Shopify Development Services for Scalable Online Stores."
            description1="Launch and grow your online business with our Shopify development expertise. We create custom Shopify stores that combine stunning design with seamless functionality to enhance user experience and drive conversions. From store setup to theme customization and third-party integrations, we deliver e-commerce platforms that perform flawlessly across all devices."
            description2="Our Shopify experts help you build scalable, conversion-focused online stores tailored to your brand identity. Whether you’re launching a new store or optimizing an existing one, we provide design, development, and support services to help your e-commerce business thrive."
            points={[
              "Custom Shopify Store Design & Development",
              "Shopify Theme Customization",
              "App Development & Third-Party Integrations",
              "Shopify Store Migration",
              "Performance Optimization & Conversion Boosting",
              "Multi-Channel E-commerce Setup",
              "Ongoing Support & Maintenance",
            ]}
          />
          <DevProccess />
          <WhyUS
            techname="Shopify"
            description="Build a powerful and conversion-optimized Shopify store tailored to your e-commerce goals."
          />
          <CaseStudySuggest />
          <Faq
            title="Shopify Development FAQs"
            subtitle="FAQ"
            faqs={ShopifyDevelopment}
          />
          <CTA />
        </div>
      )}

      {service === "DevOpsServices" && (
        <div className="mt-5">
          <TechHero
            heading="Comprehensive DevOps Services to Streamline Development and Deployment Pipelines."
            description1="Accelerate your software delivery process with our end-to-end DevOps services. We help organizations integrate development and operations for faster, more reliable software releases. Our team implements CI/CD pipelines, automates infrastructure, and ensures continuous monitoring to improve deployment frequency and system reliability."
            description2="With expertise across cloud platforms like AWS, Azure, and Google Cloud, we build scalable and secure DevOps ecosystems tailored to your workflow. Whether you’re modernizing legacy systems or automating deployment processes, our DevOps specialists help you achieve agility and efficiency at scale."
            points={[
              "DevOps Consulting & Implementation",
              "Continuous Integration & Continuous Deployment (CI/CD)",
              "Infrastructure Automation (IaC)",
              "Cloud Infrastructure Management (AWS, Azure, GCP)",
              "Monitoring, Logging & Performance Optimization",
              "Containerization with Docker & Kubernetes",
              "Security, Compliance & Disaster Recovery",
            ]}
          />
          <DevProccess />
          <WhyUS
            techname="DevOps"
            description="Streamline your software development lifecycle with our automation-driven DevOps solutions."
          />
          <CaseStudySuggest />
          <Faq
            title="DevOps Services FAQs"
            subtitle="FAQ"
            faqs={DevOpsServices}
          />
          <CTA />
        </div>
      )}

      {service === "Healthcare" && (
        <div className="mt-5">
          <IndHero
            ind_hero_heading="Revolutionizing Healthcare with Smart Digital Solutions"
            ind_hero_description1="Our healthcare app development services empower hospitals, clinics, and patients with seamless digital connectivity. From telemedicine platforms to smart health monitoring systems, we build HIPAA-compliant healthcare solutions that simplify patient management and improve care delivery."
            ind_hero_description2="Whether you’re developing an electronic health record system, fitness tracker, or remote patient monitoring solution, our experienced developers combine cutting-edge technology with secure infrastructure to ensure reliability, privacy, and scalability."
            ind_hero_description3="Partner with us to transform healthcare experiences through innovative digital solutions that enhance patient outcomes and operational efficiency."
            Imgsrc={HealthInd}
          />
          <IndBenifits
            mainheading="Benefits of Having a Digital Solution in Healthcare Industry"
            benefits={[
              {
                icon: <FaAmbulance />,
                title: "Improved Patient Care",
                description: "Our solutions enhance patient engagement and streamline communication between patients and healthcare providers."
              },
              {
                icon: <FaChartLine />,
                title: "Data Analytics",
                description: "Leverage data analytics to gain insights into patient health trends and improve treatment outcomes."
              },
              {
                icon: <FaLock />,
                title: "Enhanced Security",
                description: "We prioritize data security and compliance, ensuring patient information is protected at all times."
              },
              {
                icon: <FaGlobe />,
                title: "Telemedicine Capabilities",
                description: "Our platforms support telemedicine, making healthcare more accessible to patients regardless of location."
              },
              {
                icon: <FaCog />,
                title: "Integration with Existing Systems",
                description: "We ensure seamless integration with your existing healthcare systems for a smooth transition."
              },
              {
                icon: <FaLightbulb />,
                title: "Innovative Solutions",
                description: "Stay ahead with our cutting-edge technology solutions tailored for the healthcare industry."
              }
            ]}
          />
          <IndTypes
            typeheading="Types of Digital Solutions in Healthcare Industry"
            types={[
              {
                icon: <FaBookMedical />,
                title: "Electronic Health Records (EHR)",
                color: "blue"
              },
              {
                icon: <FaStethoscope />,
                title: "Telemedicine Solutions",
                color: "green"
              },
              {
                icon: <FaUserNurse />,
                title: "Patient Management Systems",
                color: "purple"
              },
              {
                icon: <FaPersonCirclePlus />,
                title: "Patient Management Systems",
                color: "purple"
              },
              {
                icon: <FaHeartbeat />,
                title: "Health Monitoring Apps",
                color: "red"
              },
              {
                icon: <FaAmbulance />,
                title: "Appointment Scheduling Systems",
                color: "orange"
              }
            ]}
          />
          <WhyUS
            techname="Healthcare Digital Solutions"
            description="Transform healthcare delivery with our innovative digital solutions designed to enhance patient care and operational efficiency."
          />
          <CaseStudySuggest />
          <Faq
            title="Healthcare FAQs"
            subtitle="FAQ"
            faqs={healthcareFaqs}
          />
          <CTA />
        </div>
      )}

      {service === "Finance" && (
        <div className="mt-5">
          <IndHero
            ind_hero_heading="Transforming Finance with Secure Digital Solutions"
            ind_hero_description1="Our fintech app development services help financial institutions and startups create secure, user-friendly digital platforms. From mobile banking apps to investment management systems, we build solutions that enhance customer engagement and streamline financial operations."
            ind_hero_description2="Whether you’re developing a payment gateway, budgeting tool, or trading platform, our expert developers ensure compliance with industry regulations while delivering seamless user experiences."
            ind_hero_description3="Partner with us to drive innovation in finance through cutting-edge digital solutions that empower users and optimize processes."
            Imgsrc={Fintechero}
          />
          <IndBenifits
            mainheading="Benefits of Having a Digital Solution in Finance Industry"
            benefits={[
              {
                icon: <FaLock />,
                title: "Enhanced Security",
                description: "Our solutions prioritize data security and compliance, ensuring sensitive financial information is protected."
              },
              {
                icon: <FaChartLine />,
                title: "Real-Time Analytics",
                description: "Leverage real-time data analytics to make informed financial decisions and improve customer experiences."
              },
              {
                icon: <FaGlobe />,
                title: "Global Accessibility",
                description: "Our platforms enable users to access financial services anytime, anywhere, enhancing convenience."
              },
              {
                icon: <FaCog />,
                title: "Automation of Processes",
                description: "Streamline financial operations with automated workflows and increasing efficiency."
              },
              {
                icon: <FaLightbulb />,
                title: "Innovative Financial Solutions",
                description: "Stay ahead with our cutting-edge technology solutions tailored for the finance industry."
              }
            ]}
          />
          <IndTypes
            typeheading="Types of Digital Solutions in Finance Industry"
            types={[
              {
                icon: <FaChartLine />,
                title: "Mobile Banking Apps",
                color: "blue"
              },
              {
                icon: <FaLock />,
                title: "Payment Gateways",
                color: "green"
              },
              {
                icon: <FaGlobe />,
                title: "Investment Management Platforms",
                color: "purple"
              },
              {
                icon: <FaCog />,
                title: "Budgeting & Personal Finance Tools",
                color: "red"
              },
              {
                icon: <FaLightbulb />,
                title: "Lending & Credit Solutions",
                color: "orange"
              }
            ]}
          />
          <WhyUS
            techname="Finance Digital Solutions"
            description="Drive financial innovation with our secure and user-centric digital solutions tailored for the finance industry."
          />
          <CaseStudySuggest />
          <Faq
            title="Finance Services FAQs"
            subtitle="FAQ"
            faqs={financeFaqs}
          />
          <CTA />
        </div>
      )}
      {service === "Education" && (
        <div className="mt-5">
          <IndHero
            ind_hero_heading="Empowering Education with Innovative Digital Solutions"
            ind_hero_description1="Our edtech app development services enable educational institutions and e-learning platforms to deliver engaging, interactive learning experiences. From virtual classrooms to learning management systems, we build solutions that enhance student engagement and streamline educational delivery."
            ind_hero_description2="Whether you’re developing an online course platform, assessment tool, or collaboration app, our skilled developers combine modern technology with user-centric design to create effective educational solutions."
            ind_hero_description3="Partner with us to revolutionize education through digital solutions that foster learning and drive academic success."
            Imgsrc={Educationhero}
          />
          <IndBenifits
            mainheading="Benefits of Having a Digital Solution in Education Industry"
            benefits={[
              {
                icon: <FaGlobe />,
                title: "Global Reach",
                description: "Our solutions enable educational institutions to reach students worldwide, breaking geographical barriers."
              },
              {
                icon: <FaChartLine />,
                title: "Personalized Learning",
                description: "Leverage data analytics to create personalized learning paths that cater to individual student needs."
              },
              {
                icon: <FaCog />,
                title: "Streamlined Administration",
                description: "Automate administrative tasks to improve efficiency and allow educators to focus on teaching."
              },
              {
                icon: <FaLightbulb />,
                title: "Interactive Learning Experiences",
                description: "Engage students with interactive content, gamification, and collaborative tools."
              }
            ]}
          />
          <IndTypes
            typeheading="Types of Digital Solutions in Education Industry"
            types={[
              {
                icon: <FaBookMedical />,
                title: "Learning Management Systems (LMS)",
                color: "blue"
              },
              {
                icon: <FaPersonCirclePlus />,
                title: "Virtual Classrooms",
                color: "green"
              },
              {
                icon: <FaStethoscope />,
                title: "E-learning Platforms",
                color: "purple"
              },
              {
                icon: <FaUserNurse />,
                title: "Assessment & Evaluation Tools",
                color: "red"
              }
            ]}
          />
          <WhyUS
            techname="Education Digital Solutions"
            description="Transform education with our innovative digital solutions designed to enhance learning experiences and streamline administration."
          />
          <CaseStudySuggest />
          <Faq
            title="Education Services FAQs"
            subtitle="FAQ"
            faqs={educationFaqs}
          />
          <CTA />
        </div>
      )}
      {service === "RealEstate" && (
        <div className="mt-5">
          <IndHero
            ind_hero_heading="Digitally Transforming Real Estate Experiences"
            ind_hero_description1="Our real estate app development services help agencies, brokers, and property managers create seamless digital platforms. From property listing apps to virtual tour solutions, we build tools that enhance client engagement and streamline real estate operations."
            ind_hero_description2="Whether you’re developing a rental management system, CRM platform, or real estate marketplace, our experienced developers ensure user-friendly interfaces and robust functionality."
            ind_hero_description3="Partner with us to elevate real estate experiences through innovative digital solutions that connect buyers, sellers, and agents."
            Imgsrc={Ondemandhero}
          />
          <IndBenifits
            mainheading="Benefits of Having a Digital Solution in Real Estate Industry"
            benefits={[
              {
                icon: <FaGlobe />,
                title: "Wider Audience Reach",
                description: "Our solutions enable real estate businesses to reach a broader audience through online platforms."
              },
              {
                icon: <FaChartLine />,
                title: "Enhanced Client Engagement",
                description: "Leverage digital tools to improve interactions with clients and provide better service."
              },
              {
                icon: <FaCog />,
                title: "Streamlined Property Management",
                description: "Automate property listings, client management, and other operations for efficiency."
              },
              {
                icon: <FaLightbulb />,
                title: "Innovative Viewing Experiences",
                description: "Create immersive property viewing experiences with virtual tours and interactive features."
              }
            ]}
          />
          <IndTypes
            typeheading="Types of Digital Solutions in Real Estate Industry"
            types={[
              {
                icon: <FaBookMedical />,
                title: "Property Listing Platforms",
                color: "blue"
              },
              {
                icon: <FaPersonCirclePlus />,
                title: "Rental Management Systems",
                color: "green"
              },
              {
                icon: <FaStethoscope />,
                title: "Client Relationship Management (CRM)",
                color: "purple"
              },
              {
                icon: <FaUserNurse />,
                title: "Virtual Tour Solutions",
                color: "red"
              }
            ]}
          />
          <WhyUS
            techname="Real Estate Digital Solutions"
            description="Enhance real estate operations with our innovative digital solutions designed to connect buyers, sellers, and agents."
          />
          <CaseStudySuggest />
          <Faq
            title="Real Estate Services FAQs"
            subtitle="FAQ"
            faqs={realEstateFaqs}
          />
          <CTA />
        </div>
      )}
      {service === "FoodandBeverage" && (
        <div className="mt-5">
          <IndHero
            ind_hero_heading="Enhancing Food & Beverage with Smart Digital Solutions"
            ind_hero_description1="Our food and beverage app development services empower restaurants, cafes, and food delivery services with seamless digital platforms. From online ordering systems to inventory management solutions, we build tools that enhance customer engagement and streamline operations."
            ind_hero_description2="Whether you’re developing a food delivery app, reservation system, or loyalty program, our skilled developers combine modern technology with user-centric design to create effective F&B solutions."
            ind_hero_description3="Partner with us to transform food and beverage experiences through innovative digital solutions that delight customers and optimize business processes."
            Imgsrc={Ondemandhero}
          />
          <IndBenifits
            mainheading="Benefits of Having a Digital Solution in Food & Beverage Industry"
            benefits={[
              {
                icon: <FaGlobe />,
                title: "Increased Reach",
                description: "Our solutions enable food and beverage businesses to reach a wider audience through online platforms."
              },
              {
                icon: <FaChartLine />,
                title: "Improved Customer Engagement",
                description: "Leverage digital tools to enhance customer interactions and build loyalty."
              },
              {
                icon: <FaCog />,
                title: "Streamlined Operations",
                description: "Automate order processing, inventory management, and other operations for efficiency."
              },
              {
                icon: <FaLightbulb />,
                title: "Innovative Dining Experiences",
                description: "Create unique dining experiences with features like online reservations and personalized menus."
              }
            ]}
          />
          <IndTypes
            typeheading="Types of Digital Solutions in Food & Beverage Industry"
            types={[
              {
                icon: <FaBookMedical />,
                title: "Online Ordering Systems",
                color: "blue"
              },
              {
                icon: <FaPersonCirclePlus />,
                title: "Reservation Management",
                color: "green"
              },
              {
                icon: <FaStethoscope />,
                title: "Inventory Management Solutions",
                color: "purple"
              },
              {
                icon: <FaUserNurse />,
                title: "Loyalty & Rewards Programs",
                color: "red"
              }
            ]}
          />
          <WhyUS
            techname="Food & Beverage Digital Solutions"
            description="Revolutionize food and beverage services with our innovative digital solutions designed to enhance customer experiences and streamline operations."
          />
          <CaseStudySuggest />
          <Faq
            title="Food & Beverage Services FAQs"
            subtitle="FAQ"
            faqs={FoodsandBeverage}
          />
          <CTA />
        </div>
      )}
      {service === "Retail" && (
        <div className="mt-5">
          <IndHero
            ind_hero_heading="Transforming Retail with Innovative Digital Solutions"
            ind_hero_description1="Our retail app development services empower retailers to create seamless digital shopping experiences. From e-commerce platforms to inventory management systems, we build solutions that enhance customer engagement and streamline retail operations."
            ind_hero_description2="Whether you’re developing an online store, point-of-sale system, or customer loyalty program, our skilled developers combine modern technology with user-centric design to create effective retail solutions."
            ind_hero_description3="Partner with us to revolutionize retail experiences through digital solutions that drive sales and optimize business processes."
            Imgsrc={Logisticshero}
          />
          <IndBenifits
            mainheading="Benefits of Having a Digital Solution in Retail Industry"
            benefits={[
              {
                icon: <FaGlobe />,
                title: "Expanded Market Reach",
                description: "Our solutions enable retailers to reach a broader audience through online platforms."
              },
              {
                icon: <FaChartLine />,
                title: "Enhanced Customer Engagement",
                description: "Leverage digital tools to improve customer interactions and build brand loyalty."
              },
              {
                icon: <FaCog />,
                title: "Optimized Inventory Management",
                description: "Automate inventory tracking and management for improved efficiency."
              },
              {
                icon: <FaLightbulb />,
                title: "Innovative Shopping Experiences",
                description: "Create unique shopping experiences with features like personalized recommendations and seamless checkout."
              }
            ]}
          />
          <IndTypes
            typeheading="Types of Digital Solutions in Retail Industry"
            types={[
              {
                icon: <FaBookMedical />,
                title: "E-commerce Platforms",
                color: "blue"
              },
              {
                icon: <FaPersonCirclePlus />,
                title: "Point-of-Sale (POS) Systems",
                color: "green"
              },
              {
                icon: <FaStethoscope />,
                title: "Inventory Management Solutions",
                color: "purple"
              },
              {
                icon: <FaUserNurse />,
                title: "Customer Loyalty Programs",
                color: "red"
              }
            ]}
          />
          <WhyUS
            techname="Retail Digital Solutions"
            description="Enhance retail operations with our innovative digital solutions designed to connect retailers with customers and optimize business processes."
          />
          <CaseStudySuggest />
          <Faq
            title="Retail Services FAQs"
            subtitle="FAQ"
            faqs={retailFaqs}
          />
          <CTA />
        </div>
      )}
      {service === "HireOurReactNativeDeveloper" && (
        <div className="mt-5">

          <HiringHero
            heading="Hire Expert React Native Developers"
            dec1="React Native is one of the most powerful cross-platform frameworks, enabling businesses to build fast, scalable, and high-performance mobile applications with a single codebase for both iOS and Android."
            dec2="Whether you want to develop a new application from scratch or modernize your existing mobile apps, our dedicated React Native developers bring deep expertise in JavaScript, TypeScript, Redux, APIs, UI frameworks, native modules, and mobile performance optimization."
            dec3="Our remote engineers have delivered mobile solutions across industries like finance, healthcare, ecommerce, sports, travel, education, logistics, and entertainment. From startups to enterprises, we help companies accelerate mobile development with flexible hiring models."
            dec4="Looking to hire an individual React Native developer or a complete remote mobile app development team at a competitive price? Connect with Triosphere Tech today and bring your mobile app ideas to life."
          />

          <HiringTypes />

          <HiringSteps />

          <OurTech />

          <WhyUS
            techname="Hire React Native Developer for"
            description="Build fast, scalable mobile applications with a single codebase using Triosphere Tech’s React Native expertise."
          />

          <Faq
            title="FAQ About Hiring React Native Developers"
            subtitle="FAQ"
            faqs={HireOurReactNativeDeveloperfaq}
          />

        </div>
      )}


      {service === "HireOurFlutterDeveloper" && (
        <div className="mt-5">
          <HiringHero
            heading="Hire Expert Flutter Developers"
            dec1="Flutter is Google’s UI toolkit that empowers businesses to build high-performance, visually stunning mobile applications using a single codebase for both Android and iOS."
            dec2="Our dedicated Flutter developers specialize in Dart, state management (Provider, Riverpod, Bloc), custom UI layouts, API integrations, Firebase, animations, and native module development."
            dec3="We have delivered top-quality mobile solutions in ecommerce, healthcare, fintech, travel, fitness, and education. Whether you're an emerging startup or an established enterprise, our remote Flutter team helps accelerate your app development timeline."
            dec4="Looking for an individual Flutter expert or a complete remote Flutter app development team at a competitive cost? Partner with Triosphere Tech today and scale your mobile app vision."
          />

          <HiringTypes />

          <HiringSteps />
          <OurTech />
          <WhyUS
            techname="Hire Flutter Developer for"
            description="Create high-performance, visually stunning cross-platform apps powered by Flutter and Triosphere Tech’s engineering excellence."
          />
          <Faq
            title="FAQ About Hiring Flutter Developers"
            subtitle="FAQ"
            faqs={HireOurFlutterDeveloperfaq}
          />
        </div>
      )}

      {service === "HireOurAngularDeveloper" && (
        <div className="mt-5">
          <HiringHero
            heading="Hire Professional Angular Developers"
            dec1="Angular is a robust enterprise-ready JavaScript framework ideal for building powerful, scalable, and secure web applications with structured architecture."
            dec2="Our Angular developers are skilled in TypeScript, RxJS, NgRx, Angular Material, REST APIs, form handling, component-driven architecture, and performance optimization."
            dec3="From admin dashboards and enterprise portals to SaaS applications and business automation tools, our team has successfully delivered Angular solutions across industries like retail, healthcare, finance, and education."
            dec4="Whether you want to upgrade your existing Angular app or build a new one, hire our remote Angular developers to accelerate your development with reliability and expertise."
          />
        <HiringTypes />

          <HiringSteps />

          <OurTech />
          <WhyUS
            techname="Hire Angular Developer for"
            description="Develop enterprise-grade, scalable web applications with Triosphere Tech’s expert Angular developers."
          />
          <Faq
            title="FAQ About Hiring Angular Developers"
            subtitle="FAQ"
            faqs={HireOurAngularDeveloperfaq}
          />
        </div>
      )}

      {service === "HireOurPHPDeveloper" && (
        <div className="mt-5">
          <HiringHero
            heading="Hire PHP, Laravel, Yii, CodeIgniter Developers"
            dec1="PHP continues to be one of the most trusted backend technologies for scalable and secure web applications. Our developers bring expertise in Core PHP and modern frameworks like Laravel, Yii, and CodeIgniter."
            dec2="Our remote PHP experts are proficient in backend logic, REST APIs, server management, MySQL, authentication systems, third-party integrations, and clean, maintainable code practices."
            dec3="We have delivered full-scale web apps for ecommerce, finance, hospitality, media, health, education, and many more industries. Our team ensures smooth development and long-term scalability."
            dec4="Whether you need a single PHP developer or an entire remote backend team, Triosphere Tech provides flexible hiring models tailored to your timeline and budget."
          />
<HiringTypes />

          <HiringSteps />
          <OurTech />
          <WhyUS
            techname="Hire PHP Developer for"
            description="Build robust backend systems, APIs, and custom platforms with Triosphere Tech’s skilled PHP developers."
          />
          <Faq
            title="FAQ About Hiring PHP Developers"
            subtitle="FAQ"
            faqs={HireOurPHPDeveloperfaq}
          />
        </div>
      )}

      {service === "HireOurNodejsDeveloper" && (
        <div className="mt-5">
          <HiringHero
            heading="Hire Skilled Node.js Developers"
            dec1="Node.js is the top choice for modern, scalable, and event-driven backend applications. Our dedicated Node.js developers help businesses develop fast, flexible, real-time web and mobile backends."
            dec2="Our team specializes in Express.js, Nest.js, MongoDB, PostgreSQL, microservices, API development, WebSockets, authentication, and high-performance server logic."
            dec3="We have experience delivering solutions across fintech, logistics, social platforms, marketplaces, booking systems, and SaaS applications using modular, maintainable architectures."
            dec4="Hire a remote Node.js developer or build an entire backend engineering team with Triosphere Tech to accelerate your product development with modern, scalable technology."
          />

          <HiringTypes />

          <HiringSteps />
          <OurTech />
          <WhyUS
            techname="Hire Node.js Developer for"
            description="Deliver high-speed APIs, real-time apps, and scalable backend solutions using Triosphere Tech’s Node.js expertise."
          />
          <Faq
            title="FAQ About Hiring Node.js Developers"
            subtitle="FAQ"
            faqs={HireOurNodejsDeveloperfaq}
          />
        </div>
      )}

      {service === "HireOurShopifyDeveloper" && (
        <div className="mt-5">
          <HiringHero
            heading="Hire Certified Shopify Developers"
            dec1="Shopify is one of the most powerful ecommerce platforms, enabling businesses to launch online stores quickly with secure, optimized, and scalable capabilities."
            dec2="Our Shopify experts specialize in custom theme development, Shopify Liquid, app integrations, Shopify Plus, payment gateway setup, speed optimization, and conversion-focused UI/UX."
            dec3="We have built stores for fashion brands, healthcare products, electronics sellers, digital goods, and large multi-vendor businesses with complete backend and storefront support."
            dec4="Whether you need a custom Shopify store, feature extension, maintenance, or optimization, our remote Shopify developers ensure high-quality ecommerce experiences for your customers."
          />

          <HiringTypes />

          <HiringSteps />
          <OurTech />
          <WhyUS
            techname="Hire Shopify Developer for"
            description="Launch, scale, and optimize online stores with conversion-focused Shopify development from Triosphere Tech."
          />
          <Faq
            title="FAQ About Hiring Shopify Developers"
            subtitle="FAQ"
            faqs={HireOurShopifyDeveloperfaq}
          />
        </div>
      )}

      {service === "HireOurWordPressDeveloper" && (
        <div className="mt-5">
          <HiringHero
            heading="Hire Experienced WordPress Developers"
            dec1="WordPress powers more than 40% of the web, making it the most flexible and popular CMS for websites ranging from blogs to enterprise applications."
            dec2="Our WordPress developers are skilled in custom theme development, plugin creation, WooCommerce setup, website optimization, security hardening, and seamless third-party integrations."
            dec3="We have developed high-performance WordPress solutions across industries including real estate, education, ecommerce, corporate websites, medical services, and digital media."
            dec4="Hire dedicated WordPress or WooCommerce developers from Triosphere Tech to build fast, secure, SEO-optimized and fully customized websites tailored to your brand."
          />

          <HiringTypes />

          <HiringSteps />
          <OurTech />
          <WhyUS
            techname="Hire WordPress Developer for"
            description="Build custom, secure, and high-performing WordPress websites with Triosphere Tech’s experienced developers."
          />
          <Faq
            title="FAQ About Hiring WordPress Developers"
            subtitle="FAQ"
            faqs={HireOurWordpressDeveloperfaq}
          />
        </div>
      )}

      {service === "HireOurDevOpsEngineer" && (
        <div className="mt-5">
          <HiringHero
            heading="Hire Professional DevOps Engineers"
            dec1="DevOps ensures faster deployments, efficient automation, and seamless collaboration between development and operations teams. Our DevOps engineers help businesses achieve scalable, reliable, and automated infrastructure."
            dec2="We specialize in AWS, Azure, GCP, CI/CD pipelines, Docker, Kubernetes, Terraform, Ansible, monitoring tools, load balancing, cloud migrations, and complete infrastructure automation."
            dec3="Our DevOps engineers have experience supporting SaaS platforms, ecommerce apps, enterprise apps, fintech systems, and high-traffic digital products."
            dec4="If you’re looking for infrastructure automation, cloud setup, pipeline optimization, or full DevOps management, hire our remote DevOps experts to scale with confidence."
          />

         <HiringTypes />

          <HiringSteps />
          <OurTech />
          <WhyUS
            techname="Hire DevOps Engineer for"
            description="Automate deployment pipelines, optimize cloud infrastructure, and enhance reliability with Triosphere Tech’s DevOps experts."
          />
          <Faq
            title="FAQ About Hiring DevOps Engineers"
            subtitle="FAQ"
            faqs={HireOurDevOpsEngineerfaq}
          />
        </div>
      )}

    

</>
  );
};

export default ServicePage;
