# HNG Stage 1 – Multi-Page Web Application

This is the continuation of my **Stage 0 Profile Card** project.  
Stage 1 extends the original single-page component into a **multi-page, accessible, responsive website** with two new pages — a **Contact Form** and an **About Me** page — built using semantic HTML, modern CSS, and vanilla JavaScript.

---

## ✦ Overview

The project now includes three connected pages:

1. **Home / Profile Page** – the Stage 0 profile card.  
2. **Contact Page** – a form with validation and success/error handling.  
3. **About Page** – a reflective write-up structured with semantic sections.

Navigation links connect all three for a seamless user flow.

---

## ✦ Features

- Consistent site-wide layout and navigation  
- Semantic HTML structure with accessible labels and ARIA links  
- Fully responsive design (mobile → desktop)  
- Contact form with JavaScript validation and dynamic messages  
- About page with clear sections for reflection  
- Keyboard-friendly navigation and visible focus styles  
- No frameworks or libraries — 100% HTML, CSS, and JS  

---

## ✦ Page Details

### 🡒 **Contact Page**
Form includes:
- Full name (`test-contact-name`)  
- Email (`test-contact-email`)  
- Subject (`test-contact-subject`)  
- Message (`test-contact-message`)  
- Submit button (`test-contact-submit`)  
- Error messages (`test-contact-error-<field>`)  
- Success message (`test-contact-success`)

**Validation Rules**
- All fields required  
- Valid email format (e.g., `name@example.com`)  
- Message ≥ 10 characters  
- Success message only after valid input

**Accessibility**
- Every input has a `<label>` linked with `for`  
- Error messages tied to inputs via `aria-describedby`  
- Entire form is keyboard-accessible

---

### 🡒 **About Page**
Sections and their `data-testid` values:

| Section | Data Test ID |
|----------|--------------|
| Bio | `test-about-bio` |
| Goals | `test-about-goals` |
| Areas of Low Confidence | `test-about-confidence` |
| Note to Future Self | `test-about-future-note` |
| Extra Thoughts | `test-about-extra` |

Wrapped in:
```html
<main data-testid="test-about-page">

Each section uses proper headings (<h2>, <h3>) and paragraphs for readability.

✦ General Accessibility & Semantics

Uses <main>, <section>, <header>, <nav>, <form>, <label>

Includes descriptive alt text for all images

Visible focus states for interactive elements

Responsive via Flexbox + Grid

Minimal, readable, maintainable codebase

✦ Tech Stack

HTML5

CSS3 (Flexbox + Grid)

Vanilla JavaScript

✦ Live Links

Live Demo: https://hngstage0and1-ly.netlify.app/

Repository: https://github.com/lateefaayesufu/hngstage0and1-ly

✦ Local Setup
git clone https://github.com/lateefaayesufu/hngstage0and1-ly
cd hngstage0and1-ly
open index.html   # Mac
start index.html  # Windows