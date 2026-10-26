import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/onest";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yanet Rodriguez — Senior Mobile Developer",
  description: "Senior Mobile Developer for iOS and Android. Swift, SwiftUI, Kotlin, Jetpack Compose and Kotlin Multiplatform.",
  openGraph: {
    title: "Yanet Rodriguez — Senior Mobile Developer",
    description: "Native iOS and Android, Kotlin Multiplatform. Looking for Mobile Tech Lead roles.",
    type: "website",
  },
};
export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#E9EEF5" }, { media: "(prefers-color-scheme: dark)", color: "#0E1626" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
