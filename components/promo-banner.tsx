'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity:  1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 text-center relative"
        >
          <p className="text-sm font-medium">
            🎉 Summer Sale is here! Use code SUMMER20 for 20% off all items, hurry!
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}