'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ShoppingBag, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`min-h-screen flex items-center justify-center ${
          theme === 'dark' ? 'bg-gradient-to-br from-purple-900 to-pink-900' : 'bg-gradient-to-br from-purple-100 to-pink-100'
        }`}
      >
        <div className="text-center">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Welcome to Gradient Goods
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl mb-8"
          >
            Where Style Meets Simplicity
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
          >
            <Link href="/products">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Shop Now <ShoppingBag className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 px-4 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Electronics', 'Jewelry', 'Men\'s Clothing'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <Link href={`/products?category=${category.toLowerCase()}`}>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{category}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Discover our latest {category.toLowerCase()}</p>
                    <Button variant="outline">Explore <Star className="ml-2" /></Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}