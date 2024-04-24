#!/usr/bin/env node

import greeting from '../src/cli.js';
import { playGame, endGame } from '../src/index.js';
import { task, generateQuestion, validateInput } from '../src/even.js';

const name = greeting();
const result = playGame(task, generateQuestion, validateInput);
endGame(result, name);
