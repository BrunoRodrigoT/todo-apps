"use client";
import "./globals.css";
import React from "react";
import { Poppins } from "next/font/google";
import { Providers } from "@/contexts";
import { Switch } from "@/chadcnComponents/ui/switch";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = React.useState<boolean>(true);

  return (
    <html lang="en" className={dark ? "dark" : ""}>
      <body className={poppins.className}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            position: "absolute",
            right: 10,
            top: 10,
          }}
        >
          <p>{dark ? "Light mode" : "Dark mode"}</p>
          <Switch onClick={() => setDark(!dark)} />
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
