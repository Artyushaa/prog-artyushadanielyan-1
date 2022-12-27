import axios from 'axios';

type Posts = {
    userId: number,
    id: number,
    title: string,
    body: string
}

async function Request(): Promise<Posts[]> {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    return data
}

async function ToDo() {
    try {
        let data = await Request()
        console.log(data); 
    }
    catch (e) {
        console.log('error');

    }
}

ToDo()

