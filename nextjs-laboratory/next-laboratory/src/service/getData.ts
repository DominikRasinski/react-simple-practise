export const getData = async () => {
    const dataLink = process.env.DATA_LINK;
    
    try{
        const res = await fetch(`${dataLink}/apps`);
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}