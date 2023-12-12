import Link from "next/link";
import { client } from "../lib/sanity";
import Image from "next/image";

export interface simplifiedProduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
}

async function getData(brand: string) {
    const query = `*[_type == "product" && brand->name == "${brand}"] {
        _id,
          "imageUrl": images[0].asset->url,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }`;

    const data = await client.fetch(query);

    return data;
}

export const dynamic = "force-dynamic";

const BrandPage = async ({params}: {params: { brand: string }}) => {    

    const data: simplifiedProduct[] = await getData(params.brand);
    return (
        <div className="bg-white mb-20">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Our Products for {params.brand}
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((product) => (
                        <div key={product._id} className="group relative">
                            <div className="aspect-square w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80">
                                <Image
                                    src={product.imageUrl}
                                    alt="Product image"
                                    className="w-full h-full object-contain object-center lg:h-full lg:w-full"
                                    width={300}
                                    height={300}
                                />
                            </div>

                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link href={`/product/${product.slug}`}>
                                            {product.name}
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        {product.categoryName}
                                    </p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                    ${product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BrandPage
