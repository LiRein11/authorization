import { Button, Form, Input } from 'antd'
import { useAppDispatch } from 'app/redux/config/store'
import { useEffect } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slices/loginSlice'
import { useSelector } from 'react-redux'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/routeConfig/routeConfig'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import './LoginForm.scss'

export const LoginForm = () => {
    const [form] = Form.useForm()

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading)

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                dispatch(loginActions.setClearError())
            }, 3000)
        }
    }, [dispatch, error])

    const onFinish = async (values: any) => {
        await dispatch(loginByUsername(values))
        form.resetFields()
        navigate(`${RoutePath.profile}`)
    }

    if (isLoading) {
        return <section>Loading...</section>
    }

    return (
        <Form
            form={form}
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    { required: true, message: 'Please input your username!' },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                    allowClear
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    { required: true, message: 'Please input your password!' },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    allowClear
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item shouldUpdate>
                {() => (
                    <Button
                        type="primary"
                        className="login-form-button"
                        htmlType="submit"
                        disabled={
                            !form.isFieldsTouched(true) ||
                            !!form
                                .getFieldsError()
                                .filter(({ errors }) => errors.length).length
                        }
                    >
                        Log in
                    </Button>
                )}
            </Form.Item>
            {error && <div>Вы ввели неверный логин или пароль!</div>}
        </Form>
    )
}
