import sikkim from "../../src/assests/7-yumthang-valley-in-sikkim.webp";
import Andaman from "../../src/assests/andaman-and-nicobar-islands.webp";
import Madhya from "../../src/assests/bhedaghat.webp";
import Himachal from "../../src/assests/bir.webp";
import Karnataka from "../../src/assests/Chikmagalur.webp";
import SriNagar from "../../src/assests/dal-lake.webp";
import Ooty from "../../src/assests/emerald-lake.webp";
import Andhra from "../../src/assests/gandikota-hills-grand-canyon.webp";
import Jammu from "../../src/assests/gulmarg.webp";
import Karnataka1 from "../../src/assests/hampi.webp";
import Odisha from "../../src/assests/jaisalmer.webp";
import Himachal1 from "../../src/assests/khajjiar.webp";
import Jammu1 from "../../src/assests/ladakh-winter.webp";
import Lakshadweep from "../../src/assests/lakshadweep.webp";
import Maharastra from "../../src/assests/mahabaleshwar.webp";
import Meghalaya from "../../src/assests/Meghalaya.webp";
import Rajasthan from "../../src/assests/mount-abu.webp";
import Kerala from "../../src/assests/munnar-kerala.webp";
import Gujarat from "../../src/assests/Rann-of-Kutch.webp";
import West from "../../src/assests/sundarbans.webp";
import Arunchal from "../../src/assests/tawang.webp";
import TamilNadu from "../../src/assests/trivengamam.webp";
import UttarPradesh from "../../src/assests/Varanasi.webp";
import Goa from "../../src/assests/Waterfalls-Dudhsagar.webp";

import React from "react";
import { useNavigate } from "react-router-dom";
const qs = require("qs");
export const Navigate = useNavigate;
export const AppContext = React.createContext(null);
export const query = qs.stringify(
  {
    populate: {
      source: true,
      Destination: true,
      cost: true,
      seat: true,
      startDate: true,
      endDate: true,
      images: {
        populate: {
          placeTitle: true,
          Description: true,
          placeImage: true,
        },
      },
    },
  },
  {
    encodeValuesOnly: true, // prettify URL
  }
);

const images = [
  {
    url: sikkim,
    name: "Sikkim",
  },
  {
    url: Andaman,
    name: "Andaman",
  },
  {
    url: Madhya,
    name: "Madhya Pradesh",
  },
  {
    url: Himachal,
    name: "Himachal Pradesh",
  },
  {
    url: Karnataka,
    name: "Karnataka",
  },
  {
    url: SriNagar,
    name: "Sri Nagar",
  },
  {
    url: Ooty,
    name: "Ooty",
  },
  {
    url: Andhra,
    name: "Andhra Pradesh",
  },
  {
    url: Jammu,
    name: "Jammu Kashmir",
  },
  {
    url: Karnataka1,
    name: "Karnataka",
  },
  {
    url: Odisha,
    name: "Odisha",
  },
  {
    url: Himachal1,
    name: "Himachal Pradesh",
  },
  {
    url: Jammu1,
    name: "Jammu Kashmir",
  },
  {
    url: Lakshadweep,
    name: "Lakshadweep",
  },
  {
    url: Maharastra,
    name: "Maharastra",
  },
  {
    url: Meghalaya,
    name: "Meghalaya",
  },
  {
    url: Rajasthan,
    name: "Rajasthan",
  },
  {
    url: Kerala,
    name: "Kerala",
  },
  {
    url: Gujarat,
    name: "Gujarat",
  },
  {
    url: West,
    name: "West Bengal",
  },
  {
    url: Arunchal,
    name: "Arunchal Pradesh",
  },
  {
    url: TamilNadu,
    name: "TamilNadu",
  },
  {
    url: UttarPradesh,
    name: "UttarPradesh",
  },
  {
    url: Goa,
    name: "Goa",
  },
];

export default images;
