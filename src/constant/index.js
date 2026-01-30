import Chartgrowth from "@/app/components/assets/Chartgrowth";
import Gear from "@/app/components/assets/Gear";
import Handshake from "@/app/components/assets/Handshake";
import Team from "@/app/components/assets/Team";

export const nav_links = [
  { id: 1, href: "/about", label: "About" },
  { id: 2, href: "/service", label: "Service" },
];

export const company_number = [
  {
    id: 0,
    number: "200",
    sign: "+",
    label: "Completed Projects",
  },
  {
    id: 1,
    number: "2K",
    sign: "+",
    label: "Shipments Delivered",
  },
  {
    id: 2,
    number: "150",
    sign: "+",
    label: "Active Clients",
  },
  {
    id: 3,
    number: "99.5",
    sign: "%",
    label: "Delivery Accuracy",
  },
];

export const about_constant = [
  {
    id: 0,
    sign: <Handshake />,
    heading: "Built on Trust",
    sub_heading:
      "We started with a simple belief logistics should be honest, dependable, and handled with care.",
  },
  {
    id: 1,
    sign: <Chartgrowth />,
    heading: "Growing Responsibility",
    sub_heading:
      "Our people work with discipline, commitment, and a genuine focus on doing things the right way.",
  },
  {
    id: 2,
    sign: <Gear />,
    heading: "Experience Meets Innovation",
    sub_heading:
      "Modern tools and industry know-how come together to keep every shipment on the right track.",
  },
  {
    id: 3,
    sign: <Team />,
    heading: "A Team That Cares",
    sub_heading:
      "Every member of Astral brings discipline, attention, and a genuine commitment to doing things the right way.",
  },
];

export const company_service = [
  {
    id: 1,
    src: "/resources/images/service/service1.jpg",
    text: "Fast & Secure Express Courier Delivery",
  },
  {
    id: 2,
    src: "/resources/images/service/service2.jpg",
    text: "Global Air Freight & Priority Cargo Transport",
  },
  {
    id: 3,
    src: "/resources/images/service/service3.jpeg",
    text: "Cost-Efficient Sea Freight for Large Shipments",
  },
  {
    id: 4,
    src: "/resources/images/service/service4.png",
    text: "Trusted Road Logistics for Any Distance",
  },
];
