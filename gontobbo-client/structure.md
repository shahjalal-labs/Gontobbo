# 📁 Project Structure

```bash
.
├── bun.lock
├── demo.mp4
├── eslint.config.js
├── index.html
├── package.json
├── public
│   ├── CNAME
│   └── vite.svg
├── README2.md
├── readmeGenerate.md
├── README.md
├── src
    ├── assets
│   │   ├── images
│   │   ├── preview
│   │   │   ├── Desktop
│   │   │   │   ├── Create
│   │   │   │   │   └── CreateParcel3.png
│   │   │   │   └── Home
│   │   │   │       ├── Hompage1.png
│   │   │   │       └── updatePage2.png
│   │   │   ├── Laptop
│   │   │   │   ├── Create
│   │   │   │   │   └── CreateParcel3.png
│   │   │   │   ├── Home
│   │   │   │   │   └── laptopPreview.png
│   │   │   │   └── Update
│   │   │   │       └── updatePage2.png
│   │   │   └── Mobile
│   │   │       ├── CreateParcel3.png
│   │   │       ├── mobilePreview.png
│   │   │       └── updatePage2.png
│   │   └── profile.jpg
│   │   react.svg
│   │   └── screenshots
│   │       ├── fullpage.png
│   │       ├── mobileviewFullpage.png
│   │       ├── preview
│   │       │   ├── desktopPreview.pdf
│   │       │   ├── desktopPreview.png
│   │       │   ├── laptopPreview.pdf
│   │       │   ├── laptopPreview.png
│   │       │   ├── mobilePreview.pdf
│   │       │   └── mobilePreview.png
│   │       ├── ss-10-18-55-AM_28-06-25.png
│   │       ├── ss-10-19-51-AM_28-06-25.png
│   │       ├── ss-10-24-03-AM_28-06-25.png
│   │       ├── ss-10-24-25-AM_28-06-25.png
│   │       ├── ss-10-24-49-AM_28-06-25.png
│   │       ├── ss-10-25-39-AM_28-06-25.png
│   │       ├── ss-10-27-08-AM_28-06-25.png
│   │       ├── ss-10-38-51-AM_28-06-25.png
│   │       ├── ss-10-39-17-AM_28-06-25.png
│   │       ├── ss-10-39-34-AM_28-06-25.png
│   │       ├── ss-10-40-55-AM_28-06-25.png
│   │       ├── ss-10-41-19-AM_28-06-25.png
│   │       ├── ss-10-46-00-AM_28-06-25.png
│   │       ├── ss-10-46-22-AM_28-06-25.png
│   │       ├── ss-10-46-48-AM_28-06-25.png
│   │       ├── ss-10-47-08-AM_28-06-25.png
│   │       ├── ss-10-47-26-AM_28-06-25.png
│   │       ├── ss-10-47-44-AM_28-06-25.png
│   │       ├── ss-11-26-15-AM_28-06-25.png
│   │       ├── ss-11-26-35-AM_28-06-25.png
│   │       ├── ss-11-26-58-AM_28-06-25.png
│   │       ├── ss-11-27-22-AM_28-06-25.png
│   │       └── ss-11-27-45-AM_28-06-25.png
│   ├── contexts
│   │   └── AuthContext
│   │       ├── AuthContext.jsx
│   │       └── AuthProvider.jsx
│   ├── firebase
│   │   └── firebase.init.js
│   ├── hooks
│   │   ├── useAuth.jsx
│   │   └── useHelmet.jsx
│   ├── index.css
│   ├── layout
│   │   ├── AuthLayout.jsx
│   │   └── RootLayout.jsx
│   ├── main.jsx
│   ├── pages
│   │   ├── Auth
│   │   │   ├── AuthLayout.jsx
│   │   │   ├── components
│   │   │   │   ├── AuthSidebar.jsx
│   │   │   │   ├── constant.js
│   │   │   │   ├── SideBarCard.jsx
│   │   │   │   ├── SigninForm.jsx
│   │   │   │   ├── Signout.jsx
│   │   │   │   ├── SignUpForm.jsx
│   │   │   │   ├── SignUpPasswordInputs.jsx
│   │   │   │   └── SocialLogin.jsx
│   │   │   ├── index.js
│   │   │   └── pages
│   │   │       ├── ForgotPass.jsx
│   │   │       ├── Signin.jsx
│   │   │       └── SignUp.jsx
│   │   ├── Authentication
│   │   │   ├── Login
│   │   │   │   └── Login.jsx
│   │   │   └── Register
│   │   │       └── Register.jsx
│   │   ├── gontobboZones
│   │   │   ├── components
│   │   │   │   ├── BangladeshMap.jsx
│   │   │   │   ├── GontobboInfoPopup.jsx
│   │   │   │   └── ZoneCard.jsx
│   │   │   ├── gontobbo.constants.js
│   │   │   └── GontobboZones.jsx
│   │   ├── Home
│   │   │   ├── Banner
│   │   │   │   ├── banner.constant.js
│   │   │   │   └── Banner.jsx
│   │   │   ├── Benefits
│   │   │   │   ├── BenefitCard.jsx
│   │   │   │   ├── benefit.constant.js
│   │   │   │   └── Benefits.jsx
│   │   │   ├── ClientLogosMarquee
│   │   │   │   └── ClientLogosMarquee.jsx
│   │   │   ├── Home
│   │   │   │   ├── BeMerchant
│   │   │   │   │   └── BeMerchant.jsx
│   │   │   │   ├── Home.jsx
│   │   │   │   └── import.jsx
│   │   │   └── Services
│   │   │       ├── ServiceCard.jsx
│   │   │       ├── ServiceIntro.jsx
│   │   │       ├── services.constant.js
│   │   │       └── Services.jsx
│   │   └── shared
│   │       ├── BrandLogo
│   │       │   └── BrandLogo.jsx
│   │       ├── Footer
│   │       │   └── Footer.jsx
│   │       ├── Navbar
│   │       │   ├── navbar.constant.jsx
│   │       │   ├── NavbarEnd.jsx
│   │       │   ├── Navbar.jsx
│   │       │   ├── NavbarMiddle.jsx
│   │       │   ├── NavbarStart.jsx
│   │       │   └── TopNav.jsx
│   │       └── Spinner.jsx
│   └── router
│       ├── authRouter.jsx
│       └── router.jsx
├── structure.md
└── vite.config.js

44 directories, 133 files

```
