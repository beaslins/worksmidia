import Layout from "../../components/layout"
import Post from "../../components/post"

function Blog() {
    return (
        <Layout title="Blog | Works Midia">
            <section className="posts container">
                <div className="grid">
                    <Post 
                        image="/images/b1.jpg"
                        title="You are free to choose what you want"
                        author="FATIMA MOHAMED"
                        date="27 FEB, 2019"
                        link="blog/blog-single"
                    />
                    <Post 
                        image="/images/b2.jpg"
                        title="You are free to choose what you want"
                        author="FATIMA MOHAMED"
                        date="27 FEB, 2019"
                        link="blog/blog-single"
                    />
                    <Post 
                        image="/images/b3.jpg"
                        title="You are free to choose what you want"
                        author="FATIMA MOHAMED"
                        date="27 FEB, 2019"
                        link="blog/blog-single"
                    />
                    <Post 
                        image="/images/b4.jpg"
                        title="You are free to choose what you want"
                        author="FATIMA MOHAMED"
                        date="27 FEB, 2019"
                        link="blog/blog-single"
                    />
                    <Post 
                        image="/images/b5.jpg"
                        title="You are free to choose what you want"
                        author="FATIMA MOHAMED"
                        date="27 FEB, 2019"
                        link="blog/blog-single"
                    />
                    <Post 
                        image="/images/b6.jpg"
                        title="You are free to choose what you want"
                        author="FATIMA MOHAMED"
                        date="27 FEB, 2019"
                        link="blog/blog-single"
                    />
                </div>
            </section>
        </Layout>
    )
}

export default Blog