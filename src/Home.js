import { useState } from "react"
import BlogList from "./BlogList"

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", author: "emma", id: 1 },
        { title: "wekcome party", body: "lorem ipsum...", author: "winnie", id: 2 },
        { title: "top tips", body: "lorem ipsum...", author: "winston", id: 3 },
    ])
    return (
        <div className="home">
            <BlogList blogs={blogs}/>

        </div>
    )
};

export default Home;