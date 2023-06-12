import React from 'react'
import { Link } from 'react-router-dom'

function CardCategorys() {
  return (
<div class="flex items-center justify-center px-4">
  <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvP-1BWO9S_wsFLsaurUP0IXIfdmEQ0QHRhVFL07Imw6iLg4KHT_1jZlBxARvYJmDM-7A&usqp=CAU" alt="plant" class="h-auto w-full" />
    <div class="p-5">
        <h1>Aseo</h1>
      <p class="text-medium mb-5 text-gray-700">Descubre acá artículos y productos de limpieza para un hogar limpio y con delicioso aroma. Conoce el catálogo de productos para la limpieza de tu hogar que tenemos para ti. Limpiador Multiusos. Fragancia Duradera. Limpia y Desinfecta. Agradable Aroma..</p>

      <Link to='/ProductsCategorys'>
      <button class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Ver Mas</button>
      </Link>
    </div>
  </div>
</div>
    
  )
}

export default CardCategorys