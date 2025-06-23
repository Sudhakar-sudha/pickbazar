// src/app/api/marks/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        // Build absolute path to the JSON file
        const filePath = path.join(process.cwd(), 'data', 'fruits.json');

        // Read file content as string
        const fileContents = await fs.readFile(filePath, 'utf-8');

        // Optionally log for development (not for production)
        console.log(JSON.parse(fileContents));

        // Return parsed JSON
        return NextResponse.json(JSON.parse(fileContents));
    } catch (error) {
        console.error('Error reading fruits.json:', error);
        return NextResponse.json(
            { error: 'Failed to read fuits.json' },
            { status: 500 }
        );
    }
}
