"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NavigationMenuDemo } from "../NavBar/NavBar";
import profilePic from "./../../../../public/images/images.png";
import Image from "next/image";
import pic from "./../../../../public/images/French Elegant Pleated Flounce Floral Print Long Dress, Sleeveless V-Neck Ruffled Dress, Summer New Ladies Light Blue Gown.jpeg";
import pic1 from "./../../../../public/images/shop1.webp";
import pic2 from "./../../../../public/images/shop2.webp";

type Dress = {
  id: number;
  name: string;
  price: number;
  image: any;
};

type ProfileProps = {
  onLogout: () => void;
};

const Profile = ({ onLogout }: ProfileProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<Dress[]>([]);

  const dresses: Dress[] = [
    {
      id: 1,
      name: "Floral Summer Dress",
      price: 999,
      image: pic,
    },
    {
      id: 2,
      name: "Elegant Evening Gown",
      price: 2499,
      image: pic1,
    },
    {
      id: 3,
      name: "Casual Cotton Dress",
      price: 799,
      image: pic2,
    },
  ];

  const filteredDresses = dresses.filter((dress) =>
    dress.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (item: Dress) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      {/* Navigation with cart count */}
      <NavigationMenuDemo cart={cart} />

      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h2 className="text-2xl font-bold">Welcome to Dress Shop 👗</h2>
        {/* <Image src={profilePic} alt={""} width={100} height={100} /> */}
        <Button onClick={onLogout} variant="destructive">
          Logout
        </Button>
      </div>

      {/* Search */}
      <div className="px-4">
        <input
          type="text"
          placeholder="Search dresses..."
          className="w-full p-2 border rounded mb-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Dress Cards */}
      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDresses.length === 0 ? (
          <p className="col-span-full text-center">No results found.</p>
        ) : (
          filteredDresses.map((dress) => (
            <Card key={dress.id} className="hover:shadow-lg transition-all">
              <CardHeader>
                {/* <img
                  src={dress.image}
                  alt={dress.name}
                  className="w-full h-64 object-cover rounded"
                /> */}
                <Image
                  src={dress.image}
                  alt=""
                  className="w-full h-64 object-cover rounded"
                  width={100}
                  height={100}
                />

                <CardTitle className="text-lg mt-2">{dress.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-md font-semibold">₹{dress.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => addToCart(dress)}>
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
