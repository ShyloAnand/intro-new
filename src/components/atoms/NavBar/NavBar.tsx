import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type Dress = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type NavigationMenuDemoProps = {
  cart: Dress[];
};

export function NavigationMenuDemo({ cart }: NavigationMenuDemoProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/shop">Shop</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Cart with dropdown content */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cart ({cart.length})</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[300px] p-2 space-y-2">
              {cart.length === 0 ? (
                <li className="text-sm text-muted-foreground px-2">
                  Cart is empty.
                </li>
              ) : (
                cart.map((item) => (
                  <li key={item.id} className="flex items-center gap-2">
                    <img
                      src={item.image || "/placeholder.jpg"}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        ₹{item.price}
                      </p>
                    </div>
                  </li>
                ))
              )}
              <li className="pt-2">
                <Link
                  href="/cart"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View Full Cart →
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/profile">Profile</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
