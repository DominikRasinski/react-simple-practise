"use server"
export const getUser = async (prevState: string, queryData: FormData): Promise<string> => {
    const dataLink = process.env.DATA_LINK;

    const login = queryData.get("login");
    if (!login) {
       return "Nie poprawne dane logowania"
    }

    return `Twój login to ${login}`;

    // try{
    //     const user = await fetch(`${dataLink}/users`);
    //     const data = user.json();
    //     return data;
    // } catch (error) {
    //     if(error instanceof Error) {
    //         throw new Error(error.message);
    //     }
    //     console.error(error);
    // }
}