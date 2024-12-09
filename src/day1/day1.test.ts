import { describe, it, expect } from 'vitest';
import { solvePart1, solvePart2 } from './day1';
import { readInputFile, readExampleFile } from '../utils/fileReader';

describe('Day 1', () => {
    describe('Part 1', () => {
        it('should solve example case', () => {
            const input = readExampleFile(1);
            expect(solvePart1(input)).toBe(0); // Replace with expected result
        });

        it('should solve puzzle input', () => {
            const input = readInputFile(1);
            expect(solvePart1(input)).toBe(0); // Replace with expected result
        });
    });

    describe('Part 2', () => {
        it('should solve example case', () => {
            const input = readExampleFile(1);
            expect(solvePart2(input)).toBe(0); // Replace with expected result
        });

        it('should solve puzzle input', () => {
            const input = readInputFile(1);
            expect(solvePart2(input)).toBe(0); // Replace with expected result
        });
    });
}); 