export class NagSchema {}

export interface TNagSchema {}

export class Nag {
  setSchema() {}

  setMetadata() {}

  middleware() {}

  action(callback: () => Promise<any>) {}
}

export const createServerAction = () => {
  const nag = new Nag();

  return nag;
};
