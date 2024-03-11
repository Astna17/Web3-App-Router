import Link from 'next/link';

type Blog = {
    id : number;
    title : String;
};

export default function Home() {
    const blogs : Blog[] = Array.from({length : 3}, (_, index) => ({
        id : index + 1,
        title : `Blog $ (index + 1)`
    })); 

    return(
     <main>
        <div>
            <h2>List blog</h2>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <link href={`/blog/${blog.id}`} >
                         <a> {blog.title}</a>
                        </link>
                    </li>
                ))}
            </ul>
        </div>
    </main>
    )
}

export const useClient = () => [];