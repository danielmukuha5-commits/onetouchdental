# One Touch Dental Clinic — Landing Page
## VS Code Setup Guide

---

### 📁 File Structure

```
onetouch-dental/
├── index.html      ← Main landing page (open this in browser)
├── style.css       ← All styles
├── main.js         ← Form logic, animations, tracking
├── braces.html     ← (link from previous build)
├── root-canal.html ← (link from previous build)
├── whitening.html  ← (link from previous build)
├── services.html   ← (link from previous build)
├── pricing.html    ← (link from previous build)
├── blog.html       ← (link from previous build)
├── blog-post.html  ← (link from previous build)
└── README.md       ← This file
```

---

### 🚀 How to Open in VS Code

1. **Unzip** the folder
2. Open **VS Code**
3. File → Open Folder → Select `onetouch-dental/`
4. Install the **Live Server** extension (by Ritwick Dey)
5. Right-click `index.html` → **Open with Live Server**
6. Your browser opens at `http://127.0.0.1:5500/`

---

### 📋 Checklist Before Going Live

**Personalise the content:**
- [ ] Replace `onetouchdentalthika.co.ke` in `<link rel="canonical">` with your real domain
- [ ] Add a real clinic photo at `clinic-photo.jpg` (referenced in schema)
- [ ] Update Google Maps link in the authority section with exact clinic coordinates

**Phone is already set:**
- ✅ WhatsApp: `+254 708 792043`
- ✅ Call: `+254 708 792043`
- These appear automatically throughout the page

**Before launching, test:**
- [ ] Fill in the form — does WhatsApp open with the correct message?
- [ ] Click the floating WhatsApp button — does it open correctly?
- [ ] Test on mobile (use Chrome DevTools → F12 → Toggle device toolbar)
- [ ] Check all internal links (braces.html, whitening.html, etc.) work

---

### 🌐 How to Go Live (Free Options)

**Option 1 — Netlify (Recommended, Free)**
1. Go to netlify.com → Sign up free
2. Drag and drop the entire folder into the deploy area
3. You get a free URL like `https://onetouch-dental.netlify.app`
4. Connect your `.co.ke` domain in settings

**Option 2 — GitHub Pages (Free)**
1. Create a GitHub account
2. New repository → Upload all files
3. Settings → Pages → Deploy from main branch
4. Free URL: `https://yourusername.github.io/onetouch-dental`

**Option 3 — Carrd.co (Paid, KES ~1,500/year)**
- Doesn't support multi-file HTML — use Netlify instead

---

### 🔍 SEO Already Built In

The page includes:
- ✅ Title tag optimised for "dental clinic Thika"
- ✅ Meta description with keywords
- ✅ LocalBusiness + Dentist schema markup
- ✅ FAQPage schema (Google rich snippets)
- ✅ Canonical URL tag
- ✅ OpenGraph meta tags
- ✅ Semantic HTML (h1, h2, h3 hierarchy)
- ✅ Mobile-responsive (Google mobile-first indexing)
- ✅ Internal links to service pages and blog

**After going live:**
1. Submit URL to Google Search Console (free)
2. Create/claim Google Business Profile (free)
3. Add your website URL to Google Business Profile

---

### 💬 How the Form Works

When a patient submits:
1. Their name, phone, and service are captured
2. A WhatsApp message is automatically composed
3. WhatsApp opens with the message pre-filled
4. The clinic receives the message on **0708 792043**
5. A thank-you screen appears on the page

**The message format sent to clinic:**
```
🦷 New Consultation Request — One Touch Dental Clinic

👤 Name: Jane Kamau
📞 Phone: 0712 345 678
🩺 Treatment needed: Metal Braces (Budget-friendly)
📍 Source: Google Ads / cpc / braces-thika

Sent from the One Touch Dental website.
```

---

### 📊 How to Track Conversions

Add Google Analytics to track form submissions and page traffic:

1. Create a free account at analytics.google.com
2. Get your Measurement ID (looks like `G-XXXXXXXXXX`)
3. Add this to `<head>` in `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

The form already calls `gtag('event', 'conversion', ...)` automatically when submitted.

---

### 🎨 Customisation Reference

**To change the primary teal colour:**
```css
/* In style.css, line ~20 */
--teal: #0B6E6E;
--teal-d: #074f4f;
```

**To change the gold/button colour:**
```css
--gold: #c8842e;
--gold-l: #e09840;
```

**To update prices:**
Search for `KES` in `index.html` and update the amounts.

---

### 📞 Support

Built by **Veltrix Marketing**
- WhatsApp: 0701 924 941
- Email: danielmukuha5@gmail.com
