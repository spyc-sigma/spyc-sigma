import {
  Avatar,
  Carousel,
  Col,
  Divider,
  Layout,
  Menu,
  MenuProps,
  Row,
  Space,
  Typography,
  List,
} from "antd";
import { InstagramOutlined, MailOutlined } from "@ant-design/icons";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { Ref, useRef, useState } from "react";
// @ts-ignore
import Fade from "react-reveal/Fade";
import Slider from "react-slick";
import "./App.css";
import DescriptionSectionAnimation1 from "./components/desc-anim";
const { Title, Paragraph, Link, Text } = Typography;
const { Header, Content } = Layout;

const items: MenuProps["items"] = [
  {
    label: "簡介",
    key: "introduction",
  },
  {
    label: "宗旨",
    key: "tenet",
  },
  {
    label: "服務",
    key: "services",
  },
  {
    label: "活動",
    key: "events",
  },
  {
    label: "成員",
    key: "members",
  },
];

const bodyTextStyle = { fontSize: "24px" };
const strongTextStyle = { color: "#7ace93" };
const strongTitleStyle = { textShadow: "4px 4px 1px rgba(31,30,51,0.6)" };

const sectionContainerStyles = {
  height: "100%",
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column" as const,
};

const nowrap = { whiteSpace: "nowrap" as const };

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState("");
  const ref = useRef<IParallax>();

  const logoOnClick = () => {
    window.location.hash = "";
    setCurrentSection("");
    ref.current?.scrollTo(0);
  };

  const menuOnClick: MenuProps["onClick"] = (e) => {
    window.location.hash = e.key;
    console.log("click ", e);
    setCurrentSection(e.key);
    const sectionIndex =
      items.findIndex(
        (i) => (i as { label: string; key: string }).key === e.key
      ) + 1;
    ref.current?.scrollTo(sectionIndex);
  };

  const onParallaxLoaded = () => {
    document
      .getElementsByClassName("parallax-container")[0]
      .addEventListener("scroll", () => {
        setTimeout(() => {
          document
            .getElementsByClassName("ant-menu-item-selected")[0]
            ?.classList?.remove("ant-menu-item-selected");
        }, 1000);
      });

    const key = window.location.hash;
    const queryIndex = items.findIndex(
      (i) => (i as { label: string; key: string }).key === key.slice(1)
    );
    if (queryIndex === -1) return (window.location.hash = "");
    const sectionIndex = queryIndex + 1;
    setTimeout(() => {
      ref.current?.scrollTo(sectionIndex);
    }, 1000);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    style: { flexGrow: 1, minHeight: 0 },
    className: "slider",
  };

  const data = [
    {
      icon: "flexed-biceps_1f4aa.png",
      title: "團結一致，為各同學服務",
      text: "集合同學的意見、理解同學的想法，並集合學生會各幹事的力量盡力為同學服務",
    },
    {
      icon: "ear_1f442.png",
      title: "聆聽意見，豐富校園生活",
      text: "聆聽同學的意見，改善及豐富同學的校園生活，讓學校環境變得舒心",
    },
    {
      icon: "glasses_1f453.png",
      title: "多元活動，拓展學生視野",
      text: "透過多元化活動協助學生擴展視野，並藉此提供機會讓同學展露各方面的才華，同時提升同學的團結精神",
    },
    {
      icon: "heavy-dollar-sign_1f4b2.png",
      title: "爭取福利，提供店鋪優惠",
      text: "我們將走入店鋪，為同學儘量爭取各校外的福利，同時提供校內的便利服務",
    },
  ];

  const events = [
    {
      image: "./basketball-field.jpg",
      title: "師生球類比賽",
      description: "包括: 籃球、足球、排球等",
    },
    {
      image: "./camera-to-be-changed.jpg",
      title: "校園攝影比賽",
      description: "透過攝影發掘出校園另一面",
    },
    {
      image: "./camera-to-be-changed.jpg",
      title: "校園攝影比賽",
      description: "透過攝影發掘出校園另一面",
    },
  ];

  return (
    <Layout style={{ backgroundColor: "transparent" }} className="layout">
      <Header style={{ backgroundColor: "transparent" }} className="header">
        <Row
          gutter={23}
          className="header-row"
          style={{ backgroundColor: "transparent" }}
        >
          <Col span={6}>
            <div className="logo">
              <img
                onClick={logoOnClick}
                className="logo-outline"
                src="logo_large_text_light.svg"
                alt="Sigma"
              ></img>
            </div>
          </Col>
          <Col span={17}>
            <Row gutter={17} className="menu-parent" justify="end">
              <Col span={17} style={{ flexBasis: "fit-content" }}>
                <Menu
                  selectedKeys={[currentSection]}
                  onClick={menuOnClick}
                  style={{ backgroundColor: "transparent" }}
                  mode="horizontal"
                  items={items}
                  theme="dark"
                ></Menu>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content>
        <Parallax
          onLoad={onParallaxLoaded}
          ref={(ref as unknown as Ref<IParallax> | undefined) ?? undefined}
          className="parallax-container"
          pages={7}
          style={{ top: "0", left: "0", backgroundColor: "#1f1e33" }}
        >
          <ParallaxLayer
            offset={0}
            speed={-0.2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1f1e33",
              color: "white",
            }}
            id="layer-1-back"
          >
            <div
              className="page-title-container"
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <img
                className="banner-image"
                src="classroombg.jpeg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                }}
                alt=""
              ></img>
              <div
                className="banner-cover"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgb(0,0,0)",
                  position: "absolute",
                  opacity: 0.4,
                }}
              ></div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={-0.4}
            className="page-title-flexbox"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            id="layer-1-front"
          >
            <Fade bottom={true}>
              <img
                style={{
                  maxWidth: "50%",
                  maxHeight: "50%",
                  objectFit: "scale-down",
                  marginBottom: "12px",
                }}
                src="logo_large_text_light.svg"
                alt="Sigma"
              ></img>
              <Space
                className="subtitle-space"
                wrap={true}
                style={{ color: "white", textShadow: "1px 1px 4px #1f1e33" }}
              >
                <Title level={3}>沙田培英中學</Title>
                <Title level={3}>第28屆學生會</Title>
                <Title level={3}>
                  名單選舉<Text style={strongTextStyle}>二號</Text>
                  候選人
                </Title>
              </Space>
            </Fade>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.02}
            style={{ backgroundColor: "#595959", zIndex: 10 }}
            id="layer-2-back"
          ></ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{ zIndex: 11, padding: "60px" }}
            id="layer-2-front"
          >
            <div className="dark-typography" style={sectionContainerStyles}>
              <Title style={strongTitleStyle}>組別名稱及徽號</Title>
              <Slider {...settings}>
                <div className="flexbox-sect" style={{ flexGrow: 1 }}>
                  <DescriptionSectionAnimation1 className="text" />
                  <div className="text bodytext">
                    <span style={strongTextStyle}>Sigma (Σ)</span>
                    這個符號在數學中被使用作求和符號,
                    常被用於數字序列的相加中。而我們希望發揮類似於「求和」的作用,
                    作為學生之間連結的橋梁, 增強本校學生的
                    <span style={strongTextStyle}>團結精神</span>
                    ,發揮我們學生各方面的才能。
                  </div>
                </div>
                <div className="flexbox-sect" style={{ flexGrow: 1 }}>
                  <img
                    id="logo-for-unity"
                    src="android-chrome-512x512.png"
                    alt="團結"
                  />
                  <div className="text bodytext">徽號簡介待完成</div>
                </div>
              </Slider>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0.2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1f1e33",
              color: "white",
            }}
            id="layer-3-back"
          >
            <div
              className="page-title-container"
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <img
                className="banner-image"
                src="bg1.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                }}
                alt=""
              ></img>
              <div
                className="banner-cover"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgb(0,0,0)",
                  position: "absolute",
                  opacity: 0.4,
                }}
              ></div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
        
            offset={2}
            speed={-0.25}
            className="page-title-flexbox"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            id="layer-3-front"
          >
            <div
              style={{
                display: "flex" as const,
                flexDirection: "column" as const,
                width: "100%",
                height: "100%",
              }}
            >
              <Title className="dark-typography" style={strongTitleStyle}>
                我們的宗旨及願景
              </Title>
              <div
                className="grow"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div style={{ width: "100%" }}>
                  <Fade right cascade>
                    <List
                      style={{ margin: "0 15px" }}
                      itemLayout="horizontal"
                      dataSource={data}
                      renderItem={(item: {
                        icon: string;
                        title: string;
                        text: string;
                      }) => (
                        <List.Item>
                          <List.Item.Meta
                            style={{
                              alignItems: "center" as const,
                            }}
                            avatar={
                              <Avatar
                                className="paragraph"
                                src={item.icon}
                                alt={item.title}
                              />
                            }
                            title={
                              <div className="paragraph l2font1">
                                {item.title}
                              </div>
                            }
                            description={
                              <span className="paragraph l2font2">
                                {item.text}
                              </span>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={0.02}
            style={{ backgroundColor: "#1f1e33", zIndex: 10 }}
            id="layer-4"
          ></ParallaxLayer>

          <ParallaxLayer
            offset={4}
            speed={-0.2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1f1e33",
              color: "white",
            }}
            id="layer-5-back"
          >
            <div
              className="page-title-container"
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <img
                className="banner-image"
                src="bg1.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                }}
                alt=""
              ></img>
              <div
                className="banner-cover"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgb(0,0,0)",
                  position: "absolute",
                  opacity: 0.4,
                }}
              ></div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            speed={-0.4}
            className="page-title-flexbox"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              padding: "60px",
            }}
            id="layer-5-front"
          >
            <div style={{ ...sectionContainerStyles, width: "100%" }}>
              <Title className="dark-typography" style={strongTitleStyle}>
                活動及福利
              </Title>
              <Slider {...settings}>
                <div
                  className="flexbox-sect"
                  style={{ flexGrow: 1, width: "100%" }}
                >
                  <div
                    className="text"
                    style={{
                      ...bodyTextStyle,
                      display: "flex",
                      flexDirection: "column",
                      height: "calc(100% - 2em)",
                      width: "calc(100% - 2em)",
                      color: "blackx",
                    }}
                  >
                    <Title
                      className="dark-typography"
                      style={strongTitleStyle}
                      level={2}
                    >
                      校內活動
                    </Title>{" "}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row" as const,
                        width: "100%",
                        maxHeight: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <Space size={[8, 16]} wrap className="grow">
                        {events.map(({ image, title, description }) => {
                          return (
                            <div className="evt-card">
                              <div className="meta">
                                <div
                                  className="photo"
                                  style={{
                                    backgroundImage: `url(${image})`,
                                  }}
                                ></div>
                              </div>
                              <div className="description">
                                <h1>{title}</h1>
                                <h2>{description}</h2>
                              </div>
                            </div>
                          );
                        })}
                      </Space>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={5}
            speed={0.02}
            style={{ backgroundColor: "#1f1e33", zIndex: 10, padding: "60px" }}
            id="layer-6"
          >
            <div
              className="dark-typography"
              style={{
                display: "flex" as const,
                flexDirection: "column" as const,
                justifyContent: "center" as const,
                height: "100%",
              }}
            >
              <Title style={strongTitleStyle}>成員</Title>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row" as const,
                  flexWrap: "wrap" as const,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="grow"
              >
                <img
                  src="DSC8607M.JPG"
                  alt="團體照"
                  className="official-photo"
                ></img>
                <Typography className="light-text" style={{ margin: "0 auto" }}>
                  <Paragraph className="paragraph" style={bodyTextStyle}>
                    我打算呢度打d關於我地既野...有無idea
                  </Paragraph>
                </Typography>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={6}
            speed={0.02}
            style={{ backgroundColor: "#1f1e33", zIndex: 10 }}
            id="layer-7"
          >
            <div
              className="footer-container"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                zIndex: 11,
                paddingBottom: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <div
                className="grow"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Title className="dark-typography" level={1}>
                  <Row
                    align="middle"
                    style={{
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Col>
                      如果您<span style={strongTextStyle}>認同我們的理念</span>,
                      請投
                    </Col>
                    <Col>
                      <img
                        className="inline-logo"
                        src="logo_large_text_light.svg"
                        alt="Sigma"
                      ></img>
                    </Col>
                    <Col>一票, </Col>
                    <Col>
                      給予我們一個
                      <span style={strongTextStyle}>服務同學的機會</span>。
                    </Col>
                  </Row>
                </Title>
              </div>
              <Row align="middle" gutter={16}>
                <Col
                  style={{ minWidth: "fit-content" }}
                  flex="1 0 fit-content"
                  span={3}
                >
                  <Avatar icon={<InstagramOutlined />}></Avatar>
                </Col>
                <Col
                  style={{ minWidth: "fit-content" }}
                  flex="1 0 fit-content"
                  span={3}
                >
                  <Avatar icon={<MailOutlined />}></Avatar>
                </Col>
              </Row>
              <Divider
                type="horizontal"
                style={{ borderColor: "rgba(255,255,255,0.8)" }}
              ></Divider>
              <Row align="middle">
                <Col span={24}>
                  <Typography
                    className="dark-typography"
                    style={{ textAlign: "center" }}
                  >
                    <Paragraph>
                      <Row
                        align="middle"
                        style={{
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Col>如有任何意見或疑問&nbsp;</Col>
                        <Col>歡迎透過電郵、Instagram Direct或</Col>
                        <Col>
                          &nbsp;<Link href="#">意見收集箱</Link>&nbsp;聯絡我們
                        </Col>
                      </Row>
                    </Paragraph>
                  </Typography>
                </Col>
              </Row>
            </div>
          </ParallaxLayer>
        </Parallax>
      </Content>
    </Layout>
  );
};

export default App;
