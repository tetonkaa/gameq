import { useState, useEffect } from 'react'

import axios from 'axios'

const Comment = () => {
    
    const [formState, setFormState] = useState({
        rating: '',
        title: '',
        content: ''
    })
    const [comments, setComments] = useState([])
    

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    async function submitHandler(event) {
        event.preventDefault()
        const config = {
            headers:{
              'Authorization': localStorage.getItem('token')
            }
          };
        const { data } = await axios.post('http://localhost:8000/comment', formState, config)
    }

    async function getComments() {
        const config = {
            headers:{
              'Authorization': localStorage.getItem('token')
            }
          };
        const { data } = await axios.get('http://localhost:8000/comment', config)
        return data
    }

    async function showComments() {
        const comments = await getComments()
        setComments(comments)
    }
    
    useEffect(() => {
        showComments()
    }, [])

    return(
        <main>
            <form onSubmit={submitHandler}>
                <div className="input-text">
                    <label htmlFor="rating"></label>
                    <input
                        type='number'
                        name='rating'
                        onChange={handleChange}
                        placeholder="Rating"
                        value={formState.rating} />
                </div>
                <div className="input-text">
                    <label htmlFor="title"></label>
                    <input
                        type='text'
                        name='title'
                        onChange={handleChange}
                        placeholder="Title"
                        value={formState.title} />
                </div>
                <div className="input-text">
                    <label htmlFor="content"></label>
                    <input
                        type='text'
                        name='content'
                        onChange={handleChange}
                        placeholder="Content"
                        value={formState.content} />
                </div>
                <button type="submit">Submit</button>
            </form>
            <section>
            { comments.map((comment, i) =>
                    <div key={i} className="comment">
                        <p>{comment.title}</p>
                        <p>{comment.content}</p>
                        <p>{comment.rating}/10</p>
                    </div>
            )}
            </section>
        </main>
    )
}

export default Comment