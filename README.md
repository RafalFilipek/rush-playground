# rush-playground

1. Install `@microsoft/rush`
2. install deps with `rush install`
3. go to `libs/opl/ui`
4. run `yarn tsc` - works
5. go to `apps/omni` 
6. run `yarn dev` - works + all imports, types and stuff in `pages/index.tsx` works just fins.
7. run `yarn tsc` - error because of `libs/opl/ui/index.tsx` file

Looks like nextjs app tsconfig _can't_ use tsconfigs from other packages in monorepo.
