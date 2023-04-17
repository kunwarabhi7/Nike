import React, { useEffect, useState } from 'react'
import {fetchDataFromApi} from '../utils/api'

type Props = {}
const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const SubMenu = (props: Props) => {
const[submenu , setSubmenu] =    useState(false)
const [categories, SetCategories] = useState(null)
useEffect(()=>{
fetchCategories()
},[])

const fetchCategories = async () => {
const {data} =  await fetchDataFromApi('/api/categories?populate=*')
SetCategories(data)
}
console.log(categories)

  return (
    <div className='flex justify-center'>
      <div  onMouseLeave={()=>setSubmenu(false)}>
        <button onMouseEnter={()=>setSubmenu(true)}>
          Sale
        </button>
        <ul  className={`absolute right-0 w-40 px-2 bg-gray-100 h-48 py-2  rounded  shadow-xl ${submenu? 'block':'hidden'}`}>
{subMenuData.map(({id,name,doc_count})=>(
  <li key={id}>{name}<span>{doc_count}</span></li>
))}
        </ul>
      </div>

    </div>
  )
}

export default SubMenu