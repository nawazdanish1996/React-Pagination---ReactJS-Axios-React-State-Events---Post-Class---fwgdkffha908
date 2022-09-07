const fetchPosts = async (page, limit) => {
    const API_URL = `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5`;
    try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error("Wrong Url");
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err);
    }
}

export default fetchPosts;