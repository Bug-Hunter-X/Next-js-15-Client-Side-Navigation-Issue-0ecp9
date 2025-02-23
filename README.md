# Next.js 15 Client-Side Navigation Bug

This repository demonstrates a strange bug encountered in Next.js 15 related to client-side navigation.  After navigating away from the homepage and returning, the component fails to re-render properly, retaining old state.

## Bug Description

The home page component does not update its state or re-render correctly after navigating away and then returning using client-side navigation (e.g., using browser's back button or programmatic navigation).  This results in stale data being displayed.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to any other route (e.g., `/about` if you've created one).
5. Use the browser's back button or any other method to return to the homepage (`/`).
6. Observe that the home page does not correctly re-render; previous state persists.

## Solution

The solution involves ensuring proper data fetching and component re-rendering on client-side navigation. See `index.solution.js` for the corrected code.