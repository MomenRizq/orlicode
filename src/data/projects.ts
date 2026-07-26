import type { Locale } from "@/i18n/config";
import type { Project, RawProject } from "@/types";

// ── إزاي تضيف مشروع حقيقي ────────────────────────────────────────────────
//
// انسخ الشكل ده وحطه جوه المصفوفة projects[] تحت، واملأ بيانات مشروعك:
//
// {
//   id: "atlas-crm",                 // معرف فريد بالإنجليزي بدون مسافات (مايتكررش)
//   category: "web",                 // واحدة من: "web" | "mobile" | "dashboard" | "erp" | "ai" | "custom"
//   title: { en: "Atlas CRM", ar: "أطلس سي آر إم" },
//   description: { en: "Short English description.", ar: "وصف قصير بالعربي" },
//   longDescription: { en: "Longer English description (optional).", ar: "وصف أطول بالعربي (اختياري)" },
//   image: "/images/projects/atlas-crm.jpg", // حط الصورة في public/images/projects/ وسمّيها هنا
//   tech: ["Next.js", "Node.js"],    // التقنيات المستخدمة في المشروع
//   tags: ["SaaS", "B2B"],           // كلمات مفتاحية بتظهر كـ badges على الكارت
//   year: "2025",
//   featured: true,                  // اختياري - بيظهر شارة "Featured" على الكارت
//   links: {
//     website: "https://example.com",
//     playStore: "https://play.google.com/store/apps/details?id=...",
//     appStore: "https://apps.apple.com/app/...",
//   },
// },

export const projects: RawProject[] = [
  // ── WEB ──────────────────────────────────────────────────────────────────
  {
    id: "sonicourses",
    category: "web",
    title: { en: "Soni Courses", ar: "سوني كورسات" },
    description: { en: "E-learning platform for digital design and motion graphics.", ar: "منصة تعليم إلكتروني لدورات التصميم الرقمي والموشن جرافيك." },
    longDescription: { en: "Soni Courses is an educational platform offering high-quality courses and diplomas in motion graphics, 3D design, and video editing. It is tailored for digital artists and content creators looking to enhance their skills.", ar: "سوني كورسات هي منصة تعليمية تقدم دورات ودبلومات عالية الجودة في الموشن جرافيك، التصميم ثلاثي الأبعاد، والمونتاج. تم تصميمها خصيصاً للفنانين الرقميين وصناع المحتوى الراغبين في تطوير مهاراتهم." },
    image: "/images/projects/sonicourses.jpg",
    tech: ["Next.js", "React", "Node.js"],
    tags: ["E-learning", "Education", "Design"],
    year: "2024",
    links: { website: "https://www.sonicourses.com/" },
  },
  {
    id: "24order",
    category: "web",
    title: { en: "24Order", ar: "٢٤ أوردر" },
    description: { en: "All-in-one restaurant management and POS system.", ar: "نظام متكامل لإدارة المطاعم ونقاط البيع." },
    longDescription: { en: "24Order provides a comprehensive suite of tools for restaurants, including a POS system, kitchen displays, driver apps, and customer menus. It helps food businesses streamline operations and accept zero-commission online orders.", ar: "يوفر ٢٤ أوردر مجموعة شاملة من الأدوات للمطاعم، بما في ذلك نظام نقاط البيع، شاشات المطبخ، تطبيقات السائقين، وقوائم العملاء. يساعد الشركات الغذائية على تبسيط العمليات واستقبال الطلبات عبر الإنترنت بدون عمولة." },
    image: "/images/projects/24order.jpg",
    tech: ["React", "Next.js", "Tailwind CSS"],
    tags: ["SaaS", "FoodTech", "POS"],
    year: "2025",
    featured: true,
    links: { website: "https://24order.com/" },
  },
  {
    id: "my-cheque",
    category: "web",
    title: { en: "My Cheque", ar: "شيكاتي" },
    description: { en: "Cloud-based platform for printing and managing bank checks.", ar: "منصة سحابية لطباعة وإدارة الشيكات البنكية." },
    longDescription: { en: "My Cheque (شيكاتي) is an automated financial tool that allows businesses in the Arab world to print checks easily without manual spelling errors. It features smart number-to-word conversion, beneficiary management, and detailed reporting.", ar: "منصة شيكاتي هي أداة مالية آلية تتيح للشركات في الوطن العربي طباعة الشيكات بسهولة وتجنب الأخطاء الإملائية. تتميز بالتفقيط الآلي الذكي للأرقام، إدارة المستفيدين، وإصدار تقارير مفصلة." },
    image: "/images/projects/my-cheque.jpg",
    tech: ["Vue.js", "Laravel", "MySQL"],
    tags: ["Fintech", "SaaS", "Accounting"],
    year: "2025",
    links: { website: "https://my-cheque.com/ar" },
  },
  {
    id: "ghinaedu",
    category: "web",
    title: { en: "Ghini Educational", ar: "منصة غنى التعليمية" },
    description: { en: "Online learning platform for the Saudi school curriculum.", ar: "منصة تعليمية إلكترونية للمناهج الدراسية السعودية." },
    longDescription: { en: "Ghini Educational offers structured online courses covering Primary, Middle, and Secondary stages of the Saudi educational curriculum. It aims to provide accessible and high-quality supplementary education for students.", ar: "تقدم منصة غنى التعليمية دورات منهجية منظمة تغطي المراحل الابتدائية، المتوسطة، والثانوية للمنهج السعودي. تهدف المنصة إلى توفير تعليم إضافي عالي الجودة يسهل وصول الطلاب إليه." },
    image: "/images/projects/ghinaedu.jpg",
    tech: ["Next.js", "React", "Node.js"],
    tags: ["Education", "E-learning", "EdTech"],
    year: "2025",
    links: { website: "https://ghinaedu.com" },
  },
  {
    id: "yalla-deals",
    category: "web",
    title: { en: "Yalla Deals", ar: "يلا ديلز" },
    description: { en: "Online classifieds marketplace for buying, selling, and renting.", ar: "سوق إلكتروني للإعلانات المبوبة للبيع والشراء والتأجير." },
    longDescription: { en: "Yalla Deals is a UAE-based classifieds platform equipped with a unique social media marketing engine called E-Socializer. Users can easily trade real estate, cars, electronics, and furniture while boosting their ads automatically.", ar: "يلا ديلز هي منصة إعلانات مبوبة مقرها الإمارات ومزودة بمحرك تسويق فريد عبر وسائل التواصل الاجتماعي يُدعى E-Socializer. يمكن للمستخدمين تداول العقارات، السيارات، الإلكترونيات، والأثاث بسهولة مع تعزيز إعلاناتهم تلقائياً." },
    image: "/images/projects/yalla-deals.jpg",
    tech: ["React", "Next.js", "PHP"],
    tags: ["Marketplace", "Classifieds", "Real Estate"],
    year: "2025",
    links: { website: "https://yalla.deals/" },
  },
  // ── MOBILE ───────────────────────────────────────────────────────────────
  {
    id: "cementech",
    category: "mobile",
    title: { en: "Cementech", ar: "سمنتك" },
    description: { en: "B2B app connecting cement factories directly with contractors.", ar: "تطبيق يربط بين مصانع الأسمنت والمقاولين مباشرة." },
    longDescription: { en: "Cementech is a smart logistics platform designed to speed up the ordering and delivery of cement. It allows contractors to select factories, choose quantities, dispatch trucks, and track deliveries in real time.", ar: "سمنتك هي منصة لوجستية ذكية مصممة لتسريع عملية طلب وتوريد الأسمنت. تتيح للمقاولين اختيار المصانع، تحديد الكميات، توجيه الشاحنات، وتتبع عمليات التوصيل بشكل لحظي." },
    image: "/images/projects/cementech.jpg",
    tech: ["Flutter", "Dart", "Firebase"],
    tags: ["B2B", "Logistics", "Construction"],
    year: "2026",
    featured: true,
    links: { appStore: "https://apps.apple.com/eg/app/cementech/id6762577236" },
  },
  {
    id: "cementech-driver",
    category: "mobile",
    title: { en: "Cementech Driver", ar: "سمنتك للسائقين" },
    description: { en: "Driver companion app for the Cementech delivery network.", ar: "التطبيق الخاص بالسائقين لشبكة توصيل سمنتك." },
    longDescription: { en: "This is the dedicated driver application for the Cementech ecosystem. It helps truck drivers receive dispatch orders, navigate to the correct delivery site, and confirm drop-offs using QR codes.", ar: "هذا هو التطبيق المخصص للسائقين ضمن نظام سمنتك. يساعد سائقي الشاحنات على استقبال طلبات التوصيل، التوجيه إلى موقع التسليم الصحيح، وتأكيد التسليم باستخدام رموز الاستجابة السريعة (QR)." },
    image: "/images/projects/cementech-driver.jpg",
    tech: ["Flutter", "Dart", "Google Maps API"],
    tags: ["Delivery", "Logistics", "Driver App"],
    year: "2026",
    links: { appStore: "https://apps.apple.com/eg/app/%D8%B3%D9%85%D9%86%D8%AA%D9%83-%D9%84%D9%84%D8%B3%D8%A7%D8%A6%D9%82%D9%8A%D9%86/id6762490074" },
  },
  {
    id: "ghemar",
    category: "mobile",
    title: { en: "Ghemar", ar: "غمار" },
    description: { en: "Smart laundry service charging a flat rate per bag.", ar: "خدمة غسيل ذكية تعتمد سعراً ثابتاً للحقيبة الواحدة." },
    longDescription: { en: "Ghemar simplifies laundry by removing the need to count individual items; users just fill a bag and pay a fixed price. The app manages pickups, tracking, and fast deliveries back to the customer's door.", ar: "تُبسط غمار عملية غسيل الملابس بإلغاء الحاجة لعد القطع؛ فالمستخدمون يملؤون الحقيبة ويدفعون سعراً ثابتاً. يدير التطبيق عمليات الاستلام، التتبع، والتوصيل السريع إلى باب العميل." },
    image: "/images/projects/ghemar.jpg",
    tech: ["React Native", "Node.js", "Stripe"],
    tags: ["On-Demand", "Laundry", "Service"],
    year: "2026",
    links: { appStore: "https://apps.apple.com/eg/app/ghemar/id6775971029" },
  },
  {
    id: "bhc",
    category: "mobile",
    title: { en: "BHC – Bnook Holding", ar: "بنوك القابضة - BHC" },
    description: { en: "Corporate application for Bnook Holding Company.", ar: "التطبيق المؤسسي لشركة بنوك القابضة." },
    longDescription: { en: "The BHC app serves as the official mobile portal for Bnook Holding Company, streamlining internal operations and corporate communication. It is designed to centralize resources for stakeholders and employees.", ar: "يعمل تطبيق BHC كبوابة رسمية لشركة بنوك القابضة على الهواتف المحمولة، لتسهيل العمليات الداخلية والتواصل المؤسسي. تم تصميمه لمركزية الموارد لأصحاب المصلحة والموظفين." },
    image: "/images/projects/bhc.jpg",
    tech: ["Swift", "iOS Native"],
    tags: ["Corporate", "Business", "Finance"],
    year: "2025",
    links: { appStore: "https://apps.apple.com/ro/app/bhc/id6479562742" },
  },
  {
    id: "mostaqer",
    category: "mobile",
    title: { en: "Mostaqer", ar: "مستقر" },
    description: { en: "Medical application providing healthcare and doctor access.", ar: "تطبيق طبي يوفر الرعاية الصحية والوصول للأطباء." },
    longDescription: { en: "Mostaqer is a dedicated healthcare application allowing users to connect with medical professionals and manage their health needs. It streamlines booking consultations and managing sensitive medical and financial records securely.", ar: "مستقر هو تطبيق مخصص للرعاية الصحية يتيح للمستخدمين التواصل مع المتخصصين الطبيين وإدارة احتياجاتهم الصحية. يسهّل التطبيق حجز الاستشارات وإدارة السجلات الطبية والمالية الحساسة بأمان." },
    image: "/images/projects/mostaqer.jpg",
    tech: ["Flutter", "Dart", "AWS"],
    tags: ["Healthcare", "Medical", "Telehealth"],
    year: "2025",
    links: { appStore: "https://apps.apple.com/us/app/mostaqer/id6744868537" },
  },
  {
    id: "torido",
    category: "mobile",
    title: { en: "Torido", ar: "توريدو" },
    description: { en: "B2B supply chain and vendor management app.", ar: "تطبيق لإدارة سلاسل الإمداد والموردين للشركات." },
    longDescription: { en: "Torido is a business-focused application facilitating seamless communication and transactions within supply chains. It helps businesses manage inventory requests and fulfill commercial supplies efficiently.", ar: "توريدو هو تطبيق موجه للشركات يسهل التواصل وإجراء المعاملات بسلاسة داخل سلاسل الإمداد. يساعد الشركات في إدارة طلبات المخزون وتلبية التوريدات التجارية بكفاءة." },
    image: "/images/projects/torido.jpg",
    tech: ["React Native", "TypeScript", "Node.js"],
    tags: ["B2B", "Supply Chain", "Business"],
    year: "2024",
    links: { appStore: "https://apps.apple.com/ug/app/torido-%D8%AA%D9%88%D8%B1%D9%8A%D8%AF%D9%88/id1554338202" },
  },
  {
    id: "naimi-al-shamal",
    category: "mobile",
    title: { en: "Naimi Al Shamal", ar: "نعيمي الشمال" },
    description: { en: "Fresh meat delivery application offering various cuts to your door.", ar: "تطبيق لتوصيل اللحوم الطازجة يوفر قطعيات متنوعة حتى باب منزلك." },
    longDescription: { en: "Naimi Al Shamal brings high-quality fresh meats directly to customers through an easy-to-use delivery app. It integrates modern payment solutions like Tamara and MyFatoorah to ensure a seamless checkout experience.", ar: "يجلب نعيمي الشمال اللحوم الطازجة عالية الجودة مباشرة للعملاء عبر تطبيق توصيل سهل الاستخدام. يدمج حلول الدفع الحديثة مثل تابي وماي فاتورة لضمان تجربة دفع سلسة ومريحة." },
    image: "/images/projects/naimi-al-shamal.jpg",
    tech: ["Flutter", "Dart", "MyFatoorah API"],
    tags: ["E-commerce", "Food Delivery", "Retail"],
    year: "2025",
    links: { appStore: "https://apps.apple.com/us/app/%D9%86%D8%B9%D9%8A%D9%85%D9%8A-%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84/id6503679803" },
  },
];

export function projectsByCategory(cat: string, locale: Locale): Project[] {
  return projects
    .filter((p) => p.category === cat)
    .map((p) => ({
      ...p,
      title: p.title[locale],
      description: p.description[locale],
      longDescription: p.longDescription?.[locale],
    }));
}
