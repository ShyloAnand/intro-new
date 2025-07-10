// components/Shop.tsx
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "./atoms/NavBar/NavBar";
import pic1 from "./../../public/images/French Elegant Pleated Flounce Floral Print Long Dress, Sleeveless V-Neck Ruffled Dress, Summer New Ladies Light Blue Gown.jpeg";
import Image from "next/image";

type Dress = {
  id: number;
  name: string;
  price: number;
  image: any;
};

const dresses: Dress[] = [
  { id: 1, name: "Floral Dress", price: 999, image: pic1 },
  { id: 2, name: "Evening Gown", price: 2499, image: "/images/dress2.jpeg" },
  { id: 3, name: "Evening Gown", price: 2499, image: "/images/dress2.jpeg" },
  { id: 4, name: "Evening Gown", price: 2499, image: "/images/dress2.jpeg" },
];

const Shop = () => {
  return (
    <>
      <div className="w-full lg:w-[900px] flex flex-col justify-center p-4  m-auto pt-5 lg:pt-20">
        <NavigationMenuDemo cart={[]} />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">🛍 Shop All Dresses</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {dresses.map((dress) => (
              <Card key={dress.id}>
                <CardHeader>
                  <Image
                    src={dress.image}
                    alt={dress.name}
                    width={400} // actual image width in pixels
                    height={250} // actual image height in pixels
                    className="object-cover rounded"
                  />
                  <CardTitle>{dress.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">₹{dress.price}</p>
                  <Button className="mt-2 w-full">Buy Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
