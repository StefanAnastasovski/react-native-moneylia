export const makeSpaceBetweenGridItems = (
  index: number,
  numOfCols: number,
  px: number | string,
  pb: number | string
) =>
  (index + 1) % numOfCols !== 0
    ? { paddingRight: px, paddingBottom: pb }
    : { paddingLeft: px, paddingBottom: pb };
