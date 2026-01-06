import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@yashvekariya",
    icon: Icons.gitHub,
    link: "https://github.com/YashVekariyaa",
  },
  {
    name: "LinkedIn",
    username: "Yash Vekariya",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/yashvekariya/",
  },
  // {
  //   name: "Twitter",
  //   username: "@yashvekariya",
  //   icon: Icons.twitter,
  //   link: "https://x.com/yashvekariya33",
  // },
  {
    name: "Gmail",
    username: "yashvekariya33",
    icon: Icons.gmail,
    link: "mailto:vekariyayash33@gmail.com",
  },
];

export const Contact = {
  LINKED_IN: "https://www.linkedin.com/in/yashvekariya/",
  GITHUB: "https://github.com/YashVekariyaa",
  EMAIL: "vekariyayash33@gmail.com",
  PHONE: "+91 9081133075",
  WHATSAPPTEXT:
    "I'd like to get more information about the services you provide.",
  WHATSAPPNUMBER: "919081133075",
};
