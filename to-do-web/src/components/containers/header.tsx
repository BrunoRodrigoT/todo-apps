import { useTheme } from "@/contexts/themeContext";
import React, { CSSProperties, ReactNode } from "react";
import dynamic from "next/dynamic";

interface IHeaderProps {
  title: string;
  subtitle?: ReactNode;
  containerStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  subtitleStyle?: CSSProperties;
}

function Header({
  title,
  subtitle,
  containerStyle,
  titleStyle,
  subtitleStyle,
}: IHeaderProps) {
  const theme = useTheme();
  return (
    <div style={{ gap: 10, ...containerStyle }}>
      <p
        style={{
          fontSize: theme.fontSizes.xxLarge,
          fontWeight: theme.fontWeights.light,

          ...titleStyle,
        }}
      >
        <span style={{ fontWeight: theme.fontWeights.bold }}>
          {title.slice(0, 2)}
        </span>
        {title.slice(2)}
      </p>
      {subtitle && (
        <p
          style={{
            fontSize: 16,
            fontWeight: theme.fontWeights.light,
            ...subtitleStyle,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(Header), { ssr: false });
