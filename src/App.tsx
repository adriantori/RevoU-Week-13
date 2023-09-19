import { Affix, Layout, Space } from 'antd'
import './App.css'
import { Datas, Navbar, Footer } from './containers'

function App() {

  return (
    <Layout style={{ width: '100%', height:'100%', background:'teal' }}>
      <Affix offsetTop={0}>
        < Navbar />
      </Affix>
      <Space direction="horizontal" style={{ height: '84vh', justifyContent: 'center', alignContent: 'center' }}>
        < Datas />
      </Space>
      <Affix offsetBottom={0}>
        < Footer />
      </Affix>
    </Layout>
  )
}

export default App
