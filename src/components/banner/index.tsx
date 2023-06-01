import React from "react";

type BannerProps = {
  title: string;
};

function Banner({ title }: BannerProps) {
  return (
    <div className="banner-styles">
      <p style={{ fontWeight: "700" }}>{title}</p>
    </div>
  );
}

export default Banner;
