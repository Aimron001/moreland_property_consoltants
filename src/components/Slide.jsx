import Slider from "react-slick";
import ServiceSlide from "./ServiceSlide";
import plot from '../assets/plot.jpg'
const servicesdata = [
  {
    "id": 1,
    "title": "Property Marketing",
    "description": "We'll create a customized marketing plan for your property, using a variety of channels to attract potential buyers, including online listings, social media, and more.",
    "photo": plot
  },
  {
    "id": 2,
    "title": "Land Valuation Services",
    "description": "We provide property valuation to determine the market value of your property, ensuring that you get the best possible price for your investment.",
    "photo": plot
  },
  {
    "id": 3,
    "title": "Land Survey Services",
    "description": "Survey services include surveying general boundaries, processing mutation forms, resolving boundary disputes, preparing rim amendment/deed plans, and selling maps and the national atlas.",
    "photo": plot
  },
  {
    "id": 4,
    "title": "Land Administration Services",
    "description": "Land administration services encompass the preparation and issuance of leases, facilitation of change of user processes, processing and issuance of consents, as well as providing advice to the public.",
    "photo": plot
  }
]


export default function Slide(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        className: "center",
        centerMode: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const slides = servicesdata.map(service => {
      return (
        <ServiceSlide key={service.id} {...service }/>
      )
    })
    return (
        <Slider {...settings}>
            {...slides}
        </Slider>
    )
}