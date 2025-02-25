export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  quantity: number;
  category: {
    name: string;
    slug: string;
  };
  tags: string[];
  dimensions: {
    width: string;
    height: string;
    depth: string;
    _type: string;
  };
  features: string[];
};

export type things = {
  _id : string;
  name: string;
  description: string;
  price: number;
  imageUrl : string;
}

export type ProductListProps ={
  filteredProducts: Product[];
  filterProducts: (category: string | null) => void;
}

export type CartItem = {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity:number;
    description: string;
  }

  
  export type CartContextType = {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id:string) => void;
    updateQuantity: (id:string,qty: number) => void;
    totalPrice: number;
    clearCart: () => void;
  };

  export type UserLogin = {
    email: string;
    password: string;
  }

  export type User = {
    name?: string;
    email: string;
    password: string;
    isLogin : boolean;
  }
  
  export type UserContextType = {
    users: User | null;
    login: (email: string, password: string) => void;
    logout: (email : string) => void;
    register: (userData: User) => void;
  }


  export type FilterPanelProps = {
    onFilter: (category: string | null) => void; // Explicit type definition
  }

  export type Category ={
    _id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category: { name: string };
  }

  export type CheckoutPageProps = {
    sessionId: string  // Accept sessionId as a prop
  }