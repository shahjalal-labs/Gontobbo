You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/63moZapShift1/gontobbo/gontobbo-client/src/pages/gontobboZones
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `gontobboZones_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved gontobboZones version`

---

## 🌲 Full Project Structure (cwd)

```bash
/run/media/sj/developer/web/L1B11/12mi/63moZapShift1/gontobbo/gontobbo-client
├── bun.lock
├── demo.mp4
├── eslint.config.js
├── index.html
├── package.json
├── public
│   ├── CNAME
│   └── vite.svg
├── README2.md
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
│   ├── contexts
│   │   └── AuthContext
│   │       ├── AuthContext.jsx
│   │       └── AuthProvider.jsx
│   ├── firebase
│   │   └── firebase.init.js
│   ├── hooks
│   │   ├── GeminiChatBox.jsx
│   │   ├── useAuth.jsx
│   │   ├── useHelmet.jsx
│   │   └── useParcelForm.js
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
│   │   │   │   ├── GontobboSearchBox.jsx
│   │   │   │   └── ZoneCard.jsx
│   │   │   ├── gontobbo.constants.js
│   │   │   ├── GontobboZones.jsx
│   │   │   └── refractorGontobboZonesPrompt.md
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
│   │   │   ├── SendParcel.jsx
│   │   │   └── sendpercel.constant.js
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
│   ├── router
│   │   ├── authRouter.jsx
│   │   └── router.jsx
│   └── utils
│       ├── costCalculator.js
│       └── formValidations.js
├── structure.md
└── vite.config.js

47 directories, 152 files
```

## 📁 Target Module Tree (gontobboZones)

```bash
/run/media/sj/developer/web/L1B11/12mi/63moZapShift1/gontobbo/gontobbo-client/src/pages/gontobboZones
├── components
│   ├── BangladeshMap.jsx
│   ├── GontobboInfoPopup.jsx
│   ├── GontobboSearchBox.jsx
│   └── ZoneCard.jsx
├── gontobbo.constants.js
├── GontobboZones.jsx
└── refractorGontobboZonesPrompt.md

2 directories, 7 files
```

## 📄 Module Files & Contents

### `components/BangladeshMap.jsx`
```javascript
// components/BangladeshMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";

const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const BangladeshMap = ({ zones }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
      <MapContainer
        center={[23.685, 90.3563]}
        zoom={8}
        scrollWheelZoom={true}
        className="h-[75vh] w-full z-0"
      >
        <TileLayer
          attribution="Map data &copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {zones.map((zone, index) => (
          <Marker
            key={index}
            position={[zone.latitude, zone.longitude]}
            icon={customIcon}
          >
            <Popup>
              <h2 className="text-lg font-semibold">{zone.district}</h2>
              <p className="text-sm text-gray-600">
                {zone.covered_area.join(", ")}
              </p>
              <img
                src={zone.flowchart}
                alt="Flowchart"
                className="w-full mt-2 rounded-md"
              />
              <p
                className={`text-xs mt-1 ${
                  zone.status === "active"
                    ? "text-green-600"
                    : "text-orange-500"
                }`}
              >
                {zone.status.toUpperCase()}
              </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;
```

### `components/GontobboSearchBox.jsx`
```javascript
import { motion } from "motion/react";

const GontobboSearchBox = ({ query, setQuery }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="🔍 Search by district, city or area..."
        className="w-full md:w-1/2 mx-auto block mb-8 px-5 py-3 rounded-2xl border shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
      />
    </motion.div>
  );
};

export default GontobboSearchBox;
```

### `gontobbo.constants.js`
```javascript
export const gontobboZones = [
  {
    region: "Dhaka",
    district: "Dhaka",
    city: "Dhaka",
    covered_area: ["Uttara", "Dhanmondi", "Mirpur", "Mohammadpur"],
    status: "active",
    flowchart: "https://example.com/dhaka-flowchart.png",
    longitude: 90.4125,
    latitude: 23.8103,
  },
  {
    region: "Dhaka",
    district: "Faridpur",
    city: "Faridpur",
    covered_area: ["Goalanda", "Boalmari", "Bhanga"],
    status: "active",
    flowchart: "https://example.com/faridpur-flowchart.png",
    longitude: 89.8333,
    latitude: 23.6,
  },
  {
    region: "Dhaka",
    district: "Gazipur",
    city: "Gazipur",
    covered_area: ["Tongi", "Kaliakair", "Sreepur"],
    status: "active",
    flowchart: "https://example.com/gazipur-flowchart.png",
    longitude: 90.4203,
    latitude: 23.9999,
  },
  {
    region: "Dhaka",
    district: "Gopalganj",
    city: "Gopalganj",
    covered_area: ["Tungipara", "Kotalipara", "Kashiani"],
    status: "active",
    flowchart: "https://example.com/gopalganj-flowchart.png",
    longitude: 89.8266,
    latitude: 23.0052,
  },
  {
    region: "Dhaka",
    district: "Kishoreganj",
    city: "Kishoreganj",
    covered_area: ["Bajitpur", "Kuliarchar", "Pakundia"],
    status: "active",
    flowchart: "https://example.com/kishoreganj-flowchart.png",
    longitude: 90.7829,
    latitude: 24.426,
  },
  {
    region: "Dhaka",
    district: "Madaripur",
    city: "Madaripur",
    covered_area: ["Rajoir", "Kalkini", "Shibchar"],
    status: "active",
    flowchart: "https://example.com/madaripur-flowchart.png",
    longitude: 90.2,
    latitude: 23.17,
  },
  {
    region: "Dhaka",
    district: "Manikganj",
    city: "Manikganj",
    covered_area: ["Saturia", "Shivalaya", "Ghior"],
    status: "active",
    flowchart: "https://example.com/manikganj-flowchart.png",
    longitude: 89.9767,
    latitude: 23.8617,
  },
  {
    region: "Dhaka",
    district: "Munshiganj",
    city: "Munshiganj",
    covered_area: ["Sreenagar", "Lohajang", "Sirajdikhan"],
    status: "active",
    flowchart: "https://example.com/munshiganj-flowchart.png",
    longitude: 90.5305,
    latitude: 23.55,
  },
  {
    region: "Dhaka",
    district: "Narayanganj",
    city: "Narayanganj",
    covered_area: ["Fatullah", "Siddhirganj", "Rupganj"],
    status: "active",
    flowchart: "https://example.com/narayanganj-flowchart.png",
    longitude: 90.5,
    latitude: 23.62,
  },
  {
    region: "Dhaka",
    district: "Narsingdi",
    city: "Narsingdi",
    covered_area: ["Palash", "Belabo", "Raipura"],
    status: "active",
    flowchart: "https://example.com/narsingdi-flowchart.png",
    longitude: 90.7156,
    latitude: 23.9226,
  },
  {
    region: "Dhaka",
    district: "Rajbari",
    city: "Rajbari",
    covered_area: ["Pangsha", "Kalukhali", "Baliakandi"],
    status: "active",
    flowchart: "https://example.com/rajbari-flowchart.png",
    longitude: 89.65,
    latitude: 23.7576,
  },
  {
    region: "Dhaka",
    district: "Shariatpur",
    city: "Shariatpur",
    covered_area: ["Zajira", "Naria", "Gosairhat"],
    status: "active",
    flowchart: "https://example.com/shariatpur-flowchart.png",
    longitude: 90.4308,
    latitude: 23.22,
  },
  {
    region: "Dhaka",
    district: "Tangail",
    city: "Tangail",
    covered_area: ["Delduar", "Ghatail", "Kalihati"],
    status: "active",
    flowchart: "https://example.com/tangail-flowchart.png",
    longitude: 89.92,
    latitude: 24.25,
  },
  {
    region: "Chattogram",
    district: "Chattogram",
    city: "Chattogram",
    covered_area: [
      "Pahartali",
      "Kotwali",
      "Halishahar",
      "Panchlaish",
      "Agrabad",
      "Chandgaon",
    ],
    status: "active",
    flowchart: "https://example.com/chattogram-flowchart.png",
    longitude: 91.8123,
    latitude: 22.3569,
  },
  {
    region: "Chattogram",
    district: "Cox's Bazar",
    city: "Cox's Bazar",
    covered_area: ["Teknaf", "Ukhia", "Chakaria", "Ramu"],
    status: "active",
    flowchart: "https://example.com/coxbazar-flowchart.png",
    longitude: 92.0165,
    latitude: 21.4272,
  },
  {
    region: "Chattogram",
    district: "Cumilla",
    city: "Cumilla",
    covered_area: ["Laksam", "Debidwar", "Chandina", "Muradnagar"],
    status: "active",
    flowchart: "https://example.com/cumilla-flowchart.png",
    longitude: 91.1809,
    latitude: 23.4573,
  },
  {
    region: "Chattogram",
    district: "Brahmanbaria",
    city: "Brahmanbaria",
    covered_area: ["Nabinagar", "Ashuganj", "Sarail"],
    status: "active",
    flowchart: "https://example.com/brahmanbaria-flowchart.png",
    longitude: 91.1116,
    latitude: 23.9571,
  },
  {
    region: "Chattogram",
    district: "Chandpur",
    city: "Chandpur",
    covered_area: ["Haimchar", "Matlab", "Shahrasti"],
    status: "active",
    flowchart: "https://example.com/chandpur-flowchart.png",
    longitude: 90.85,
    latitude: 23.2333,
  },
  {
    region: "Chattogram",
    district: "Feni",
    city: "Feni",
    covered_area: ["Parshuram", "Daganbhuiyan", "Chhagalnaiya"],
    status: "active",
    flowchart: "https://example.com/feni-flowchart.png",
    longitude: 91.4,
    latitude: 23.0167,
  },
  {
    region: "Chattogram",
    district: "Khagrachari",
    city: "Khagrachari",
    covered_area: ["Ramgarh", "Mahalchari", "Dighinala"],
    status: "active",
    flowchart: "https://example.com/khagrachari-flowchart.png",
    longitude: 91.9667,
    latitude: 23.1,
  },
  {
    region: "Chattogram",
    district: "Lakshmipur",
    city: "Lakshmipur",
    covered_area: ["Raipur", "Ramganj", "Kamalnagar"],
    status: "active",
    flowchart: "https://example.com/lakshmipur-flowchart.png",
    longitude: 90.8415,
    latitude: 22.9444,
  },
  {
    region: "Chattogram",
    district: "Noakhali",
    city: "Noakhali",
    covered_area: ["Begumganj", "Senbagh", "Chatkhil"],
    status: "active",
    flowchart: "https://example.com/noakhali-flowchart.png",
    longitude: 91.0995,
    latitude: 22.8245,
  },
  {
    region: "Chattogram",
    district: "Rangamati",
    city: "Rangamati",
    covered_area: ["Baghaichhari", "Kaptai", "Juraichhari"],
    status: "active",
    flowchart: "https://example.com/rangamati-flowchart.png",
    longitude: 92.2,
    latitude: 22.65,
  },
  {
    region: "Sylhet",
    district: "Sylhet",
    city: "Sylhet",
    covered_area: [
      "Zindabazar",
      "Ambarkhana",
      "Dargah Gate",
      "South Surma",
      "Subid Bazar",
      "Tilagor",
    ],
    status: "active",
    flowchart: "https://example.com/sylhet-flowchart.png",
    longitude: 91.8662,
    latitude: 24.8949,
  },
  {
    region: "Sylhet",
    district: "Moulvibazar",
    city: "Moulvibazar",
    covered_area: ["Sreemangal", "Kamalganj", "Kulaura", "Barlekha"],
    status: "active",
    flowchart: "https://example.com/moulvibazar-flowchart.png",
    longitude: 91.7832,
    latitude: 24.4826,
  },
  {
    region: "Sylhet",
    district: "Habiganj",
    city: "Habiganj",
    covered_area: ["Shaistaganj", "Madhabpur", "Chunarughat", "Nabiganj"],
    status: "active",
    flowchart: "https://example.com/habiganj-flowchart.png",
    longitude: 91.4026,
    latitude: 24.3745,
  },
  {
    region: "Sylhet",
    district: "Sunamganj",
    city: "Sunamganj",
    covered_area: ["Jagannathpur", "Chhatak", "Tahirpur", "Dowarabazar"],
    status: "active",
    flowchart: "https://example.com/sunamganj-flowchart.png",
    longitude: 91.395,
    latitude: 25.0658,
  },
  {
    region: "Rangpur",
    district: "Rangpur",
    city: "Rangpur",
    covered_area: [
      "Jahaj Company",
      "Pairaband",
      "Mahiganj",
      "Satmatha",
      "Lalbagh",
    ],
    status: "active",
    flowchart: "https://example.com/rangpur-flowchart.png",
    longitude: 89.2752,
    latitude: 25.746,
  },
  {
    region: "Rangpur",
    district: "Dinajpur",
    city: "Dinajpur",
    covered_area: ["Birampur", "Fulbari", "Parbatipur", "Nawabganj"],
    status: "active",
    flowchart: "https://example.com/dinajpur-flowchart.png",
    longitude: 88.6414,
    latitude: 25.6275,
  },
  {
    region: "Rangpur",
    district: "Thakurgaon",
    city: "Thakurgaon",
    covered_area: ["Pirganj", "Ranisankail", "Baliadangi"],
    status: "active",
    flowchart: "https://example.com/thakurgaon-flowchart.png",
    longitude: 88.466,
    latitude: 26.0333,
  },
  {
    region: "Rangpur",
    district: "Panchagarh",
    city: "Panchagarh",
    covered_area: ["Tetulia", "Boda", "Atwari"],
    status: "active",
    flowchart: "https://example.com/panchagarh-flowchart.png",
    longitude: 88.5658,
    latitude: 26.3411,
  },
  {
    region: "Rangpur",
    district: "Nilphamari",
    city: "Nilphamari",
    covered_area: ["Saidpur", "Domar", "Jaldhaka"],
    status: "active",
    flowchart: "https://example.com/nilphamari-flowchart.png",
    longitude: 88.856,
    latitude: 25.931,
  },
  {
    region: "Rangpur",
    district: "Lalmonirhat",
    city: "Lalmonirhat",
    covered_area: ["Hatibandha", "Patgram", "Aditmari"],
    status: "active",
    flowchart: "https://example.com/lalmonirhat-flowchart.png",
    longitude: 89.1662,
    latitude: 25.9167,
  },
  {
    region: "Rangpur",
    district: "Kurigram",
    city: "Kurigram",
    covered_area: ["Nageshwari", "Bhurungamari", "Chilmari", "Ulipur"],
    status: "active",
    flowchart: "https://example.com/kurigram-flowchart.png",
    longitude: 89.65,
    latitude: 25.8054,
  },
  {
    region: "Rangpur",
    district: "Gaibandha",
    city: "Gaibandha",
    covered_area: ["Gobindaganj", "Sundarganj", "Palashbari", "Phulchhari"],
    status: "active",
    flowchart: "https://example.com/gaibandha-flowchart.png",
    longitude: 89.5418,
    latitude: 25.3288,
  },
  {
    region: "Khulna",
    district: "Khulna",
    city: "Khulna",
    covered_area: [
      "Sonadanga",
      "Khalishpur",
      "Daulatpur",
      "Shib Bari",
      "Boyra",
    ],
    status: "active",
    flowchart: "https://example.com/khulna-flowchart.png",
    longitude: 89.5672,
    latitude: 22.8456,
  },
  {
    region: "Khulna",
    district: "Jessore",
    city: "Jessore",
    covered_area: ["Chowgachha", "Bagharpara", "Manirampur", "Abhaynagar"],
    status: "active",
    flowchart: "https://example.com/jessore-flowchart.png",
    longitude: 89.2167,
    latitude: 23.17,
  },
  {
    region: "Khulna",
    district: "Satkhira",
    city: "Satkhira",
    covered_area: ["Tala", "Assasuni", "Kalaroa", "Debhata"],
    status: "active",
    flowchart: "https://example.com/satkhira-flowchart.png",
    longitude: 89.0809,
    latitude: 22.7085,
  },
  {
    region: "Khulna",
    district: "Bagerhat",
    city: "Bagerhat",
    covered_area: ["Mongla", "Rampal", "Fakirhat", "Kachua"],
    status: "active",
    flowchart: "https://example.com/bagerhat-flowchart.png",
    longitude: 89.7926,
    latitude: 22.6516,
  },
  {
    region: "Khulna",
    district: "Magura",
    city: "Magura",
    covered_area: ["Sreepur", "Mohammadpur", "Shalikha"],
    status: "active",
    flowchart: "https://example.com/magura-flowchart.png",
    longitude: 89.4194,
    latitude: 23.4853,
  },
  {
    region: "Khulna",
    district: "Narail",
    city: "Narail",
    covered_area: ["Lohagara", "Kalia", "Narail Sadar"],
    status: "active",
    flowchart: "https://example.com/narail-flowchart.png",
    longitude: 89.5,
    latitude: 23.1667,
  },
  {
    region: "Khulna",
    district: "Jhenaidah",
    city: "Jhenaidah",
    covered_area: ["Harinakunda", "Shailkupa", "Kaliganj"],
    status: "active",
    flowchart: "https://example.com/jhenaidah-flowchart.png",
    longitude: 89.1833,
    latitude: 23.5333,
  },
  {
    region: "Khulna",
    district: "Chuadanga",
    city: "Chuadanga",
    covered_area: ["Alamdanga", "Damurhuda", "Jibannagar"],
    status: "active",
    flowchart: "https://example.com/chuadanga-flowchart.png",
    longitude: 88.85,
    latitude: 23.64,
  },
  {
    region: "Khulna",
    district: "Meherpur",
    city: "Meherpur",
    covered_area: ["Mujibnagar", "Gangni"],
    status: "active",
    flowchart: "https://example.com/meherpur-flowchart.png",
    longitude: 88.6318,
    latitude: 23.7623,
  },
  {
    region: "Rajshahi",
    district: "Rajshahi",
    city: "Rajshahi",
    covered_area: ["Boalia", "Rajpara", "Motihar", "Shah Makhdum", "Paba"],
    status: "active",
    flowchart: "https://example.com/rajshahi-flowchart.png",
    longitude: 88.6087,
    latitude: 24.3745,
  },
  {
    region: "Rajshahi",
    district: "Natore",
    city: "Natore",
    covered_area: ["Baraigram", "Bagatipara", "Lalpur", "Singra"],
    status: "active",
    flowchart: "https://example.com/natore-flowchart.png",
    longitude: 89,
    latitude: 24.4167,
  },
  {
    region: "Rajshahi",
    district: "Naogaon",
    city: "Naogaon",
    covered_area: ["Manda", "Sapahar", "Porsha", "Patnitala"],
    status: "active",
    flowchart: "https://example.com/naogaon-flowchart.png",
    longitude: 88.93,
    latitude: 24.8236,
  },
  {
    region: "Rajshahi",
    district: "Chapainawabganj",
    city: "Chapainawabganj",
    covered_area: ["Shibganj", "Bholahat", "Gomostapur"],
    status: "active",
    flowchart: "https://example.com/chapai-flowchart.png",
    longitude: 88.27,
    latitude: 24.5962,
  },
  {
    region: "Rajshahi",
    district: "Pabna",
    city: "Pabna",
    covered_area: ["Ishwardi", "Bera", "Chatmohar", "Atgharia"],
    status: "active",
    flowchart: "https://example.com/pabna-flowchart.png",
    longitude: 89.2331,
    latitude: 24.0037,
  },
  {
    region: "Rajshahi",
    district: "Sirajganj",
    city: "Sirajganj",
    covered_area: ["Ullapara", "Kazipur", "Shahjadpur", "Belkuchi"],
    status: "active",
    flowchart: "https://example.com/sirajganj-flowchart.png",
    longitude: 89.7167,
    latitude: 24.45,
  },
  {
    region: "Rajshahi",
    district: "Joypurhat",
    city: "Joypurhat",
    covered_area: ["Akkelpur", "Kalai", "Panchbibi"],
    status: "active",
    flowchart: "https://example.com/joypurhat-flowchart.png",
    longitude: 89.0412,
    latitude: 25.0953,
  },
  {
    region: "Rajshahi",
    district: "Bogura",
    city: "Bogura",
    covered_area: [
      "Sariakandi",
      "Sonatola",
      "Gabtali",
      "Sherpur",
      "Shajahanpur",
    ],
    status: "active",
    flowchart: "https://example.com/bogura-flowchart.png",
    longitude: 89.37,
    latitude: 24.85,
  },
  {
    region: "Barisal",
    district: "Barisal",
    city: "Barisal",
    covered_area: [
      "Band Road",
      "Cox’s Road",
      "Kawnia",
      "Rupatali",
      "Nathullabad",
    ],
    status: "active",
    flowchart: "https://example.com/barisal-flowchart.png",
    longitude: 90.3667,
    latitude: 22.7,
  },
  {
    region: "Barisal",
    district: "Bhola",
    city: "Bhola",
    covered_area: ["Borhanuddin", "Tazumuddin", "Daulatkhan", "Char Fasson"],
    status: "active",
    flowchart: "https://example.com/bhola-flowchart.png",
    longitude: 90.6311,
    latitude: 22.685,
  },
  {
    region: "Barisal",
    district: "Patuakhali",
    city: "Patuakhali",
    covered_area: ["Kalapara", "Mirzaganj", "Dashmina", "Galachipa"],
    status: "active",
    flowchart: "https://example.com/patuakhali-flowchart.png",
    longitude: 90.3333,
    latitude: 22.35,
  },
  {
    region: "Barisal",
    district: "Pirojpur",
    city: "Pirojpur",
    covered_area: ["Mathbaria", "Bhandaria", "Kawkhali", "Nazirpur"],
    status: "active",
    flowchart: "https://example.com/pirojpur-flowchart.png",
    longitude: 89.975,
    latitude: 22.5833,
  },
  {
    region: "Barisal",
    district: "Barguna",
    city: "Barguna",
    covered_area: ["Amtali", "Patharghata", "Betagi", "Bamna"],
    status: "active",
    flowchart: "https://example.com/barguna-flowchart.png",
    longitude: 90.1167,
    latitude: 22.1667,
  },
  {
    region: "Barisal",
    district: "Jhalokati",
    city: "Jhalokati",
    covered_area: ["Nalchity", "Rajapur", "Kathalia"],
    status: "active",
    flowchart: "https://example.com/jhalokati-flowchart.png",
    longitude: 90.2167,
    latitude: 22.6417,
  },
  {
    region: "Mymensingh",
    district: "Mymensingh",
    city: "Mymensingh",
    covered_area: ["Trishal", "Muktagachha", "Bhaluka", "Phulpur", "Haluaghat"],
    status: "active",
    flowchart: "https://example.com/mymensingh-flowchart.png",
    longitude: 90.3987,
    latitude: 24.7539,
  },
  {
    region: "Mymensingh",
    district: "Netrokona",
    city: "Netrokona",
    covered_area: ["Khaliajuri", "Mohanganj", "Durgapur", "Barhatta"],
    status: "active",
    flowchart: "https://example.com/netrokona-flowchart.png",
    longitude: 90.7333,
    latitude: 24.8833,
  },
  {
    region: "Mymensingh",
    district: "Jamalpur",
    city: "Jamalpur",
    covered_area: ["Madarganj", "Islampur", "Sarishabari", "Baksiganj"],
    status: "active",
    flowchart: "https://example.com/jamalpur-flowchart.png",
    longitude: 89.9333,
    latitude: 24.9167,
  },
  {
    region: "Mymensingh",
    district: "Sherpur",
    city: "Sherpur",
    covered_area: ["Nakla", "Nalitabari", "Jhenaigati", "Sreebardi"],
    status: "active",
    flowchart: "https://example.com/sherpur-flowchart.png",
    longitude: 90.0333,
    latitude: 25.0333,
  },
  {
    region: "Chattogram",
    district: "Bandarban",
    city: "Bandarban",
    covered_area: ["Bandarban Sadar", "Thanchi", "Lama", "Rowangchhari"],
    status: "active",
    flowchart: "https://example.com/bandarban-flowchart.png",
    longitude: 92.2186,
    latitude: 22.1958,
  },
  {
    region: "Khulna",
    district: "Kushtia",
    city: "Kushtia",
    covered_area: [
      "Kushtia Sadar",
      "Kumarkhali",
      "Khoksa",
      "Mirpur",
      "Bheramara",
      "Daulatpur",
    ],
    status: "active",
    flowchart: "https://example.com/kushtia-flowchart.png",
    longitude: 89.122,
    latitude: 23.9013,
  },
];
```

### `GontobboZones.jsx`
```javascript
import GontobboSearchBox from "./components/GontobboSearchBox";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { gontobboZones } from "./gontobbo.constants";
import BangladeshMap from "./components/BangladeshMap";

const GontobboZones = () => {
  const [query, setQuery] = useState("");

  // Custom lightweight search filter
  const filteredZones = useMemo(() => {
    const normalize = (str) =>
      String(str || "")
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, "")
        .trim();

    const q = normalize(query);

    return gontobboZones.filter((zone) => {
      const values = [zone.district, zone.city, zone.covered_area].map(
        normalize,
      );

      return values.some((val) => val.includes(q));
    });
  }, [query]);

  return (
    <div className="px-4 md:px-10 py-10">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary"
      >
        📍 Gontobbo Zones in Bangladesh
      </motion.h1>

      <GontobboSearchBox query={query} setQuery={setQuery} />

      {/* Map Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BangladeshMap zones={filteredZones} />
      </motion.div>

      {/* Optional: No Match UI */}
      {filteredZones.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-red-500 mt-10 font-medium"
        >
          ❌ No matching zones found.
        </motion.p>
      )}
    </div>
  );
};

export default GontobboZones;
```

### `refractorGontobboZonesPrompt.md`
```md
You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/63moZapShift1/gontobbo/gontobbo-client/src/pages/gontobboZones
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `gontobboZones_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved gontobboZones version`

---

## 🌲 Full Project Structure (cwd)

```bash
/run/media/sj/developer/web/L1B11/12mi/63moZapShift1/gontobbo/gontobbo-client
├── bun.lock
├── demo.mp4
├── dist
│   ├── 200.html
│   ├── assets
│   │   ├── bgDesign-q0MYcKiL.jpg
│   │   ├── footerBg-BhfA6rAb.jpg
│   │   ├── index-BdBCM3wT.js
│   │   ├── index-qvDIBTdg.css
│   │   ├── location-ab9hP1Eq.jpg
│   │   ├── locationRounded-ISxCm3Uk.png
│   │   ├── locationRounded-removebg-DwzdXEoC.png
│   │   └── logoFull-modified-Cl4PyF41.png
│   ├── CNAME
│   ├── index.html
│   └── vite.svg
├── eslint.config.js
├── index.html
├── package.json
├── public
│   ├── CNAME
│   └── vite.svg
├── README2.md
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
│   ├── contexts
│   │   └── AuthContext
│   │       ├── AuthContext.jsx
│   │       └── AuthProvider.jsx
│   ├── firebase
│   │   └── firebase.init.js
│   ├── hooks
│   │   ├── GeminiChatBox.jsx
│   │   ├── useAuth.jsx
│   │   ├── useHelmet.jsx
│   │   └── useParcelForm.js
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
│   │   │   │   ├── GontobboSearchBox.jsx
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
│   │   │   ├── SendParcel.jsx
│   │   │   └── sendpercel.constant.js
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
│   ├── router
│   │   ├── authRouter.jsx
│   │   └── router.jsx
│   └── utils
│       ├── costCalculator.js
│       └── formValidations.js
├── structure.md
└── vite.config.js

49 directories, 163 files
```

## 📁 Target Module Tree (gontobboZones)

```bash
/run/media/sj/developer/web/L1B11/12mi/63moZapShift1/gontobbo/gontobbo-client/src/pages/gontobboZones
├── components
│   ├── BangladeshMap.jsx
│   ├── GontobboInfoPopup.jsx
│   ├── GontobboSearchBox.jsx
│   └── ZoneCard.jsx
├── gontobbo.constants.js
└── GontobboZones.jsx

2 directories, 6 files
```

## 📄 Module Files & Contents

### `components/BangladeshMap.jsx`
```javascript
// components/BangladeshMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";

const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const BangladeshMap = ({ zones }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
      <MapContainer
        center={[23.685, 90.3563]}
        zoom={8}
        scrollWheelZoom={true}
        className="h-[75vh] w-full z-0"
      >
        <TileLayer
          attribution="Map data &copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {zones.map((zone, index) => (
          <Marker
            key={index}
            position={[zone.latitude, zone.longitude]}
            icon={customIcon}
          >
            <Popup>
              <h2 className="text-lg font-semibold">{zone.district}</h2>
              <p className="text-sm text-gray-600">
                {zone.covered_area.join(", ")}
              </p>
              <img
                src={zone.flowchart}
                alt="Flowchart"
                className="w-full mt-2 rounded-md"
              />
              <p
                className={`text-xs mt-1 ${
                  zone.status === "active"
                    ? "text-green-600"
                    : "text-orange-500"
                }`}
              >
                {zone.status.toUpperCase()}
              </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;
```

### `components/GontobboSearchBox.jsx`
```javascript
import { motion } from "motion/react";

const GontobboSearchBox = ({ query, setQuery }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="🔍 Search by district, city or area..."
        className="w-full md:w-1/2 mx-auto block mb-8 px-5 py-3 rounded-2xl border shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
      />
    </motion.div>
  );
};

export default GontobboSearchBox;
```

### `gontobbo.constants.js`
```javascript
export const gontobboZones = [
  {
    region: "Dhaka",
    district: "Dhaka",
    city: "Dhaka",
    covered_area: ["Uttara", "Dhanmondi", "Mirpur", "Mohammadpur"],
    status: "active",
    flowchart: "https://example.com/dhaka-flowchart.png",
    longitude: 90.4125,
    latitude: 23.8103,
  },
  {
    region: "Dhaka",
    district: "Faridpur",
    city: "Faridpur",
    covered_area: ["Goalanda", "Boalmari", "Bhanga"],
    status: "active",
    flowchart: "https://example.com/faridpur-flowchart.png",
    longitude: 89.8333,
    latitude: 23.6,
  },
  {
    region: "Dhaka",
    district: "Gazipur",
    city: "Gazipur",
    covered_area: ["Tongi", "Kaliakair", "Sreepur"],
    status: "active",
    flowchart: "https://example.com/gazipur-flowchart.png",
    longitude: 90.4203,
    latitude: 23.9999,
  },
  {
    region: "Dhaka",
    district: "Gopalganj",
    city: "Gopalganj",
    covered_area: ["Tungipara", "Kotalipara", "Kashiani"],
    status: "active",
    flowchart: "https://example.com/gopalganj-flowchart.png",
    longitude: 89.8266,
    latitude: 23.0052,
  },
  {
    region: "Dhaka",
    district: "Kishoreganj",
    city: "Kishoreganj",
    covered_area: ["Bajitpur", "Kuliarchar", "Pakundia"],
    status: "active",
    flowchart: "https://example.com/kishoreganj-flowchart.png",
    longitude: 90.7829,
    latitude: 24.426,
  },
  {
    region: "Dhaka",
    district: "Madaripur",
    city: "Madaripur",
    covered_area: ["Rajoir", "Kalkini", "Shibchar"],
    status: "active",
    flowchart: "https://example.com/madaripur-flowchart.png",
    longitude: 90.2,
    latitude: 23.17,
  },
  {
    region: "Dhaka",
    district: "Manikganj",
    city: "Manikganj",
    covered_area: ["Saturia", "Shivalaya", "Ghior"],
    status: "active",
    flowchart: "https://example.com/manikganj-flowchart.png",
    longitude: 89.9767,
    latitude: 23.8617,
  },
  {
    region: "Dhaka",
    district: "Munshiganj",
    city: "Munshiganj",
    covered_area: ["Sreenagar", "Lohajang", "Sirajdikhan"],
    status: "active",
    flowchart: "https://example.com/munshiganj-flowchart.png",
    longitude: 90.5305,
    latitude: 23.55,
  },
  {
    region: "Dhaka",
    district: "Narayanganj",
    city: "Narayanganj",
    covered_area: ["Fatullah", "Siddhirganj", "Rupganj"],
    status: "active",
    flowchart: "https://example.com/narayanganj-flowchart.png",
    longitude: 90.5,
    latitude: 23.62,
  },
  {
    region: "Dhaka",
    district: "Narsingdi",
    city: "Narsingdi",
    covered_area: ["Palash", "Belabo", "Raipura"],
    status: "active",
    flowchart: "https://example.com/narsingdi-flowchart.png",
    longitude: 90.7156,
    latitude: 23.9226,
  },
  {
    region: "Dhaka",
    district: "Rajbari",
    city: "Rajbari",
    covered_area: ["Pangsha", "Kalukhali", "Baliakandi"],
    status: "active",
    flowchart: "https://example.com/rajbari-flowchart.png",
    longitude: 89.65,
    latitude: 23.7576,
  },
  {
    region: "Dhaka",
    district: "Shariatpur",
    city: "Shariatpur",
    covered_area: ["Zajira", "Naria", "Gosairhat"],
    status: "active",
    flowchart: "https://example.com/shariatpur-flowchart.png",
    longitude: 90.4308,
    latitude: 23.22,
  },
  {
    region: "Dhaka",
    district: "Tangail",
    city: "Tangail",
    covered_area: ["Delduar", "Ghatail", "Kalihati"],
    status: "active",
    flowchart: "https://example.com/tangail-flowchart.png",
    longitude: 89.92,
    latitude: 24.25,
  },
  {
    region: "Chattogram",
    district: "Chattogram",
    city: "Chattogram",
    covered_area: [
      "Pahartali",
      "Kotwali",
      "Halishahar",
      "Panchlaish",
      "Agrabad",
      "Chandgaon",
    ],
    status: "active",
    flowchart: "https://example.com/chattogram-flowchart.png",
    longitude: 91.8123,
    latitude: 22.3569,
  },
  {
    region: "Chattogram",
    district: "Cox's Bazar",
    city: "Cox's Bazar",
    covered_area: ["Teknaf", "Ukhia", "Chakaria", "Ramu"],
    status: "active",
    flowchart: "https://example.com/coxbazar-flowchart.png",
    longitude: 92.0165,
    latitude: 21.4272,
  },
  {
    region: "Chattogram",
    district: "Cumilla",
    city: "Cumilla",
    covered_area: ["Laksam", "Debidwar", "Chandina", "Muradnagar"],
    status: "active",
    flowchart: "https://example.com/cumilla-flowchart.png",
    longitude: 91.1809,
    latitude: 23.4573,
  },
  {
    region: "Chattogram",
    district: "Brahmanbaria",
    city: "Brahmanbaria",
    covered_area: ["Nabinagar", "Ashuganj", "Sarail"],
    status: "active",
    flowchart: "https://example.com/brahmanbaria-flowchart.png",
    longitude: 91.1116,
    latitude: 23.9571,
  },
  {
    region: "Chattogram",
    district: "Chandpur",
    city: "Chandpur",
    covered_area: ["Haimchar", "Matlab", "Shahrasti"],
    status: "active",
    flowchart: "https://example.com/chandpur-flowchart.png",
    longitude: 90.85,
    latitude: 23.2333,
  },
  {
    region: "Chattogram",
    district: "Feni",
    city: "Feni",
    covered_area: ["Parshuram", "Daganbhuiyan", "Chhagalnaiya"],
    status: "active",
    flowchart: "https://example.com/feni-flowchart.png",
    longitude: 91.4,
    latitude: 23.0167,
  },
  {
    region: "Chattogram",
    district: "Khagrachari",
    city: "Khagrachari",
    covered_area: ["Ramgarh", "Mahalchari", "Dighinala"],
    status: "active",
    flowchart: "https://example.com/khagrachari-flowchart.png",
    longitude: 91.9667,
    latitude: 23.1,
  },
  {
    region: "Chattogram",
    district: "Lakshmipur",
    city: "Lakshmipur",
    covered_area: ["Raipur", "Ramganj", "Kamalnagar"],
    status: "active",
    flowchart: "https://example.com/lakshmipur-flowchart.png",
    longitude: 90.8415,
    latitude: 22.9444,
  },
  {
    region: "Chattogram",
    district: "Noakhali",
    city: "Noakhali",
    covered_area: ["Begumganj", "Senbagh", "Chatkhil"],
    status: "active",
    flowchart: "https://example.com/noakhali-flowchart.png",
    longitude: 91.0995,
    latitude: 22.8245,
  },
  {
    region: "Chattogram",
    district: "Rangamati",
    city: "Rangamati",
    covered_area: ["Baghaichhari", "Kaptai", "Juraichhari"],
    status: "active",
    flowchart: "https://example.com/rangamati-flowchart.png",
    longitude: 92.2,
    latitude: 22.65,
  },
  {
    region: "Sylhet",
    district: "Sylhet",
    city: "Sylhet",
    covered_area: [
      "Zindabazar",
      "Ambarkhana",
      "Dargah Gate",
      "South Surma",
      "Subid Bazar",
      "Tilagor",
    ],
    status: "active",
    flowchart: "https://example.com/sylhet-flowchart.png",
    longitude: 91.8662,
    latitude: 24.8949,
  },
  {
    region: "Sylhet",
    district: "Moulvibazar",
    city: "Moulvibazar",
    covered_area: ["Sreemangal", "Kamalganj", "Kulaura", "Barlekha"],
    status: "active",
    flowchart: "https://example.com/moulvibazar-flowchart.png",
    longitude: 91.7832,
    latitude: 24.4826,
  },
  {
    region: "Sylhet",
    district: "Habiganj",
    city: "Habiganj",
    covered_area: ["Shaistaganj", "Madhabpur", "Chunarughat", "Nabiganj"],
    status: "active",
    flowchart: "https://example.com/habiganj-flowchart.png",
    longitude: 91.4026,
    latitude: 24.3745,
  },
  {
    region: "Sylhet",
    district: "Sunamganj",
    city: "Sunamganj",
    covered_area: ["Jagannathpur", "Chhatak", "Tahirpur", "Dowarabazar"],
    status: "active",
    flowchart: "https://example.com/sunamganj-flowchart.png",
    longitude: 91.395,
    latitude: 25.0658,
  },
  {
    region: "Rangpur",
    district: "Rangpur",
    city: "Rangpur",
    covered_area: [
      "Jahaj Company",
      "Pairaband",
      "Mahiganj",
      "Satmatha",
      "Lalbagh",
    ],
    status: "active",
    flowchart: "https://example.com/rangpur-flowchart.png",
    longitude: 89.2752,
    latitude: 25.746,
  },
  {
    region: "Rangpur",
    district: "Dinajpur",
    city: "Dinajpur",
    covered_area: ["Birampur", "Fulbari", "Parbatipur", "Nawabganj"],
    status: "active",
    flowchart: "https://example.com/dinajpur-flowchart.png",
    longitude: 88.6414,
    latitude: 25.6275,
  },
  {
    region: "Rangpur",
    district: "Thakurgaon",
    city: "Thakurgaon",
    covered_area: ["Pirganj", "Ranisankail", "Baliadangi"],
    status: "active",
    flowchart: "https://example.com/thakurgaon-flowchart.png",
    longitude: 88.466,
    latitude: 26.0333,
  },
  {
    region: "Rangpur",
    district: "Panchagarh",
    city: "Panchagarh",
    covered_area: ["Tetulia", "Boda", "Atwari"],
    status: "active",
    flowchart: "https://example.com/panchagarh-flowchart.png",
    longitude: 88.5658,
    latitude: 26.3411,
  },
  {
    region: "Rangpur",
    district: "Nilphamari",
    city: "Nilphamari",
    covered_area: ["Saidpur", "Domar", "Jaldhaka"],
    status: "active",
    flowchart: "https://example.com/nilphamari-flowchart.png",
    longitude: 88.856,
    latitude: 25.931,
  },
  {
    region: "Rangpur",
    district: "Lalmonirhat",
    city: "Lalmonirhat",
    covered_area: ["Hatibandha", "Patgram", "Aditmari"],
    status: "active",
    flowchart: "https://example.com/lalmonirhat-flowchart.png",
    longitude: 89.1662,
    latitude: 25.9167,
  },
  {
    region: "Rangpur",
    district: "Kurigram",
    city: "Kurigram",
    covered_area: ["Nageshwari", "Bhurungamari", "Chilmari", "Ulipur"],
    status: "active",
    flowchart: "https://example.com/kurigram-flowchart.png",
    longitude: 89.65,
    latitude: 25.8054,
  },
  {
    region: "Rangpur",
    district: "Gaibandha",
    city: "Gaibandha",
    covered_area: ["Gobindaganj", "Sundarganj", "Palashbari", "Phulchhari"],
    status: "active",
    flowchart: "https://example.com/gaibandha-flowchart.png",
    longitude: 89.5418,
    latitude: 25.3288,
  },
  {
    region: "Khulna",
    district: "Khulna",
    city: "Khulna",
    covered_area: [
      "Sonadanga",
      "Khalishpur",
      "Daulatpur",
      "Shib Bari",
      "Boyra",
    ],
    status: "active",
    flowchart: "https://example.com/khulna-flowchart.png",
    longitude: 89.5672,
    latitude: 22.8456,
  },
  {
    region: "Khulna",
    district: "Jessore",
    city: "Jessore",
    covered_area: ["Chowgachha", "Bagharpara", "Manirampur", "Abhaynagar"],
    status: "active",
    flowchart: "https://example.com/jessore-flowchart.png",
    longitude: 89.2167,
    latitude: 23.17,
  },
  {
    region: "Khulna",
    district: "Satkhira",
    city: "Satkhira",
    covered_area: ["Tala", "Assasuni", "Kalaroa", "Debhata"],
    status: "active",
    flowchart: "https://example.com/satkhira-flowchart.png",
    longitude: 89.0809,
    latitude: 22.7085,
  },
  {
    region: "Khulna",
    district: "Bagerhat",
    city: "Bagerhat",
    covered_area: ["Mongla", "Rampal", "Fakirhat", "Kachua"],
    status: "active",
    flowchart: "https://example.com/bagerhat-flowchart.png",
    longitude: 89.7926,
    latitude: 22.6516,
  },
  {
    region: "Khulna",
    district: "Magura",
    city: "Magura",
    covered_area: ["Sreepur", "Mohammadpur", "Shalikha"],
    status: "active",
    flowchart: "https://example.com/magura-flowchart.png",
    longitude: 89.4194,
    latitude: 23.4853,
  },
  {
    region: "Khulna",
    district: "Narail",
    city: "Narail",
    covered_area: ["Lohagara", "Kalia", "Narail Sadar"],
    status: "active",
    flowchart: "https://example.com/narail-flowchart.png",
    longitude: 89.5,
    latitude: 23.1667,
  },
  {
    region: "Khulna",
    district: "Jhenaidah",
    city: "Jhenaidah",
    covered_area: ["Harinakunda", "Shailkupa", "Kaliganj"],
    status: "active",
    flowchart: "https://example.com/jhenaidah-flowchart.png",
    longitude: 89.1833,
    latitude: 23.5333,
  },
  {
    region: "Khulna",
    district: "Chuadanga",
    city: "Chuadanga",
    covered_area: ["Alamdanga", "Damurhuda", "Jibannagar"],
    status: "active",
    flowchart: "https://example.com/chuadanga-flowchart.png",
    longitude: 88.85,
    latitude: 23.64,
  },
  {
    region: "Khulna",
    district: "Meherpur",
    city: "Meherpur",
    covered_area: ["Mujibnagar", "Gangni"],
    status: "active",
    flowchart: "https://example.com/meherpur-flowchart.png",
    longitude: 88.6318,
    latitude: 23.7623,
  },
  {
    region: "Rajshahi",
    district: "Rajshahi",
    city: "Rajshahi",
    covered_area: ["Boalia", "Rajpara", "Motihar", "Shah Makhdum", "Paba"],
    status: "active",
    flowchart: "https://example.com/rajshahi-flowchart.png",
    longitude: 88.6087,
    latitude: 24.3745,
  },
  {
    region: "Rajshahi",
    district: "Natore",
    city: "Natore",
    covered_area: ["Baraigram", "Bagatipara", "Lalpur", "Singra"],
    status: "active",
    flowchart: "https://example.com/natore-flowchart.png",
    longitude: 89,
    latitude: 24.4167,
  },
  {
    region: "Rajshahi",
    district: "Naogaon",
    city: "Naogaon",
    covered_area: ["Manda", "Sapahar", "Porsha", "Patnitala"],
    status: "active",
    flowchart: "https://example.com/naogaon-flowchart.png",
    longitude: 88.93,
    latitude: 24.8236,
  },
  {
    region: "Rajshahi",
    district: "Chapainawabganj",
    city: "Chapainawabganj",
    covered_area: ["Shibganj", "Bholahat", "Gomostapur"],
    status: "active",
    flowchart: "https://example.com/chapai-flowchart.png",
    longitude: 88.27,
    latitude: 24.5962,
  },
  {
    region: "Rajshahi",
    district: "Pabna",
    city: "Pabna",
    covered_area: ["Ishwardi", "Bera", "Chatmohar", "Atgharia"],
    status: "active",
    flowchart: "https://example.com/pabna-flowchart.png",
    longitude: 89.2331,
    latitude: 24.0037,
  },
  {
    region: "Rajshahi",
    district: "Sirajganj",
    city: "Sirajganj",
    covered_area: ["Ullapara", "Kazipur", "Shahjadpur", "Belkuchi"],
    status: "active",
    flowchart: "https://example.com/sirajganj-flowchart.png",
    longitude: 89.7167,
    latitude: 24.45,
  },
  {
    region: "Rajshahi",
    district: "Joypurhat",
    city: "Joypurhat",
    covered_area: ["Akkelpur", "Kalai", "Panchbibi"],
    status: "active",
    flowchart: "https://example.com/joypurhat-flowchart.png",
    longitude: 89.0412,
    latitude: 25.0953,
  },
  {
    region: "Rajshahi",
    district: "Bogura",
    city: "Bogura",
    covered_area: [
      "Sariakandi",
      "Sonatola",
      "Gabtali",
      "Sherpur",
      "Shajahanpur",
    ],
    status: "active",
    flowchart: "https://example.com/bogura-flowchart.png",
    longitude: 89.37,
    latitude: 24.85,
  },
  {
    region: "Barisal",
    district: "Barisal",
    city: "Barisal",
    covered_area: [
      "Band Road",
      "Cox’s Road",
      "Kawnia",
      "Rupatali",
      "Nathullabad",
    ],
    status: "active",
    flowchart: "https://example.com/barisal-flowchart.png",
    longitude: 90.3667,
    latitude: 22.7,
  },
  {
    region: "Barisal",
    district: "Bhola",
    city: "Bhola",
    covered_area: ["Borhanuddin", "Tazumuddin", "Daulatkhan", "Char Fasson"],
    status: "active",
    flowchart: "https://example.com/bhola-flowchart.png",
    longitude: 90.6311,
    latitude: 22.685,
  },
  {
    region: "Barisal",
    district: "Patuakhali",
    city: "Patuakhali",
    covered_area: ["Kalapara", "Mirzaganj", "Dashmina", "Galachipa"],
    status: "active",
    flowchart: "https://example.com/patuakhali-flowchart.png",
    longitude: 90.3333,
    latitude: 22.35,
  },
  {
    region: "Barisal",
    district: "Pirojpur",
    city: "Pirojpur",
    covered_area: ["Mathbaria", "Bhandaria", "Kawkhali", "Nazirpur"],
    status: "active",
    flowchart: "https://example.com/pirojpur-flowchart.png",
    longitude: 89.975,
    latitude: 22.5833,
  },
  {
    region: "Barisal",
    district: "Barguna",
    city: "Barguna",
    covered_area: ["Amtali", "Patharghata", "Betagi", "Bamna"],
    status: "active",
    flowchart: "https://example.com/barguna-flowchart.png",
    longitude: 90.1167,
    latitude: 22.1667,
  },
  {
    region: "Barisal",
    district: "Jhalokati",
    city: "Jhalokati",
    covered_area: ["Nalchity", "Rajapur", "Kathalia"],
    status: "active",
    flowchart: "https://example.com/jhalokati-flowchart.png",
    longitude: 90.2167,
    latitude: 22.6417,
  },
  {
    region: "Mymensingh",
    district: "Mymensingh",
    city: "Mymensingh",
    covered_area: ["Trishal", "Muktagachha", "Bhaluka", "Phulpur", "Haluaghat"],
    status: "active",
    flowchart: "https://example.com/mymensingh-flowchart.png",
    longitude: 90.3987,
    latitude: 24.7539,
  },
  {
    region: "Mymensingh",
    district: "Netrokona",
    city: "Netrokona",
    covered_area: ["Khaliajuri", "Mohanganj", "Durgapur", "Barhatta"],
    status: "active",
    flowchart: "https://example.com/netrokona-flowchart.png",
    longitude: 90.7333,
    latitude: 24.8833,
  },
  {
    region: "Mymensingh",
    district: "Jamalpur",
    city: "Jamalpur",
    covered_area: ["Madarganj", "Islampur", "Sarishabari", "Baksiganj"],
    status: "active",
    flowchart: "https://example.com/jamalpur-flowchart.png",
    longitude: 89.9333,
    latitude: 24.9167,
  },
  {
    region: "Mymensingh",
    district: "Sherpur",
    city: "Sherpur",
    covered_area: ["Nakla", "Nalitabari", "Jhenaigati", "Sreebardi"],
    status: "active",
    flowchart: "https://example.com/sherpur-flowchart.png",
    longitude: 90.0333,
    latitude: 25.0333,
  },
  {
    region: "Chattogram",
    district: "Bandarban",
    city: "Bandarban",
    covered_area: ["Bandarban Sadar", "Thanchi", "Lama", "Rowangchhari"],
    status: "active",
    flowchart: "https://example.com/bandarban-flowchart.png",
    longitude: 92.2186,
    latitude: 22.1958,
  },
  {
    region: "Khulna",
    district: "Kushtia",
    city: "Kushtia",
    covered_area: [
      "Kushtia Sadar",
      "Kumarkhali",
      "Khoksa",
      "Mirpur",
      "Bheramara",
      "Daulatpur",
    ],
    status: "active",
    flowchart: "https://example.com/kushtia-flowchart.png",
    longitude: 89.122,
    latitude: 23.9013,
  },
];
```

### `GontobboZones.jsx`
```javascript
import GontobboSearchBox from "./components/GontobboSearchBox";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { gontobboZones } from "./gontobbo.constants";
import BangladeshMap from "./components/BangladeshMap";

const GontobboZones = () => {
  const [query, setQuery] = useState("");

  // Custom lightweight search filter
  const filteredZones = useMemo(() => {
    const normalize = (str) =>
      String(str || "")
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, "")
        .trim();

    const q = normalize(query);

    return gontobboZones.filter((zone) => {
      const values = [zone.district, zone.city, zone.covered_area].map(
        normalize,
      );

      return values.some((val) => val.includes(q));
    });
  }, [query]);

  return (
    <div className="px-4 md:px-10 py-10">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary"
      >
        📍 Gontobbo Zones in Bangladesh
      </motion.h1>

      <GontobboSearchBox query={query} setQuery={setQuery} />

      {/* Map Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BangladeshMap zones={filteredZones} />
      </motion.div>

      {/* Optional: No Match UI */}
      {filteredZones.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-red-500 mt-10 font-medium"
        >
          ❌ No matching zones found.
        </motion.p>
      )}
    </div>
  );
};

export default GontobboZones;
```
```
