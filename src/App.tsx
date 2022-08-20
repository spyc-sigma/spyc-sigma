import { Breadcrumb, Checkbox, Col, DatePicker, Image, Layout, Menu, MenuProps, Row, Space } from 'antd';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react';
import "./App.css"

const { Header, Content, Footer } = Layout;

const items: MenuProps['items'] = [
  {
    label: '簡介',
    key: 'mail',
  },
  {
    label: '宗旨',
    key: 'app',
  },
  {
    label: '關注重點',
    key: 'app',
  },
  {
    label: '活動',
    key: 'app',
  },
  {
    label: '成員',
    key: 'app',
  },
];


const App: React.FC = () => (
  <Layout style={{ backgroundColor: "transparent" }} className="layout">
    <Header style={{ backgroundColor: "transparent" }} className="header">
      <Row gutter={23} className="header-row" style={{ backgroundColor: "transparent" }}>
        <Col span={6}>
          <div className='logo'>
            <img className='logo-outline' src="logo_large_text_light.svg" alt="Sigma"></img>
          </div>
        </Col>
        <Col span={17} >
          <Row gutter={17} className="menu-parent" justify="end">
            <Col span={17} style={{ flexBasis: "fit-content" }}>
              <Menu style={{ backgroundColor: "transparent" }} mode="horizontal" items={items} theme="dark"></Menu>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
    <Content>
      <Parallax className='parallax-container' pages={2} style={{ top: '0', left: '0', backgroundColor: "#1f1e33" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1f1e33', color: "white" }}>
          <p>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <p>Scroll up</p>
        </ParallaxLayer>
      </Parallax>
    </Content>
  </Layout>
);

export default App;