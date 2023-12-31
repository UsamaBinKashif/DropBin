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
