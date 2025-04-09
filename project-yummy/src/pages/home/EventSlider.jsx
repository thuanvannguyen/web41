import React from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const EventItem1 = () => {
  return (
    <div
      className="swiper-slide event-item d-flex flex-column justify-content-end"
      style={{ backgroundImage: "url(assets/img/events-2.jpg)" }}
    >
      <h3>Private Parties</h3>
      <div className="price align-self-start">$289</div>
      <p className="description">
        In delectus sint qui et enim. Et ab repudiandae inventore quaerat
        doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus
        saepe accusamus aspernatur.
      </p>
    </div>
  );
};

const EventItem2 = () => {
  return (
    <div
      className="swiper-slide event-item d-flex flex-column justify-content-end"
      style={{ backgroundImage: "url(assets/img/events-3.jpg)" }}
    >
      <h3>Birthday Parties</h3>
      <div className="price align-self-start">$499</div>
      <p className="description">
        Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id
        sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime.
        Non enim perspiciatis.
      </p>
    </div>
  );
};

const EventItem3 = () => {
  return (
    <div
      className="swiper-slide event-item d-flex flex-column justify-content-end"
      style={{ backgroundImage: "url(assets/img/events-4.jpg)" }}
    >
      <h3>Wedding Parties</h3>
      <div className="price align-self-start">$899</div>
      <p className="description">
        Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id
        sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime.
        Non enim perspiciatis.
      </p>
    </div>
  );
};

const EventItem4 = () => {
  return (
    <div
      className="swiper-slide event-item d-flex flex-column justify-content-end"
      style={{ backgroundImage: "url(assets/img/events-1.jpg)" }}
    >
      <h3>Custom Parties</h3>
      <div className="price align-self-start">$99</div>
      <p className="description">
        Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum
        voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae
        nulla expedita quas.
      </p>
    </div>
  );
};

const EventSlider = () => {
  return (
    <>
      {/* Events Section */}
      <section id="events" className="events section">
        <div
          className="container-fluid"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="swiper init-swiper">
            <div className="swiper-wrapper">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={2}
                slidesPerView={3}
                pagination={{ clickable: true }}
                navigation={{clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <EventItem1 />
                </SwiperSlide>

                <SwiperSlide>
                  <EventItem2 />
                </SwiperSlide>

                <SwiperSlide>
                  <EventItem3 />
                </SwiperSlide>

                <SwiperSlide>
                  <EventItem4 />
                </SwiperSlide>


              </Swiper>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      {/* /Events Section */}
    </>
  );
};

export default EventSlider;
