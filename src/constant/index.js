import Chartgrowth from "@/app/components/assets/Chartgrowth";
import ClientSupport from "@/app/components/assets/ClientSupport";
import DeliveryMan from "@/app/components/assets/DeliveryMan";
import Gear from "@/app/components/assets/Gear";
import Handshake from "@/app/components/assets/Handshake";
import OnTime from "@/app/components/assets/OnTime";
import Logo1 from "@/app/components/assets/partners/Logo1";
import Logo2 from "@/app/components/assets/partners/Logo2";
import Logo3 from "@/app/components/assets/partners/Logo3";
import Logo4 from "@/app/components/assets/partners/Logo4";
import Logo5 from "@/app/components/assets/partners/Logo5";
import Protection from "@/app/components/assets/Protection";
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
    alt: "Red freight truck transporting goods on a highway representing road logistics services",
  },
  {
    id: 2,
    src: "/resources/images/service/service2.jpg",
    text: "Global Air Freight & Priority Cargo Transport",
    alt: "Cargo airplane flying in the sky representing fast air freight transportation",
  },
  {
    id: 3,
    src: "/resources/images/service/service3.jpeg",
    text: "Cost-Efficient Sea Freight for Large Shipments",
    alt: "Container cargo ship at a shipping port representing international sea freight logistics",
  },
  {
    id: 4,
    src: "/resources/images/service/service4.png",
    text: "Trusted Road Logistics for Any Distance",
    alt: "Courier delivering a package to a customer representing reliable parcel delivery service",
  },
];

export const why_choose_us = [
  {
    id: 0,
    sign: <OnTime />,
    heading: "On Time Delivery",
    sub_heading:
      "We plan each shipment carefully, track it at every stage, and stay accountable so your delivery reaches you when promised.",
  },
  {
    id: 1,
    sign: <DeliveryMan />,
    heading: "End to End Solution",
    sub_heading:
      "From pickup to final delivery, we manage the entire process so you don’t have to coordinate with multiple vendors.",
  },
  {
    id: 2,
    sign: <ClientSupport />,
    heading: "Client First Policy",
    sub_heading:
      "We listen closely, respond without delays, and adjust to your needs because strong logistics is built on clear communication.",
  },
  {
    id: 3,
    sign: <Protection />,
    heading: "Safe & Secure Handling",
    sub_heading:
      "Every shipment is handled with care and discipline, following strict standards to protect what’s important to your business.",
  },
];

export const company_partner = [
  {
    id: 0,
    svg: <Logo1 />,
  },
  {
    id: 1,
    svg: <Logo2 />,
  },
  {
    id: 2,
    svg: <Logo3 />,
  },
  {
    id: 3,
    svg: <Logo4 />,
  },
  {
    id: 4,
    svg: <Logo5 />,
  },
];

export const testimonials = [
  {
    id: 0,
    src: "/resources/images/testimonials/client1.png",
    client_review:
      "“For a florist, timing and care are everything. Astral delivers both handling our flowers gently and making sure they arrive exactly when needed.”",
    client_name: "Emily Carter",
    client_position: "Owner, Bloom & Stem",
  },
  {
    id: 1,
    src: "/resources/images/testimonials/client2.jpg",
    client_review:
      "“Astral consistently delivers on time, with clear communication and a process we can trust.”",
    client_name: "Aarav Mehta",
    client_position: "Operations Manager, Krios Industries",
  },
  {
    id: 2,
    src: "/resources/images/testimonials/client3.jpg",
    client_review:
      "“Working with Astral Logistics has made our supply chain far smoother. They handle our goods with care and keep us informed through every step.”",
    client_name: "Daniel Samuel",
    client_position: "Founder, RoyTech Exports",
  },
  {
    id: 3,
    src: "/resources/images/testimonials/client4.jpg",
    client_review:
      "“Astral has made our deliveries smooth and stress-free. They understand timing matters for our products, and they’ve been consistent every step of the way.”",
    client_name: "Issabela Camil",
    client_position: "Founder, PureSip Beverages",
  },
  {
    id: 4,
    src: "/resources/images/testimonials/client5.png",
    client_review:
      "“Astral has made shipping feel effortless for us. They truly understand how important timing and care are, and they’ve been reliable every single time.”",
    client_name: "Mei Lin Chen",
    client_position: "Founder & CEO, Lunaria Beauty Co.",
  },
  {
    id: 5,
    src: "/resources/images/testimonials/client6.png",
    client_review:
      "“Working with Astral has taken the stress out of logistics. Their consistency, clarity, and reliability make them easy to trust.”",
    client_name: "Daniel Harper",
    client_position: "Co-Founder & Managing Director, ClearView Optics",
  },
];

export const footer_nav = [
  {
    id: 0,
    text: "Home",
    target: "/",
  },
  {
    id: 1,
    text: "Services",
    target: "/service",
  },
  {
    id: 2,
    text: "About Us",
    target: "/about",
  },
  {
    id: 3,
    text: "Contact",
    target: "/contact",
  },
];

export const social_links = [
  { id: 0, name: "facebook" },
  { id: 1, name: "linkedin" },
  { id: 2, name: "instagram" },
  { id: 3, name: "x" },
];

export const contactData = {
  opening_hours: {
    label: "Opening Hours",
    days: "Monday – Friday",
    time: "9:00 AM – 5:00 PM",
  },
  email: {
    label: "Email",
    addresses: ["support@astrallogistics.in", "info@astrallogistics.in"],
  },
  contact: {
    label: "Contact",
    phone_numbers: [
      {
        number: "+91 22 4893 7621",
      },
      {
        number: "+91 93218 44720",
        note: "Customer Support",
      },
    ],
  },
  address: {
    label: "Address",
    lines: [
      "Plot No. 42, Sector 8A",
      "Mahalaxmi Industrial Estate",
      "Andheri East, Mumbai – 400093",
      "Maharashtra, India",
    ],
  },
};

export const company_process = [
  {
    id: 1,
    heading: "Understanding Your Requirements",
    text: "Each shipment begins with listening what’s being moved, when it’s needed, and what matters most—so planning starts with clarity.",
    side: "right",
  },
  {
    id: 2,
    heading: "Strategic Route & Mode Planning",
    text: "Routes and transport modes are selected across air, sea, road, or express, balancing speed, cost, and reliability based on real priorities.",
    side: "left",
  },
  {
    id: 3,
    heading: "CARGO PREPARATION & SECURE PACKAGING",
    text: "Goods are checked, packed securely, and labeled carefully to withstand handling and transit conditions.",
    side: "right",
  },
  {
    id: 4,
    heading: "Safe Handling & Real-Time Coordination",
    text: "Shipments are handled responsibly and coordinated in real time to reduce risk, prevent delays, and maintain consistency.",
    side: "left",
  },
  {
    id: 5,
    heading: "Transparent Tracking & Delivery",
    text: "Clear updates are provided throughout the journey, ensuring visibility until the shipment reaches its destination safely.",
    side: "right",
  },
];

export const service_page_content = [
  {
    id: 0,
    src: "/resources/images/service/service4.png",
    heading: "ROAD FREIGHT TRANSPORTATION SERVICES",
    text: "Our road transportation services ensure safe and efficient delivery across cities and regions. With organized route planning and careful cargo handling, we make sure shipments arrive on time and in excellent condition.",
    alt: "Red freight truck transporting goods on a highway representing road logistics services",
  },
  {
    id: 1,
    src: "/resources/images/service/service2.jpg",
    heading: "AIR CARGO DELIVERY SOLUTIONS",
    text: "Our air cargo service is designed for urgent and high-priority shipments. With secure handling and efficient coordination, we ensure goods move quickly and reach their destination safely.",
    alt: "Cargo airplane flying in the sky representing fast air freight transportation",
  },
  {
    id: 2,
    src: "/resources/images/service/service3.jpeg",
    heading: "INTERNATIONAL SEA FREIGHT SHIPPING",
    text: "Our sea freight solutions support large and international shipments with reliable port coordination and secure container handling for smooth global transportation.",
    alt: "Container cargo ship at a shipping port representing international sea freight logistics",
  },
  {
    id: 3,
    src: "/resources/images/service/service1.jpg",
    heading: "PACKAGE AND COURIER DELIVERY SERVICE",
    text: "Our courier service provides dependable delivery for parcels and documents, ensuring careful handling and timely arrival at the final destination.",
    alt: "Courier delivering a package to a customer representing reliable parcel delivery service",
  },
];
