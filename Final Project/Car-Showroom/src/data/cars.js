import bmw from "../assets/images/bmw.jpg";
import audi from "../assets/images/audi.jpg";
import mercedes from "../assets/images/mercedes.jpg";

const cars = [
    {
        id: 1,
        name: "BMW X5",
        brand: "BMW",
        price: 7800000,
        fuel: "Petrol",
        transmission: "Automatic",
        engine: "2998 cc",
        mileage: "12 kmpl",
        seating: 5,
        color: "Black",
        year: 2025,
        image: bmw,
        description:
            "The BMW X5 is a premium luxury SUV offering exceptional comfort, powerful performance, advanced technology, and outstanding safety features."
    },

    {
        id: 2,
        name: "Audi Q5",
        brand: "Audi",
        price: 7200000,
        fuel: "Petrol",
        transmission: "Automatic",
        engine: "1984 cc",
        mileage: "13 kmpl",
        seating: 5,
        color: "White",
        year: 2025,
        image: audi,
        description:
            "Audi Q5 combines luxury, technology, and performance with a modern design and premium interiors."
    },

    {
        id: 3,
        name: "Mercedes C-Class",
        brand: "Mercedes",
        price: 6500000,
        fuel: "Diesel",
        transmission: "Automatic",
        engine: "1993 cc",
        mileage: "18 kmpl",
        seating: 5,
        color: "Silver",
        year: 2025,
        image: mercedes,
        description:
            "Mercedes C-Class delivers elegant styling, advanced safety, luxurious interiors, and a refined driving experience."
    }
];

export default cars;