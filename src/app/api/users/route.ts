import { NextResponse } from 'next/server'

export interface User {
    id: number,
    name: string,
    isMale?: boolean,
    age: number,
    email: string,
    city: string
}

// Mock user data
const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 28, city: 'New York' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32, city: 'Los Angeles' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 25, city: 'Chicago' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 29, city: 'Houston' },
];

export async function GET() {
    try {
        // stimulate api delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        return NextResponse.json({
            success: true,
            data: users,
            message: 'success'
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            data: [],
            status: 500,
            message: 'API Error'
        })
    }
}


