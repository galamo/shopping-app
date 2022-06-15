import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import getProducts from "../../../store/async/getProductsAction";
import Product from "./product";

export default function ProductsPage() {
  const products = useAppSelector((state) => state.products.products);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1> Products</h1>
      <List
        sx={{
          marginLeft: "40%",
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {products.map((p) => {
          return <Product key={p.id} {...p} />;
        })}
      </List>
    </div>
  );
}
