import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const client = createClient({
  projectId: "vzxzp9na",
  dataset: "production",
  apiVersion: "2023-11-29",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: string | StaticImport) {
  return builder.image(source);
}