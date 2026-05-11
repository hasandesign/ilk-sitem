import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'anaSayfa',
  type: 'document',
  title: 'Ana Sayfa Ayarları',
  fields: [
    defineField({
      name: 'anaBaslik',
      type: 'string',
      title: 'Ana Başlık (H1)',
      description: 'Sitenin en üstünde görünecek ana slogan'
    })
  ]
})