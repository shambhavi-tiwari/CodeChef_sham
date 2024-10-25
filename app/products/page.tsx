import { Suspense } from 'react'
import ProductListing from './product-listing'

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductListing />
        </Suspense>
      </div>
    </div>
  )
}