import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function WhatsappButton() {
  return (
    <a
      href="https://api.whatsapp.com/message/VA7F7STOQBEMN1?autoload=1&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  )
}

export default WhatsappButton
