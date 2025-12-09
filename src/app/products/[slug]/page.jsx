

import ProductDetails from "@/components/ProductDetails/ProductDetails";


export const dynamicParams = true;

export async function generateMetadata({ params }) {

  const { slug } = await params;

  if (!slug) {
    return { title: "Product Not Found | Softwarezon" };
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/data/products.json`,
      { cache: "no-store" } 
    );

    if (!res.ok) {
      return { title: "Product Not Found | Softwarezon" };
    }

    const data = await res.json();
    const product = data.matches.find((p) => p.slug === slug);

    if (!product) {
      return { title: "Product Not Found | Softwarezon" };
    }

    const title = `${product.name} | Softwarezon`;
    const image = product.previews?.landscape_preview?.landscape_url || "/images/default-og.jpg";

    return {
      title,
      description: product.short_description,
      keywords: product.tags?.join(", "),
      openGraph: {
        title,
        description: product.short_description,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/products/${slug}`,
        images: [{ url: image, width: 1200, height: 630 }],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: product.short_description,
        images: [image],
      },
    };
  } catch (error) {
    console.error("Metadata fetch error:", error);
    return { title: "Error | Softwarezon" };
  }
}

export default async function ProductPage({ params }) {
  const { slug } = await params;  

  return <ProductDetails slug={slug} />;
}