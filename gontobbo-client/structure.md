# 📁 Project Structure

```bash
.
├── activity.md
├── bun.lock
├── cli.md
├── demo.mp4
├── eslint.config.js
├── index.html
├── package.json
├── public
│   ├── CNAME
│   └── vite.svg
├── README3.md
├── readmeGenerateAdvanced.md
├── readmeGenerateFull.md
├── readmeGeneratePrev.md
├── README.md
├── src
│   ├── animation
│   │   ├── auth-lottie.json
│   │   ├── index.js
│   │   ├── LottieAnimation.jsx
│   │   └── motion.js
│   ├── App.jsx
│   ├── assets
│   │   ├── Brands
│   │   │   ├── 1panel.svg
│   │   │   ├── abbott.svg
│   │   │   ├── activision.svg
│   │   │   ├── index.js
│   │   │   ├── logmein.svg
│   │   │   ├── nike.svg
│   │   │   ├── openjsfoundation.svg
│   │   │   └── tech.svg
│   │   ├── images
│   │   │   ├── a-delivery-bike-speeding-through-a-vibrant-bangladesh.jpg
│   │   │   ├── bgDesign.jpg
│   │   │   ├── finalLogo.png
│   │   │   ├── footerBg.jpg
│   │   │   ├── index.js
│   │   │   ├── location.jpg
│   │   │   ├── locationRounded.png
│   │   │   ├── locationRounded-removebg.png
│   │   │   ├── logoCircle2.png
│   │   │   ├── logoCircle.png
│   │   │   ├── logoFull.jpg
│   │   │   ├── logoFull-modified.png
│   │   │   ├── logo.jpg
│   │   │   ├── preview
│   │   │   │   ├── Desktop
│   │   │   │   │   ├── Create
│   │   │   │   │   │   └── CreateParcel3.png
│   │   │   │   │   └── Home
│   │   │   │   │       ├── Hompage1.png
│   │   │   │   │       └── updatePage2.png
│   │   │   │   ├── Laptop
│   │   │   │   │   ├── Create
│   │   │   │   │   │   └── CreateParcel3.png
│   │   │   │   │   ├── Home
│   │   │   │   │   │   └── laptopPreview1.png
│   │   │   │   │   └── Update
│   │   │   │   │       └── updatePage2.png
│   │   │   │   └── Mobile
│   │   │   │       ├── CreateParcel3.png
│   │   │   │       ├── mobilePreview1.png
│   │   │   │       └── updatePage2.png
│   │   │   └── profile.jpg
│   │   ├── react.svg
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
│   ├── console
│   │   ├── error.json
│   │   └── log.json
│   ├── contexts
│   │   └── AuthContext
│   │       ├── AuthContext.jsx
│   │       └── AuthProvider.jsx
│   ├── firebase
│   │   └── firebase.init.js
│   ├── hooks
│   │   ├── GeminiChatBox.jsx
│   │   ├── refractorHooksPrompt.md
│   │   ├── useAuth.jsx
│   │   ├── useAxiosSecure.js
│   │   ├── useHelmet.jsx
│   │   └── useParcelForm
│   │       ├── index.js
│   │       ├── parcelSubmitHandler.js
│   │       ├── renderParcelSummaryHtml.js
│   │       ├── useParcelFormCore.js
│   │       └── useParcelKeyShortcut.js
│   ├── index.css
│   ├── layout
│   │   ├── AuthLayout.jsx
│   │   ├── DashboardLayout.jsx
│   │   └── RootLayout.jsx
│   ├── loggerClient.js
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
│   │   │   ├── pages
│   │   │   │   ├── ForgotPass.jsx
│   │   │   │   ├── Signin.jsx
│   │   │   │   └── SignUp.jsx
│   │   │   └── refractorAuthPrompt.md
│   │   ├── dashboard
│   │   │   ├── MyParcels
│   │   │   │   └── MyParcels.jsx
│   │   │   ├── payment
│   │   │   │   ├── 0-Card-Minimal.js
│   │   │   │   ├── PaymentForm.jsx
│   │   │   │   └── Payment.jsx
│   │   │   └── PaymentHistory
│   │   │       └── PaymentHistory.jsx
│   │   ├── gontobboZones
│   │   │   ├── components
│   │   │   │   ├── BangladeshMap.jsx
│   │   │   │   ├── GontobboInfoPopup.jsx
│   │   │   │   ├── GontobboSearchBox.jsx
│   │   │   │   └── ZoneCard.jsx
│   │   │   ├── gontobbo.constants.js
│   │   │   ├── GontobboZones.jsx
│   │   │   └── refractorGontobboZonesPrompt.md
│   │   ├── gontobboZones_refactored
│   │   │   ├── components
│   │   │   │   ├── BangladeshMap.jsx
│   │   │   │   ├── GontobboSearchBox.jsx
│   │   │   │   └── InfoPopup.jsx
│   │   │   ├── constants
│   │   │   │   └── zones.js
│   │   │   ├── GontobboZones.jsx
│   │   │   ├── hooks
│   │   │   │   └── useZoneFilter.js
│   │   │   └── utils
│   │   │       └── string.js
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
│   │   ├── rebuild-sendparcel.sh
│   │   ├── SendParcel
│   │   │   ├── components
│   │   │   │   ├── FormInput.jsx
│   │   │   │   ├── FormSelect.jsx
│   │   │   │   ├── FormTextarea.jsx
│   │   │   │   ├── ParcelInfo.jsx
│   │   │   │   ├── RecieverInfo.jsx
│   │   │   │   ├── SenderInfo.jsx
│   │   │   │   ├── SendParcelForm.jsx
│   │   │   │   └── SendParcleFormRadioGroup.jsx
│   │   │   ├── refractorSendParcelPrompt.md
│   │   │   ├── SendParcel.jsx
│   │   │   ├── sendpercel.constant.js
│   │   │   └── setup_sendparcel_refactor.sh
│   │   ├── SendParcel_refactored
│   │   │   ├── components
│   │   │   │   ├── FormInput.jsx
│   │   │   │   ├── FormRadioGroup.jsx
│   │   │   │   ├── FormSelect.jsx
│   │   │   │   ├── FormTextarea.jsx
│   │   │   │   ├── ParcelInfo.jsx
│   │   │   │   ├── ReceiverInfo.jsx
│   │   │   │   ├── SenderInfo.jsx
│   │   │   │   └── SendParcelForm.jsx
│   │   │   ├── constants
│   │   │   │   └── sendParcel.testData.js
│   │   │   ├── SendParcel.jsx
│   │   │   └── utils
│   │   │       └── regionUtils.js
│   │   ├── setup_gontobboZones_refactor.sh
│   │   ├── setup_sendparcel_refactor.sh
│   │   └── shared
│   │       ├── BrandLogo
│   │       │   └── BrandLogo.jsx
│   │       ├── Error.jsx
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
│   ├── router
│   │   ├── authRouter.jsx
│   │   ├── dashboardRouter.jsx
│   │   ├── PrivateRoute.jsx
│   │   └── router.jsx
│   └── utils
│       ├── costCalculator.js
│       ├── formValidations.js
│       └── swal.js
├── structure.md
├── vite.config.js
└── vite.logger.plugin.js

59 directories, 195 files

```
