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
      "“Astral has been a dependable partner for our shipments. Their communication is clear, and every delivery arrives just the way we expect on time and without hassle.”",
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
];
