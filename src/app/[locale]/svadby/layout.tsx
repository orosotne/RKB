import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { FEATURES } from "@/lib/site-config";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> | Metadata {
  // Temporarily unlinked from the site — keep it out of the index while hidden.
  if (!FEATURES.weddings) {
    return { robots: { index: false, follow: false } };
  }

  return buildPageMetadata({
    locale: params.locale,
    namespace: "weddings",
    path: "svadby",
    keywords: [
      "svadby Bošany",
      "svadba Partizánske",
      "Kaštieľ Bošany svadby",
      "svadobný priestor Partizánske",
      "svadby okolo Partizánske",
      "svadobná hostina Bošany",
    ],
  });
}

export default function SvadbyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
