import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * Reads the input file from the day's directory
 * @param dayNumber The day number (1-25)
 * @returns The contents of the input file as a string
 */
export function readInputFile(dayNumber: number): string {
    const dayFolder = `day${dayNumber}`;
    const filePath = join(__dirname, `../../src/${dayFolder}/input.txt`);
    return readFileSync(filePath, 'utf-8').trim();
}

/**
 * Reads the example input from a markdown file in the day's directory
 * @param dayNumber The day number (1-25)
 * @returns The contents of the example section in the markdown file
 */
export function readExampleFile(dayNumber: number): string {
    const dayFolder = `day${dayNumber}`;
    const filePath = join(__dirname, `../../src/${dayFolder}/example.txt`);
    return readFileSync(filePath, 'utf-8').trim();
} 