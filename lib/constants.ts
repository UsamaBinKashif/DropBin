export const features = [
  {
    title: "Store and protect your files",
    img_url: "/assets/ProtectFilesDark.svg",
  },
  {
    title: "Stay in control of shared content",
    img_url: "/assets/SharedContentDark.svg",
  },
  {
    title: "Cloud storage you can count on",
    img_url: "/assets/ManageBusinessDark.svg",
  },
];

export const maxSize = 52428800;

export const formattedDate = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
}).format(Date.now());


export const COLOR_EXTENSION_MAP: { [key: string]: string } = {
  pdf: "#0160FE",
  doc: "#2ECC71",
  docx: "#3498DB",
  xls: "#9B59B6",
  xlsx: "#8E44AD",
  ppt: "#E74C3C",
  pptx: "#C0392B",
  txt: "#F39C12",
  jpg: "#F1C40F",
  jpeg: "#F39C12",
  png: "#E67E22",
  gif: "#D35400",
  mp3: "#E74C3C",
  wav: "#C0392B",
  mp4: "#2ECC71",
  mov: "#27AE60",
  avi: "#16A085",
  zip: "#3498DB",
  rar: "#2980B9",
  tar: "#1ABC9C",
  exe: "#27AE60",
  iso: "#16A085",
  dmg: "#2C3E50",
  csv: "#F1C40F",
  xml: "#8E44AD",
  json: "#9B59B6",
  html: "#3498DB",
  css: "#2980B9",
  js: "#1ABC9C",
  py: "#27AE60",
};