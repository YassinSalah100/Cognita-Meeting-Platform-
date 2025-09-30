# 🎨 **COGNITA to Figma Import Guide**

## **Step 1: Set Up Your Figma File**

### Create New File
1. Open Figma and create a new design file
2. Name it "COGNITA - AI Meeting Platform"
3. Set up pages: "Design System", "Components", "Landing Page"

### Install Useful Plugins
- **Figma Tokens** - For importing design tokens
- **Content Reel** - For placeholder content
- **Unsplash** - For stock photos
- **Auto Layout** - For responsive components

---

## **Step 2: Import Design System**

### Colors
1. Go to your "Design System" page
2. Create color swatches using the colors from `design-tokens.json`
3. Organize into: Primary (Emerald), Secondary (Cyan), Neutral (Gray)
4. Create color styles for each shade

### Typography
1. Set up text styles using the typography specifications
2. Create styles for: H1, H2, H3, H4, Body Large, Body, Small, XS
3. Use system fonts: Inter or fallback to system-ui

### Effects (Shadows)
1. Create effect styles for each shadow level
2. Use the shadow specifications from the design tokens

---

## **Step 3: Create Component Library**

### Buttons
```
Primary Button:
- Background: emerald-600
- Text: White, 16px, Semibold
- Padding: 16px horizontal, 12px vertical
- Corner radius: 8px
- Auto Layout: Horizontal, 8px gap for icon+text

Secondary Button:
- Background: White
- Border: 1px gray-300
- Text: gray-700, 16px, Semibold
- Same padding and radius as primary
```

### Cards
```
Feature Card:
- Background: White
- Border: 1px gray-200
- Corner radius: 16px
- Padding: 32px
- Drop shadow: Base shadow effect
- Auto Layout: Vertical, 16px gap
```

### Navigation
```
Header:
- Background: White 95% opacity
- Height: 80px
- Border bottom: 1px gray-200
- Auto Layout: Horizontal, space between
- Padding: 0px 32px
```

---

## **Step 4: Screenshot and Trace Method**

### Take Screenshots
1. Open your live website
2. Take full-page screenshots of each section:
   - Header
   - Hero section
   - Features grid
   - Interactive demo
   - Video showcase
   - How it works
   - Pricing
   - Footer

### Import and Trace
1. Import screenshots into Figma
2. Lock the screenshot layer
3. Create new layers on top
4. Trace the design using your components
5. Use the exact measurements from component specs

---

## **Step 5: Recreate Key Sections**

### Header (80px height)
- Logo: 48px x 48px image + text
- Navigation: Auto layout, 16px gap
- CTA buttons: Use button components
- Mobile: Hamburger menu overlay

### Hero Section
- Grid: 2 columns on desktop
- Left: Text content with vertical auto layout
- Right: Demo interface mockup
- Background: Gradient from slate-50 to emerald-50

### Features Grid
- 3 columns on desktop, 1 on mobile
- Each card: 300px width, auto height
- Icon: 48px x 48px in colored background
- Auto layout: Vertical, 16px gap

### Demo Interface
- Background: White with rounded corners (16px)
- Header: Gray background with controls
- Video area: 16:9 aspect ratio
- Controls: Bottom bar with play button

---

## **Step 6: Assets You'll Need**

### Icons (Use Lucide React equivalents in Figma)
- Brain (AI features)
- MessageSquare (Chat/transcription)
- Clock (Time/scheduling)
- Users (Team collaboration)
- FileText (Documents/reports)
- Zap (Integration/speed)
- Play (Video/demo)
- Check (Checkmarks/features)

### Images
- Logo: Use the WhatsApp image provided
- Stock photos: Use Unsplash plugin with these search terms:
  - "business meeting"
  - "team collaboration"
  - "video conference"
  - "office workspace"

---

## **Step 7: Make It Responsive**

### Breakpoints
- Desktop: 1280px max width
- Tablet: 768px
- Mobile: 375px

### Auto Layout Settings
- Use "Fill container" for responsive width
- Set max widths where needed
- Use "Hug contents" for buttons and cards
- Add proper constraints for responsive behavior

---

## **Step 8: Interactive Prototyping**

### Navigation
- Link header navigation to sections
- Add hover states for buttons
- Create mobile menu overlay

### Demo Interactions
- Add click states for demo buttons
- Create modal overlays for video
- Add loading states and progress bars

---

## **Step 9: Export Assets**

### For Development
- Export icons as SVG
- Export images at 2x resolution
- Create a style guide page with all specs

### For Presentation
- Create presentation frames
- Add device mockups
- Export high-res images for marketing

---

## **🎯 Quick Start Checklist**

- [ ] Create Figma file with 3 pages
- [ ] Import color palette from design-tokens.json
- [ ] Set up typography styles
- [ ] Create button components
- [ ] Create card components
- [ ] Take screenshots of live site
- [ ] Import and trace header
- [ ] Import and trace hero section
- [ ] Import and trace features
- [ ] Add responsive breakpoints
- [ ] Create interactive prototype
- [ ] Export final assets

---

## **💡 Pro Tips**

1. **Use Components**: Create everything as components for easy updates
2. **Auto Layout**: Use auto layout for responsive behavior
3. **Variants**: Create button variants (primary, secondary, disabled)
4. **Consistent Spacing**: Stick to 8px grid system
5. **Color Styles**: Use color styles instead of hex codes
6. **Text Styles**: Create text styles for consistency
7. **Effects**: Use effect styles for shadows and glows

---

## **🔗 Useful Resources**

- **Figma Academy**: Learn auto layout and components
- **Figma Community**: Search for similar design systems
- **Lucide Icons**: Find Figma versions of your icons
- **Tailwind to Figma**: Plugins that convert Tailwind classes

This guide will help you recreate your COGNITA design perfectly in Figma with all the proper specifications and responsive behavior!