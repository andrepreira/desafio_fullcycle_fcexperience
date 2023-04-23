import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export { prisma }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === 'POST') {
      const { message } = req.body;
      if (!message || message.trim() === '') {
        res.status(400).json({ message: 'Message is required' });
        return; // add this line to stop the execution
      }
      try {
        const chat = await prisma.chat.create({ data: { message } });
        res.status(201).json(chat);
      } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
      }
    } else if (req.method === 'GET') {
      try {
        const chats = await prisma.chat.findMany();
        res.status(200).json(chats);
      } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  
  