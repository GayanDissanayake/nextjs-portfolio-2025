export interface AboutMeItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  color: string;
  shape: "box" | "sphere" | "cylinder";
  icon: string;
  position: [number, number, number];
}

export const enhancedAboutMeData: AboutMeItem[] = [
  {
    id: "education",
    title: "Education",
    description: "My academic journey and qualifications",
    details: [
      "Computer Science Graduate",
      "Continuous Learning Enthusiast",
      "Online Course Collector",
      "Technical Certifications",
    ],
    color: "#3b82f6",
    shape: "box",
    icon: "🎓",
    position: [-3.5, 1.5, 0],
  },
  {
    id: "sports",
    title: "Cricket",
    description: "My passion for cricket and sports",
    details: [
      "Weekend Warrior",
      "Team Player",
      "Stats Enthusiast",
      "Fair Play Advocate",
    ],
    color: "#10b981",
    shape: "cylinder",
    icon: "🏏",
    position: [3.5, 1.5, 0],
  },
  {
    id: "cooking",
    title: "Cooking",
    description: "Love for cooking and trying new cuisines",
    details: [
      "Sri Lankan Specialties",
      "International Fusion",
      "Spice Master",
      "Kitchen Experimenter",
    ],
    color: "#f59e0b",
    shape: "sphere",
    icon: "🍳",
    position: [-2.5, 0.5, 3.5],
  },
  {
    id: "tech",
    title: "Technology",
    description: "My journey in software development",
    details: [
      "Full-Stack Developer",
      "Modern Frameworks",
      "Cloud Architecture",
      "Problem Solver",
    ],
    color: "#8b5cf6",
    shape: "box",
    icon: "💻",
    position: [2.5, 0.5, 3.5],
  },
  {
    id: "travel",
    title: "Travel",
    description: "Places I've been and cultures I've experienced",
    details: [
      "Cultural Explorer",
      "Adventure Seeker",
      "Local Food Hunter",
      "Memory Collector",
    ],
    color: "#ef4444",
    shape: "sphere",
    icon: "✈️",
    position: [0, 2.5, -3],
  },
  {
    id: "hobbies",
    title: "Photography",
    description: "Capturing moments and creative pursuits",
    details: [
      "Landscape Photography",
      "Street Photography",
      "Digital Art",
      "Creative Projects",
    ],
    color: "#ec4899",
    shape: "cylinder",
    icon: "📸",
    position: [-3.5, 0.5, -2.5],
  },
];
