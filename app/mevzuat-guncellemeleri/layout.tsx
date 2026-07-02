import { notFound } from "next/navigation";
import { isMevzuatGuncellemeleriEnabled } from "@/lib/featureFlags";

export default function MevzuatGuncellemeleriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isMevzuatGuncellemeleriEnabled()) {
    notFound();
  }

  return children;
}
