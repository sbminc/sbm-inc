export interface Slide {
  slideNumber: number;
  title?: string;
  images: string[];
  content?: string;
  layout: "full" | "split" | "grid";
}

export const slides: Slide[] = [
  {
    slideNumber: 1,
    title: "Welcome to Sisters Building Minds",
    images: ["/presentation/present-index_Page_01_Image_0001.jpg"],
    content: "Empowering BIPOC girls in Volusia County through education and mentorship.",
    layout: "full",
  },
  {
    slideNumber: 2,
    title: "Our Mission",
    images: ["/presentation/present-index_Page_02_Image_0001.jpg"],
    content: "To empower and inspire BIPOC girls in Volusia County through education, mentorship, and community engagement.",
    layout: "full",
  },
  {
    slideNumber: 3,
    title: "Our Vision",
    images: ["/presentation/present-index_Page_03_Image_0001.jpg"],
    content: "A community where every BIPOC girl has the opportunity to reach her full potential through education and support.",
    layout: "full",
  },
  {
    slideNumber: 4,
    title: "Our Programs",
    images: ["/presentation/present-index_Page_05_Image_0001.jpg", "/presentation/present-index_Page_05_Image_0002.jpg"],
    content: "• Mental Wellness\n• Financial Literacy\n• College Preparation\n• Healthy Living",
    layout: "split",
  },
  {
    slideNumber: 5,
    title: "Mental Wellness",
    images: ["/presentation/present-index_Page_06_Image_0001.jpg", "/presentation/present-index_Page_06_Image_0002.jpg"],
    content: "Supporting mental health through workshops, counseling, and community resources.",
    layout: "split",
  },
  {
    slideNumber: 6,
    title: "Financial Literacy",
    images: ["/presentation/present-index_Page_08_Image_0001.jpg", "/presentation/present-index_Page_08_Image_0002.jpg"],
    content: "Teaching financial skills, budgeting, and investment basics for future success.",
    layout: "split",
  },
  {
    slideNumber: 7,
    title: "College Preparation",
    images: ["/presentation/present-index_Page_09_Image_0001.jpg", "/presentation/present-index_Page_09_Image_0002.jpg"],
    content: "Guiding students through college applications, scholarships, and academic planning.",
    layout: "split",
  },
  {
    slideNumber: 8,
    title: "Healthy Living",
    images: ["/presentation/present-index_Page_11_Image_0001.jpg", "/presentation/present-index_Page_11_Image_0002.jpg"],
    content: "Promoting physical health, nutrition, and wellness practices.",
    layout: "split",
  },
  {
    slideNumber: 9,
    title: "Our Impact",
    images: ["/presentation/present-index_Page_12_Image_0001.jpg", "/presentation/present-index_Page_12_Image_0002.jpg"],
    content: "Making a difference in the lives of BIPOC girls through education and support.",
    layout: "split",
  },
  {
    slideNumber: 10,
    title: "Get Involved",
    images: ["/presentation/present-index_Page_14_Image_0001.jpg", "/presentation/present-index_Page_14_Image_0002.jpg"],
    content: "Join us in empowering the next generation of leaders.",
    layout: "split",
  },
  {
    slideNumber: 11,
    title: "Contact Us",
    images: ["/presentation/present-index_Page_15_Image_0001.jpg", "/presentation/present-index_Page_15_Image_0002.jpg"],
    content: "Email: info@sistersbuildingminds.org\nPhone: (555) 123-4567",
    layout: "split",
  },
  {
    slideNumber: 12,
    title: "Thank You",
    images: ["/presentation/present-index_Page_16_Image_0001.jpg", "/presentation/present-index_Page_16_Image_0002.jpg"],
    content: "Together, we can build a brighter future for our community.",
    layout: "split",
  },
  {
    slideNumber: 13,
    title: "Join Our Community",
    images: ["/presentation/present-index_Page_17_Image_0001.jpg"],
    content: "Follow us on social media for updates and events.",
    layout: "full",
  },
]; 