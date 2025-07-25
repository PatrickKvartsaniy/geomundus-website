import { AboutSection, TeamMember } from "@/sanity.types";

// Mock about section data
export const mockAboutSection: AboutSection = {
  _id: "about-1",
  _type: "aboutSection",
  _createdAt: "2024-01-01T00:00:00Z",
  _updatedAt: "2024-01-01T00:00:00Z",
  _rev: "1",
  title: "About Our Conference",
  content: [
    {
      _type: "block",
      _key: "block1",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "span1",
          text: "Welcome to our annual conference, where innovation meets collaboration. For over a decade, we have been bringing together thought leaders, researchers, and practitioners from around the world to share knowledge, explore new ideas, and build lasting connections.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "block2",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "span2",
          text: "Our mission is to foster innovation and advance the field through meaningful dialogue, cutting-edge research presentations, and collaborative workshops. We believe in the power of community and the importance of sharing knowledge to drive progress.",
          marks: [],
        },
      ],
      markDefs: [],
    },
  ],
};

// Mock team members data
export const mockTeamMembers: (TeamMember & { photoUrl?: string })[] = [
  {
    _id: "team-1",
    _type: "teamMember",
    _createdAt: "2024-01-01T00:00:00Z",
    _updatedAt: "2024-01-01T00:00:00Z",
    _rev: "1",
    name: "Sarah Johnson",
    photoUrl: "/placeholder.svg?height=200&width=200",
    teamName: "program",
    conferenceYear: 2024,
    role: "Program Chair",
    bio: "Leading the program committee with 10+ years of experience in conference organization.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
    },
    order: 1,
    isActive: true,
  },
  {
    _id: "team-2",
    _type: "teamMember",
    _createdAt: "2024-01-01T00:00:00Z",
    _updatedAt: "2024-01-01T00:00:00Z",
    _rev: "1",
    name: "Michael Chen",
    photoUrl: "/placeholder.svg?height=200&width=200",
    teamName: "program",
    conferenceYear: 2024,
    role: "Technical Program Committee",
    bio: "Ensuring high-quality technical content and peer review processes.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/michaelchen",
      github: "https://github.com/michaelchen",
    },
    order: 2,
    isActive: true,
  },
  {
    _id: "team-3",
    _type: "teamMember",
    _createdAt: "2024-01-01T00:00:00Z",
    _updatedAt: "2024-01-01T00:00:00Z",
    _rev: "1",
    name: "Emily Rodriguez",
    photoUrl: "/placeholder.svg?height=200&width=200",
    teamName: "web",
    conferenceYear: 2024,
    role: "Lead Developer",
    bio: "Building and maintaining the conference website and digital infrastructure.",
    socialLinks: {
      github: "https://github.com/emilyrodriguez",
      website: "https://emilyrodriguez.dev",
      twitter: "https://twitter.com/emilydev",
    },
    order: 1,
    isActive: true,
  },
  {
    _id: "team-4",
    _type: "teamMember",
    _createdAt: "2024-01-01T00:00:00Z",
    _updatedAt: "2024-01-01T00:00:00Z",
    _rev: "1",
    name: "David Kim",
    photoUrl: "/placeholder.svg?height=200&width=200",
    teamName: "web",
    conferenceYear: 2024,
    role: "UI/UX Designer",
    bio: "Designing user-friendly interfaces and ensuring great user experience.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/davidkim",
      website: "https://davidkim.design",
    },
    order: 2,
    isActive: true,
  },
  {
    _id: "team-5",
    _type: "teamMember",
    _createdAt: "2024-01-01T00:00:00Z",
    _updatedAt: "2024-01-01T00:00:00Z",
    _rev: "1",
    name: "Lisa Thompson",
    photoUrl: "/placeholder.svg?height=200&width=200",
    teamName: "budget",
    conferenceYear: 2024,
    role: "Finance Manager",
    bio: "Managing conference finances and ensuring fiscal responsibility.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/lisathompson",
    },
    order: 1,
    isActive: true,
  },
  {
    _id: "team-6",
    _type: "teamMember",
    _createdAt: "2024-01-01T00:00:00Z",
    _updatedAt: "2024-01-01T00:00:00Z",
    _rev: "1",
    name: "James Wilson",
    photoUrl: "/placeholder.svg?height=200&width=200",
    teamName: "marketing",
    conferenceYear: 2024,
    role: "Marketing Director",
    bio: "Promoting the conference and building community engagement.",
    socialLinks: {
      twitter: "https://twitter.com/jameswilson",
      linkedin: "https://linkedin.com/in/jameswilson",
    },
    order: 1,
    isActive: true,
  },
  {
    _id: "team-7",
    _type: "teamMember",
    _createdAt: "2024-01-01T00:00:00Z",
    _updatedAt: "2024-01-01T00:00:00Z",
    _rev: "1",
    name: "Anna Martinez",
    photoUrl: "/placeholder.svg?height=200&width=200",
    teamName: "logistics",
    conferenceYear: 2024,
    role: "Event Coordinator",
    bio: "Coordinating all logistical aspects of the conference experience.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/annamartinez",
    },
    order: 1,
    isActive: true,
  },
  {
    _id: "team-8",
    _type: "teamMember",
    _createdAt: "2024-01-01T00:00:00Z",
    _updatedAt: "2024-01-01T00:00:00Z",
    _rev: "1",
    name: "Robert Taylor",
    photoUrl: "/placeholder.svg?height=200&width=200",
    teamName: "sponsorship",
    conferenceYear: 2024,
    role: "Sponsorship Manager",
    bio: "Building partnerships with sponsors and managing sponsor relations.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/roberttaylor",
      website: "https://roberttaylor.biz",
    },
    order: 1,
    isActive: true,
  },
  {
    _id: "team-9",
    _type: "teamMember",
    _createdAt: "2024-01-01T00:00:00Z",
    _updatedAt: "2024-01-01T00:00:00Z",
    _rev: "1",
    name: "Jennifer Lee",
    photoUrl: "/placeholder.svg?height=200&width=200",
    teamName: "registration",
    conferenceYear: 2024,
    role: "Registration Coordinator",
    bio: "Managing attendee registration and providing support to participants.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/jenniferlee",
    },
    order: 1,
    isActive: true,
  },
];

// Mock current year
export const mockCurrentYear = 2024;

// Mock current conference data
export const mockCurrentConference = {
  _id: "conference-2024",
  _type: "conference",
  _createdAt: "2024-01-01T00:00:00Z",
  _updatedAt: "2024-01-01T00:00:00Z",
  _rev: "1",
  year: 2024,
  title: "Innovation Conference 2024",
  description: "The premier conference for innovation and technology",
  aboutSection: mockAboutSection,
};
