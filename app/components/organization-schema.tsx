
const siteUrl = "https://noybcore.com";

export function OrganizationSchema() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Noybcore",
    url: siteUrl,
    logo: `${siteUrl}/brand/noybcore.svg`,
    description:
      "Noybcore is an independent software organization building reliable software, open-source libraries, developer tools, infrastructure, automation, and AI systems.",
    sameAs: ["https://www.linkedin.com/company/no-yb-core/"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organization),
      }}
    />
  );
}
