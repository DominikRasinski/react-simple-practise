"use server"
export const getUser = async (login: string) => {
    const dataLink = process.env.DATA_LINK;

    try{
        const user = await fetch(`${dataLink}/users/${login}`);
        const data = await user.json();
        console.log(data);
    } catch (error) {
        if(error instanceof Error) {
            throw new Error(error.message);
        }
        console.error(error);
    }
}