import { MenuProps, Menu } from "antd"
import { PlusSquareOutlined, HighlightOutlined, ClockCircleOutlined} from '@ant-design/icons'


const items: MenuProps['items'] = [
    {
        label: 'React Front-end API',
        key: 'title',
        icon: <PlusSquareOutlined />,
    },
    {
        label: 'Adri Antori',
        key: 'author',
        icon: <HighlightOutlined />,
    },
    {
        label: 'RevoU Week 13',
        key: 'class',
        icon: <ClockCircleOutlined />,
    }
]

const Navbar = () => {

    return (
        <Menu mode="horizontal" items={items} style={{ height: '8vh', alignItems:'center'}}/>
    )
}

export default Navbar