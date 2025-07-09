import Property from "./Property";
import photo1 from "../assets/ndemiu.jpg"
import photo2 from "../assets/mix.jpg"

const properties = [
{
    id: 1,
    title: "Malili - 7.8 Acres",
    description: "Located approximately 5 km from Mombasa Road near Ndemiu Primary School. The property is fully fenced with a gate, features red soil, and has a gentle gradient—ideal for development or subdivision.",
    price: "Ksh. 12 Million",
    photo: photo1
},
{
    id:2,
    title: "Malili - 7.8 Acres",
    description: "Situated about 5 km from Mombasa Road, just after Malili Town. Offers a breathtaking view of Konza City, with red soil, good topography, and a well-murramed access road. A strategic and scenic location.",
    price: "Ksh. 13 Million",
    photo: photo1
},
{
    id: 3,
    title: "Malili - 7.8 Acres",
    description: "Prime land touching Malili Market Centre and only 1.5 km from Mombasa Road. It features a mix of black and red soil—ideal for commercial or mixed-use development due to its central location.",
    price: "Ksh. 25 Million",
    photo: photo2
},
{
    id: 4,
    title: "Konza - 10.8 Acres",
    description: "A premium 10.8-acre parcel with panoramic views of Konza Technopolis. The entrance is located near the main Konza gate, just 2 km from the gate itself. Exceptional for investment, hospitality, or institutional use.",
    price: "Ksh. 30 Million",
    photo: photo1
},
{
    id: 5,
    title: "Konza - 10.8 Acres",
    description: "This property touches the old Mombasa Road, with its entrance located at the Konza City gate. Approximately 5 km from the tarmac, it is easily accessible and strategically positioned for future growth.",
    price: "Ksh. 20 Million",
    photo: photo1
},
{
    id: 6,
    title: "Konza - 10.8 Acres",
    description: "Only 1 km from the tarmacked Katumani Road and about 3 km from Mombasa Road, this land is near the fast-developing Vota area. It is perfect for residential or institutional development in a growing neighborhood.",
    price: "Ksh. 25 Million",
    photo: photo1
}
]
export default function Featured() {

    const propertiesElements =  properties.map((property) => {
        return (
            <Property key={property.id} {...property} />
        )
    })
   

    return (
        <div className="featured">
            <h1>Featured</h1>
            <div>
                {...propertiesElements}
            </div>
            {/* <Property /> */}
        </div>
    );
}


