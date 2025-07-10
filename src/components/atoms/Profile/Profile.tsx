"use client";

import React, { useState } from "react";
// import { ProfileDetail } from "../ProfileDetail/ProfileDetail";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type Dress = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type ProfileProps = {
  onLogout: () => void;
};

const Profile = ({ onLogout }: ProfileProps) => {
  const [cart, setCart] = useState<Dress[]>([]);
  const dresses = [
    {
      id: 1,
      name: "Floral Summer Dress",
      price: 999,
      image: "",
    },
    {
      id: 2,
      name: "Elegant Evening Gown",
      price: 2499,
      image: "/images/dress2.jpeg",
    },
    {
      id: 3,
      name: "Casual Cotton Dress",
      price: 799,
      image: "",
    },
  ];

  const addToCart = (item: Dress) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">🛒 Your Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <Card
                key={item.id}
                className="flex justify-between items-center p-4"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted">₹{item.price}</p>
                </div>
                <Button
                  variant="destructive"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </Card>
            ))}
            <div className="text-right font-bold text-lg">Total: ₹{total}</div>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Welcome to Dress Shop 👗</h2>
          <Button onClick={onLogout} variant="destructive">
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dresses.map((dress) => (
            <Card key={dress.id} className="hover:shadow-lg transition-all">
              <CardHeader>
                <img
                  src={dress.image}
                  alt={dress.name}
                  className="w-full h-64 object-cover rounded"
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
          ))}
        </div>
      </div>

      {/* <div className="p-6 text-center w-full">
        <ProfileDetail />
        <Button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 text-white mt-4"
        >
          Logout
        </Button>
      </div> */}
    </div>
  );
};

export default Profile;
