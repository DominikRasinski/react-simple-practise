"use client"

type AppsProps = {
    getData: (prevState: string, queryData: FormData) => Promise<string>;
    postData: (prevState: string, queryData: FormData) => Promise<void>;
}

export const Apps = (props: AppsProps) => {
    return (
        <div>Aplikacje</div>
    )
}