import React, {useState} from 'react'

function Search({getQuery}) {
    const [text, setText] = useState('')
    const onChange = (q)=>{
        setText(q)
        getQuery(q)
    }
    return (
        <section className='search'>
            <form>
                <input 
                type='text' 
                value={text} 
                className='form-control' 
                placeholder='search characters' 
                autoFocus
                onChange={(e)=>onChange(e.target.value)}
                >

                </input>
            </form>
            
        </section>
    )
}

export default Search
