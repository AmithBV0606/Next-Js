export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  //   const { productId } = await params;
  const productId = (await params).productId;

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h2 className="text-2xl">Details about the product</h2>
      <p>Product {productId}</p>
    </div>
  );
}