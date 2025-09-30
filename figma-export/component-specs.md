# COGNITA Design System - Component Specifications

## 🎨 **Color System**

### Primary Colors (Emerald)
- **emerald-50**: #ecfdf5 (Light backgrounds)
- **emerald-100**: #d1fae5 (Subtle highlights)
- **emerald-500**: #10b981 (Icons, accents)
- **emerald-600**: #059669 (Primary buttons, main brand)
- **emerald-700**: #047857 (Hover states)

### Secondary Colors (Cyan)
- **cyan-50**: #ecfeff (Light backgrounds)
- **cyan-100**: #cffafe (Subtle highlights)
- **cyan-500**: #06b6d4 (Secondary accents)
- **cyan-600**: #0891b2 (Secondary buttons)

### Neutral Colors
- **gray-50**: #f9fafb (Page backgrounds)
- **gray-100**: #f3f4f6 (Card backgrounds)
- **gray-200**: #e5e7eb (Borders)
- **gray-600**: #4b5563 (Secondary text)
- **gray-900**: #111827 (Primary text)

---

## 📝 **Typography Scale**

### Headings
- **H1**: 60px (5xl), Bold, Line Height 1.25
- **H2**: 36px (4xl), Bold, Line Height 1.25
- **H3**: 24px (2xl), Semibold, Line Height 1.25
- **H4**: 18px (lg), Semibold, Line Height 1.25

### Body Text
- **Large**: 20px (xl), Normal, Line Height 1.625
- **Base**: 16px (base), Normal, Line Height 1.5
- **Small**: 14px (sm), Normal, Line Height 1.5
- **Extra Small**: 12px (xs), Normal, Line Height 1.5

---

## 🔘 **Button Components**

### Primary Button
- **Background**: emerald-600 (#059669)
- **Text**: White, 16px, Semibold
- **Padding**: 16px 32px (py-4 px-8)
- **Border Radius**: 8px (lg)
- **Hover**: emerald-700 (#047857)
- **Shadow**: md (0 4px 6px -1px rgb(0 0 0 / 0.1))

### Secondary Button
- **Background**: White
- **Border**: 1px solid gray-300 (#d1d5db)
- **Text**: gray-700 (#374151), 16px, Semibold
- **Padding**: 16px 32px (py-4 px-8)
- **Border Radius**: 8px (lg)
- **Hover**: gray-50 (#f9fafb)

### Small Button
- **Padding**: 8px 16px (py-2 px-4)
- **Text**: 14px, Medium
- **Border Radius**: 6px (md)

---

## 📦 **Card Components**

### Feature Card
- **Background**: White
- **Border**: 1px solid gray-200 (#e5e7eb)
- **Border Radius**: 16px (2xl)
- **Padding**: 32px (p-8)
- **Shadow**: Base shadow
- **Hover**: Border emerald-300, Shadow xl

### Pricing Card
- **Background**: White
- **Border**: 2px solid gray-200 (#e5e7eb)
- **Border Radius**: 16px (2xl)
- **Padding**: 32px (p-8)
- **Popular**: Border emerald-500, Scale 1.05, Shadow xl

---

## 🧭 **Navigation Components**

### Header
- **Height**: 80px (h-20)
- **Background**: White with 95% opacity, backdrop blur
- **Border**: 1px solid gray-200 (#e5e7eb)
- **Shadow**: sm (0 1px 2px 0 rgb(0 0 0 / 0.05))

### Navigation Links
- **Text**: gray-700 (#374151), 16px, Medium
- **Padding**: 16px (px-4 py-2)
- **Border Radius**: 8px (lg)
- **Hover**: emerald-600 text, emerald-50 background

---

## 🎯 **Icon Specifications**

### Icon Sizes
- **Small**: 16px (h-4 w-4)
- **Medium**: 20px (h-5 w-5)
- **Large**: 24px (h-6 w-6)
- **Extra Large**: 48px (h-12 w-12)

### Icon Colors
- **Primary**: emerald-600 (#059669)
- **Secondary**: cyan-600 (#0891b2)
- **Neutral**: gray-600 (#4b5563)
- **White**: #ffffff (on dark backgrounds)

---

## 📐 **Layout Grid**

### Container
- **Max Width**: 1280px (max-w-7xl)
- **Padding**: 16px mobile, 24px tablet, 32px desktop
- **Margin**: Auto centered

### Spacing System (8px grid)
- **xs**: 4px (1)
- **sm**: 8px (2)
- **md**: 12px (3)
- **lg**: 16px (4)
- **xl**: 20px (5)
- **2xl**: 24px (6)
- **3xl**: 32px (8)
- **4xl**: 40px (10)
- **5xl**: 48px (12)
- **6xl**: 64px (16)
- **7xl**: 80px (20)

---

## 🎨 **Gradient Specifications**

### Primary Gradient
- **From**: emerald-600 (#059669)
- **To**: cyan-600 (#0891b2)
- **Direction**: Left to right (bg-gradient-to-r)

### Background Gradients
- **Hero**: slate-50 to emerald-50 (from-slate-50 to-emerald-50)
- **Dark**: gray-900 via gray-800 to gray-900

---

## 📱 **Responsive Breakpoints**

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

---

## ✨ **Animation Specifications**

### Transitions
- **Duration**: 200ms (transition-all duration-200)
- **Easing**: ease-in-out
- **Hover Scale**: 1.05 (hover:scale-105)
- **Transform**: translateX(4px) for arrows

### Custom Animations
- **fadeIn**: 0.5s ease-in-out
- **slideUp**: 0.5s ease-out
- **pulse-slow**: 3s infinite