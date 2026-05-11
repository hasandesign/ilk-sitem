import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'proje',
  type: 'document',
  title: 'Projeler',
  fields: [
    defineField({
      name: 'projeBasligi',
      type: 'string',
      title: 'Proje Adı'
    }),
    defineField({
      name: 'projeGorseli',
      type: 'image',
      title: 'Proje Görseli',
      options: { hotspot: true } // Görseli kırpmanızı sağlar
    }),
    defineField({
      name: 'projeAciklamasi',
      type: 'text',
      title: 'Proje Açıklaması'
    })
  ]
})