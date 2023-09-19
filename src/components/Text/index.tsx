import { ReactNode } from 'react';
import { Typography } from 'antd';

const { Title, Text:BaseText } = Typography;

interface Props {
    children: ReactNode;
    type?: 'h1' | 'h2' | 'h3' | 'danger' | 'span'
}

const Text = ({ children, type = 'span' }: Props) => {

    if (type === 'h1') {
        return (
            <Title>{children}</Title>
        )
    }

    if (type === 'h2') {
        return (
            <Title level={ 2 }>{children}</Title>
        )
    }

    if (type === 'h3') {
        return (
            <Title level={ 3 }>{children}</Title>)
    }

    if (type === 'danger') {
        return (
            <BaseText type="danger">{children}</BaseText>
        )
    }

    return (
        <BaseText strong>{children}</BaseText>
    )
};

export default Text