import React from "react";

export const Analytics = () => {
  const tag = "G-N4GWEE46NW";
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${tag}`}
      />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', ${tag});
`,
        }}
      />
    </>
  );
};
