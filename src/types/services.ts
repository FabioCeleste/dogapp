export type listAllBreedsRes = {
  message: {
    [key: string]: string[];
  };
};

export type getRandomImageByBreedRes = {
  message: string;
  status: string;
};
