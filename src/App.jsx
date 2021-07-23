import React from "react";
import BlogsCard from "./BlogCard";
function App(){
    const blogArray=[
        {
            id: 1,
            title: 'Sayri',
            content: 'Espero que estes bien'
        },
        {
            id:2,
            title: 'Sayri',
            content: 'Espero que estes bien'
        },  {
            id:3,
            title: 'Sayri',
            content: 'Espero que estes bien'
        },  {
            id: 4,
            title: 'Sayri',
            content: 'Espero que estes bien'
        },  {
            id: 5,
            title: 'Esperanza',
            content: 'Espero que estes bien'
        }
    ]
    const displayArrayContent = blogArray.map((item, pos) => {
        return (
            <div className="shadow-md items-center w-80" key={item.id}>
                    <h2 className="text-center">{item.title}</h2>
                    <p className="text-center">{item.content}</p>
            </div>

    )
    })
    
    return(
        <div className="grid justify-center items-center text-center">
            {displayArrayContent}
            <BlogsCard/>
        </div>
    )
}
export default App
