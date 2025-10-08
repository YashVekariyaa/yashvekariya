import Head from "next/head";
import React from "react";

const SEO: React.FC = () => {
  const siteUrl = "https://yourdomain.com";
  const title = "Yash Vekariya | Full Stack Developer | React Js Developer";
  const description =
    "I'm Yash Vekariya, a Full Stack Developer specializing in React, Next.js, and Node.js. Explore my portfolio, projects, and contact details.";
  const image = `${siteUrl}/images/og-image.jpg`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yash Vekariya",
    jobTitle: "Full Stack Developer",
    url: siteUrl,
    sameAs: [
      "https://github.com/YashVekariyaa",
      "https://www.linkedin.com/in/yashvekariya/",
    ],
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Yash Vekariya, Full Stack Developer, Next.js, React, JavaScript, Portfolio"
      />
      <meta name="google-site-verification" content="albtmD8pkqdVk3tm5Owkx5I3CSFoSWm-BNLRAGnMa48" />
      <meta name="author" content="Yash Vekariya" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </Head>
  );
};

export default SEO;
