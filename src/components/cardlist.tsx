import { Space } from "antd";
import React from "react";
import Slider from "react-slick";

export default class CardList extends React.Component<{
  items: { image: string; title: string; description: string }[];
}> {
  state: { width: number };

  constructor(props: { items: [] }) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    // the rest is the same...

    if (isMobile) {
      const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        style: { flexGrow: 1, minHeight: 0, width: "100%" },
        className: "slider",
      };
      return (
        <div className="evt-card-pad" style={{ padding: "1em" }}>
          <Slider {...settings}>
            {this.props.items.map(({ image, title, description }) => {
              return (
                <div className="evt-card-pad2" style={{ padding: "0.5em" }}>
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
                </div>
              );
            })}
          </Slider>
        </div>
      );
    } else {
      return (
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
            {this.props.items.map(({ image, title, description }) => {
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
      );
    }
  }
}
