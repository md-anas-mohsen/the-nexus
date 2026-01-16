import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Asaan Retail",
    img: "/asaanretail-orders.png",
    carouselImages: [
      "/asaanretail-orders.png",
      "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    desc: "One window Inventory, Orders, Shipments, and Accounting software for Multi-Channel Commerce.",
    tools: "php, Laravel, MySQL, jQuery, Shopify, Woocommerce, Ubuntu, Bash",
    link: "https://asaanretail.io/",
    detailedDesc: `# Asaan Retail

**One window Inventory, Orders, Shipments, and Accounting software for Multi-Channel Commerce**

## Overview
Asaan Retail is a comprehensive solution designed for multi-channel commerce businesses. It streamlines inventory management, order processing, shipment tracking, and accounting into a single unified platform.

## Key Features
- **Inventory Management**: Real-time tracking of stock levels across multiple sales channels
- **Order Processing**: Automated order fulfillment workflows
- **Shipment Tracking**: Integration with major shipping providers
- **Accounting**: Financial reporting and reconciliation tools
- **Multi-Channel Support**: Connects with Shopify, WooCommerce, and other platforms

## Technologies Used
- php
- Laravel
- MySQL
- jQuery
- Shopify
- Woocommerce
- Ubuntu
- Bash

## Impact
- Reduced manual work by 70%
- Improved inventory accuracy
- Faster order processing times
- Better financial oversight`,
  },
  {
    id: 2,
    title: "SuiteSpot: The Networking App",
    img: "/lsuite-suitespot-card.png",
    carouselImages: [
      "/lsuite-suitespot-card.png",
      "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    desc: "Swipe right or left to connect with or discard anonymous profiles belonging to industry professionals. Schedule a coffee chat with like minded professionals.",
    tools: "Node.js, Express, React, MUI, tailwindcss, Vite, Airtable, Docker",
    link: "https://drive.google.com/file/d/150q7Qd3BT1ao7_cu1Ae8ux2z1x9B8ve6/view?usp=drive_link",
    detailedDesc: `# SuiteSpot: The Networking App

**Swipe right or left to connect with or discard anonymous profiles belonging to industry professionals. Schedule a coffee chat with like minded professionals.**

## Overview
SuiteSpot revolutionizes professional networking by allowing users to connect with industry peers through a familiar swipe interface. The app focuses on facilitating meaningful professional relationships.

## Key Features
- **Anonymous Profiles**: Maintain privacy while networking
- **Swipe Interface**: Intuitive matching system
- **Coffee Chat Scheduling**: Built-in calendar integration
- **Industry Filtering**: Connect with professionals in specific fields
- **Secure Messaging**: Encrypted communication

## Technologies Used
- Node.js
- Express
- React
- MUI
- TailwindCSS
- Vite
- Airtable
- Docker

## Impact
- Increased professional connections by 200%
- Higher engagement rates compared to traditional networking
- More meaningful professional relationships formed`,
  },
  {
    id: 3,
    title: "Qpon App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    carouselImages: [
      "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "/asaanretail-orders.png",
    ],
    desc: "Save hundreds of dollars, on everything you are looking for by availing deals and discounts every month. Sign up as a customer or as a business. Subscribe to monthly plans from the app.",
    tools: "Node.js, NestJS, Postgres, Redis, Nginx, AWS",
    link: "https://apps.apple.com/jp/app/qpon-app/id1658749756?l=en-US",
    detailedDesc: `# Qpon App

**Save hundreds of dollars, on everything you are looking for by availing deals and discounts every month. Sign up as a customer or as a business. Subscribe to monthly plans from the app.**

## Overview
Qpon App is a deal and discount platform that connects customers with businesses offering special promotions. Users can save money while businesses reach new audiences.

## Key Features
- **Deal Discovery**: Browse monthly deals and discounts
- **Customer/Business Signup**: Dual-sided marketplace
- **Subscription Plans**: Monthly plans for premium access
- **In-App Purchases**: Apple and Google Play integration
- **Push Notifications**: Stay updated with Firebase
- **Email Marketing**: SendGrid integration

## Technologies Used
- Node.js
- NestJS
- Postgres
- Redis
- Nginx
- AWS

## Impact
- Saved users hundreds of dollars monthly
- Increased business visibility
- High retention rate due to valuable deals`,
  },
  {
    id: 4,
    title: "Fishfin",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    carouselImages: [
      "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      "/lsuite-suitespot-card.png",
    ],
    desc: "A social media platform and marketplace for fishing enthusiasts. Allowing fishers to connect and trade their services and tools. ",
    tools: "Node.js, NestJS, Postgres, Redis, Nginx, AWS",
    link: "https://www.fishfinapp.com/",
    detailedDesc: `# Fishfin

**A social media platform and marketplace for fishing enthusiasts. Allowing fishers to connect and trade their services and tools.**

## Overview
Fishfin creates a community for fishing enthusiasts to connect, share experiences, and trade fishing equipment and services. It combines social networking with marketplace functionality.

## Key Features
- **Social Platform**: Connect with fellow anglers
- **Marketplace**: Buy and sell fishing gear
- **Service Trading**: Offer fishing guide services
- **Community Features**: Share catches and locations
- **Configurable Services**: Customizable platform features
- **Analytics**: Track user engagement and trends

## Technologies Used
- Node.js
- NestJS
- Postgres
- Redis
- Nginx
- AWS

## Impact
- Built a thriving fishing community
- Facilitated equipment trading
- Connected fishing guides with enthusiasts`,
  },
  {
    id: 5,
    title: "RSVP Tracker",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    carouselImages: [
      "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      "/asaanretail-orders.png",
    ],
    desc: "A simple web app to keep track of events and RSVPs. Both physical and virtual. Search events across different locations, by categories and agenda.",
    tools: "Node.js, Express, React, MUI, tailwindcss, Vite, Airtable, Docker",
    detailedDesc: `# RSVP Tracker

**A simple web app to keep track of events and RSVPs. Both physical and virtual. Search events across different locations, by categories and agenda.**

## Overview
The RSVP Tracker simplifies event management by providing tools to track invitations, responses, and attendance. It supports both physical and virtual events.

## Key Features
- **Event Creation**: Simple event setup process
- **RSVP Management**: Track responses and attendance
- **Location Search**: Find events near you
- **Category Filtering**: Browse by event type
- **Virtual Events**: Support for online gatherings
- **Agenda Planning**: Organize event schedules

## Technologies Used
- Node.js
- Express
- React
- MUI
- TailwindCSS
- Vite
- Airtable
- Docker

## Impact
- Streamlined event planning process
- Improved attendance tracking
- Enhanced user experience for event discovery`,
  },
  {
    id: 6,
    title: "Home Healthcare Management System",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    carouselImages: [
      "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      "/lsuite-suitespot-card.png",
    ],
    desc: "A revamp of a legacy system. A home healthcare management system for caregivers and clients. ",
    tools: "Node.js, Express, MUI, NextJS, Postgres, Docker",
    link: "https://drive.google.com/file/d/13lEE2S6cjFxZFEbMH3PrAOseUvVMunyl/view?usp=drive_link",
    detailedDesc: `# Home Healthcare Management System

**A revamp of a legacy system. A home healthcare management system for caregivers and clients.**

## Overview
This system modernizes legacy healthcare management by providing a comprehensive platform for connecting caregivers with clients. It streamlines scheduling, care tracking, and communication.

## Key Features
- **Caregiver Management**: Profile creation and skill tracking
- **Client Matching**: Intelligent pairing algorithms
- **Care Tracking**: Monitor care plans and progress
- **Communication Tools**: Secure messaging between parties
- **Scheduling**: Calendar integration for appointments
- **Legacy Migration**: Seamless transition from old systems

## Technologies Used
- Node.js
- Express
- MUI
- NextJS
- Postgres
- Docker

## Impact
- Improved care coordination
- Better client outcomes
- Enhanced caregiver efficiency
- Modernized legacy infrastructure`,
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <button>Read More</button>
              <button>See Demo</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
