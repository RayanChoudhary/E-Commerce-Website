export default {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
      {
        name: "firstName",
        type: "string",
        title: "First Name",
      },
      {
        name: "lastName",
        type: "string",
        title: "Last Name",
      },
      {
        name: "address",
        type: "string",
        title: "Address",
      },
      {
        name: "city",
        type: "string",
        title: "City",
      },
      {
        name: "zip",
        type: "string",
        title: "Zip Code",
      },
      {
        name: "phone",
        type: "string",
        title: "Phone",
      },
      {
        name: "cartItems",
        title: "Cart Items",
        type: "array",
        of: [{ type: "reference", to: { type: "product" } }],
      },
      {
        name: "total",
        title: "Total",
        type: "number",
      },
      {
        name: "status",
        title: "Order Status",
        type: "string",
        options: {
          list: [
            { title: "Pending", value: "pending" },
            { title: "Success", value: "success" },
            { title: "Dispatch", value: "dispatch" },
          ],
        },
      },
    ],
  };
  