import { NextResponse } from 'next/server'
import userController from './controller/userController'

export async function GET() {
  const usersData = await userController();
  return NextResponse.json( usersData )
}