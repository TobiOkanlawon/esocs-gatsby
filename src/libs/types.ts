export type SocialMediaType = {
  iconName: "facebook" | "instagram" | "X";
  url: string;
};

export type PastorType = {
  id: string;
  name: string;
  title: string;
  socialMedia: SocialMediaType[];
};
