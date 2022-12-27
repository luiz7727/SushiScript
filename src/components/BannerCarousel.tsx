import { Carousel } from "react-responsive-carousel";


const BannerCarousel = () => {
  return (
    <section className="max-w-2xl mx-auto h-[300px]">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
      >
        <img className="w-full h-96" src="https://images.unsplash.com/photo-1648146299493-301461058f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHN1c2hpJTIwcmVzdGFyYXVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <img className="w-full h-96" src="https://images.unsplash.com/photo-1607301406259-dfb186e15de8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHN1c2hpJTIwcmVzdGFyYXVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <img className="w-full h-96" src="https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fHN1c2hpJTIwcmVzdGFyYXVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      </Carousel>
    </section>
  );
}

export default BannerCarousel;