export const splitIntoChunks = <T>(arr: T[], sizeChunk: number) => {
  const chunks: T[][] = [];

  for (let i = 0; i < arr.length; i += sizeChunk) {
    chunks.push(arr.slice(i, i + sizeChunk));
  }

  return chunks;
};
