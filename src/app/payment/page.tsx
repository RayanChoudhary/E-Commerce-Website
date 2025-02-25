"use client";

// import React, { useEffect, useState } from 'react';
import  Payment from "app/Components/payment/StripePayment"

const paymentPage: React.FC = () => {

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Payment/>
    </div>
  );
};

export default paymentPage;