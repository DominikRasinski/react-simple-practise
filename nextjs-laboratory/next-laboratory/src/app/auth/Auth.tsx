import { getData } from "@/service/getData"
import { Input, Button, Card } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { LockOutlined } from '@ant-design/icons';

export const Auth = async () => {

    getData();

    return (
        <div className="flex flex-col justify-center items-center">
            <Card>
                <form className="flex flex-col gap-2">
                    <Input size="large" placeholder="Podaj login" prefix={<UserOutlined />} />
                    <Input size="large" type="password" placeholder="Podaj hasło" prefix={<LockOutlined />} />
                    <Button type="primary">Zaloguj się</Button>
                </form>
            </Card>
        </div>
    )
}