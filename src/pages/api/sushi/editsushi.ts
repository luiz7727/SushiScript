import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '~/service/prisma';

export default async function EditSushi(request: NextApiRequest, response: NextApiResponse){

  try
  {
    if(request.method === "UPDATE")
    {
      // falta pegar o id do sushi
      const sushiId = 1;

      const sushiData = request.body;

      await prisma.sushi.update({
        where:{
          id: sushiId
        },

        data:{
          photo: sushiData.image,
          name: sushiData.name,
          description: sushiData.description,
          price: sushiData.price
        }
      })

      response.status(500).json("Sushi atualizado com sucesso");

    }
  }
  catch(e)
  {
    console.log(e);
    response.status(500).json("não foi atualizar o sushi");
  }
}