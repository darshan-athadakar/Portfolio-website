# 🚀 Deployment Checklist

## Before You Deploy - Update These Files:

### 1. **src/data/profile.js**

```javascript
export const profile = {
  name: "Your Actual Name", // ⚠️ UPDATE THIS
  title: "Java Full Stack Developer",
  experience: "1+ year professional experience | 3 months internship",
  email: "your.actual.email@example.com", // ⚠️ UPDATE THIS
  linkedin: "https://linkedin.com/in/your-actual-profile", // ⚠️ UPDATE THIS
  github: "https://github.com/your-actual-username", // ⚠️ UPDATE THIS
  location: "Bangalore, Karnataka, India",
};
```

### 2. **index.html** (After Netlify gives you the URL)

Replace all instances of:

- `"Your Name"` → Your actual name
- `"https://yourportfolio.netlify.app/"` → Your actual Netlify URL
- `"@yourtwitterhandle"` → Your Twitter (or remove if you don't have)
- LinkedIn and GitHub URLs in JSON-LD section

---

## 🎯 Deployment Steps:

### **Option 1: Deploy via Netlify Dashboard (Easiest)**

1. **Build the project locally first:**

   ```bash
   cd portfolio-website
   npm run build
   ```

   Make sure it builds without errors!

2. **Push to GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Deploy on Netlify:**

   - Go to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

4. **After Deployment:**
   - Copy your Netlify URL (e.g., `https://your-site-name.netlify.app`)
   - Update `index.html` with this URL
   - Commit and push changes
   - Netlify will auto-redeploy

### **Option 2: Deploy via Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
cd portfolio-website
netlify init
netlify deploy --prod
```

---

## ✅ Post-Deployment Checklist:

### **Immediate Testing:**

- [ ] Visit your live site
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Check on mobile device
- [ ] Test all social media links
- [ ] Verify all sections load correctly

### **SEO & Social Media:**

- [ ] Test Open Graph with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test Twitter Card with [Twitter Validator](https://cards-dev.twitter.com/validator)
- [ ] Run [Google Lighthouse](chrome://lighthouse) audit (aim for 90+)
- [ ] Submit to [Google Search Console](https://search.google.com/search-console)

### **Contact Form:**

- [ ] Go to Netlify Dashboard → Forms
- [ ] Verify "contact" form is listed
- [ ] Set up email notifications
- [ ] Test form submission
- [ ] Check spam folder for test email

### **Optional Enhancements:**

- [ ] Add custom domain (if you have one)
- [ ] Set up Google Analytics
- [ ] Create og-image.jpg for social sharing
- [ ] Add profile photo
- [ ] Enable Netlify Analytics

---

## 🔧 Common Issues & Fixes:

### **Issue: Contact form not working**

**Fix:** Make sure the hidden form in `index.html` exists and matches your form name

### **Issue: 404 on page refresh**

**Fix:** Already configured in `netlify.toml` - redirects are set up

### **Issue: Build fails on Netlify**

**Fix:**

- Check Node version (should be 18)
- Run `npm run build` locally first
- Check for any console errors

### **Issue: Images not loading**

**Fix:** Make sure images are in `public/` folder, not `src/assets/`

### **Issue: Styles not applying**

**Fix:**

- Clear browser cache (Ctrl+Shift+R)
- Check if Tailwind CSS is properly configured
- Verify `index.css` imports Tailwind directives

---

## 📱 Share Your Portfolio:

Once deployed, share on:

- ✅ LinkedIn (add to profile, make a post)
- ✅ GitHub (add to profile README)
- ✅ Resume (add URL)
- ✅ Email signature
- ✅ Job applications

---

## 🎨 Optional: Custom Domain

If you have a custom domain (e.g., `yourname.dev`):

1. Go to Netlify Dashboard → Domain settings
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. Update all URLs in `index.html` to your custom domain
5. Netlify provides free SSL certificate automatically

---

## 📊 Monitor Your Portfolio:

### **Netlify Dashboard:**

- Deploy history
- Form submissions
- Bandwidth usage
- Build logs

### **Google Search Console:**

- Search performance
- Index coverage
- Mobile usability
- Core Web Vitals

### **Analytics (if added):**

- Visitor count
- Popular pages
- Traffic sources
- User behavior

---

## 🔄 Making Updates:

After deployment, to make changes:

1. Edit files locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Netlify auto-deploys (takes 1-2 minutes)

Or use Netlify CLI:

```bash
netlify deploy --prod
```

---

## 🎉 You're Ready!

Your portfolio is production-ready with:

- ✅ Professional design
- ✅ SEO optimized
- ✅ Mobile responsive
- ✅ Contact form
- ✅ Fast loading
- ✅ Social media ready

Just update your personal information and deploy! 🚀

**Need help?** Check the README.md or SEO-SETUP-GUIDE.md files.
