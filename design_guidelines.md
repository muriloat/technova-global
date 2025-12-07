# Design Guidelines: Global Technology Innovation Partners

## Design Approach
**Reference-Based Approach**: Drawing inspiration from enterprise technology leaders like IBM, Accenture, and Microsoft's consulting divisions. Clean, sophisticated, and trust-building aesthetic that conveys expertise and global reach.

## Core Design Principles
- Professional sophistication with modern edge
- Trust through clarity and precision
- Enterprise-grade polish across all touchpoints
- Technology-forward visual language

## Typography System
**Font Families** (via Google Fonts):
- Primary: Inter (400, 500, 600, 700)
- Accent/Headers: Space Grotesk (600, 700)

**Hierarchy**:
- Hero Headlines: 4xl-6xl, font-bold, Space Grotesk
- Section Headers: 3xl-4xl, font-semibold, Space Grotesk
- Subheadings: xl-2xl, font-semibold, Inter
- Body Text: base-lg, font-normal, Inter
- Navigation: sm-base, font-medium, Inter
- Captions/Labels: sm, font-medium, Inter

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Sections: py-16 to py-24 (mobile to desktop)
- Component padding: p-6 to p-12
- Element gaps: gap-4 to gap-8
- Margins: m-4, m-8, m-12

**Container Strategy**:
- Full sections: w-full with max-w-7xl mx-auto px-6
- Content blocks: max-w-6xl
- Text content: max-w-4xl

## Hero Section - Home Page
**Hero Carousel Implementation**:
- Full-width rotating background image carousel
- 3-4 high-quality technology images (AI labs, data centers, innovation spaces, global connectivity)
- Subtle fade transitions between images (4-5 second intervals)
- Semi-transparent overlay for text readability
- No floating or animated elements above/within carousel

**Hero Content**:
- Centered content overlay on carousel
- Large headline with company tagline
- Supporting subheadline
- Two CTAs (primary + secondary) with blurred backgrounds
- CTA buttons positioned together, not overlapping carousel controls

## Multi-Page Structure

**Navigation**:
- Fixed header with logo left, menu items right
- Desktop: horizontal menu (Home, About Us, Services, Industries, Contact)
- Mobile: hamburger menu
- Subtle background blur on scroll

**Home Page Sections**:
1. Hero Carousel (described above)
2. Services Overview (3-column grid on desktop, stack mobile)
3. Industries Served (2x2 grid with icons and imagery)
4. Why Choose Us (benefits with supporting imagery)
5. Client Testimonials (2-column cards)
6. CTA Section (centered, prominent)

**About Us Page**:
- Leadership team grid with professional headshots
- Company values section with icons
- Timeline of milestones
- Office locations with imagery

**Services Page**:
- Service detail cards with sharp professional imagery
- Each service: icon, title, description, supporting image
- 2-column layout alternating image/text sides

**Industries Page**:
- Industry-specific case study cards
- Grid layout with hover effects revealing details
- Industry imagery prominently featured

**Contact Page**:
- Professional contact form (name, email, company, service interest, message, file upload)
- Company contact information sidebar
- No decorative floating elements

## Component Library

**Buttons**:
- Primary: Large, bold, high contrast
- Secondary: Outlined style
- All buttons on images: backdrop-blur-sm background
- No custom hover states needed (inherit component defaults)

**Cards**:
- Rounded corners (rounded-lg to rounded-xl)
- Subtle shadows (shadow-md to shadow-lg)
- Padding: p-6 to p-8
- Image-first design where applicable

**Forms**:
- Clean, spacious input fields
- Clear labels and validation states
- File upload with drag-and-drop area
- Submit button prominent and accessible

**Icons**:
- Use Heroicons via CDN
- 24px standard size, 32px for features
- Used sparingly for clarity and emphasis

## Images

**Hero Carousel Images** (3-4 images):
1. Modern AI/ML laboratory with technology equipment
2. Global network connectivity visualization
3. Innovation workspace with diverse team collaboration
4. Data center or cloud infrastructure

**Service Section Images**:
- Digital transformation consulting: Modern office with screens/technology
- AI/ML solutions: Neural network or algorithm visualization
- Blockchain integration: Distributed network diagram
- IoT implementation: Connected devices ecosystem

**About/Team Images**:
- Professional executive headshots
- Office environment photography
- Team collaboration scenes

**Industry Images**:
- Finance: Trading floor or fintech interfaces
- Healthcare: Medical technology integration
- Manufacturing: Smart factory automation
- Retail: Digital commerce experiences

All images should be high-resolution, professionally shot, with consistent color grading toward cool, professional tones.

## Animation Guidelines
**Minimal Animation Strategy**:
- Carousel fade transitions only
- Subtle hover elevation on cards (transform translateY)
- No floating or wandering elements
- No complex scroll-triggered animations
- Focus on instant responsiveness

## Accessibility
- Semantic HTML throughout
- ARIA labels on carousel controls
- Form inputs with proper labels and error states
- Keyboard navigation support
- Sufficient color contrast ratios

## Footer
- Multi-column layout (Company info, Quick Links, Services, Contact)
- Newsletter signup section
- Social media links
- Trust badges/certifications if applicable
- Copyright and legal links