import { useState, Dispatch, SetStateAction, FormEvent } from "react";

import Input from "./Input";
import OverlayContainer from "./OverlayContainer";
import useHandleWindowScroll from "../hooks/useHandleWindowScroll";


interface Props {
  setState: Dispatch<SetStateAction<boolean>>;
}


const AddProductForm = ({ setState }: Props) => {

  useHandleWindowScroll();

  const [productImageURL, setProductImageURL] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");


  function onSubmit(e: FormEvent) {
    e.preventDefault();

  }


  return (
    <OverlayContainer>
      <div>
        <form onSubmit={onSubmit} className="flex flex-col">
          <Input
            type="text"
            className=""
            onChange={(e: any) => setProductName(e.target.value)}
            placeholder="Informe o nome do produto"
            minLength={5}
            required
          />
          <Input
            type="text"
            className=""
            onChange={(e: any) => setProductName(e.target.value)}
            placeholder="Informe a URL da imagem do produto"
            required
          />
          <Input
            type="number"
            className=""
            onChange={(e: any) => setProductName(e.target.value)}
            placeholder="Informe o preço do produto"
            required
          />
        </form>
        <button onClick={() => setState(false)}>Click me</button>
      </div>
    </OverlayContainer>
  );
}

export default AddProductForm;