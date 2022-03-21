# `@danielvanc/streak-counter` - a basic streak counter

This is a basic streak counter - inspired by Duolingo - written in TypeScript and meant for the browser (uses 'localStorage').

## Install

yarn add @danielvanc/streak-counter

npm install @danielvanc/streak-counter

## Usage

[![Edit streak-counter (ts-course) (forked)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/streak-counter-ts-course-forked-7j0ig4?fontsize=14&hidenavigation=1&theme=dark)

import {streakCounter} from '@danielvanc/streak-counter'

const today = new Date()
const streak = streakCounter(localStorage, today)
