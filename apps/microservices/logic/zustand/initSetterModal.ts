import camelCase from "lodash/camelCase";

interface Setter {
    [k: string]: any;
}

const initSetterModel = (set, get, modelName, types = []): Setter => {
  if (!Array.isArray(types)) {
    throw new Error("Types must be an array");
  }
  const setterName = camelCase(`set ${modelName}`);
  const clearerName = camelCase(`clear ${modelName}`);
  return {
    [modelName]: types.reduce((acc, curr) => ({ ...acc, [curr]: false }), {}),
    [setterName]: (key, value) =>
      set(
        (state) => ({
          ...state,
          [modelName]: { ...state[modelName], [key]: value },
        }),
        false,
        setterName,
      ),
    [clearerName]: (key) =>
      set(
        (state) => ({
          ...state,
          [modelName]: { ...state[modelName], [key]: false },
        }),
        false,
        clearerName,
      ),
  };
};

export default initSetterModel;