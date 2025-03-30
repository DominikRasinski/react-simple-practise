"use server"

export const getData = async (prevState: string, queryData: FormData): Promise<string> => {
    const id = queryData.get("id");
    const symbol = queryData.get("symbol");
    const appName = queryData.get("name");


    if(id) {
        return `id aplikacji jest taki ${id}`;
    }

    if(symbol) {
        return `symbol aplikacji jest taki ${symbol}`;
    }

    if(appName) {
        return `nazwa aplikacji jest taka ${appName}`;
    }

    if(!id && !symbol && !appName) {
        return "Nie podałeś żadnych informacji"
    }

    return "";

}