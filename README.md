# `@danielvanc/streak-counter` - a basic streak counter

This is a basic streak counter - inspired by Duolingo - written in TypeScript and meant for the browser (uses 'localStorage').

## Install

yarn add @danielvanc/streak-counter

npm install @danielvanc/streak-counter

## Usage

import {streakCounter} from '@danielvanc/streak-counter'

const today = new Date()
const streak = streakCounter(localStorage, today)
