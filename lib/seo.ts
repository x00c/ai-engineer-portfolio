import type { Metadata } from "next";
import { profile } from "@/content/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";

export const siteConfig = {
  name: `${profile.name} | ${profile.role}`,
  title: `${profile.role} Portfolio`,
  description: profile.tagline,
  url: siteUrl,
  ogImage: "/og-image.png",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s | AI Engineer Portfolio",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};
