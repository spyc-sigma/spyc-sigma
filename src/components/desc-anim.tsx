import React from "react";
import ScrollTrigger from "react-scroll-trigger";
import Slider from "react-slick";

export default class DescriptionSectionAnimation1 extends React.Component<{
  className: string;
}> {
  slider: any;
  state: { animationTimeoutId: number };

  constructor(props: { className: string }) {
    super(props);

    this.state = {
      animationTimeoutId: 0,
    };
  }

  onScrollToDescSection = () => {
    console.log("onScrollToDescSection triggered");
    this.setState({
      animationTimeoutId: setTimeout(() => {
        (this.slider as Slider).slickGoTo(1);
      }, 3000) as unknown as number,
    });
  };

  onLeaveDescSection = () => {
    console.log("onLeavDescSection triggered");
    clearTimeout(this.state.animationTimeoutId);
    (this.slider as Slider).slickGoTo(0);
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1500,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      fade: true,
      arrows: false,
      style: { width: "80%", margin: "0 auto" },
    };
    return (
      <div style={{ width: "100%", flexGrow: 1 }} {...this.props}>
        {/*
    // @ts-ignore */}
        <ScrollTrigger
          // @ts-ignore
          style={{ width: "1px", height: "1px", position: "absolute" }}
          onEnter={this.onScrollToDescSection}
          onExit={this.onLeaveDescSection}
        >
          <div></div>
        </ScrollTrigger>
        <Slider
          ref={(slider) => (this.slider = slider)}
          {...settings}
          className="text"
        >
          <img
            src="sigma_text_light.png"
            alt="團結"
            style={{
              minWidth: `${Math.min(document.body?.offsetWidth ?? 200, 200)}px`,
              maxWidth: "calc(100% - 20px)",
              margin: "10px auto",
            }}
          />
          <img
            src="unity_text_light.png"
            alt="團結"
            style={{
              minWidth: `${Math.min(document.body?.offsetWidth ?? 200, 200)}px`,
              maxWidth: "calc(100% - 20px)",
              margin: "10px auto",
            }}
          />
        </Slider>
      </div>
    );
  }
}
