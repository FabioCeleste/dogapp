export type listAllBreedsRes = {
  message: {
    [key: string]: string[];
  };
};

export type getRandomImageByBreedRes = {
  message: string;
  status: string;
};

export type getAllImageByBreedRes = {
  message: string[];
  status: string;
};
