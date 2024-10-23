import React from 'react'

function localization() {
  return (
    <section className="mb-20" id="localizacao">
      <h2 className="text-4xl font-bold mb-12 text-center font-serif ">
        Localização
      </h2>
      <div className="aspect-video w-full rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14115.39861813114!2d-48.4249085!3d-27.3926909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDIzJzM0LjciUyA0OMKwMjUnMjUuNyJX!5e0!3m2!1sen!2sbr!4v1635181410086!5m2!1sen!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}

export default localization
