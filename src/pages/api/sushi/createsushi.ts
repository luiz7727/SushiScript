import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '~/service/prisma';

export default async function createSushi( request:NextApiRequest, response:NextApiResponse){

  try
  {
    if(request.method === "POST")
    {
      const sushiData = request.body;

      await prisma.sushi.create({
        data:{
          photo: sushiData.image,
          name: sushiData.name,
          description: sushiData.description,
          price: sushiData.price
        }
      })

      response.status(200).json("sushi criado com sucesso");
    }
  }
  catch(e)
  {
    console.log("Erro ao criar o sushi");
    console.log(e);
    response.status(500).json("Não foi possível criar o sushi");

  }
}