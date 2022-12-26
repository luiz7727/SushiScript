import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '~/service/prisma';

export default async function removeSushi(request: NextApiRequest, response:NextApiResponse){
  try
  {
    if(request.method === "DELETE")
    {

      // falta pegar o id do sushi
      const sushiId = 1;

      await prisma.sushi.delete({
        where:{
          id: sushiId,
        }
      })

      response.status(200).json("sushi removido com sucesso");
    }
  }
  catch(e)
  {
    console.log(e);
    response.status(500).json("não foi possível remover o sushi");
  }
}