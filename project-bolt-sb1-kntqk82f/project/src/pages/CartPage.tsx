import React, { useEffect, useState } from 'react';
import { fetchData } from '../api';

const CartPage: React.FC = () => {

  const [data, setData] = useState<{ message: string; value: number } | null>(null);
  
      useEffect(() => {
          fetchData().then((response) => {
              if (response) setData(response);
          });
      }, []);
      console.log(data);
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <p className="text-gray-600">Your cart is empty. Start shopping now!</p>
      </div>


      {/* api test  */}

      <div className="p-5 text-center">
            <h1 className="text-2xl font-bold">API Test Page</h1>
            {data ? (
                <p className="mt-4">Message: {data.message} | Value: {data.value}</p>
            ) : (
                <p className="mt-4">Loading data...</p>
            )}
        </div>
    </div>
  );
};

export default CartPage;