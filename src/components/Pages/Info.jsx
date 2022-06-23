import React from 'react'
import "./Info.css"
import Footer from '../footer';

const Info = () => {
  return (

   <div className='info'>
    <div className='heading'>
     <h1>SORTING ALGORITHMS </h1>
    </div>
    <div className="knowmore">
     
     {/* <div className='button-1'><button className='button-1'>Bubble Sort</button></div> */}
     
     <div className='button-2'><button className='button-a'onClick={()=> window.open("https://www.geeksforgeeks.org/bubble-sort/", "_blank")}>Bubble Sort</button></div>
     <div className='button-3'><button className='button-a'onClick={()=> window.open("https://www.geeksforgeeks.org/heap-sort/", "_blank")}>Heap Sort</button></div>
     <div className='button-4'><button className='button-a'onClick={()=> window.open("https://www.geeksforgeeks.org/insertion-sort/", "_blank")}>Insertion Sort</button></div>
     <div className='button-5'><button className='button-a'onClick={()=> window.open("https://www.geeksforgeeks.org/merge-sort/", "_blank")}>Merge Sort</button></div>
     <div className='button-6'><button className='button-a'onClick={()=> window.open("https://www.geeksforgeeks.org/selection-sort/", "_blank")}>Selection Sort</button></div>
     <div className='button-7'><button className='button-a'onClick={()=> window.open("https://www.geeksforgeeks.org/sorting-algorithms/", "_blank")}>Twist Sort</button></div>
     <div className='button-8'><button className='button-a'onClick={()=> window.open("https://www.geeksforgeeks.org/quick-sort/", "_blank")}>Quick sort</button></div>
     
     <div className='footer'><Footer/></div>
    </div>
    </div>
    
  )
}

export default Info