import ProductDetails from "@/components/ProductDetails/ProductDetails";

export async function generateMetadata({ params }) {
  const slug = params.slug;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/data/products.json`
  );
  const data = await res.json();
  const product = data.matches.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Softwarezon",
      description: "This product does not exist.",
    };
  }

  const title = `${product.name} | Softwarezon`;
  const description = product.short_description;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/products/${product.slug}`;
  const image =
    product.previews?.landscape_preview?.landscape_url ||
    "/images/default-og.jpg";

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: [image],
    description: product.short_description,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "Softwarezon",
    },
    offers: {
      "@type": "Offer",
      url: url,
      priceCurrency: "USD",
      price: (product.price_cents / 100).toFixed(2),
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating?.rating || 0,
      reviewCount: product.rating?.count || 0,
    },
  };

  return {
    title,
    description,
    keywords: product.tags?.join(", "),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
    robots: {
      index: true,
      follow: true,
    },
    additionalMetaTags: [
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: title,
      },
      {
        name: "twitter:description",
        content: description,
      },
      {
        name: "twitter:image",
        content: image,
      },
    ],
    additionalLinkTags: [
      {
        rel: "canonical",
        href: url,
      },
    ],
    other: [
      {
        tagName: "script",
        type: "application/ld+json",
        innerHTML: JSON.stringify(schema),
      },
    ],
  };
}

export default function Product({ params }) {
  return (
    <div>
      <ProductDetails slug={params.slug} />
    </div>
  );
}
