"use client"
import { Input, Button, Card } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { LockOutlined } from '@ant-design/icons';
import "@ant-design/v5-patch-for-react-19";
import { useActionState } from "react";

type AuthProps = {
    onSubmit: (prevState: any, queryData: any) => Promise<void>;
}

export const Auth = (props: AuthProps) => {
    const {onSubmit} = props;
    const [state, formAction, isPending] = useActionState(onSubmit, null);

    return (
        <div className="flex flex-col justify-center items-center">
            <Card>
                <form className="flex flex-col gap-2" action={formAction}>
                    <Input size="large" placeholder="Podaj login" name="login" prefix={<UserOutlined />} />
                    <Input size="large" type="password" placeholder="Podaj hasło" name="password" prefix={<LockOutlined />} />
                    <Button type="primary" htmlType="submit">Zaloguj się</Button>
                    {isPending ? "Loading" : `${state}`}
                </form>
            </Card>
        </div>
    )
}