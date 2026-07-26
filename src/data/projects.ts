import type { Project } from "@/types";

// ── إزاي تضيف مشروع حقيقي ────────────────────────────────────────────────
//
// انسخ الشكل ده وحطه جوه المصفوفة projects[] تحت، واملأ بيانات مشروعك:
//
// {
//   id: "atlas-crm",                 // معرف فريد بالإنجليزي بدون مسافات (مايتكررش)
//   category: "web",                 // واحدة من: "web" | "mobile" | "dashboard" | "erp" | "ai" | "custom"
//   title: "اسم المشروع",
//   description: "وصف قصير سطر أو سطرين، بيظهر في كارت المشروع",
//   longDescription: "وصف أطول تفصيلي بيظهر في نافذة تفاصيل المشروع (اختياري)",
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

export const projects: Project[] = [
  // ضيف مشاريعك الحقيقية هنا
];

export const projectsByCategory = (cat: string) =>
  projects.filter((p) => p.category === cat);
