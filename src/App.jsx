import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tampil from './assets/components/Tampil'
import './App.css'

function App() {
  const products = [{
    nama : "Mukena Brodir Aliya", 
    deskripsi : "Mukena ini memiliki ciri khas bordiran yang indah dan rumit di sekitar bagian dada, lengan, dan kerudungnya",
    img : "https://images.tokopedia.net/img/cache/500-square/product-1/2020/1/9/3059525/3059525_0a824c83-1d55-4251-a7c9-4d23279168fc_874_874.jpg"

  },
  {
    nama : "Mukena Brodir Maypa", 
    deskripsi : "Mukena bordir umumnya terbuat dari bahan yang lembut dan ringan seperti katun atau sutra, memberikan kenyamanan saat digunakansekitar bagian dada, lengan, dan kerudungnya",
    img : "https://asset-a.grid.id/crop/0x48:1080x821/x/photo/2019/05/21/530733178.jpg"
  },
  {
    nama : "Mukena Brodir Bunga", 
    deskripsi : "Mukena bordir umumnya terbuat dari bahan yang lembut dan ringan seperti katun atau sutra, memberikan kenyamanan saat digunakansekitar bagian dada, lengan, dan kerudungnya",
    img : "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/3/6/eb92c27c-2c4d-4f0a-82e1-6fa9c52bba2b.jpg.webp"
  },
];

return (
  <div className='con'>
    {products.map ((a,b) => ( 
    <Tampil
    key={b}
    nama={a.nama}
    deskripsi={a.deskripsi}
    img={a.img}
    />
    ))}
  </div>
);}
export default App
