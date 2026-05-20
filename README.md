PROMPT 1:
Create a complete modern landing page in React that visually matches the uploaded design reference as closely as possible.

TECH STACK:
- React + Vite
- Plain CSS (NOT Tailwind)
- Functional components only
- Clean component structure
- Responsive design
- No backend
- No database
- No authentication functionality
- Frontend only

PROJECT STRUCTURE:
Create:
- App.jsx
- main.jsx
- index.css
- App.css
- assets folder for logo/icons if needed

DESIGN GOAL:
The landing page should look premium, minimalistic, cinematic, modern, dark, and highly polished.

GENERAL STYLE:
- Background: deep black (#000000)
- Main accent color: warm orange/gold (#f4a300 or similar)
- Text color: white
- Minimalistic layout
- Strong typography
- Large hero section
- Clean spacing
- High-end startup aesthetic
- Slight glassmorphism/subtle hover effects
- Smooth transitions

LAYOUT:
The page contains:

1. TOP NAVBAR
2. HERO SECTION
3. SOCIAL ICONS
4. FOOTER

--------------------------------------------------
1. NAVBAR
--------------------------------------------------

Navbar should be horizontally aligned.

LEFT:
- Small logo text:
  MYM

RIGHT:
Navigation items:
- ABOUT
- REGISTER button
- LOGIN button

STYLE:
- Thin typography
- White text
- REGISTER and LOGIN buttons outlined with orange border
- Rounded pill buttons
- Transparent background
- Hover effect:
  - orange background
  - black text
  - smooth transition

Navbar spacing:
- Large horizontal padding
- Vertically centered
- Clean minimalist appearance

--------------------------------------------------
2. HERO SECTION
--------------------------------------------------

This is the main focus of the page.

The hero section should contain:
- Massive typography
- Layered text composition
- Strong visual hierarchy

TEXT COMPOSITION:
The title should visually resemble:

MATCH YOUR MATCH

BUT:
- The word "YOUR" is huge
- Positioned in front of the other words
- Colored orange
- Slightly overlapping other text

The words:
- MATCH
- MATCH

should be white and positioned left/right around YOUR.

Typography:
- Extremely large
- Bold condensed font
- Cinematic spacing
- Similar to modern fashion/editorial websites

Use:
- uppercase
- strong contrast
- overlapping layout

Below the title:
Subtitle:
FIND IT. FEEL IT. MATCH IT.

Subtitle style:
- white
- uppercase
- medium-large font
- centered
- spaced letters slightly

--------------------------------------------------
3. CTA SECTION UNDER SUBTITLE
--------------------------------------------------

Under the subtitle:
Center:
- Orange rounded button:
  MATCH IN

Left and right:
- Thin horizontal white lines extending outward

The CTA area should be perfectly centered.

BUTTON STYLE:
- Orange background
- Rounded pill
- Black text
- Bold font
- Smooth hover animation:
  - scale slightly
  - brighter orange
  - soft glow

--------------------------------------------------
4. SOCIAL ICONS
--------------------------------------------------

Under the CTA button:
Display centered social icons:
- Instagram
- YouTube
- X/Twitter

Use:
- lucide-react or react-icons

Style:
- White icons
- Small minimal icons
- Hover:
  - orange color
  - subtle scale

--------------------------------------------------
5. FOOTER
--------------------------------------------------

Footer should contain:

CENTER:
Large text logo:
MATCHYOURMATCH

Where:
- YOUR is orange
- the rest white

Under it:
Small footer links:
- Link One
- Link Two
- Link Three
- Link Four
- Link Five

BOTTOM AREA:
Left:
© 2025 MYM TEAM. All rights reserved

Right:
- Privacy Policy
- Terms of Service
- Cookies Settings

Footer style:
- Minimal
- Thin typography
- Very small text
- Elegant spacing

--------------------------------------------------
RESPONSIVENESS
--------------------------------------------------

Make the site fully responsive.

MOBILE:
- Navbar stacks properly
- Hero text scales down cleanly
- No overflow
- CTA remains centered
- Footer becomes vertical
- Maintain premium aesthetic

TABLET:
- Balanced scaling
- Maintain layered typography effect

DESKTOP:
- Full cinematic layout

--------------------------------------------------
ANIMATIONS
--------------------------------------------------

Add subtle animations:
- Fade-in on page load
- Smooth hover transitions
- Hero text slight entrance animation
- Buttons animate smoothly
- No excessive motion

--------------------------------------------------
TYPOGRAPHY
--------------------------------------------------

Use Google Fonts.

Recommended:
- Bebas Neue
OR
- Anton
OR
- Oswald

Body font:
- Inter
OR
- Poppins

--------------------------------------------------
BACKGROUND
--------------------------------------------------

Use:
- Pure black background
- Slight dark gradient overlays
- Optional subtle noise texture
- Very subtle glow around orange elements

--------------------------------------------------
CSS REQUIREMENTS
--------------------------------------------------

Write professional clean CSS:
- Use CSS variables in :root
- Use flexbox/grid
- Proper spacing system
- Reusable classes
- Responsive media queries
- Smooth transitions
- Organized sections/comments

--------------------------------------------------
IMPORTANT
--------------------------------------------------

Do NOT create backend code.
Do NOT use Tailwind.
Do NOT use Bootstrap.
Do NOT use Material UI.
Do NOT use authentication.
Do NOT create multiple pages.

Only create:
- a polished frontend landing page
- with React and CSS
- matching the uploaded reference image closely.

Also:
- make the UI look even more modern and premium than the reference
- ensure spacing and alignment are pixel-clean
- use semantic HTML structure
- make the final result production-quality
__________________________________________________________________________________________________________________________________________
prompt 2:

Extend the existing React + Vite landing page project by adding full client-side routing and two additional pages: Login and Register.

DO NOT modify the visual design system. Keep the exact same UI style, typography, colors, spacing, and animation language as the landing page.

TECH STACK (STRICT):
- React + Vite
- react-router-dom (for routing)
- Plain CSS (NO Tailwind, NO UI libraries)
- Functional components only
- Frontend only (NO backend, NO API calls, NO authentication logic)

--------------------------------------------------
PROJECT STRUCTURE UPDATE
--------------------------------------------------

Update the project to include:

/src
  /pages
    Home.jsx
    Login.jsx
    Register.jsx

  /components
    Navbar.jsx
    Footer.jsx

  App.jsx
  main.jsx
  index.css
  App.css
  /assets

--------------------------------------------------
ROUTING REQUIREMENTS
--------------------------------------------------

Install and use:
react-router-dom

Routes:

- "/" → Home (landing page)
- "/login" → Login page
- "/register" → Register page

Navigation behavior:
- Clicking "LOGIN" in navbar navigates to /login
- Clicking "REGISTER" in navbar navigates to /register
- Navbar must remain consistent across all pages (shared component)

Use:
- useNavigate OR Link components from react-router-dom
- No page reloads (SPA behavior only)

--------------------------------------------------
NAVBAR UPDATE
--------------------------------------------------

Navbar must now be reusable component:

LEFT:
- MYM logo (click navigates to "/")

RIGHT:
- ABOUT (optional anchor or placeholder)
- LOGIN (navigates to /login)
- REGISTER (navigates to /register)

Style must remain identical to original:
- Transparent background
- White text
- Orange hover effects
- Pill buttons for LOGIN and REGISTER

--------------------------------------------------
HOME PAGE ("/")
--------------------------------------------------

Keep EXACT existing landing page design:
- Hero section (MATCH YOUR MATCH)
- Subtitle
- CTA button (MATCH IN)
- Social icons
- Footer

NO visual changes except navigation integration.

--------------------------------------------------
LOGIN PAGE ("/login")
--------------------------------------------------

Create a modern, minimal, premium login page matching the same design system:

LAYOUT:
- Centered glassmorphism card
- Dark background (#000000)
- Subtle orange glow accents

FORM:
- Title: "LOGIN"
- Input fields:
  - Email
  - Password
- Button:
  - "SIGN IN"
  - Orange pill button
- Small text below:
  - "Don't have an account? Register"

NAVIGATION:
- Clicking "Register" navigates to /register
- Clicking logo returns to home

STYLE:
- Same fonts as landing page (Bebas Neue / Inter)
- Same orange accent (#f4a300)
- Smooth hover transitions
- Subtle fade-in animation

NO validation logic required (frontend only).

--------------------------------------------------
REGISTER PAGE ("/register")
--------------------------------------------------

Same design language as Login page but:

FORM FIELDS:
- Full Name
- Email
- Password
- Confirm Password

BUTTON:
- "CREATE ACCOUNT"

TEXT BELOW:
- "Already have an account? Login"

NAVIGATION:
- Login link navigates to /login
- Logo navigates to home

--------------------------------------------------
DESIGN SYSTEM (STRICT CONSISTENCY)
--------------------------------------------------

Must reuse the same:
- Colors:
  - Background: #000000
  - Accent: #f4a300
  - Text: #ffffff
- Typography:
  - Headlines: Bebas Neue / Anton / Oswald
  - Body: Inter / Poppins
- Styling:
  - Minimal, cinematic, premium startup aesthetic
  - Glassmorphism cards for auth pages
  - Subtle glow around orange elements
  - Smooth transitions (no heavy animations)

--------------------------------------------------
RESPONSIVENESS
--------------------------------------------------

ALL pages must be fully responsive:

MOBILE:
- Auth cards full width with padding
- Navbar collapses cleanly
- Hero text scales properly

TABLET:
- Balanced spacing
- No overflow issues

DESKTOP:
- Centered layouts
- Strong visual hierarchy

--------------------------------------------------
ANIMATIONS
--------------------------------------------------

Add subtle consistent animations:
- Fade-in on page load (all pages)
- Smooth hover transitions
- Button hover scale effect
- Input focus glow effect (orange border glow)

NO excessive animations or motion libraries.

--------------------------------------------------
IMPORTANT RULES
--------------------------------------------------

- Do NOT change landing page design
- Do NOT introduce new color themes
- Do NOT use Tailwind, Bootstrap, MUI
- Do NOT add backend or authentication logic
- Do NOT create multiple layouts that break consistency
- Keep everything production-quality and clean

FINAL GOAL:
A unified premium React UI with:
- Landing page (marketing)
- Login page (auth UI)
- Register page (auth UI)
- Seamless navigation via React Router
- Consistent high-end cinematic design system
