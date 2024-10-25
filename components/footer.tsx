import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">About Us</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Gradient Goods is your one-stop shop for all things trendy and stylish.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="/products" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Products</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Customer Service</h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="/faq" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">FAQ</Link></li>
              <li><Link href="/shipping" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Shipping</Link></li>
              <li><Link href="/returns" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Follow Us</h2>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">&copy; 2023 Gradient Goods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}