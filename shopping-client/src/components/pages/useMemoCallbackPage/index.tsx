import React, { useState, useCallback } from "react";
import TextField from "@mui/material/TextField";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { useAppSelector } from "../../../store/hooks";

export default function ProductsPage() {
  const bgColor = useAppSelector((state) => state.settings.backgroundColor);
  const [products, setProducts] = useState<Array<any>>([]);
  const [currnetProduct, setCurrnetProduct] = useState("aaaaa");
  const [productPrice, setProductPrice] = useState(0);

  console.log("Products Page Render");

  const addProductHandler = useCallback(() => {
    setProducts([...products, currnetProduct]);
  }, [products, currnetProduct]);

  const incrementNumber = useCallback(() => {
    setProductPrice(productPrice + 1);
  }, [productPrice]);

  return (
    <div style={{ height: "600px", backgroundColor: "white" }}>
      <h1> Products price {productPrice} </h1>
      <TextField
        value={currnetProduct}
        onChange={(e: any) => {
          setCurrnetProduct(e.target.value);
        }}
        id="outlined-basic"
        label="Product"
        variant="outlined"
      />
      <Button onClick={addProductHandler} variant="contained">
        Add
      </Button>
      <Button onClick={incrementNumber} variant="contained">
        Increment
      </Button>
      <ListItem key={"productsListItemKey"}>
        {products.map((p) => {
          return <ListItemText key={p} id={p} primary={p} />;
        })}
      </ListItem>
    </div>
  );
}
