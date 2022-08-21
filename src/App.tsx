import { Col, Layout, Menu, MenuProps, Row, Space, Typography } from 'antd';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, { Ref, RefObject, useRef, useState } from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import "./App.css"
const { Title, Paragraph } = Typography;
const { Header, Content } = Layout;

const items: MenuProps['items'] = [
  {
    label: '簡介',
    key: 'introduction',
  },
  {
    label: '宗旨',
    key: 'tenet',
  },
  {
    label: '關注重點',
    key: 'focus',
  },
  {
    label: '活動',
    key: 'events',
  },
  {
    label: '成員',
    key: 'members',
  },
];


const polygon = (a: number, b: number, c: number, d: number) => ({ clipPath: `polygon(${a}% 0%, ${b}% 0%, ${c}% 100%, ${d}% 100%)` })


const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('');
  const ref = useRef()

  const logoOnClick = () => {
    setCurrentSection("");
    (ref as unknown as RefObject<IParallax>).current?.scrollTo(0)
  }

  const menuOnClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrentSection(e.key);
    const sectionIndex = items.findIndex((i) => (i as { label: string, key: string }).key === e.key) + 1;
    (ref as unknown as RefObject<IParallax>).current?.scrollTo(sectionIndex)
  };

  return (
    <Layout style={{ backgroundColor: "transparent" }} className="layout">
      <Header style={{ backgroundColor: "transparent" }} className="header">
        <Row gutter={23} className="header-row" style={{ backgroundColor: "transparent" }}>
          <Col span={6}>
            <div className='logo'>
              <img onClick={logoOnClick} className='logo-outline' src="logo_large_text_light.svg" alt="Sigma"></img>
            </div>
          </Col>
          <Col span={17} >
            <Row gutter={17} className="menu-parent" justify="end">
              <Col span={17} style={{ flexBasis: "fit-content" }}>
                <Menu selectedKeys={[currentSection]} onClick={menuOnClick} style={{ backgroundColor: "transparent" }} mode="horizontal" items={items} theme="dark"></Menu>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content>
        <Parallax ref={(ref as unknown as Ref<IParallax> | undefined) ?? undefined} className='parallax-container' pages={3} style={{ top: '0', left: '0', backgroundColor: "#1f1e33" }}>
          <ParallaxLayer
            offset={0}
            speed={-0.2}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1f1e33', color: "white" }}>
            <div className="page-title-container" style={{ width: "100%", height: "100%", position: "relative" }}>
              <img className="banner-image" src="classroombg.jpeg" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" }} alt=""></img>
              <div className="banner-cover" style={{ width: "100%", height: "100%", backgroundColor: "rgb(0,0,0)", position: "absolute", opacity: 0.4 }}></div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={-0.4}
            className="page-title-flexbox"
            style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
          >
            <Fade bottom={true}>
              <img style={{ maxWidth: "50%", maxHeight: "50%", objectFit: "scale-down", marginBottom: "12px" }} src="logo_large_text_light.svg" alt="Sigma"></img>
              <Space className="subtitle-space" wrap={true} style={{ color: "white", textShadow: "1px 1px 4px #1f1e33" }}>
                <Title level={3} >沙田培英中學</Title><Title level={3}>第28屆學生會</Title><Title level={3}>名單選舉候選人</Title>
              </Space>
            </Fade>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.02} style={{ backgroundColor: '#595959', zIndex: 10 }}></ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.5} style={{ zIndex: 11, padding: "60px" }}>
            <Typography className='dark-typography'>
              <Title>名單組別名稱及徽號</Title>
              <Paragraph>

              </Paragraph>
            </Typography>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={-0.5} style={{ backgroundColor: '#1f1e33' }}></ParallaxLayer>

          {/* <ParallaxLayer
          offset={1}
          speed={-0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <p>Scroll up</p>
        </ParallaxLayer> */}
        </Parallax>
      </Content>
    </Layout>
  )
};

export default App;