//============== About ==============//
import AboutImg from '@/Components/assets/about.jpg'

//============== Portfolio ==============//
import Nizam from '@/Components/assets/Bisnis/Nizam.png'
import Konter from '@/Components/assets/Bisnis/Konter.png'
import Kosmetik from '@/Components/assets/Bisnis/Kosmetik.png'
import Rineta from '@/Components/assets/Bisnis/rineta.png'
import Sunik from '@/Components/assets/Bisnis/Sunik.png'
import house from "@/Components/assets/Bisnis/house.png"
import material from "@/Components/assets/Bisnis/material.png"
import topup from '@/Components/assets/Bisnis/topup.png'
import nusantarabistro from "@/Components/assets/Bisnis/nusantara.png"
import Food from '@/Components/assets/Bisnis/Food.png'

import WeddingV1 from '@/Components/assets/Wedding/TemplateV1.png'
import WeddingV2 from '@/Components/assets/Wedding/TemplateV2.png'
import WeddingV3 from '@/Components/assets/Wedding/TemplateV3.png'
import Weddingv4 from "@/Components/assets/Wedding/TemplateV4.png"
import Weddingv5 from "@/Components/assets/Wedding/TemplateV5.png"
import Weddingv6 from "@/Components/assets/Wedding/TemplateV6.png"

import smkpandu from '@/Components/assets/Education/pandu.png'
import smppgri from '@/Components/assets/Education/pgri.png'
import EducationV1 from '@/Components/assets/Education/EducationV1.png'

//============== Icons ==============//
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaSchool, FaGithub, FaArrowRight } from "react-icons/fa";
import { DiJavascript1 } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiScrollreveal, SiVite, SiGooglesheets, SiVercel } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineSettingsApplications } from "react-icons/md";

export const home = [
  {
    name: 'Welcome To',
    desc: 'My Website',
  }
]

export const about = [
  {
    profile: "Tentang saya",
    name: "Rizki Ramadhan",
    desc: "Lulus SMK PANDU BOGOR tahun 2021. Saya tertarik dengan web development. Tujuan saya adalah untuk menonjol di media digital dan ruang teknologi. Saya ingin bekerja dengan orang-orang dan perusahaan yang akan memberi saya kesempatan untuk melenturkan gaya saya yang ramping dan halus. Hubungi kami jika menurut Anda kita dapat menciptakan seni visual yang berdampak bersama-sama.",
    imgSrc: AboutImg,
    background: "Latar belakang saya"
  }
]

export const icons = [
  {
    id: 1,
    icon: <FaHtml5 />,
  },

  {
    id: 2,
    icon: <FaCss3Alt />,
  },

  {
    id: 3,
    icon: <FaSass />,
  },

  {
    id: 4,
    icon: <DiJavascript1 />,
  },

  {
    id: 5,
    icon: <FaReact />,
  },

  {
    id: 6,
    icon: <SiTypescript />,
  },

  {
    id: 7,
    icon: <SiNextdotjs />,
  },
]

export const background = [
  {
    id: 1,
    icons: <FaSchool />,
    school: 'SDN LEUWILIANG 04',
    year: 'Lulus Pada Tahun 2012',
  },

  {
    id: 2,
    icons: <FaSchool />,
    school: 'SMP PGRI CIBUNGBULANG',
    year: 'Lulus Pada Tahun 2018',
  },

  {
    id: 3,
    icons: <FaSchool />,
    school: 'SMK PANDU BOGOR',
    kejuruan: 'Teknik Komputer & Jaringan',
    year: 'Lulus Pada Tahun 2021',
  }
]

export const portfolio = [
  {
    id: 1,
    imgSrc: Nizam,
    category: 'bisnis',
    title: 'Nizam Cellular Leuwiliang',
    text: 'Sebuah perusahaan yang berfokus pada bisnis handphone software & hardware.',
    icons1: <TbBrandNextjs />,
    icons2: <FaCss3Alt />,
    icons3: <SiScrollreveal />,
    icons4: <FaGithub />,
    icons5: <SiVercel />,
    href: 'https://nizamcellular.vercel.app/'
  },

  {
    id: 2,
    imgSrc: Sunik,
    category: 'bisnis',
    title: 'Sunik Johan & Cellular',
    text: 'Sebuah perusahaan yang berfokus pada bisnis Minuman, Makanan & Accessories Handphone',
    icons1: <FaHtml5 />,
    icons2: <FaCss3Alt />,
    icons3: <SiScrollreveal />,
    icons4: <IoLogoJavascript />,
    icons5: <SiVercel />,
    href: 'https://sunik.vercel.app/'
  },

  {
    id: 3,
    imgSrc: WeddingV1,
    category: 'wedding',
    title: 'Template Wedding V1',
    text: 'Undangan pernikahan era modern dengan tema minimalis dan elegan',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <TbBrandNextjs />,
    icons4: <SiGooglesheets />,
    icons5: <SiVercel />,
    href: 'https://rineta-template-v1.vercel.app/'
  },

  {
    id: 4,
    imgSrc: WeddingV2,
    category: 'wedding',
    title: 'Template Wedding V2',
    text: 'Undangan pernikahan era modern dengan tema minimalis dan elegan',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <TbBrandNextjs />,
    icons4: <SiGooglesheets />,
    icons5: <SiVercel />,
    href: 'https://template-v2-blush.vercel.app/'
  },

  {
    id: 5,
    imgSrc: WeddingV3,
    category: 'wedding',
    title: 'Template Wedding V3',
    text: 'Undangan pernikahan era modern dengan tema minimalis dan elegan',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <TbBrandNextjs />,
    icons4: <SiGooglesheets />,
    icons5: <SiVercel />,
    href: 'https://wedding-template-v3.vercel.app/'
  },

  {
    id: 6,
    imgSrc: smkpandu,
    category: 'education',
    title: 'SMK PANDU BOGOR',
    text: 'Sebuah website yang memperkenalkan SMK PANDU BOGOR',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <FaReact />,
    icons4: <SiGooglesheets />,
    icons5: <SiVite />,
    href: 'https://smk-pandu.vercel.app/'
  },

  {
    id: 7,
    imgSrc: smppgri,
    category: 'education',
    title: 'SMP PGRI CIBUNGBULANG',
    text: 'Sebuah website yang memperkenalkan SMP PGRI CIBUNGBULANG',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <FaReact />,
    icons4: <SiGooglesheets />,
    icons5: <SiVite />,
    href: 'https://smp-pgri-cibungbulang.vercel.app/'
  },

  {
    id: 8,
    imgSrc: Rineta,
    category: 'bisnis',
    title: 'rineta.io',
    text: 'Sebuah perusahaan yang menawarkan jasa pembuatan website',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <SiNextdotjs />,
    icons4: <SiGooglesheets />,
    icons5: <MdOutlineSettingsApplications />,
    href: 'https://rineta.vercel.app/'
  },

  {
    id: 9,
    imgSrc: Konter,
    category: 'bisnis',
    title: 'Berkah Cellular',
    text: 'Sebuah perusahaan konter pulsa dan data seluler',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <SiNextdotjs />,
    icons4: <SiGooglesheets />,
    icons5: <MdOutlineSettingsApplications />,
    href: 'https://rineta-konter.vercel.app/'
  },

  {
    id: 10,
    imgSrc: Kosmetik,
    category: 'bisnis',
    title: 'Rineta Kosmetik',
    text: 'Sebuah perusahaan kosmetik kecantikan',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <SiNextdotjs />,
    icons4: <SiGooglesheets />,
    icons5: <MdOutlineSettingsApplications />,
    href: 'https://rineta-kosmetik.vercel.app/'
  },

  {
    id: 11,
    imgSrc: EducationV1,
    category: 'education',
    title: 'Education V1',
    text: 'Website education dengan tema minimalis dan elegan',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <SiNextdotjs />,
    icons4: <SiGooglesheets />,
    icons5: <MdOutlineSettingsApplications />,
    href: 'https://rineta-education.vercel.app/'
  },

  {
    id: 12,
    imgSrc: Food,
    category: 'bisnis',
    title: 'Website Food',
    text: 'Website food dengan tema minimalis dan elegan',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <SiNextdotjs />,
    icons4: <SiGooglesheets />,
    icons5: <MdOutlineSettingsApplications />,
    href: 'https://rineta-food.vercel.app/'
  },

  {
    id: 13,
    imgSrc: house,
    category: 'bisnis',
    title: 'Website House',
    text: 'Website House dengan tema minimalis dan elegan',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <SiNextdotjs />,
    icons4: <SiGooglesheets />,
    icons5: <MdOutlineSettingsApplications />,
    href: 'https://rineta-house.vercel.app/'
  },

  {
    id: 14,
    imgSrc: material,
    category: 'bisnis',
    title: 'Website Bisnis Material Konstruksi',
    text: 'Sebuah website yang memperkenalkan Website Bisnis Material Konstruksi',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <SiNextdotjs />,
    icons4: <SiGooglesheets />,
    icons5: <MdOutlineSettingsApplications />,
    href: 'https://matrial-rineta.vercel.app/'
  },

  {
    id: 15,
    imgSrc: topup,
    category: 'bisnis',
    title: 'Rizzz Store',
    text: 'Sebuah website topup, voucher, joki & artikel seputar esport',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <SiNextdotjs />,
    icons4: <SiGooglesheets />,
    icons5: <MdOutlineSettingsApplications />,
    href: 'https://rizzz-store.vercel.app/'
  },

  {
    id: 16,
    imgSrc: nusantarabistro,
    category: 'bisnis',
    title: 'Nusantara Bestro',
    text: 'Sebuah website yang memperkenalkan Nusantara Bestro',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <SiNextdotjs />,
    icons4: <SiGooglesheets />,
    icons5: <MdOutlineSettingsApplications />,
    href: 'https://nusantara-bistro.vercel.app/'
  },

  {
    id: 17,
    imgSrc: Weddingv4,
    category: 'wedding',
    title: 'Template Wedding V4',
    text: 'Undangan pernikahan era modern dengan tema minimalis dan elegan',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <SiNextdotjs />,
    icons4: <SiGooglesheets />,
    icons5: <MdOutlineSettingsApplications />,
    href: 'https://rineta-weddingv4.vercel.app/'
  },

  {
    id: 18,
    imgSrc: Weddingv5,
    category: 'wedding',
    title: 'Template Wedding V5',
    text: 'Undangan pernikahan era modern dengan tema minimalis dan elegan',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <SiNextdotjs />,
    icons4: <SiGooglesheets />,
    icons5: <MdOutlineSettingsApplications />,
    href: 'https://wedding-v5.vercel.app/'
  },

  {
    id: 19,
    imgSrc: Weddingv6,
    category: 'wedding',
    title: 'Template Wedding V6',
    text: 'Undangan pernikahan era modern dengan tema minimalis dan elegan',
    icons1: <FaSass />,
    icons2: <BiLogoTypescript />,
    icons3: <SiNextdotjs />,
    icons4: <SiGooglesheets />,
    icons5: <MdOutlineSettingsApplications />,
    href: 'https://wedding-v6.vercel.app/'
  },
]

export const heading = [
  {
    berita: 'Content',
    icons: <FaArrowRight />,
    text: 'Portfolio',
    title: 'Here is the project I have created',
    desc: 'Lets take a look at the projects that have been created by me'
  }
]

export const navbar = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'About',
    path: '/about',
  },
  {
    id: 3,
    title: 'Portfolio',
    path: '/portfolio',
  },
]