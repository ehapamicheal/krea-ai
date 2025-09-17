// NAVIGATION LINKS
import { BiSolidHome } from "react-icons/bi";
import { GoFileDirectoryFill } from "react-icons/go";
import { PiMagicWandBold } from "react-icons/pi";
import { MdOutlineFormatColorText } from "react-icons/md";
import { SiOrganicmaps } from "react-icons/si";
import { NavLink } from "./types/navLink";


export const navLinks: NavLink[] = [
  { id: 1, icon: BiSolidHome, path: "/", label: "Home" },
  { id: 2, icon: FaImage, path: "#", label: "Image" },
  { id: 3, icon: FaVideo, path: "#", label: "Video" },
  { id: 4, icon: PiMagicWandBold, path: "#", label: "Enhancer" },
  { id: 5, icon: MdOutlineFormatColorText, path: "#", label: "Realtime" },
  { id: 6, icon: SiOrganicmaps, path: "#", label: "Edit" },
  { id: 7, icon: GoFileDirectoryFill, path: "#", label: "Assets" },
];



//HERO PRODUCTS DATA
import { Product } from './types/product';

export const heroProducts: Product[] = [
  {
    id: 1,
    topTitle: "New image model",
    subtitle: "WAN 2.2 Image generation",
    description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    image: "/images/home-img1.png",
    cta: "Try WAN 2.2",
  },
  {
    id: 2,
    topTitle: "open source model",
    description: "We're making the weight to our FLUX.1 Krea model open source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    subtitle: "FLUX.1 Krea",
    image: "/images/home-img2.png",
    cta: "Learn More",
  },
  {
    id: 3,
    topTitle: "Gallery model",
    description: "Generate complex images with the brand new WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    subtitle: "Nice Gallery view",
    image: "/images/about-img8.png",
    cta: "Get Started",
  },
  {
    id: 4,
    topTitle: "Seedream Model",
    description: "Try the brand new and record-breaking image generation model seedream 4.0 by ByteDance.",
    subtitle: "Seedream 4.0",
    image: "/images/home-img5.png",
    cta: "Learn More",
  },
  {
    id: 5,
    topTitle: "Enchancer",
    description: "Generate complex images with the brand new WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    subtitle: "Enchancer Model",
    image: "/images/home-img8.png",
    cta: "Learn More",
  },
  {
    id: 6,
    topTitle: "Video model",
    description: "Generate complex images with the brand new WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    subtitle: "Generate New Videos",
    image: "/images/about-img4.png",
    cta: "Learn More",
  },
];



// GENERATE DATA
import { FaImage, FaVideo, FaEdit } from "react-icons/fa";
import { BsPersonArmsUp } from "react-icons/bs";
import { GiTalk } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";
import { MdOutlineShowChart } from "react-icons/md";
import { MdEnhancedEncryption } from "react-icons/md";
import { GenerateItem } from './types/generate';

export const generateData: GenerateItem[] = [
  {
    id: 1,
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram.",
    icon: FaImage,
    badge: "New",
  },
  {
    id: 2,
    title: "Video",
    description: "Generate videos with Haiper, Pika, Runway, Luma, and more.",
    icon: FaVideo,
  },
  {
    id: 3,
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    icon: MdOutlineShowChart,
  },
  {
    id: 4,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K.",
    icon: MdEnhancedEncryption,
    badge: "New",
  },
  {
    id: 5,
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations.",
    icon: FaEdit,
    badge: "New",
  },
  {
    id: 6,
    title: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    icon: GiTalk,
    badge: "New",
  },
  {
    id: 7,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    icon: BsPersonArmsUp,
    badge: "New",
  },
  {
    id: 8,
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters.",
    icon: IoMdSchool,
  },
];


// GALLERY DATA
import { GalleryItem } from "./types/gallery";

export const galleryData: GalleryItem[] = [
  { id: 1, image: "/images/home-img4.png" },
  { id: 2, image: "/images/home-img17.png" },
  { id: 3, image: "/images/home-img6.png" },
  { id: 4, image: "/images/home-img7.png" },
  { id: 5, image: "/images/home-img16.png" },
  { id: 6, image: "/images/home-img12.png" },
  { id: 7, image: "/images/home-img13.png" },
  { id: 8, image: "/images/home-img14.png" },
  { id: 9, image: "/images/home-img15.png" },
];