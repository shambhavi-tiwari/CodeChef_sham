'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
// import { useToast } from '@/components/ui/use-toast'
import { useToast } from '@/components/ui/use-toast'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export default function ProductDetailPage() {
  const [product, setProduct] = useState<Product | null>(null)
  const { id } = useParams()
  const { toast } = useToast()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data: Product) => setProduct(data))
  }, [id])

  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product?.title} has been added to your cart.`,
    })
  }

  const addToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product?.title} has been added to your wishlist.`,
    })
  }

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <div className="relative h-96 w-full">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  index < Math.round(product.rating.rate)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">
              ({product.rating.count} reviews)
            </span>
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex gap-4 mb-6">
            <Button
              onClick={addToCart}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              Add to Cart <ShoppingCart className="ml-2 h-5 w-5" />
            </Button>
            <Button onClick={addToWishlist} variant="outline" className="flex-1">
              Add to Wishlist <Heart className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-2">Product Details</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Category: {product.category}</li>
              <li>Material: Premium quality</li>
              <li>Shipping: Free shipping on orders over $50</li>
              <li>Returns: 30-day return policy</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}